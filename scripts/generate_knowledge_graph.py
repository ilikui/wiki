#!/usr/bin/env python3
"""Generate an interactive, link-aware knowledge graph from docs Markdown files.

产出：
  docs/knowledge-graph.json  — 图谱数据（groups / nodes / links，供前端聚类布局）
  docs/graph/index.html      — 独立全屏图谱页（脱离 MkDocs 主题，构建时原样复制到站点 /graph/）

节点 URL 为站点根绝对路径（前导 /），站点部署在 https://wk.likui.info/ 根路径。
"""
from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
OUTPUT_HTML_DIR = DOCS / "graph"
OUTPUT_JSON = DOCS / "knowledge-graph.json"
EXCLUDED = {"knowledge-graph.md"}
EXCLUDED_DIRS = {"graph"}  # 独立页面目录，不作为文档节点

# 修复：原正则 !?[[^]]*](([^)]+)) 缺少转义，匹配不到任何 Markdown 链接
LINK_RE = re.compile(r"!?\[([^\]]*)\]\(([^)\s]+)[^)]*\)")
WIKI_RE = re.compile(r"\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]")
HEADING_RE = re.compile(r"^#\s+(.+?)\s*#*\s*$", re.M)
FENCE_RE = re.compile(r"```.*?```|~~~.*?~~~|`[^`\n]+`", re.S)


def clean_label(value: str, limit: int = 100) -> str:
    value = re.sub(r"[\x00-\x1f*_~]", "", value).replace('"', "'")
    value = re.sub(r"\s+", " ", value).strip()
    return value if len(value) <= limit else value[: limit - 1] + "…"


def strip_code(content: str) -> str:
    """去掉代码块/行内代码，避免其中的示例链接被当作文档关联。"""
    return FENCE_RE.sub("", content)


def page_title(path: Path, content: str) -> str:
    match = HEADING_RE.search(content)
    return clean_label(match.group(1)) if match else clean_label(path.stem.replace("-", " ").replace("_", " "))


def node_id(path: Path) -> str:
    return hashlib.sha1(path.as_posix().encode("utf-8")).hexdigest()[:12]


def page_url(path: Path) -> str:
    """站点根绝对路径（前导 /）。站点部署在根路径，图谱页可直达。"""
    name = path.name.lower()
    if name in {"index.md", "readme.md"}:
        parent = path.parent.as_posix()
        return "/" if parent == "." else "/" + parent + "/"
    return "/" + path.with_suffix("").as_posix() + "/"


def resolve_target(source: Path, target: str, pages: set[Path]) -> Path | None:
    target = target.strip().strip("<>").split()[0] if target.strip() else ""
    parsed = urlsplit(target)
    if parsed.scheme or parsed.netloc or not target or target.startswith("#"):
        return None
    target_path = unquote(parsed.path)
    if not target_path:
        return None
    candidate = (DOCS / target_path.lstrip("/")).resolve() if target_path.startswith("/") else (DOCS / source.parent / target_path).resolve()
    options = [candidate]
    if candidate.suffix == "":
        options.extend([candidate.with_suffix(".md"), candidate / "index.md", candidate / "README.md"])
    for option in options:
        try:
            rel = option.relative_to(DOCS.resolve())
        except ValueError:
            continue
        if rel in pages:
            return rel
    return None


PAGE_TEMPLATE = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>知识图谱 - 知识 Wiki</title>
<meta name="robots" content="noindex">
<style>
:root { color-scheme: dark; }
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; height: 100%; overflow: hidden; }
body {
  display: flex; flex-direction: column;
  background: #14171e; color: #e7e9f2;
  font-family: -apple-system, "PingFang SC", "Microsoft YaHei", "LXGW WenKai", sans-serif;
}
/* 顶栏（参考站 masthead） */
.topbar {
  flex: none; height: 56px; z-index: 6;
  display: flex; align-items: center; gap: .9rem;
  padding: 0 1.2rem;
  border-bottom: 1px solid rgba(231,233,242,.13);
}
.topbar .brand {
  display: inline-flex; align-items: center; gap: .5rem;
  color: #e7e9f2; text-decoration: none; font-weight: 650; font-size: .95rem;
}
.topbar .brand:hover { color: #aae2f0; }
.topbar .brand svg { width: 18px; height: 18px; }
.topbar .divider { width: 1px; height: 18px; background: rgba(231,233,242,.16); }
.topbar .page-name { font-size: .88rem; color: rgba(231,233,242,.55); }
.topbar .spacer { flex: 1; }
.topbar .back {
  color: rgba(231,233,242,.55); text-decoration: none; font-size: .8rem;
  padding: .32rem .8rem; border: 1px solid rgba(231,233,242,.13); border-radius: 99px;
  transition: color .12s ease, border-color .12s ease;
}
.topbar .back:hover { color: #aae2f0; border-color: #aae2f0; }

/* 图谱舞台 */
.stage { position: relative; flex: 1; min-height: 0; overflow: hidden; }
#kg-canvas { display: block; width: 100%; height: 100%; cursor: grab; touch-action: none; }
#kg-canvas.dragging { cursor: grabbing; }

/* HUD：左上角标题 + 统计 + 分组筛选 chips */
.graph-hud {
  position: absolute; z-index: 4;
  top: 1.1rem; left: 1.4rem; right: 1.4rem;
  display: flex; flex-direction: column; gap: .65rem;
  pointer-events: none;
}
.graph-title { pointer-events: auto; display: flex; align-items: baseline; gap: .8rem; flex-wrap: wrap; }
.graph-title h1 { margin: 0; font-size: 1.15rem; font-weight: 650; letter-spacing: -.01em; }
.graph-title .stat {
  color: rgba(231,233,242,.4);
  font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  font-size: .7rem;
}
.chipbar { pointer-events: auto; display: flex; flex-wrap: wrap; gap: .35rem; max-width: 46rem; }
.chip {
  display: inline-flex; align-items: center; gap: .42rem;
  padding: .26rem .68rem;
  border: 1px solid rgba(231,233,242,.13); border-radius: 99px;
  background: rgba(28,30,40,.78); backdrop-filter: blur(4px);
  color: rgba(231,233,242,.62);
  font-size: .74rem; font-family: inherit;
  cursor: pointer; user-select: none;
  transition: border-color .12s ease, color .12s ease;
}
.chip .swatch { width: .5rem; height: .5rem; border-radius: 50%; flex: none; }
.chip:hover { border-color: #aae2f0; color: #e7e9f2; }
.chip[aria-pressed="true"] { border-color: #aae2f0; color: #e7e9f2; background: #1c2130; }

/* tooltip */
.kg-tooltip {
  position: absolute; z-index: 5; max-width: 16.5rem;
  padding: .55rem .8rem;
  border: 1px solid rgba(231,233,242,.13); border-radius: 6px;
  background: #1c2130;
  box-shadow: 0 8px 28px rgba(0,0,0,.45);
  font-size: .8rem; line-height: 1.55;
  pointer-events: none; overflow-wrap: anywhere;
}
.kg-tooltip strong { display: block; font-size: .8rem; }
.kg-tooltip span {
  display: block; margin-top: .15rem;
  color: rgba(231,233,242,.4);
  font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  font-size: .66rem;
}

/* 底部操作提示胶囊 */
.graph-help {
  position: absolute; z-index: 4; bottom: .95rem; left: 50%;
  transform: translateX(-50%);
  padding: .3rem .85rem;
  border: 1px solid rgba(231,233,242,.13); border-radius: 99px;
  background: rgba(28,30,40,.8);
  color: rgba(231,233,242,.4); font-size: .68rem;
  pointer-events: none; white-space: nowrap;
}
@media (max-width: 640px) {
  .graph-help { display: none; }
  .graph-hud { left: .9rem; right: .9rem; }
  .chip { font-size: .68rem; }
}
</style>
</head>
<body>
<header class="topbar">
  <a class="brand" href="/">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="5" cy="6" r="2.2"></circle><circle cx="19" cy="6" r="2.2"></circle>
      <circle cx="12" cy="18" r="2.2"></circle>
      <path d="M6.8 7.4 10.4 16M17.2 7.4 13.6 16M7.2 6h9.6"></path>
    </svg>
    知识 Wiki
  </a>
  <span class="divider"></span>
  <span class="page-name">知识图谱</span>
  <span class="spacer"></span>
  <a class="back" href="/">← 返回文档站</a>
</header>

<div class="stage">
  <canvas id="kg-canvas" aria-label="文章知识图谱，节点为文档，连线为文档间链接"></canvas>
  <div class="graph-hud">
    <div class="graph-title">
      <h1>知识图谱</h1>
      <span class="stat" id="kg-stats">加载中…</span>
    </div>
    <div class="chipbar" id="kg-chipbar" role="group" aria-label="按分组筛选"></div>
  </div>
  <div class="kg-tooltip" id="kg-tooltip" hidden></div>
  <div class="graph-help">拖动平移 · 滚轮缩放 · 点击节点打开文章 · 双击复位视图</div>
</div>

<script src="../javascripts/knowledge-graph.js" defer></script>
</body>
</html>
"""


def group_of(path: Path) -> str:
    """分组粒度：取前两级目录，AUTOSAR 规范笔记再按平台（CP/AP/FO）细分。

    单取一级目录时 types 会吞掉 390+ 篇文档，图谱上挤成一团看不出结构。
    """
    parts = path.parts
    if len(parts) >= 5 and parts[:3] == ("types", "autosar", "specs"):
        return "types/autosar/" + parts[3]
    if len(parts) >= 3:
        return parts[0] + "/" + parts[1]
    return parts[0] if len(parts) > 1 else "首页与指南"


def main() -> None:
    files = sorted(
        p.relative_to(DOCS) for p in DOCS.rglob("*.md")
        if p.name not in EXCLUDED
        and not any(part.startswith(".") or part in EXCLUDED_DIRS for part in p.parts)
    )
    pages = set(files)
    contents = {p: (DOCS / p).read_text(encoding="utf-8", errors="replace") for p in files}
    titles = {p: page_title(p, contents[p]) for p in files}

    edges: set[tuple[Path, Path]] = set()
    for source in files:
        body = strip_code(contents[source])
        targets = [m.group(2) for m in LINK_RE.finditer(body) if not m.group(0).startswith("!")]
        targets.extend(WIKI_RE.findall(body))
        for target in targets:
            resolved = resolve_target(source, target.split("|", 1)[0], pages)
            if resolved and resolved != source:
                edges.add((source, resolved))

    degree = {p: 0 for p in files}
    for source, target in edges:
        degree[source] += 1
        degree[target] += 1

    # 分组 = 前两级目录（AUTOSAR 规范按 CP/AP/FO 细分）；分组表 + 节点组索引（供前端聚类布局）
    groups: list[str] = []
    for path in files:
        g = group_of(path)
        if g not in groups:
            groups.append(g)

    nodes = [{
        "id": node_id(path),
        "title": titles[path],
        "path": path.as_posix(),
        "url": page_url(path),
        "degree": degree[path],
        "group": group_of(path),
        "g": groups.index(group_of(path)),
    } for path in files]
    index_of = {node_id(p): i for i, p in enumerate(files)}
    links = [[index_of[node_id(s)], index_of[node_id(t)]] for s, t in sorted(edges)]

    OUTPUT_JSON.write_text(
        json.dumps({"groups": groups, "nodes": nodes, "links": links}, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )

    OUTPUT_HTML_DIR.mkdir(exist_ok=True)
    (OUTPUT_HTML_DIR / "index.html").write_text(PAGE_TEMPLATE, encoding="utf-8")
    print(f"Generated graph: {len(nodes)} documents, {len(links)} links, {len(groups)} groups -> /graph/")


if __name__ == "__main__":
    main()

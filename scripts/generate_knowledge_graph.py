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
<html lang="zh-CN" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>知识图谱 - 知识 Wiki</title>
<meta name="robots" content="noindex">
<link rel="icon" href="data:,">
<style>
:root {
  --bg: #0f0f1a; --panel: #1a1a2e; --border: #2a2a4e; --input-border: #3a3a5e;
  --text: #e0e0e0; --text-2: #aaa; --text-3: #ccc; --muted: #555; --count: #666;
  --neighbor-border: #333; --node-label: #ffffff;
}
[data-theme="light"] {
  --bg: #ffffff; --panel: #f8f9fa; --border: #d9dee5; --input-border: #c3cad4;
  --text: #222222; --text-2: #666666; --text-3: #333333; --muted: #888888; --count: #777777;
  --neighbor-border: #ccc; --node-label: #222222;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: var(--bg); color: var(--text); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif; display: flex; height: 100dvh; overflow: hidden; }
#graph { flex: 1; }
#sidebar { width: 280px; background: var(--panel); border-left: 1px solid var(--border); display: flex; flex-direction: column; overflow: hidden; }
#brand { display: flex; align-items: center; gap: 8px; padding: 12px 14px; border-bottom: 1px solid var(--border); }
#brand svg { width: 18px; height: 18px; flex: none; }
#brand .t { font-weight: 650; font-size: .92rem; }
#brand .back { margin-left: auto; color: var(--text-2); text-decoration: none; font-size: .75rem; white-space: nowrap; }
#brand .back:hover { color: #4E79A7; }
#theme-wrap { display: flex; gap: 4px; padding: 8px 12px; border-bottom: 1px solid var(--border); }
#theme-wrap button { flex: 1; background: var(--bg); color: var(--text-2); border: 1px solid var(--input-border); border-radius: 4px; padding: 3px 0; font-size: 11px; cursor: pointer; }
#theme-wrap button:hover { color: var(--text); }
#theme-wrap button[aria-pressed="true"] { background: #4E79A7; border-color: #4E79A7; color: #fff; }
#search-wrap { padding: 12px; border-bottom: 1px solid var(--border); }
#search { width: 100%; background: var(--bg); border: 1px solid var(--input-border); color: var(--text); padding: 7px 10px; border-radius: 6px; font-size: 13px; outline: none; }
#search:focus { border-color: #4E79A7; }
#search-results { max-height: 140px; overflow-y: auto; padding: 4px 12px; border-bottom: 1px solid var(--border); display: none; }
.search-item { padding: 4px 6px; cursor: pointer; border-radius: 4px; font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.search-item:hover { background: var(--border); }
#info-panel { padding: 14px; border-bottom: 1px solid var(--border); min-height: 140px; }
#info-panel h3 { font-size: 13px; color: var(--text-2); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em; }
#info-content { font-size: 13px; color: var(--text-3); line-height: 1.6; }
#info-content .field { margin-bottom: 5px; }
#info-content .field b { color: var(--text); }
#info-content .empty { color: var(--muted); font-style: italic; }
#info-content a.open-link { display: inline-block; margin-top: 6px; color: #4E79A7; text-decoration: none; font-size: 12px; }
#info-content a.open-link:hover { text-decoration: underline; }
.neighbor-link { display: block; padding: 2px 6px; margin: 2px 0; border-radius: 3px; cursor: pointer; font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; border-left: 3px solid var(--neighbor-border); }
.neighbor-link:hover { background: var(--border); }
#neighbors-list { max-height: 160px; overflow-y: auto; margin-top: 4px; }
#legend-wrap { flex: 1; overflow-y: auto; padding: 12px; }
#legend-wrap h3 { font-size: 13px; color: var(--text-2); margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.05em; }
.legend-item { display: flex; align-items: center; gap: 8px; padding: 4px 0; cursor: pointer; border-radius: 4px; font-size: 12px; }
.legend-item:hover { background: var(--border); padding-left: 4px; }
.legend-item.dimmed { opacity: 0.35; }
.legend-dot { width: 12px; height: 12px; border-radius: 50%; flex-shrink: 0; }
.legend-label { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.legend-count { color: var(--count); font-size: 11px; }
#stats { padding: 10px 14px; border-top: 1px solid var(--border); font-size: 11px; color: var(--muted); }
#legend-controls { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; padding: 4px 0; }
#legend-controls label { display: flex; align-items: center; gap: 6px; cursor: pointer; font-size: 12px; color: var(--text-2); user-select: none; }
#legend-controls label:hover { color: var(--text); }
.legend-cb, #select-all-cb { appearance: none; -webkit-appearance: none; width: 14px; height: 14px; border: 1.5px solid var(--input-border); border-radius: 3px; background: var(--bg); cursor: pointer; position: relative; flex-shrink: 0; }
.legend-cb:checked, #select-all-cb:checked { background: #4E79A7; border-color: #4E79A7; }
.legend-cb:checked::after, #select-all-cb:checked::after { content: ''; position: absolute; left: 3.5px; top: 1px; width: 4px; height: 7px; border: solid #fff; border-width: 0 2px 2px 0; transform: rotate(45deg); }
#select-all-cb:indeterminate { background: #4E79A7; border-color: #4E79A7; }
#select-all-cb:indeterminate::after { content: ''; position: absolute; left: 2px; top: 5px; width: 8px; height: 2px; background: #fff; border: none; transform: none; }
@media (max-width: 640px) { #sidebar { width: 240px; } }
</style>
</head>
<body>
<div id="graph"></div>
<div id="sidebar">
  <div id="brand">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="5" cy="6" r="2.2"></circle><circle cx="19" cy="6" r="2.2"></circle>
      <circle cx="12" cy="18" r="2.2"></circle>
      <path d="M6.8 7.4 10.4 16M17.2 7.4 13.6 16M7.2 6h9.6"></path>
    </svg>
    <span class="t">知识图谱</span>
    <a class="back" href="/">返回文档站 →</a>
  </div>
  <div id="theme-wrap" role="group" aria-label="主题">
    <button type="button" data-theme-choice="light">浅色</button>
    <button type="button" data-theme-choice="dark">深色</button>
    <button type="button" data-theme-choice="system">跟随系统</button>
  </div>
  <div id="search-wrap">
    <input id="search" type="text" placeholder="搜索文章…" autocomplete="off">
    <div id="search-results"></div>
  </div>
  <div id="info-panel">
    <h3>节点信息</h3>
    <div id="info-content"><span class="empty">点击节点查看详情</span></div>
  </div>
  <div id="legend-wrap">
    <h3>分组</h3>
    <div id="legend-controls">
      <label><input type="checkbox" id="select-all-cb" checked onchange="toggleAllGroups(!this.checked)">全选</label>
    </div>
    <div id="legend"></div>
  </div>
  <div id="stats">加载中…</div>
</div>
<script src="../javascripts/vendor/vis-network.min.js"></script>
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

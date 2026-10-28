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
    color-scheme: dark;
    --bg: #17191d; --panel: #202328; --panel-raised: #282c32;
    --border: #343940; --input-border: #41474f;
    --text: #eceef2; --text-2: #b7bbc3; --text-3: #d3d6dc;
    --muted: #858b95; --count: #9298a2; --accent: #8db4ff;
    --accent-soft: rgba(141, 180, 255, .13); --edge: rgba(166, 176, 190, .26);
    --node-label: #f5f6f8; --node-label-bg: rgba(23, 25, 29, .92);
}
[data-theme="light"] {
    color-scheme: light;
    --bg: #f3f4f6; --panel: #ffffff; --panel-raised: #f7f8fa;
    --border: #e1e4e8; --input-border: #cbd0d7;
    --text: #24272c; --text-2: #5e646d; --text-3: #41464e;
    --muted: #858b94; --count: #777e88; --accent: #426fb9;
    --accent-soft: rgba(66, 111, 185, .1); --edge: rgba(97, 106, 119, .23);
    --node-label: #25282d; --node-label-bg: rgba(255, 255, 255, .94);
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { background: var(--bg); color: var(--text); font-family: Inter, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif; display: flex; height: 100dvh; overflow: hidden; }
button, input { font: inherit; }
button { color: inherit; }
button:focus-visible, input:focus-visible, a:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
#graph-workspace { flex: 1; min-width: 0; position: relative; overflow: hidden; background-color: var(--bg); background-image: radial-gradient(circle, color-mix(in srgb, var(--text-2) 24%, transparent) 1px, transparent 1.4px); background-size: 24px 24px; }
#graph { position: absolute; inset: 0; overflow: hidden; }
#graph canvas { background: transparent; }
#canvas-title { position: absolute; z-index: 2; top: 18px; left: 20px; pointer-events: none; }
#canvas-title .eyebrow { display: block; margin-bottom: 4px; color: var(--muted); font-size: 10px; font-weight: 650; letter-spacing: .08em; }
#canvas-title .summary { color: var(--text-2); font-size: 12px; }
#graph-toolbar { position: absolute; z-index: 3; top: 16px; right: 18px; display: flex; align-items: center; gap: 4px; padding: 5px; border: 1px solid var(--border); border-radius: 8px; background: color-mix(in srgb, var(--panel) 92%, transparent); box-shadow: 0 5px 18px rgba(0, 0, 0, .12); backdrop-filter: blur(12px); }
.tool-button { width: 34px; height: 34px; display: grid; place-items: center; border: 0; border-radius: 5px; background: transparent; color: var(--text-2); cursor: pointer; transition: background .16s ease, color .16s ease; }
.tool-button:hover, .tool-button[aria-pressed="true"] { background: var(--accent-soft); color: var(--accent); }
.tool-button svg { width: 17px; height: 17px; fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
.tool-divider { width: 1px; height: 20px; margin: 0 3px; background: var(--border); }
#sidebar { width: 324px; min-width: 0; flex: none; position: relative; z-index: 5; display: flex; flex-direction: column; overflow: hidden; background: var(--panel); border-left: 1px solid var(--border); transition: width .2s ease, transform .2s ease; }
body.sidebar-collapsed #sidebar { width: 0; border-left: 0; }
body.sidebar-collapsed #sidebar > * { visibility: hidden; }
#brand { display: flex; align-items: center; gap: 9px; min-height: 56px; padding: 0 16px; border-bottom: 1px solid var(--border); }
#brand svg { width: 19px; height: 19px; flex: none; color: var(--accent); }
#brand .t { font-size: .9rem; font-weight: 650; }
#brand .back { margin-left: auto; color: var(--text-2); text-decoration: none; font-size: .75rem; white-space: nowrap; }
#brand .back:hover { color: var(--accent); }
#sidebar-close { display: none; width: 32px; height: 32px; margin-left: auto; place-items: center; border: 0; border-radius: 5px; background: transparent; color: var(--text-2); cursor: pointer; }
#sidebar-close:hover { background: var(--panel-raised); color: var(--text); }
#sidebar-close svg { width: 17px; height: 17px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; }
#theme-wrap { display: flex; gap: 3px; margin: 12px 14px 0; padding: 3px; border: 1px solid var(--border); border-radius: 7px; background: var(--bg); }
#theme-wrap button { flex: 1; min-height: 29px; padding: 0 4px; border: 0; border-radius: 4px; background: transparent; color: var(--text-2); font-size: 11px; cursor: pointer; }
#theme-wrap button:hover { color: var(--text); }
#theme-wrap button[aria-pressed="true"] { background: var(--panel-raised); color: var(--text); box-shadow: 0 1px 2px rgba(0, 0, 0, .14); }
#search-wrap { position: relative; padding: 12px 14px; border-bottom: 1px solid var(--border); }
#search { width: 100%; min-height: 38px; padding: 0 11px; border: 1px solid var(--input-border); border-radius: 6px; outline: none; background: var(--bg); color: var(--text); font-size: 12px; }
#search::placeholder, #group-filter::placeholder { color: var(--muted); }
#search:focus, #group-filter:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
#search-results { position: absolute; z-index: 8; top: calc(100% - 6px); left: 14px; right: 14px; max-height: 260px; overflow-y: auto; padding: 5px; border: 1px solid var(--border); border-radius: 7px; background: var(--panel-raised); box-shadow: 0 12px 28px rgba(0, 0, 0, .22); display: none; }
.search-item { padding: 8px 9px; cursor: pointer; border-radius: 4px; font-size: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.search-item:hover, .search-item:focus { outline: none; background: var(--accent-soft); }
#info-panel { flex: none; max-height: min(35vh, 300px); overflow-y: auto; padding: 15px 16px; border-bottom: 1px solid var(--border); }
#info-panel h3, #legend-wrap h3 { color: var(--text-2); font-size: 11px; font-weight: 650; letter-spacing: .04em; }
#info-panel h3 { margin-bottom: 10px; }
#info-content { color: var(--text-3); font-size: 12px; line-height: 1.65; overflow-wrap: anywhere; }
#info-content .field { margin-bottom: 6px; }
#info-content .field b { color: var(--text); font-size: 13px; }
#info-content .empty { color: var(--muted); }
#info-content a.open-link { display: inline-flex; align-items: center; gap: 5px; margin-top: 7px; color: var(--accent); text-decoration: none; font-size: 12px; }
#info-content a.open-link:hover { text-decoration: underline; }
.neighbor-link { display: block; padding: 5px 8px; margin: 3px 0; border-radius: 4px; cursor: pointer; font-size: 11px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; border-left: 2px solid var(--border); }
.neighbor-link:hover { background: var(--panel-raised); }
#neighbors-list { max-height: 120px; overflow-y: auto; margin-top: 5px; }
#legend-wrap { flex: 1; min-height: 0; overflow-y: auto; padding: 14px 14px 8px; }
#legend-wrap h3 { margin: 0 0 8px 2px; }
#group-filter { width: 100%; height: 32px; margin: 0 0 8px; padding: 0 9px; border: 1px solid var(--border); border-radius: 5px; outline: none; background: var(--bg); color: var(--text); font-size: 11px; }
#legend-controls { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin: 0 2px 7px; }
#legend-controls label { display: flex; align-items: center; gap: 7px; cursor: pointer; color: var(--text-2); font-size: 11px; user-select: none; }
#legend-controls label:hover { color: var(--text); }
.legend-cb, #select-all-cb { appearance: none; width: 14px; height: 14px; border: 1px solid var(--input-border); border-radius: 3px; background: var(--bg); cursor: pointer; position: relative; flex-shrink: 0; }
.legend-cb:checked, #select-all-cb:checked, #select-all-cb:indeterminate { background: var(--accent); border-color: var(--accent); }
.legend-cb:checked::after, #select-all-cb:checked::after { content: ''; position: absolute; left: 4px; top: 1px; width: 4px; height: 7px; border: solid #fff; border-width: 0 1.5px 1.5px 0; transform: rotate(45deg); }
#select-all-cb:indeterminate::after { content: ''; position: absolute; left: 2px; top: 5px; width: 8px; height: 2px; background: #fff; }
.legend-item { display: flex; align-items: center; gap: 8px; min-height: 30px; padding: 3px 5px; cursor: pointer; border-radius: 4px; font-size: 11px; }
.legend-item:hover { background: var(--panel-raised); }
.legend-item.dimmed { opacity: .42; }
.legend-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
.legend-label { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.legend-count { color: var(--count); font-size: 10px; font-variant-numeric: tabular-nums; }
#stats { flex: none; padding: 10px 16px; border-top: 1px solid var(--border); color: var(--muted); font-size: 10px; }
#sidebar-scrim { display: none; }
@media (max-width: 760px) {
    #canvas-title { top: 12px; left: 13px; }
    #canvas-title .summary { display: none; }
    #graph-toolbar { top: 10px; right: 10px; gap: 2px; padding: 4px; }
    .tool-button { width: 32px; height: 32px; }
    .tool-divider { margin: 0 1px; }
    #sidebar { position: fixed; top: 0; right: 0; bottom: 0; width: min(88vw, 340px); transform: translateX(100%); box-shadow: none; }
    body.sidebar-open #sidebar { transform: translateX(0); box-shadow: -16px 0 40px rgba(0, 0, 0, .25); }
    body.sidebar-open #sidebar-scrim { display: block; position: fixed; z-index: 4; inset: 0; border: 0; background: rgba(8, 10, 13, .48); }
    #sidebar-close { display: grid; }
    #brand .back { display: none; }
}
@media (max-width: 420px) {
    #canvas-title .eyebrow { display: none; }
    #graph-toolbar { top: 9px; right: 8px; }
    .tool-button { width: 30px; height: 30px; }
}
</style>
</head>
<body>
<div id="graph-workspace">
    <div id="graph" role="application" aria-label="可交互知识图谱"></div>
    <div id="canvas-title" aria-live="polite">
        <span class="eyebrow">KNOWLEDGE GRAPH</span>
        <span id="graph-summary" class="summary">拖动浏览 · 点击节点查看关联</span>
    </div>
    <div id="graph-toolbar" role="toolbar" aria-label="图谱视图操作">
        <button class="tool-button" type="button" data-graph-action="zoom-in" title="放大" aria-label="放大图谱">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"></circle><path d="M16 16l4.3 4.3M10.8 7.8v6M7.8 10.8h6"></path></svg>
        </button>
        <button class="tool-button" type="button" data-graph-action="zoom-out" title="缩小" aria-label="缩小图谱">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"></circle><path d="M16 16l4.3 4.3M7.8 10.8h6"></path></svg>
        </button>
        <button class="tool-button" type="button" data-graph-action="fit" title="适配全图（0）" aria-label="适配全图">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5M8 8l-5-5M16 8l5-5M8 16l-5 5M16 16l5 5"></path></svg>
        </button>
        <span class="tool-divider" aria-hidden="true"></span>
        <button class="tool-button" type="button" data-graph-action="labels" title="显示全部标签" aria-label="显示全部节点标签" aria-pressed="false">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16M4 12h10M4 19h7"></path><circle cx="19" cy="12" r="2"></circle></svg>
        </button>
        <button class="tool-button" type="button" data-graph-action="sidebar" title="隐藏详情面板" aria-label="切换详情面板" aria-expanded="true">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M15 4v16"></path></svg>
        </button>
    </div>
</div>
<button id="sidebar-scrim" type="button" aria-label="关闭详情面板"></button>
<div id="sidebar">
  <div id="brand">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="5" cy="6" r="2.2"></circle><circle cx="19" cy="6" r="2.2"></circle>
      <circle cx="12" cy="18" r="2.2"></circle>
      <path d="M6.8 7.4 10.4 16M17.2 7.4 13.6 16M7.2 6h9.6"></path>
    </svg>
    <span class="t">知识图谱</span>
        <a class="back" href="/">返回 Wiki →</a>
        <button id="sidebar-close" type="button" aria-label="关闭面板">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"></path></svg>
        </button>
  </div>
  <div id="theme-wrap" role="group" aria-label="主题">
    <button type="button" data-theme-choice="light">浅色</button>
    <button type="button" data-theme-choice="dark">深色</button>
    <button type="button" data-theme-choice="system">跟随系统</button>
  </div>
  <div id="search-wrap">
    <input id="search" type="search" placeholder="搜索笔记…  Ctrl K" autocomplete="off" aria-keyshortcuts="Control+K Meta+K">
    <div id="search-results"></div>
  </div>
  <div id="info-panel">
    <h3>节点信息</h3>
    <div id="info-content"><span class="empty">点击节点查看详情</span></div>
  </div>
  <div id="legend-wrap">
    <h3>分组</h3>
        <input id="group-filter" type="search" placeholder="筛选分组…" autocomplete="off" aria-label="筛选图谱分组">
    <div id="legend-controls">
            <label><input type="checkbox" id="select-all-cb" checked>显示所有分组</label>
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
        (p.relative_to(DOCS) for p in DOCS.rglob("*.md")),
        key=lambda path: path.parts,
    )
    files = [
        path for path in files
        if path.name not in EXCLUDED
        and not any(part.startswith(".") or part in EXCLUDED_DIRS for part in path.parts)
    ]
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
    links = [
        [index_of[node_id(source)], index_of[node_id(target)]]
        for source, target in sorted(edges, key=lambda edge: (edge[0].parts, edge[1].parts))
    ]

    OUTPUT_JSON.write_text(
        json.dumps({"groups": groups, "nodes": nodes, "links": links}, ensure_ascii=False) + "\n",
        encoding="utf-8",
        newline="\n",
    )

    OUTPUT_HTML_DIR.mkdir(exist_ok=True)
    (OUTPUT_HTML_DIR / "index.html").write_text(PAGE_TEMPLATE, encoding="utf-8", newline="\n")
    print(f"Generated graph: {len(nodes)} documents, {len(links)} links, {len(groups)} groups -> /graph/")


if __name__ == "__main__":
    main()

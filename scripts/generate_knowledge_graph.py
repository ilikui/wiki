#!/usr/bin/env python3
"""Generate an interactive, link-aware knowledge graph from docs Markdown files.

产出：
  docs/knowledge-graph.json  — 图谱数据（groups / nodes / links，供前端聚类布局）
  docs/knowledge-graph.md    — 沉浸式图谱页面（由 docs/javascripts/knowledge-graph.js 渲染）
"""
from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
OUTPUT_MD = DOCS / "knowledge-graph.md"
OUTPUT_JSON = DOCS / "knowledge-graph.json"
EXCLUDED = {"knowledge-graph.md"}

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
    name = path.name.lower()
    if name in {"index.md", "readme.md"}:
        parent = path.parent.as_posix()
        return "/" if parent == "." else parent + "/"
    return path.with_suffix("").as_posix() + "/"


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


def main() -> None:
    files = sorted(
        p.relative_to(DOCS) for p in DOCS.rglob("*.md")
        if p.name not in EXCLUDED and not any(part.startswith(".") for part in p.parts)
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

    # 分组 = 文档一级目录；分组表 + 节点组索引（供前端聚类布局）
    groups: list[str] = []
    for path in files:
        group = path.parts[0] if len(path.parts) > 1 else "首页与指南"
        if group not in groups:
            groups.append(group)

    nodes = [{
        "id": node_id(path),
        "title": titles[path],
        "path": path.as_posix(),
        "url": page_url(path),
        "degree": degree[path],
        "group": path.parts[0] if len(path.parts) > 1 else "首页与指南",
        "g": groups.index(path.parts[0] if len(path.parts) > 1 else "首页与指南"),
    } for path in files]
    index_of = {node_id(p): i for i, p in enumerate(files)}
    links = [[index_of[node_id(s)], index_of[node_id(t)]] for s, t in sorted(edges)]

    OUTPUT_JSON.write_text(
        json.dumps({"groups": groups, "nodes": nodes, "links": links}, ensure_ascii=False) + "\n",
        encoding="utf-8",
    )

    OUTPUT_MD.write_text(f"""# 全站知识图谱

以关系网络浏览 Wiki 文档之间的连接。拖动节点调整布局，拖动空白区域平移，滚轮缩放；点击节点打开对应文档。

<div class="kg-app">
  <div class="kg-toolbar">
    <input id="kg-search" type="search" placeholder="搜索文章标题或路径…" aria-label="搜索知识图谱">
    <button id="kg-reset" type="button">重置视图</button>
    <button id="kg-labels" type="button" aria-pressed="true">隐藏标签</button>
  </div>
  <div class="kg-stats" id="kg-stats">正在加载知识图谱…</div>
  <div class="kg-stage">
    <canvas id="kg-canvas" aria-label="可交互知识图谱"></canvas>
    <div class="kg-legend" id="kg-legend"></div>
    <div class="kg-tooltip" id="kg-tooltip" hidden></div>
  </div>
  <p class="kg-hint">操作提示：拖动节点调整布局 · 拖动背景平移 · 滚轮缩放 · 点击节点阅读文档 · 悬停图例可高亮分组</p>
  <noscript>知识图谱需要启用 JavaScript。你仍可通过左侧导航浏览所有文档。</noscript>
</div>

<script src="../javascripts/knowledge-graph.js" defer></script>

## 浏览全部文档

<div id="kg-index" class="kg-index"><p>文档索引正在加载…</p></div>

<script>
document.addEventListener("DOMContentLoaded", async () => {{
  const box = document.getElementById("kg-index");
  if (!box) return;
  try {{
    const response = await fetch("../knowledge-graph.json");
    if (!response.ok) throw new Error("HTTP " + response.status);
    const graph = await response.json();
    box.innerHTML = "";
    const list = document.createElement("div");
    list.className = "kg-index-grid";
    graph.nodes.slice().sort((a, b) => a.title.localeCompare(b.title, "zh-CN")).forEach(node => {{
      const link = document.createElement("a");
      link.href = node.url;
      link.textContent = node.title;
      link.title = node.path;
      list.appendChild(link);
    }});
    box.appendChild(list);
  }} catch (error) {{
    box.textContent = "文档索引加载失败，请刷新页面或使用站点导航。";
  }}
}});
</script>

---

*本页面由 scripts/generate_knowledge_graph.py 自动生成，请勿手动编辑。当前共 {len(nodes)} 篇文档、{len(links)} 条关联。*
""", encoding="utf-8")
    print(f"Generated interactive graph: {len(nodes)} documents, {len(links)} links, {len(groups)} groups")


if __name__ == "__main__":
    main()

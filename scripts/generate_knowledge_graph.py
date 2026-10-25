#!/usr/bin/env python3
"""Generate a Mermaid knowledge graph from Markdown files under docs/."""
from __future__ import annotations
import re
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
OUTPUT = DOCS / "knowledge-graph.md"
EXCLUDED = {"knowledge-graph.md"}
LINK_RE = re.compile(r"!?\[[^\]]*\]\(([^)]+)\)")
WIKI_RE = re.compile(r"\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|[^\]]+)?\]\]")
HEADING_RE = re.compile(r"^#\s+(.+?)\s*#*\s*$", re.M)

def clean_label(value: str, limit: int = 54) -> str:
    value = re.sub(r"[\x00-\x1f*_~]", "", value).replace('"', "'")
    value = re.sub(r"\s+", " ", value).strip()
    return value if len(value) <= limit else value[: limit - 1] + "…"

def page_title(path: Path, text: str) -> str:
    match = HEADING_RE.search(text)
    return clean_label(match.group(1)) if match else clean_label(path.stem.replace("-", " ").replace("_", " "))

def node_id(path: Path) -> str:
    return "n_" + re.sub(r"[^a-zA-Z0-9_]", "_", path.relative_to(DOCS).as_posix())

def resolve_target(source: Path, target: str, pages: set[Path]) -> Path | None:
    target = target.strip().strip("<>").split()[0] if target.strip() else ""
    parsed = urlsplit(target)
    if parsed.scheme or parsed.netloc or not target or target.startswith("#"):
        return None
    target_path = unquote(parsed.path)
    if not target_path:
        return None
    if target_path.startswith("/"):
        candidate = (DOCS / target_path.lstrip("/")).resolve()
    else:
        candidate = (DOCS / source.parent / target_path).resolve()
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
    files = sorted(p.relative_to(DOCS) for p in DOCS.rglob("*.md")
                   if p.name not in EXCLUDED and not any(part.startswith(".") for part in p.parts))
    pages = set(files)
    contents = {p: (DOCS / p).read_text(encoding="utf-8", errors="replace") for p in files}
    titles = {p: page_title(p, contents[p]) for p in files}
    edges: set[tuple[Path, Path]] = set()
    for source in files:
        targets = [match.group(1) for match in LINK_RE.finditer(contents[source])]
        targets.extend(WIKI_RE.findall(contents[source]))
        for target in targets:
            resolved = resolve_target(source, target.split("|", 1)[0], pages)
            if resolved and resolved != source:
                edges.add((source, resolved))

    fence = chr(96) * 3
    lines = [
        "# 文档知识图谱", "",
        "> 由 GitHub Actions 自动生成。图谱从 docs/ 下的 Markdown 文件及其站内链接提取；修改文档后会自动更新。", "",
        f"- **文档数量：** {len(files)}",
        f"- **站内关联：** {len(edges)}",
        "- **阅读方式：** 下方图谱展示文档之间的站内链接关系；文档索引可直接打开原文。", "",
        "## 知识关系图", "", fence + "mermaid", "flowchart LR",
    ]
    for path in files:
        label = clean_label(f"{titles[path]} · {path.as_posix()}", 72).replace('"', "'")
        lines.append(f'  {node_id(path)}["{label}"]')
    for source, target in sorted(edges, key=lambda edge: (edge[0].as_posix(), edge[1].as_posix())):
        lines.append(f"  {node_id(source)} --> {node_id(target)}")
    lines.extend([fence, "", "## 文档索引", ""])
    for path in files:
        lines.append(f"- [{titles[path]}]({path.as_posix()})")
    lines.extend(["", "---", "", "*本页面由 scripts/generate_knowledge_graph.py 生成，请勿手动编辑。*", ""])
    OUTPUT.write_text("\\n".join(lines), encoding="utf-8")
    print(f"Generated {OUTPUT.relative_to(ROOT)}: {len(files)} documents, {len(edges)} links")

if __name__ == "__main__":
    main()

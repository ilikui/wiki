"""构建时动态生成导航（MkDocs hooks）。

345 篇 AUTOSAR 规范笔记不适合手工写进 mkdocs.yml，这里按目录结构自动生成，
让每篇笔记都能在左侧栏定位、并让顶部 tab 正确高亮。

用法：mkdocs.yml 中
    hooks:
      - hooks/nav.py
"""

from __future__ import annotations

import re
from pathlib import Path

DOCS = Path(__file__).resolve().parent.parent / "docs"
SPECS_REL = "types/autosar/specs"

# 官方规范标题里冗长的前缀，生成导航时去掉，保留可辨识的模块名
PREFIXES = (
    "Software Specification of ",
    "General Specification of ",
    "Specification of the ",
    "Specification of ",
    "Requirements on the ",
    "Requirements on ",
    "Explanation of the ",
    "Explanation of ",
    "Technical Report on ",
    "Technical Report ",
    "Requirements Specification of ",
    "Requirements Specification ",
    "Software Requirement Specification of ",
)

TAIL_SHORTNAME = re.compile(
    r"\s*[（(]\s*`?[A-Za-z0-9_\-]+`?(?:\s+[A-Za-z0-9_\-]+){0,3}\s*[)）]\s*$"
)


def _first_heading(path: Path) -> str:
    """取 md 的第一个一级标题，失败则回退文件名。"""
    try:
        with path.open(encoding="utf-8", errors="ignore") as fh:
            for _ in range(60):
                line = fh.readline()
                if not line:
                    break
                if line.startswith("# "):
                    return line[2:].strip()
    except OSError:
        pass
    return path.stem


def _short_title(path: Path) -> str:
    title = _first_heading(path)
    changed = True
    while changed:
        changed = False
        for prefix in PREFIXES:
            if title.startswith(prefix):
                title = title[len(prefix):]
                changed = True
    title = TAIL_SHORTNAME.sub("", title)
    title = title.strip(" —-–·:：")
    if not title:
        title = path.stem.replace("_", " ")
    return title


def _section(dir_path: Path, depth: int = 0) -> list | None:
    """递归构造一个目录的 nav 子树。"""
    if depth > 6:
        return None

    items: list = []
    index = dir_path / "index.md"
    if index.exists():
        items.append({"概览": index.relative_to(DOCS).as_posix()})

    for sub in sorted(p for p in dir_path.iterdir() if p.is_dir() and not p.name.startswith((".", "_"))):
        child = _section(sub, depth + 1)
        if child:
            items.append({sub.name: child})

    for md in sorted(dir_path.glob("*.md")):
        if md.name == "index.md":
            continue
        items.append({_short_title(md): md.relative_to(DOCS).as_posix()})

    return items or None


def _specs_nav() -> list | None:
    specs = DOCS / SPECS_REL
    if not specs.is_dir():
        return None

    items: list = []
    readme = specs / "README.md"
    if readme.exists():
        items.append({"笔记库总览": readme.relative_to(DOCS).as_posix()})
    help_md = specs / "HELP.md"
    if help_md.exists():
        items.append({"使用指南": help_md.relative_to(DOCS).as_posix()})

    for platform in sorted(p for p in specs.iterdir() if p.is_dir()):
        child = _section(platform, 1)
        if child:
            items.append({platform.name: child})

    return items or None


def on_config(config, **kwargs):
    """把 specs 子树挂到 AUTOSAR 板块下（扁平到 4 层，避免侧栏过深）。"""
    nav = config.nav
    if not nav:
        return config

    specs = _specs_nav()
    if not specs:
        return config

    for entry in nav:
        if not isinstance(entry, dict) or "AUTOSAR" not in entry:
            continue
        base = entry["AUTOSAR"]
        if not isinstance(base, list):
            base = [{"1000 问总表": "types/autosar/README.md"}]
        # 去掉手工占位项，其余原样保留，再拼上自动生成的笔记库子树
        kept = [i for i in base if not (isinstance(i, dict) and "规范笔记库" in i)]
        entry["AUTOSAR"] = kept + specs

    config.nav = nav
    return config

# LIKUI Knowledge Wiki

<div align="center">

**个人知识库 · 技术专题 · 问题驱动学习 · 交互式知识图谱**

将零散笔记整理为可检索、可关联、可持续迭代的知识体系。

[![Online Wiki](https://img.shields.io/badge/Online-Wiki-7C3AED?style=for-the-badge&logo=readthedocs&logoColor=white)](https://wk.likui.info/)
[![Built with MkDocs](https://img.shields.io/badge/Docs-MkDocs%20Material-526CFE?style=for-the-badge&logo=materialformkdocs&logoColor=white)](https://squidfunk.github.io/mkdocs-material/)
[![Markdown](https://img.shields.io/badge/Content-Markdown-111827?style=for-the-badge&logo=markdown&logoColor=white)](https://github.com/ilikui/wiki/tree/master/docs)
[![GitHub repository](https://img.shields.io/badge/GitHub-ilikui%2Fwiki-181717?style=for-the-badge&logo=github)](https://github.com/ilikui/wiki)

<p>
  <a href="https://wk.likui.info/">进入知识 Wiki</a> ·
  <a href="https://wk.likui.info/knowledge-graph/">交互式知识图谱</a> ·
  <a href="https://github.com/ilikui/wiki/tree/master/docs">浏览 Markdown 源文档</a>
</p>

</div>

---

## 项目简介

**LIKui Knowledge Wiki** 是一个以 Markdown 为基础、以专题为组织方式、以问题为学习入口的个人知识库。它不只是文档集合，而是一个持续整理、验证和连接知识的数字花园。

项目使用 MkDocs Material 构建文档网站，集中整理技术学习路线、工程实践、计算机基础、阅读资料和专题笔记。内容以 Markdown 文件保存，便于版本管理、全文检索、跨文档链接和长期维护。

### 核心特点

- **专题化组织**：通过目录和主题索引组织知识，减少单篇超长文档带来的维护成本。
- **问题驱动学习**：从具体问题出发，逐步补全概念、原理、示例、边界条件和验证方法。
- **交互式知识图谱**：以节点和连接关系探索文档之间的关联，支持搜索、拖动、缩放和跳转。
- **图表与代码友好**：支持 Markdown、代码高亮、表格、提示块和 Mermaid 图表。
- **持续迭代**：通过 Git 记录内容变化，并使用自动化工作流构建和发布静态网站。
- **多端访问**：网站适配桌面和移动设备，适合学习、查阅与复习。

## 在线入口

| 入口 | 内容 |
|---|---|
| [知识 Wiki 首页](https://wk.likui.info/) | 浏览主要专题和学习入口 |
| [全站知识图谱](https://wk.likui.info/knowledge-graph/) | 交互式查看文档节点及其关联 |
| [1000 问知识体系](https://wk.likui.info/types/) | 通过问题组织专题学习路径 |
| [计算机科学](https://wk.likui.info/cs/目录/) | 计算机基础、软件工程、系统与 AI 等主题 |
| [阅读记录](https://wk.likui.info/read/Reading/) | 阅读相关资料与记录 |
| [仓库文档目录](https://github.com/ilikui/wiki/tree/master/docs) | 查看网站的 Markdown 源文件 |

> 页面路由会随文档结构调整；若某个入口发生变化，请以网站导航和仓库中的 mkdocs.yml 为准。

## 知识覆盖范围

| 主题领域 | 主要内容 |
|---|---|
| 汽车电子与 AUTOSAR | Classic AUTOSAR、RTE/SWC、通信栈、诊断、NvM、配置与集成排查 |
| 嵌入式系统 | MCU、外设驱动、中断、RTOS、启动流程、调试与软硬件协同 |
| C 语言与编程 | 语言基础、指针与内存、编译链接、数据结构、工程实践 |
| 人工智能与大模型 | AI 基础、机器学习、深度学习、LLM、RAG 与 Agent |
| 计算机科学 | 操作系统、计算机网络、数据库、编译原理、软件工程与系统架构 |
| 数学与统计 | 数学基础、概率论、数理统计及相关学习路径 |
| MATLAB / Simulink | 数值计算、建模仿真、控制算法与工程应用 |
| 电气工程 | 电气基础、相关技术专题与学习资料 |
| 历史、阅读与教育 | 历史专题、阅读索引、儿童教育与跨领域思考 |

## 知识如何生长

~~~mermaid
flowchart TD
    A[捕捉问题与灵感] --> B[归入专题]
    B --> C[拆解核心问题]
    C --> D[整理原理与示例]
    D --> E[建立相关链接]
    E --> F[通过资料、代码或实验验证]
    F --> G[发布为可复用笔记]
    G --> H[复习、修订与补充]
    H --> C
~~~

每一篇高质量笔记尽可能回答以下问题：

1. **结论是什么？** 先给出清晰、可复述的短答案。
2. **为什么成立？** 说明原理、推导过程与适用前提。
3. **如何应用？** 提供示例、代码、图表或工程案例。
4. **边界在哪里？** 记录常见误区、例外情况与版本差异。
5. **如何验证？** 说明测试方法、实验结果或可信来源。
6. **还与什么有关？** 链接前置知识、相邻概念和延伸阅读。

## 交互式知识图谱

知识图谱将站内文档作为节点，并根据文档链接建立关系。它适合用于发现跨专题联系、寻找相关文档以及从已知概念探索未知内容。

- **搜索**：按标题或文档路径定位节点。
- **拖动节点**：调整节点位置，观察局部关系。
- **平移与缩放**：浏览网络的不同区域。
- **点击节点**：打开对应文档。
- **主题图例**：按文档分组观察知识分布。
- **文档索引**：不使用图谱时，也可以从页面底部的索引直接进入文章。

[打开全站知识图谱 →](https://wk.likui.info/knowledge-graph/)

## 仓库结构

~~~text
wiki/
├── README.md                 # 项目说明与导航
├── mkdocs.yml                # 网站、导航、主题与插件配置
├── requirements.txt          # Python 构建依赖
├── scripts/
│   └── generate_knowledge_graph.py
├── .github/
│   └── workflows/
│       ├── static.yml        # 构建并部署静态网站
│       └── knowledge-graph.yml # 自动生成知识图谱数据
└── docs/
    ├── index.md              # 网站首页
    ├── knowledge-graph.md    # 独立知识图谱页面
    ├── knowledge-graph.json  # 图谱节点与连接数据
    ├── types/                # 1000 问与专题学习目录
    ├── cs/                   # 计算机科学主题
    ├── read/                 # 阅读记录与书籍索引
    ├── dev-guide/            # 开发指南
    ├── user-guide/           # 使用手册
    ├── css/                  # 网站样式
    └── javascripts/          # 网站交互脚本
~~~

实际目录以仓库当前内容为准；新增专题时，请同时更新相应索引或导航，避免文档成为孤立页面。

## 本地预览与构建

### 环境要求

- Python 3.10 或更高版本（推荐 Python 3.12）
- Git
- 可访问 Python 包索引的网络环境

### 安装依赖

~~~bash
git clone https://github.com/ilikui/wiki.git
cd wiki

python -m venv .venv
~~~

Windows PowerShell：

~~~powershell
.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
~~~

macOS / Linux：

~~~bash
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
~~~

### 启动本地站点

~~~bash
mkdocs serve
~~~

在终端提示的本地地址打开网站，修改 Markdown 后页面会自动刷新。

### 构建静态网站

~~~bash
mkdocs build
~~~

构建产物默认输出到 site/ 目录。若只想检查构建是否成功，可运行：

~~~bash
mkdocs build --clean
~~~

### 更新知识图谱

通常由 GitHub Actions 自动生成。需要在本地手动更新时运行：

~~~bash
python scripts/generate_knowledge_graph.py
mkdocs build
~~~

生成器会更新 docs/knowledge-graph.md 与 docs/knowledge-graph.json。请将需要提交的生成文件与相关文档一并纳入版本控制。

## 内容维护约定

- **保留来源**：重要结论尽量保留原始链接、标准编号、版本信息或参考资料。
- **明确状态**：区分草稿、待验证、已复核和需要更新的内容，不把未经验证的结论写成定论。
- **避免重复**：优先维护一个主页面，其他页面通过链接引用；存在不同适用条件时应保留差异说明。
- **给出上下文**：工程内容尽可能记录硬件平台、软件版本、工具链、配置条件和复现步骤。
- **保持链接有效**：新增或移动页面后，检查站内链接、导航和知识图谱是否仍然有效。
- **小步更新**：通过有明确目的的提交维护内容，避免一次改动破坏既有专题。
- **谨慎处理原始笔记**：整理时保留原始材料中的有效例子、背景和来源，不以简单去重为由丢失信息。

## 自动化与发布

项目包含 GitHub Actions 工作流，用于构建 MkDocs 网站和生成知识图谱。发布前应检查工作流结果；只有构建和部署工作流成功，才能确认对应版本已经发布。

- 网站构建与发布工作流：[.github/workflows/static.yml](https://github.com/ilikui/wiki/blob/master/.github/workflows/static.yml)
- 知识图谱生成工作流：[.github/workflows/knowledge-graph.yml](https://github.com/ilikui/wiki/blob/master/.github/workflows/knowledge-graph.yml)
- 构建依赖：[requirements.txt](https://github.com/ilikui/wiki/blob/master/requirements.txt)
- MkDocs 配置：[mkdocs.yml](https://github.com/ilikui/wiki/blob/master/mkdocs.yml)

## 参与改进

欢迎通过 Issue 或 Pull Request 提出内容纠错、专题建议、链接修复和文档改进。提交前请确认：

- 内容有明确主题与适用范围；
- 示例尽量可复现，关键结论有来源或验证方式；
- 新页面已加入适当的专题索引或导航；
- 链接与图表在本地构建后可以正常显示。

---

<div align="center">

**Capture · Connect · Verify · Publish · Revisit**

*知识不是笔记的堆积，而是一张可以持续探索、检验与完善的网络。*

[进入 LIKUI Knowledge Wiki](https://wk.likui.info/)

</div>

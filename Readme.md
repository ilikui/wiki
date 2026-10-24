# 知识文档｜Wiki

> 以 MkDocs 构建的技术文档与学习资料库，包含计算机基础、软件工程、数学、人工智能、阅读记录和开发参考等主题。

## 项目入口

- 文档源文件：[`docs/`](docs/)
- MkDocs 配置：[`mkdocs.yml`](mkdocs.yml)
- 本地构建依赖：[`requirements.7z`](requirements.7z)
- 构建脚本：[`Build.bat`](Build.bat)
- 项目文档站配置地址：`https://www.likui.info/wiki/site`（以当前 `mkdocs.yml` 为准；域名与部署迁移后应同步更新）

## 内容导航

当前导航由 `mkdocs.yml` 中的 `nav` 配置维护，主要包括：

- **计算机科学：** 数学、编程、数据结构与算法、软件工程、操作系统、网络、数据库、编译原理、图形学、数据科学与人工智能等。
- **阅读：** 阅读记录与书籍资料。
- **开发指南：** MkDocs API、插件、主题与配置说明。
- **其他资料：** PPT、工具推荐与专题笔记。

## 本地预览

项目使用 MkDocs。请先准备 Python 环境，并根据项目依赖文件安装所需依赖；随后在仓库根目录运行：

```bash
mkdocs serve
```

默认情况下，MkDocs 会在本地启动预览服务。若启动失败，请检查依赖、插件版本及 `mkdocs.yml` 中配置的插件是否已安装。

构建静态站点：

```bash
mkdocs build
```

## 文档维护规范

1. 新增页面后，检查 `mkdocs.yml` 的导航是否需要更新。
2. 使用相对路径链接仓库内页面和图片，并确认目标文件真实存在。
3. 修改站点域名时，同时检查 `site_url`、RSS 地址、部署配置和仓库 Homepage 元数据。
4. 涉及第三方工具时，标注版本、来源和验证日期；不确定的步骤应明确说明。

## 相关入口

- [个人主页](https://likui.info/)
- [技术站点导航](https://likui.info/#spaces)
- [GitHub 全部仓库](https://github.com/ilikui?tab=repositories)

---

**一致性提醒：** 当前 `mkdocs.yml` 中的站点地址仍为 `https://www.likui.info/wiki/site`。在确认新站点部署目标前，不要仅凭个人主页入口就直接改写发布地址。
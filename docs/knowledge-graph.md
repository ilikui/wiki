# 全站知识图谱

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
document.addEventListener("DOMContentLoaded", async () => {
  const box = document.getElementById("kg-index");
  if (!box) return;
  try {
    const response = await fetch("../knowledge-graph.json");
    if (!response.ok) throw new Error("HTTP " + response.status);
    const graph = await response.json();
    box.innerHTML = "";
    const list = document.createElement("div");
    list.className = "kg-index-grid";
    graph.nodes.slice().sort((a, b) => a.title.localeCompare(b.title, "zh-CN")).forEach(node => {
      const link = document.createElement("a");
      link.href = node.url;
      link.textContent = node.title;
      link.title = node.path;
      list.appendChild(link);
    });
    box.appendChild(list);
  } catch (error) {
    box.textContent = "文档索引加载失败，请刷新页面或使用站点导航。";
  }
});
</script>

---

*本页面由 scripts/generate_knowledge_graph.py 自动生成，请勿手动编辑。当前共 57 篇文档、53 条关联。*

(() => {
  "use strict";
  /* 知识图谱 — Graphify 风格（vis-network + ForceAtlas2 + 右侧信息栏）
     数据源：docs/knowledge-graph.json（本地生成，纯链接解析，无 LLM） */
  if (typeof vis === "undefined") {
    const el = document.getElementById("stats");
    if (el) el.textContent = "vis-network 库加载失败";
    return;
  }

  /* Graphify 社区调色板（exporters/base.py COMMUNITY_COLORS）
     原第 10 色 #BAB0AC 在深色底上过亮（223 个节点的 CP 组会糊成白盘），改为中灰蓝 */
  const PALETTE = ["#4E79A7", "#F28E2B", "#E15759", "#76B7B2", "#59A14F",
                   "#EDC948", "#B07AA1", "#FF9DA7", "#9C755F", "#8892A6"];
  const colorOf = g => PALETTE[g % PALETTE.length];

  const THEME_KEY = "wiki-graph-theme";
  const themeMQ = window.matchMedia ? window.matchMedia("(prefers-color-scheme: light)") : null;
  let labelColor = "#ffffff";

  /* ---- 数据加载（file:// 下给出明确提示） ---- */
  async function loadGraphData() {
    if (location.protocol === "file:") {
      const err = new Error("file protocol");
      err.fileBlocked = true;
      throw err;
    }
    const candidates = ["../knowledge-graph.json", "/knowledge-graph.json"];
    let lastErr = null;
    for (const url of candidates) {
      try {
        const r = await fetch(url);
        if (r.ok) return await r.json();
        lastErr = new Error("HTTP " + r.status);
      } catch (e) { lastErr = e; }
    }
    throw lastErr;
  }

  loadGraphData().then(data => {
    const groups = data.groups || [];
    const rawNodes = data.nodes || [];

    /* ---- 节点：Graphify 样式（按度数定大小，黄金角螺旋散布） ---- */
    const degOf = rawNodes.map(n => n.degree || 0);
    const maxDeg = Math.max(1, ...degOf);
    /* 按度数升序插入：vis 逐节点绘制，度数高的枢纽最后画 → 标签浮在叶子之上 */
    const drawOrder = rawNodes.map((_, i) => i).sort((a, b) => degOf[a] - degOf[b]);
    const nodesDS = new vis.DataSet(drawOrder.map(i => {
      const n = rawNodes[i];
      const deg = degOf[i];
      const color = colorOf(n.g);
      return {
        id: n.id,
        /* 长标题截断，避免标记横穿整个节点簇；完整名在悬停提示与右侧面板中 */
        label: String(n.title).length > 30 ? String(n.title).slice(0, 29) + "…" : String(n.title),
        color: { background: color, border: color,
                 highlight: { background: "#ffffff", border: color } },
        size: Math.round((9 + 26 * Math.sqrt(deg / maxDeg)) * 10) / 10,
        font: { size: 0, color: labelColor, strokeWidth: 0 },
        fullTitle: n.title,
        title: n.title + "\n" + (groups[n.g] || "") + " · " + deg + " 条关联",
        community: n.g,
        group_name: groups[n.g] || "",
        url: n.url,
        path: n.path,
        degree: deg,
        /* 黄金角螺旋初始位置（graphify #3699 同款），避免物理引擎奇点 */
        x: 30 * Math.sqrt(i) * Math.cos(i * 2.4),
        y: 30 * Math.sqrt(i) * Math.sin(i * 2.4),
      };
    }));

    /* 边长度按两端最大度数自适应：超级 hub（如 223 篇的分类节点）用短边，
       否则 240 条均匀长边会把整张图撑成巨大星爆、其余内容被压成一点。 */
    const edgesDS = new vis.DataSet((data.links || []).map(([a, b], i) => {
      const m = Math.max(degOf[a], degOf[b]);
      const len = Math.max(32, Math.min(160, 165 / Math.sqrt(1 + m / 8)));
      return {
        id: i, from: rawNodes[a].id, to: rawNodes[b].id, length: Math.round(len),
        color: { color: "#77818e", opacity: m >= 40 ? 0.12 : 0.27, highlight: "#8db4ff", hover: "#8db4ff" },
      };
    }));

    const container = document.getElementById("graph");
    const network = new vis.Network(container, { nodes: nodesDS, edges: edgesDS }, {
      physics: {
        enabled: true,
        solver: "forceAtlas2Based",
        forceAtlas2Based: {
          gravitationalConstant: -55,
          centralGravity: 0.008,
          springLength: 130,
          springConstant: 0.07,
          damping: 0.45,
          avoidOverlap: 0.6,
        },
        stabilization: { enabled: true, iterations: 600, updateInterval: 25, fit: true },
        minVelocity: 0.9,
      },
      interaction: {
        hover: true,
        tooltipDelay: 100,
        hideEdgesOnDrag: true,
        navigationButtons: false,
        keyboard: false,
      },
      nodes: { shape: "dot", borderWidth: 1.5 },
      edges: { smooth: { type: "continuous", roundness: 0.2 }, selectionWidth: 3 },
    });

    window.__net = network; /* 供调试/自动化检查（无副作用） */

    let showAllLabels = false;
    const graphToolbar = document.getElementById("graph-toolbar");
    const labelsButton = graphToolbar.querySelector('[data-graph-action="labels"]');
    const sidebarButton = graphToolbar.querySelector('[data-graph-action="sidebar"]');
    const isMobile = () => window.matchMedia("(max-width: 760px)").matches;

    function setSidebarOpen(open) {
      const mobile = isMobile();
      document.body.classList.toggle("sidebar-open", mobile && open);
      document.body.classList.toggle("sidebar-collapsed", !mobile && !open);
      sidebarButton.setAttribute("aria-expanded", String(open));
      sidebarButton.title = open ? "隐藏详情面板" : "显示详情面板";
      sidebarButton.setAttribute("aria-label", sidebarButton.title);
      network.redraw();
    }
    function updateLabelsButton() {
      labelsButton.setAttribute("aria-pressed", String(showAllLabels));
      labelsButton.title = showAllLabels ? "按缩放自动显示标签" : "显示全部标签";
      labelsButton.setAttribute("aria-label", labelsButton.title);
    }
    graphToolbar.addEventListener("click", event => {
      const button = event.target.closest("[data-graph-action]");
      if (!button) return;
      const action = button.dataset.graphAction;
      if (action === "zoom-in" || action === "zoom-out") {
        const factor = action === "zoom-in" ? 1.25 : 0.8;
        network.moveTo({
          position: network.getViewPosition(),
          scale: Math.max(0.08, Math.min(4, network.getScale() * factor)),
          animation: { duration: 160, easingFunction: "easeInOutQuad" },
        });
      } else if (action === "fit") {
        network.fit({ animation: { duration: 220, easingFunction: "easeInOutQuad" } });
      } else if (action === "labels") {
        showAllLabels = !showAllLabels;
        updateLabelsButton();
        network.redraw();
      } else if (action === "sidebar") {
        const open = isMobile()
          ? !document.body.classList.contains("sidebar-open")
          : document.body.classList.contains("sidebar-collapsed");
        setSidebarOpen(open);
      }
    });
    document.getElementById("sidebar-close").addEventListener("click", () => setSidebarOpen(false));
    document.getElementById("sidebar-scrim").addEventListener("click", () => setSidebarOpen(false));
    if (isMobile()) setSidebarOpen(false);
    window.addEventListener("resize", () => {
      if (isMobile()) {
        document.body.classList.remove("sidebar-collapsed");
        sidebarButton.setAttribute("aria-expanded", String(document.body.classList.contains("sidebar-open")));
      } else {
        document.body.classList.remove("sidebar-open");
        document.body.classList.remove("sidebar-collapsed");
        sidebarButton.setAttribute("aria-expanded", "true");
      }
      network.redraw();
    });

    /* ---- 自绘标签层 ----
       vis 逐节点绘制且顺序不可控，hub 的标签会被周围叶子节点盖住；
       这里关掉内置标签（font.size=0），在 afterDrawing 里用画布坐标重绘，
       标签永远浮在最上层，且屏幕字号天然恒定。 */
    let labelColor2 = "#ffffff";
    let labelBgRgba = "rgba(23, 25, 29, .92)";
    /* 度数分布是断崖式的（1:59 / 2:314 / 3+:45 / 24+:10），按可见密度分档 */
    function tierDeg(scale) {
      if (showAllLabels) return 1;
      if (scale < 0.45) return 24;
      if (scale < 1.9) return 3;
      return 1;
    }
    function roundRectPath(ctx, x, y, w, h, r) {
      ctx.beginPath();
      if (ctx.roundRect) { ctx.roundRect(x, y, w, h, r); return; }
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }
    function drawLabels(ctx) {
      const scale = network.getScale();
      const degMin = tierDeg(scale);
      const px = scale >= 1.9 ? 10 : 11;
      const W = container.clientWidth, H = container.clientHeight;

      const ids = [], idxs = [];
      for (let i = 0; i < rawNodes.length; i++) {
        const node = nodesDS.get(rawNodes[i].id);
        if (degOf[i] >= degMin && node && !node.hidden) { ids.push(rawNodes[i].id); idxs.push(i); }
      }
      if (!ids.length) return;
      const posMap = network.getPositions(ids);

      ctx.save();
      /* afterDrawing 时 ctx 仍带着 vis 的相机变换（scale+translate），
         必须重置为设备像素比，否则 canvasToDOM 得到的坐标会被二次缩放 */
      const cv = ctx.canvas;
      const dpr = cv.clientWidth ? cv.width / cv.clientWidth : 1;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `400 ${px}px "PingFang SC", "Microsoft YaHei", "Segoe UI", system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (let k = 0; k < ids.length; k++) {
        const pos = posMap[ids[k]];
        if (!pos) continue;
        const p = network.canvasToDOM(pos);
        if (p.x < -120 || p.x > W + 120 || p.y < -40 || p.y > H + 40) continue;
        const node = nodesDS.get(ids[k]);
        const text = node.label;
        const r = (node.size || 8) * scale;
        const y = p.y + r + px * 0.75;
        const tw = ctx.measureText(text).width;
        const padX = 4, padY = 2.5;
        ctx.fillStyle = labelBgRgba;
        roundRectPath(ctx, p.x - tw / 2 - padX, y - px / 2 - padY, tw + padX * 2, px + padY * 2, 3);
        ctx.fill();
        ctx.fillStyle = labelColor2;
        ctx.fillText(text, p.x, y);
      }
      ctx.restore();
    }
    network.on("afterDrawing", ctx => { try { drawLabels(ctx); } catch (e) {} });

    let settled = false;
    function settle() {
      if (settled) return;
      settled = true;
      network.setOptions({ physics: { enabled: false } });
      network.fit({ animation: false });
    }
    network.once("stabilized", settle);
    /* 兜底：物理迟迟不收敛时（超大 hub 常见）强制收敛并回到全图视野 */
    setTimeout(settle, 7000);

    /* ---- 主题切换（浅色/深色/跟随系统，持久化） ---- */
    function themePref() {
      let p = null;
      try { p = localStorage.getItem(THEME_KEY); } catch (e) {}
      return (p === "light" || p === "dark" || p === "system") ? p : "system";
    }
    function applyTheme(pref) {
      const t = pref === "light" || (pref === "system" && themeMQ && themeMQ.matches) ? "light" : "dark";
      const root = document.documentElement;
      if (!root) return;
      root.setAttribute("data-theme", t);
      document.querySelectorAll("[data-theme-choice]").forEach(b => {
        b.setAttribute("aria-pressed", String(b.dataset.themeChoice === (pref || "system")));
      });
      const c = getComputedStyle(root).getPropertyValue("--node-label").trim();
      if (c) labelColor2 = c;
      const labelBg = getComputedStyle(root).getPropertyValue("--node-label-bg").trim();
      if (labelBg) labelBgRgba = labelBg;
      network.redraw(); /* 自绘标签层随主题重绘 */
    }
    document.querySelectorAll("[data-theme-choice]").forEach(b => {
      b.addEventListener("click", () => {
        const pref = b.dataset.themeChoice;
        try { localStorage.setItem(THEME_KEY, pref); } catch (e) {}
        applyTheme(pref);
      });
    });
    if (themeMQ) {
      const onSchemeChange = () => { if (themePref() === "system") applyTheme("system"); };
      if (themeMQ.addEventListener) themeMQ.addEventListener("change", onSchemeChange);
      else if (themeMQ.addListener) themeMQ.addListener(onSchemeChange);
    }
    applyTheme(themePref());

    /* ---- 节点信息面板 ---- */
    function esc(s) {
      return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
        .replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
    }
    function groupLabel(name) {
      const fixed = {
        "1000-questions": "1000 问总览",
        about: "关于",
        cs: "计算机科学",
        "dev-guide": "开发指南",
        ppt: "演示文稿",
        read: "阅读",
        types: "知识体系",
        "user-guide": "用户手册",
        "首页与指南": "首页与指南",
      };
      if (fixed[name]) return fixed[name];
      const parts = name.split("/");
      const leaf = parts[parts.length - 1].replace(/-/g, " ");
      if (name.startsWith("types/autosar/")) return "AUTOSAR · " + leaf.toUpperCase();
      if (name.startsWith("types/")) return "专题 · " + leaf;
      if (name.startsWith("1000-questions/")) return "1000 问 · " + leaf;
      return leaf;
    }
    function showInfo(nodeId) {
      const n = nodesDS.get(nodeId);
      if (!n) return;
      const neighborIds = network.getConnectedNodes(nodeId);
      const neighborItems = neighborIds.map(nid => {
        const nb = nodesDS.get(nid);
        const color = nb ? nb.color.background : "#555";
        return `<span class="neighbor-link" style="border-left-color:${esc(color)}" data-nid="${esc(nid)}">${esc(nb ? (nb.fullTitle || nb.label) : nid)}</span>`;
      }).join("");
      let html = `<div class="field"><b>${esc(n.fullTitle || n.label)}</b></div>`;
      html += `<div class="field">分组：${esc(groupLabel(n.group_name || "-"))}</div>`;
      html += `<div class="field">路径：${esc(n.path || "-")}</div>`;
      html += `<div class="field">关联：${n.degree} 篇</div>`;
      if (n.url) html += `<a class="open-link" href="${esc(n.url)}">打开文章 →</a>`;
      if (neighborIds.length) {
        html += `<div class="field" style="margin-top:8px;color:var(--text-2);font-size:11px">关联文章（${neighborIds.length}）</div><div id="neighbors-list">${neighborItems}</div>`;
      }
      document.getElementById("info-content").innerHTML = html;
    }
    function focusNode(nodeId) {
      network.focus(nodeId, { scale: 1.4, animation: true });
      network.selectNodes([nodeId]);
      showInfo(nodeId);
      if (isMobile()) setSidebarOpen(true);
    }
    document.addEventListener("click", e => {
      const el = e.target.closest(".neighbor-link");
      if (el && el.dataset.nid !== undefined) focusNode(el.dataset.nid);
    });

    let hoveredNodeId = null;
    network.on("hoverNode", p => { hoveredNodeId = p.node; container.style.cursor = "pointer"; });
    network.on("blurNode", () => { hoveredNodeId = null; container.style.cursor = "default"; });
    network.on("click", params => {
      if (params.nodes.length > 0) {
        showInfo(params.nodes[0]);
        if (isMobile()) setSidebarOpen(true);
      }
      else if (hoveredNodeId === null) {
        document.getElementById("info-content").innerHTML = '<span class="empty">点击节点查看详情</span>';
      }
    });
    /* 双击节点直接打开文章 */
    network.on("doubleClick", params => {
      if (params.nodes.length > 0) {
        const n = nodesDS.get(params.nodes[0]);
        if (n && n.url) window.location.href = n.url;
      }
    });

    /* ---- 搜索 ---- */
    const searchInput = document.getElementById("search");
    const searchResults = document.getElementById("search-results");
    document.addEventListener("keydown", event => {
      const key = event.key.toLowerCase();
      if ((event.ctrlKey || event.metaKey) && key === "k") {
        event.preventDefault();
        if (isMobile()) setSidebarOpen(true);
        searchInput.focus();
        return;
      }
      if (event.target.matches("input, textarea, [contenteditable='true']")) return;
      if (key === "0") network.fit({ animation: { duration: 180, easingFunction: "easeInOutQuad" } });
      else if (key === "+" || key === "=") graphToolbar.querySelector('[data-graph-action="zoom-in"]').click();
      else if (key === "-") graphToolbar.querySelector('[data-graph-action="zoom-out"]').click();
      else if (key === "escape") {
        searchResults.style.display = "none";
        network.unselectAll();
        if (isMobile()) setSidebarOpen(false);
      }
    });
    searchInput.addEventListener("input", () => {
      const q = searchInput.value.toLowerCase().trim();
      searchResults.innerHTML = "";
      if (!q) { searchResults.style.display = "none"; return; }
      /* 相关性排序：整词匹配 > 标题开头 > 词边界 > 词中子串（如 sta-rte-d 命中 RTE） */
      const scored = [];
      rawNodes.forEach(n => {
        const t = String(n.title).toLowerCase();
        const i = t.indexOf(q);
        if (i < 0) return;
        let s;
        if (t === q) s = 100;
        else if (i === 0) s = 70;
        else if (/[\s\-_/(（\[【·:：`"'「]/.test(t.charAt(i - 1))) s = 45;
        else s = 8;
        s -= Math.min(15, t.length / 30);         /* 同档内短标题优先 */
        scored.push({ n, s });
      });
      const matches = scored.sort((a, b) => b.s - a.s).slice(0, 20).map(o => o.n);
      if (!matches.length) { searchResults.style.display = "none"; return; }
      searchResults.style.display = "block";
      matches.forEach(n => {
        const el = document.createElement("div");
        el.className = "search-item";
        el.textContent = n.title;
        el.style.borderLeft = `3px solid ${colorOf(n.g)}`;
        el.style.paddingLeft = "8px";
        el.onclick = () => {
          focusNode(n.id);
          searchResults.style.display = "none";
          searchInput.value = "";
        };
        searchResults.appendChild(el);
      });
    });
    document.addEventListener("click", e => {
      if (!searchResults.contains(e.target) && e.target !== searchInput)
        searchResults.style.display = "none";
    });

    /* ---- 分组筛选（图例复选框） ---- */
    const counts = new Map();
    rawNodes.forEach(n => counts.set(n.g, (counts.get(n.g) || 0) + 1));
    const LEGEND = groups.map((label, cid) => ({ cid, label, color: colorOf(cid), count: counts.get(cid) || 0 }));
    const hiddenGroups = new Set();
    const selectAllCb = document.getElementById("select-all-cb");

    window.toggleAllGroups = function toggleAllGroups(hide) {
      document.querySelectorAll(".legend-item").forEach(item => {
        hide ? item.classList.add("dimmed") : item.classList.remove("dimmed");
      });
      document.querySelectorAll(".legend-cb").forEach(cb => { cb.checked = !hide; });
      LEGEND.forEach(c => {
        if (hide) hiddenGroups.add(c.cid); else hiddenGroups.delete(c.cid);
      });
      const updates = rawNodes.map(n => ({ id: n.id, hidden: hide }));
      nodesDS.update(updates);
      updateSelectAllState();
    };
    function updateSelectAllState() {
      const total = LEGEND.length;
      const hidden = hiddenGroups.size;
      selectAllCb.checked = hidden === 0;
      selectAllCb.indeterminate = hidden > 0 && hidden < total;
    }
    const legendEl = document.getElementById("legend");
    const groupFilter = document.getElementById("group-filter");
    groupFilter.addEventListener("input", () => {
      const query = groupFilter.value.trim().toLowerCase();
      document.querySelectorAll(".legend-item").forEach(item => {
        item.hidden = query.length > 0 && !item.dataset.search.includes(query);
      });
    });
    selectAllCb.addEventListener("change", () => window.toggleAllGroups(!selectAllCb.checked));
    LEGEND.forEach(c => {
      const item = document.createElement("div");
      item.className = "legend-item";
      const label = groupLabel(c.label);
      item.dataset.search = (c.label + " " + label).toLowerCase();
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.className = "legend-cb";
      cb.checked = true;
      cb.title = c.count + " 篇";
      cb.addEventListener("change", e => {
        e.stopPropagation();
        if (cb.checked) {
          hiddenGroups.delete(c.cid);
          item.classList.remove("dimmed");
        } else {
          hiddenGroups.add(c.cid);
          item.classList.add("dimmed");
        }
        const updates = rawNodes.filter(n => n.community === c.cid).map(n => ({ id: n.id, hidden: !cb.checked }));
        nodesDS.update(updates);
        updateSelectAllState();
      });
      item.innerHTML = `<div class="legend-dot" style="background:${c.color}"></div>` +
        `<span class="legend-label" title="${esc(c.label)}">${esc(label)}</span>` +
        `<span class="legend-count">${c.count}</span>`;
      item.prepend(cb);
      item.onclick = e => {
        if (e.target === cb) return;
        cb.checked = !cb.checked;
        cb.dispatchEvent(new Event("change"));
      };
      legendEl.appendChild(item);
    });

    /* ---- 统计 ---- */
    document.getElementById("stats").textContent =
      `${rawNodes.length} 篇文档 · ${(data.links || []).length} 条关联 · ${groups.length} 个分组`;
    document.getElementById("graph-summary").textContent =
      `${rawNodes.length} 篇笔记 · ${(data.links || []).length} 条站内关联`;
  }).catch(err => {
    const el = document.getElementById("stats");
    if (!el) return;
    if (err && err.fileBlocked) {
      el.innerHTML = '本地 file:// 打开无法加载数据<br><span style="font-size:.72rem">请运行 <code>mkdocs serve</code> 或使用线上站点</span>';
    } else {
      el.textContent = "图谱数据加载失败" + (err && err.message ? "（" + err.message + "）" : "");
    }
  });
})();

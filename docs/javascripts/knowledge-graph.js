(() => {
  "use strict";
  /* 知识图谱 — 沉浸式全屏页（完整对齐 read.pmthinking.com/graph 的布局与交互）
     整页深色 100dvh · HUD 悬浮（标题+统计+分组筛选 chips）· 底部操作提示胶囊
     布局：每个分组围成一个圆心，成员按黄金角散布；力导向模拟带距离截断 */
  const canvas = document.getElementById("kg-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const stage = canvas.parentElement;
  const stats = document.getElementById("kg-stats");
  const chipbar = document.getElementById("kg-chipbar");
  const tooltip = document.getElementById("kg-tooltip");

  /* 暖黑舞台上的低饱和配色（与参考站同族） */
  const PALETTE = ["#8e6fd8", "#aae2f0", "#d9a851", "#c76f5a", "#66a68d", "#b585ad", "#8d96e0", "#c9b06a", "#5fa3b8", "#c98a7a", "#8fae6f", "#b56a6a", "#9a8fae", "#7fb8a8"];
  const BG = "#14171e";
  const CREAM = "rgba(231, 233, 242, ";
  const colorOf = g => PALETTE[g % PALETTE.length];

  const state = {
    nodes: [], links: [], groups: [],
    scale: 1, panX: 0, panY: 0,
    width: 0, height: 0,
    drag: null, hover: null, hoverGroup: -1, activeGroup: -1, query: "",
    showLabels: true, alpha: 1, frame: 0,
  };
  let raf = 0;
  const DPR = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    const rect = stage.getBoundingClientRect();
    state.width = Math.max(300, rect.width);
    state.height = Math.max(360, rect.height);
    canvas.width = state.width * DPR; canvas.height = state.height * DPR;
    canvas.style.width = state.width + "px"; canvas.style.height = state.height + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  /* ---- 初始布局：各分组围成椭圆，成员在组中心附近按黄金角散布 ---- */
  function seed() {
    const R = Math.max(state.width, 900) * .42;
    const centers = state.groups.map((_, gi) => {
      const a = (gi / state.groups.length) * Math.PI * 2 - Math.PI / 2;
      return { x: Math.cos(a) * R, y: Math.sin(a) * R * .72 };
    });
    const perGroup = new Map();
    state.nodes.forEach((n, i) => {
      const k = perGroup.get(n.g) || 0;
      perGroup.set(n.g, k + 1);
      const a = (i * 2.399963) % (Math.PI * 2);
      const r = 26 + (k % 55) * 2.2;
      n.x = centers[n.g].x + Math.cos(a) * r;
      n.y = centers[n.g].y + Math.sin(a) * r;
      n.vx = 0; n.vy = 0; n.fixed = false;
      n.r = 3 + Math.sqrt(n.degree || 0) * 1.6;
      n.c = centers[n.g];
    });
  }

  /* ---- 力导向模拟（带距离截断） ---- */
  function tick() {
    const alpha = state.alpha;
    const nodes = state.nodes;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        let dx = a.x - b.x, dy = a.y - b.y;
        let d2 = dx * dx + dy * dy;
        if (d2 > 32000) continue;
        if (d2 < 1) { d2 = 1; dx = 1; }
        const f = (900 * alpha) / d2;
        const fx = dx * f, fy = dy * f;
        a.vx += fx; a.vy += fy; b.vx -= fx; b.vy -= fy;
      }
    }
    for (const [a, b] of state.links) {
      const dx = b.x - a.x, dy = b.y - a.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const f = ((dist - 74) / dist) * .03 * alpha;
      const fx = dx * f, fy = dy * f;
      a.vx += fx; a.vy += fy; b.vx -= fx; b.vy -= fy;
    }
    for (const n of nodes) {
      n.vx += (n.c.x - n.x) * .012 * alpha + (0 - n.x) * .002 * alpha;
      n.vy += (n.c.y - n.y) * .012 * alpha + (0 - n.y) * .002 * alpha;
      if (n.fixed) { n.vx = 0; n.vy = 0; continue; }
      n.vx *= .82; n.vy *= .82;
      n.x += n.vx; n.y += n.vy;
    }
    state.alpha *= .985;
    if (++state.frame === 150) fitView();   // 布局稳定后自动取景
  }

  /* ---- 视图变换与取景 ---- */
  function fitView() {
    if (!state.nodes.length) return;
    let minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
    for (const n of state.nodes) {
      minX = Math.min(minX, n.x); maxX = Math.max(maxX, n.x);
      minY = Math.min(minY, n.y); maxY = Math.max(maxY, n.y);
    }
    const k = Math.min(state.width / (maxX - minX + 170), state.height / (maxY - minY + 170), 1.7);
    state.scale = k;
    state.panX = state.width / 2 - ((minX + maxX) / 2) * k;
    state.panY = state.height / 2 - ((minY + maxY) / 2) * k;
  }
  const screenOf = n => ({ x: n.x * state.scale + state.panX, y: n.y * state.scale + state.panY });
  const worldOf = p => ({ x: (p.x - state.panX) / state.scale, y: (p.y - state.panY) / state.scale });
  const pointOf = e => { const r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };

  /* ---- 高亮判定 ---- */
  const neighborsOf = n => {
    if (!n._nb) {
      n._nb = new Set();
      for (const [a, b] of state.links) {
        if (a === n) n._nb.add(b);
        else if (b === n) n._nb.add(a);
      }
    }
    return n._nb;
  };
  function dim(n) {
    if (state.activeGroup >= 0 && n.g !== state.activeGroup) return true;
    if (state.hoverGroup >= 0 && n.g !== state.hoverGroup) return true;
    if (state.hover && n !== state.hover && !neighborsOf(state.hover).has(n)) return true;
    return false;
  }
  const labelSet = new Set();
  function computeLabels() {
    labelSet.clear();
    const sorted = [...state.nodes].sort((a, b) => b.degree - a.degree);
    for (const n of sorted) { if (n.degree >= 3 && labelSet.size < 26) labelSet.add(n); }
  }

  /* ---- 绘制 ---- */
  function draw() {
    ctx.clearRect(0, 0, state.width, state.height);
    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, state.width, state.height);

    for (const [a, b] of state.links) {
      const dimmed = dim(a) || dim(b);
      const hot = state.hover && (a === state.hover || b === state.hover);
      const p = screenOf(a), q = screenOf(b);
      ctx.strokeStyle = hot ? CREAM + ".5)" : CREAM + (dimmed ? ".04)" : ".13)");
      ctx.lineWidth = hot ? 1.2 : .8;
      ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
    }
    for (const n of state.nodes) {
      const p = screenOf(n), r = n.r * (state.hover === n ? 1.45 : 1) * state.scale ** .35;
      ctx.globalAlpha = dim(n) ? .18 : 1;
      ctx.beginPath(); ctx.arc(p.x, p.y, Math.max(1.5, r), 0, Math.PI * 2);
      ctx.fillStyle = colorOf(n.g); ctx.fill();
      if (state.hover === n) {
        ctx.strokeStyle = "rgba(231,233,242,.9)"; ctx.lineWidth = 1.6; ctx.stroke();
      }
      const showLabel = labelSet.has(n) || state.hover === n;
      if (showLabel && !dim(n)) {
        const hovered = state.hover === n;
        ctx.font = (hovered ? "600 12px" : "11px") + " -apple-system, 'PingFang SC', 'Microsoft YaHei', sans-serif";
        ctx.textAlign = "left"; ctx.textBaseline = "middle";
        ctx.fillStyle = CREAM + (hovered ? ".95)" : ".62)");
        const label = n.title.length > 22 ? n.title.slice(0, 21) + "…" : n.title;
        ctx.fillText(label, p.x + r + 5, p.y);
      }
      ctx.globalAlpha = 1;
    }
  }

  function frame() {
    tick();
    draw();
    raf = requestAnimationFrame(frame);
  }

  /* ---- 交互 ---- */
  function hitTest(p) {
    for (let i = state.nodes.length - 1; i >= 0; i--) {
      const n = state.nodes[i], s = screenOf(n);
      const radius = n.r * state.scale + 6;
      if ((s.x - p.x) ** 2 + (s.y - p.y) ** 2 <= radius ** 2) return n;
    }
    return null;
  }
  function showTip(n, p) {
    if (!n) { tooltip.hidden = true; return; }
    tooltip.hidden = false;
    tooltip.innerHTML = "";
    const t = document.createElement("strong"); t.textContent = n.title;
    const meta = document.createElement("span");
    meta.textContent = state.groups[n.g] + " · " + n.degree + " 条关联";
    tooltip.append(t, meta);
    tooltip.style.left = Math.min(p.x + 14, state.width - 240) + "px";
    tooltip.style.top = Math.max(8, p.y + 14) + "px";
  }

  canvas.addEventListener("pointerdown", e => {
    const p = pointOf(e), n = hitTest(p);
    state.drag = { start: p, last: p, node: n, moved: false };
    if (n) { n.fixed = true; canvas.classList.add("dragging"); }
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener("pointermove", e => {
    const p = pointOf(e);
    if (state.drag) {
      const d = state.drag, dx = p.x - d.last.x, dy = p.y - d.last.y;
      if (Math.hypot(p.x - d.start.x, p.y - d.start.y) > 4) d.moved = true;
      if (d.node) { const w = worldOf(p); d.node.x = w.x; d.node.y = w.y; d.node.vx = d.node.vy = 0; }
      else { state.panX += dx; state.panY += dy; }
      d.last = p; return;
    }
    state.hover = hitTest(p);
    canvas.style.cursor = state.hover ? "pointer" : "";
    showTip(state.hover, p);
  });
  canvas.addEventListener("pointerup", e => {
    if (!state.drag) return;
    const d = state.drag, p = pointOf(e);
    state.drag = null; canvas.classList.remove("dragging");
    if (d.node) {
      d.node.fixed = false;
      if (!d.moved) window.location.href = d.node.url;
    }
    showTip(null, p);
  });
  canvas.addEventListener("pointercancel", () => { state.drag = null; canvas.classList.remove("dragging"); });
  canvas.addEventListener("wheel", e => {
    e.preventDefault();
    const p = pointOf(e), before = worldOf(p);
    state.scale = Math.max(.25, Math.min(4, state.scale * (e.deltaY < 0 ? 1.1 : .9)));
    state.panX = p.x - before.x * state.scale;
    state.panY = p.y - before.y * state.scale;
  }, { passive: false });
  canvas.addEventListener("dblclick", () => { state.alpha = Math.max(state.alpha, .35); fitView(); });

  window.addEventListener("resize", () => { resize(); fitView(); });

  /* ---- 分组筛选 chips（点击选中/再点取消，参考站 chipbar 交互） ---- */
  function buildChips() {
    chipbar.innerHTML = "";
    const counts = new Map();
    for (const n of state.nodes) counts.set(n.g, (counts.get(n.g) || 0) + 1);
    state.groups.forEach((name, gi) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip";
      chip.innerHTML = '<i class="swatch" style="background:' + colorOf(gi) + '"></i>' + name + " · " + (counts.get(gi) || 0);
      chip.setAttribute("aria-pressed", "false");
      chip.addEventListener("click", () => {
        state.activeGroup = state.activeGroup === gi ? -1 : gi;
        chipbar.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", "false"));
        if (state.activeGroup >= 0) chip.setAttribute("aria-pressed", "true");
      });
      chip.addEventListener("mouseenter", () => { state.hoverGroup = gi; });
      chip.addEventListener("mouseleave", () => { state.hoverGroup = -1; });
      chipbar.appendChild(chip);
    });
  }

  /* ---- 加载数据 ----
     file:// 直接打开时浏览器会拦截 fetch，直接给出明确提示 */
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
  loadGraphData()
    .then(data => {
      state.groups = data.groups || [];
      state.nodes = data.nodes.map(n => ({ ...n, g: n.g ?? 0, _nb: null }));
      const byIndex = state.nodes;
      state.links = (data.links || []).map(pair => {
        const a = byIndex[pair[0]], b = byIndex[pair[1]];
        return a && b ? [a, b] : null;
      }).filter(Boolean);
      stats.textContent = state.nodes.length + " 篇 · " + state.links.length + " 条关联";
      buildChips();
      resize();
      seed();
      computeLabels();
      fitView();
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(frame);
    })
    .catch(err => {
      if (err && err.fileBlocked) {
        stats.innerHTML = '本地 file:// 打开无法加载数据（浏览器安全限制）<br>' +
          '<span style="font-size:.72rem">请运行 <code>mkdocs serve</code> 后访问 /graph/，或使用线上站点</span>';
      } else {
        stats.textContent = "图谱数据加载失败" + (err && err.message ? "（" + err.message + "）" : "");
      }
    });
})();

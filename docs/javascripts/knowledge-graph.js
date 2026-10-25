(() => {
  "use strict";
  const canvas = document.getElementById("kg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const wrap = canvas.parentElement;
  const stats = document.getElementById("kg-stats");
  const search = document.getElementById("kg-search");
  const reset = document.getElementById("kg-reset");
  const labelsButton = document.getElementById("kg-labels");
  const tooltip = document.getElementById("kg-tooltip");
  const state = { scale: 1, panX: 0, panY: 0, showLabels: true, nodes: [], links: [], width: 0, height: 0, drag: null, hover: null, query: "" };
  let animationFrame = 0;
  const palette = ["#8e4ec6", "#3182ce", "#0d9488", "#d97706", "#db2777", "#64748b", "#4f46e5"];
  const groupColor = group => palette[Math.abs(hash(group)) % palette.length];
  function hash(s) { let h = 0; for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0; return h; }
  function resize() {
    const rect = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    state.width = Math.max(300, rect.width); state.height = Math.max(440, Math.min(760, window.innerHeight * .72));
    canvas.width = state.width * dpr; canvas.height = state.height * dpr;
    canvas.style.width = state.width + "px"; canvas.style.height = state.height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); draw();
  }
  function screen(node) { return { x: node.x * state.scale + state.panX, y: node.y * state.scale + state.panY }; }
  function world(point) { return { x: (point.x - state.panX) / state.scale, y: (point.y - state.panY) / state.scale }; }
  function point(e) { const r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
  function hitTest(p) {
    for (let i = state.nodes.length - 1; i >= 0; i--) {
      const n = state.nodes[i], s = screen(n), radius = nodeRadius(n) * state.scale + 5;
      if ((s.x - p.x) ** 2 + (s.y - p.y) ** 2 <= radius ** 2) return n;
    }
    return null;
  }
  function nodeRadius(n) { return Math.max(4, Math.min(13, 4 + Math.sqrt(n.degree || 0) * 1.4)); }
  function visible(n) { return !state.query || (n.title + " " + n.path + " " + n.group).toLowerCase().includes(state.query); }
  function draw() {
    if (!ctx || !state.width) return;
    ctx.clearRect(0, 0, state.width, state.height);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--md-default-bg-color").trim() || "#fff";
    ctx.fillRect(0, 0, state.width, state.height);
    const active = state.nodes.filter(visible);
    const activeIds = new Set(active.map(n => n.id));
    ctx.lineWidth = .8;
    for (const edge of state.links) {
      const a = edge.sourceNode, b = edge.targetNode;
      if (!a || !b || (!activeIds.has(a.id) && !activeIds.has(b.id))) continue;
      const p = screen(a), q = screen(b);
      ctx.strokeStyle = activeIds.has(a.id) && activeIds.has(b.id) ? "rgba(142,78,198,.22)" : "rgba(150,150,160,.07)";
      ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
    }
    for (const n of state.nodes) {
      if (!visible(n)) continue;
      const p = screen(n), r = nodeRadius(n) * (state.hover === n ? 1.45 : 1);
      ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fillStyle = groupColor(n.group); ctx.fill();
      if (state.hover === n) { ctx.strokeStyle = "#fff"; ctx.lineWidth = 2; ctx.stroke(); }
      if (state.showLabels || state.hover === n) {
        ctx.font = (state.hover === n ? "600 12px" : "11px") + " system-ui, sans-serif";
        ctx.textAlign = "left"; ctx.textBaseline = "middle";
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--md-typeset-color").trim() || "#333";
        const label = n.title.length > 24 ? n.title.slice(0, 23) + "…" : n.title;
        ctx.fillText(label, p.x + r + 4, p.y);
      }
    }
  }
  function tick() {
    const nodes = state.nodes;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      if (a.fixed) continue;
      let fx = 0, fy = 0;
      for (let j = 0; j < nodes.length; j++) {
        if (i === j) continue;
        const b = nodes[j], dx = a.x - b.x, dy = a.y - b.y;
        const d2 = Math.max(80, dx * dx + dy * dy), force = 1600 / d2;
        fx += dx * force; fy += dy * force;
      }
      for (const edge of a.edges) {
        const b = edge.other, dx = b.x - a.x, dy = b.y - a.y, d = Math.max(1, Math.hypot(dx, dy));
        const force = (d - 90) * .0018;
        fx += dx * force; fy += dy * force;
      }
      const cx = state.width / 2, cy = state.height / 2;
      fx += (cx - a.x) * .0004; fy += (cy - a.y) * .0004;
      a.vx = (a.vx + fx) * .86; a.vy = (a.vy + fy) * .86;
      a.x += Math.max(-4, Math.min(4, a.vx)); a.y += Math.max(-4, Math.min(4, a.vy));
    }
    draw();
    animationFrame = requestAnimationFrame(tick);
  }
  function showTooltip(n, p) {
    if (!n) { tooltip.hidden = true; return; }
    tooltip.hidden = false; tooltip.textContent = n.title + " · " + n.path + " · " + n.degree + " 条关联";
    tooltip.style.left = Math.min(p.x + 14, state.width - 260) + "px";
    tooltip.style.top = Math.max(8, p.y + 14) + "px";
  }
  fetch("../knowledge-graph.json").then(r => { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); }).then(data => {
    state.nodes = data.nodes.map((n, i) => ({ ...n, x: state.width / 2 + Math.cos(i * 2.399) * (30 + Math.sqrt(i) * 9), y: state.height / 2 + Math.sin(i * 2.399) * (30 + Math.sqrt(i) * 9), vx: 0, vy: 0, edges: [] }));
    const byId = new Map(state.nodes.map(n => [n.id, n]));
    state.links = data.links.map(e => ({ sourceNode: byId.get(e.source), targetNode: byId.get(e.target) })).filter(e => e.sourceNode && e.targetNode);
    for (const e of state.links) { e.sourceNode.edges.push({ other: e.targetNode }); e.targetNode.edges.push({ other: e.sourceNode }); }
    stats.textContent = state.nodes.length + " 篇文档 · " + state.links.length + " 条关联";
    resize();
    cancelAnimationFrame(animationFrame); animationFrame = requestAnimationFrame(tick);
  }).catch(() => { stats.textContent = "图谱数据加载失败，请刷新页面后重试。"; });
  canvas.addEventListener("pointerdown", e => {
    const p = point(e), n = hitTest(p);
    state.drag = { start: p, last: p, node: n, moved: false };
    if (n) { n.fixed = true; canvas.style.cursor = "grabbing"; }
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener("pointermove", e => {
    const p = point(e);
    if (state.drag) {
      const d = state.drag, dx = p.x - d.last.x, dy = p.y - d.last.y;
      if (Math.hypot(p.x - d.start.x, p.y - d.start.y) > 4) d.moved = true;
      if (d.node) { const w = world(p); d.node.x = w.x; d.node.y = w.y; d.node.vx = d.node.vy = 0; }
      else { state.panX += dx; state.panY += dy; }
      d.last = p; draw(); return;
    }
    state.hover = hitTest(p); canvas.style.cursor = state.hover ? "pointer" : "grab";
    showTooltip(state.hover, p); draw();
  });
  canvas.addEventListener("pointerup", e => {
    if (!state.drag) return;
    const d = state.drag, p = point(e); state.drag = null; canvas.style.cursor = "grab";
    if (d.node) { d.node.fixed = false; if (!d.moved) window.location.href = d.node.url; }
    showTooltip(null, p); draw();
  });
  canvas.addEventListener("pointercancel", () => { state.drag = null; });
  canvas.addEventListener("wheel", e => {
    e.preventDefault(); const p = point(e), before = world(p);
    state.scale = Math.max(.3, Math.min(3.5, state.scale * (e.deltaY < 0 ? 1.1 : .9)));
    state.panX = p.x - before.x * state.scale; state.panY = p.y - before.y * state.scale; draw();
  }, { passive: false });
  search.addEventListener("input", () => { state.query = search.value.trim().toLowerCase(); draw(); });
  reset.addEventListener("click", () => { state.scale = 1; state.panX = state.panY = 0; draw(); });
  labelsButton.addEventListener("click", () => { state.showLabels = !state.showLabels; labelsButton.textContent = state.showLabels ? "隐藏标签" : "显示标签"; labelsButton.setAttribute("aria-pressed", String(state.showLabels)); draw(); });
  window.addEventListener("resize", resize);
})();
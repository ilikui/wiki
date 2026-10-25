(() => {
  "use strict";
  /* 站点增强脚本（v3）
     侧栏已改用 Material 原生导航（配合 navigation.tabs），
     这里只保留首页标记与轻量交互。 */

  // 首页：隐藏「编辑此页」入口，并标记 body 便于首页专属样式
  const path = location.pathname;
  if (path === "/" || path.endsWith("/index.html") || path.endsWith("/wiki/")) {
    document.body.classList.add("wiki-home");
  }

  // 外链在新标签页打开（站内锚点/相对链接不动）
  function markExternalLinks() {
    if (!document.querySelector(".md-typeset")) return;
    document.querySelectorAll(".md-typeset a[href^='http']").forEach(link => {
      if (link.hostname && link.hostname !== location.hostname) {
        link.target = "_blank";
        link.rel = "noopener";
      }
    });
  }

  // 顶部一级导航：滚动时给 tabs 一点层次感（仅在离开顶部时加阴影）
  function initTabsScroll() {
    const tabs = document.querySelector(".md-tabs");
    const header = document.querySelector(".md-header");
    if (!tabs || !header) return;
    let ticking = false;
    const update = () => {
      const scrolled = window.scrollY > 4;
      header.classList.toggle("wk-scrolled", scrolled);
      tabs.classList.toggle("wk-scrolled", scrolled);
      ticking = false;
    };
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }, { passive: true });
    update();
  }

  // 板块下只有一个可见条目（如首页）时，左侧栏是空的，隐藏它让内容居中
  function markEmptySidebar() {
    if (window.innerWidth < 1220) { document.body.classList.remove("wk-no-sidebar"); return; }
    const primary = document.querySelector(".md-nav--primary");
    if (!primary) return;
    const links = Array.from(primary.querySelectorAll("a.md-nav__link, label.md-nav__link"))
      .filter(el => el.offsetParent !== null);
    document.body.classList.toggle("wk-no-sidebar", links.length <= 1);
  }

  // 面包屑：Material 的 navigation.path 在 lifted 模式下不输出，这里按 URL 生成
  const LABELS = {
    types: "知识体系", autosar: "AUTOSAR", specs: "规范笔记库",
    cs: "计算机科学", read: "阅读", about: "关于",
    "dev-guide": "开发指南", "user-guide": "用户手册", ppt: "知识体系",
    graph: "知识图谱",
  };
  function buildCrumbs() {
    const inner = document.querySelector(".md-content__inner");
    const h1 = inner && inner.querySelector("h1");
    if (!inner || !h1 || inner.querySelector(".wk-crumbs")) return;
    if (document.body.classList.contains("wiki-home")) return;
    // Material 自带的 .md-path 会贴在 tabs 下方被遮挡，统一用脚本生成的位置（标题上方）

    const segs = location.pathname.split("/").filter(Boolean).map(decodeURIComponent);
    if (segs.length < 2) return;

    const trail = [];
    segs.slice(0, -1).forEach((seg, i) => {
      if (seg === "specs" || seg === "index.html") return;
      const href = "/" + segs.slice(0, i + 1).join("/") + "/";
      trail.push({ text: LABELS[seg] || seg, href });
    });
    if (!trail.length) return;

    const nav = document.createElement("nav");
    nav.className = "wk-crumbs";
    nav.setAttribute("aria-label", "面包屑");
    trail.forEach((item, i) => {
      if (i) {
        const sep = document.createElement("span");
        sep.className = "wk-crumbs__sep";
        sep.textContent = "/";
        sep.setAttribute("aria-hidden", "true");
        nav.append(sep);
      }
      const a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.text;
      nav.append(a);
    });
    h1.parentNode.insertBefore(nav, h1);
  }

  function init() {
    markExternalLinks();
    initTabsScroll();
    markEmptySidebar();
    buildCrumbs();
    document.querySelectorAll("[data-feedback]").forEach(button => {
      button.title = "为页面提供反馈";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }

  // Material 的即时导航（instant loading）会在切页后重新渲染内容
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(() => {
      markExternalLinks();
      initTabsScroll();
      markEmptySidebar();
      buildCrumbs();
    });
  }

  document.addEventListener("click", event => {
    const button = event.target.closest("[data-feedback]");
    if (!button) return;
    const group = button.closest(".wiki-feedback");
    if (!group) return;
    group.querySelectorAll("[data-feedback]").forEach(item => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    const result = group.querySelector(".wiki-feedback-result");
    if (result) result.textContent = "感谢反馈！你的选择已在本页面记录。";
  });
})();

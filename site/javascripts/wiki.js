(() => {
  "use strict";
  /* 站点增强脚本（v3）
     侧栏已改用 Material 原生导航（配合 navigation.tabs），
     这里只保留首页标记与轻量交互。 */

  // 首页标记需在即时导航切页后同步更新
  function markHomePage() {
    const path = location.pathname;
    const isHome = path === "/" || path.endsWith("/index.html") || path.endsWith("/wiki/");
    document.body.classList.toggle("wiki-home", isHome);
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
    if (!header.dataset.wkScrollBound) {
      window.addEventListener("scroll", () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(update);
      }, { passive: true });
      header.dataset.wkScrollBound = "true";
    }
    update();
  }

  // 板块下只有一个可见条目（如首页）时，左侧栏是空的，隐藏它让内容居中
  function markEmptySidebar() {
    document.body.classList.remove("wk-no-sidebar");
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

  // 移动端：Material 会把当前页的所有祖先层级面板叠在同一位面，
  // 从深层页面打开抽屉时「返回」会退到空白面板。打开时统一折叠到根级，
  // 让抽屉始终从一级菜单开始，逐层进入、逐层返回。
  function collapseNavTree() {
    document.querySelectorAll(".md-sidebar--primary .md-nav__toggle")
      .forEach(t => { if (t.checked) t.checked = false; });
  }
  function initDrawerReset() {
    document.addEventListener("change", event => {
      const drawer = event.target;
      if (!drawer || drawer.id !== "__drawer" || !drawer.checked) return;
      if (window.innerWidth > 1219) return;
      collapseNavTree();
    }, true);
  }

  function init() {
    markHomePage();
    markExternalLinks();
    initTabsScroll();
    markEmptySidebar();
    buildCrumbs();
    document.querySelectorAll("[data-feedback]").forEach(button => {
      button.title = "为页面提供反馈";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => { init(); initDrawerReset(); }, { once: true });
  } else {
    init();
    initDrawerReset();
  }

  // Material 的即时导航（instant loading）会在切页后重新渲染内容
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(() => {
      markHomePage();
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

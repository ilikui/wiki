(() => {
  "use strict";
  // 每个条目专属图标（Lucide 风格描边 SVG），激活时随文字变紫
  const ic = paths => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths + '</svg>';
  const ICONS = {
    home:    ic('<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.7V21h14V9.7"/><path d="M10 21v-6h4v6"/>'),
    rocket:  ic('<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>'),
    compass: ic('<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5 13 13l-4.5 2.5L11 11z"/>'),
    book:    ic('<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>'),
    car:     ic('<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>'),
    cpu:     ic('<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>'),
    radio:   ic('<circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14"/>'),
    code:    ic('<path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/>'),
    chart:   ic('<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 14l4-4 3 3 5-6"/>'),
    layers:  ic('<path d="M12 2 2 7l10 5 10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>'),
    monitor: ic('<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>'),
    globe:   ic('<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>'),
    database:ic('<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>'),
    sparkles:ic('<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z"/>'),
    nodes:   ic('<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="m8.2 10.9 7.6-4.5M8.2 13.1l7.6 4.5"/>'),
    sigma:   ic('<path d="M18 5H7l6 7-6 7h11"/>'),
    activity:ic('<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>'),
    zap:     ic('<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>'),
    bookopen:ic('<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>'),
    library: ic('<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>'),
    clock:   ic('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>'),
    smile:   ic('<circle cx="12" cy="12" r="9"/><path d="M8.5 14a4.5 4.5 0 0 0 7 0"/><path d="M9 9h.01M15 9h.01"/>'),
    wrench:  ic('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'),
    braces:  ic('<path d="M8 3H7a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1"/><path d="M16 3h1a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-1"/>'),
    github:  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>'
  };
  const ICON_DOC = ic('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>');
  const ICON_CHEVRON = ic('<path d="M9 6l6 6-6 6"/>');

  const groups = [
    ["开始使用", [
      ["home","欢迎","/"],
      ["rocket","快速开始","/getting-started/"],
      ["compass","知识概念","/types/"],
      ["book","知识管理方法","/about/about/"]
    ]],
    ["汽车电子与嵌入式", [
      ["car","AUTOSAR 1000 问","/types/autosar/"],
      ["cpu","嵌入式 1000 问","/types/embedded/"],
      ["radio","车载通信与诊断","/types/autosar/"],
      ["code","C 语言 1000 问","/types/c-language/"],
      ["chart","MATLAB / Simulink","/types/matlab/"]
    ]],
    ["计算机科学", [
      ["code","数据结构与算法","/cs/数据结构与算法/"],
      ["layers","软件工程","/cs/软件工程/"],
      ["monitor","操作系统","/cs/操作系统/"],
      ["globe","计算机网络","/cs/计算机网络/"],
      ["database","数据库系统","/cs/数据库系统/"],
      ["sparkles","人工智能","/cs/人工智能/"],
      ["nodes","机器学习","/cs/机器学习/"]
    ]],
    ["数学与科学", [
      ["sigma","数学基础","/cs/数学基础/"],
      ["activity","概率论与数理统计","/types/probability/"],
      ["zap","电气工程","/types/electrical/"]
    ]],
    ["阅读与思考", [
      ["bookopen","阅读记录","/read/Reading/"],
      ["library","书籍索引","/read/Books/"],
      ["clock","历史专题","/types/history/"],
      ["smile","儿童教育","/types/child-education/"]
    ]],
    ["开发与贡献", [
      ["wrench","开发指南","/dev-guide/"],
      ["braces","API 文档","/dev-guide/api/"],
      ["github","GitHub 仓库","https://github.com/ilikui/wiki"]
    ]]
  ];

  const STORE_KEY = "wiki-sidebar-collapsed";
  const cleanPath = value => {
    try { value = decodeURIComponent(value); } catch (_) {}
    value = (value || "/").split("?")[0].split("#")[0];
    while (value.length > 1 && value.endsWith("/")) value = value.slice(0, -1);
    return value || "/";
  };
  const readCollapsed = () => {
    try {
      const raw = JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
      return new Set(Array.isArray(raw) ? raw.filter(i => typeof i === "number") : []);
    } catch (_) { return new Set(); }
  };
  const writeCollapsed = set => {
    try { localStorage.setItem(STORE_KEY, JSON.stringify([...set])); } catch (_) {}
  };

  function render() {
    if (!document.body || document.querySelector(".wiki-sidebar")) return;
    const currentPath = cleanPath(location.pathname);
    const collapsed = readCollapsed();

    const aside = document.createElement("aside");
    aside.className = "wiki-sidebar";
    aside.setAttribute("aria-label", "知识库目录");
    const scroll = document.createElement("div");
    scroll.className = "wiki-sidebar-scroll";

    groups.forEach(([title, links], groupIndex) => {
      const section = document.createElement("section");
      section.className = "wiki-sidebar-group";

      // GitBook 风格分组标题：箭头居右，默认隐藏、悬停显现
      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "wiki-sidebar-toggle";
      toggle.setAttribute("aria-expanded", "true");
      const label = document.createElement("span");
      label.className = "wiki-sidebar-toggle-label";
      label.textContent = title;
      const chevron = document.createElement("span");
      chevron.className = "wiki-sidebar-chevron";
      chevron.innerHTML = ICON_CHEVRON;
      chevron.setAttribute("aria-hidden", "true");
      toggle.append(label, chevron);

      const list = document.createElement("ul");
      let containsActive = false;
      links.forEach(([icon, text, href]) => {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = href;
        if (!href.startsWith("http") && cleanPath(href) === currentPath) {
          link.className = "is-active";
          link.setAttribute("aria-current", "page");
          containsActive = true;
        }
        const iconEl = document.createElement("span");
        iconEl.className = "wiki-sidebar-icon";
        iconEl.innerHTML = ICONS[icon] || ICON_DOC;
        const labelEl = document.createElement("span");
        labelEl.textContent = text;
        link.append(iconEl, labelEl);
        if (href.startsWith("http")) {
          const external = document.createElement("span");
          external.className = "wiki-external";
          external.textContent = "↗";
          link.append(external);
        }
        item.append(link);
        list.append(item);
      });

      // 恢复记忆的折叠状态；含当前页的分组强制展开
      if (collapsed.has(groupIndex) && !containsActive) {
        section.classList.add("is-collapsed");
        toggle.setAttribute("aria-expanded", "false");
      }
      toggle.addEventListener("click", () => {
        const isCollapsed = section.classList.toggle("is-collapsed");
        toggle.setAttribute("aria-expanded", String(!isCollapsed));
        if (isCollapsed) collapsed.add(groupIndex); else collapsed.delete(groupIndex);
        writeCollapsed(collapsed);
      });

      section.append(toggle, list);
      scroll.append(section);
    });

    aside.append(scroll);
    document.body.append(aside);
    document.body.classList.add("wiki-portal-layout");
  }

  function init() {
    render();
    document.querySelectorAll("[data-feedback]").forEach(button => { button.title = "为页面提供反馈"; });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
  document.addEventListener("click", event => {
    const button = event.target.closest("[data-feedback]");
    if (!button) return;
    const group = button.closest(".wiki-feedback");
    if (!group) return;
    group.querySelectorAll("[data-feedback]").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    const result = group.querySelector(".wiki-feedback-result");
    if (result) result.textContent = "感谢反馈！你的选择已在本页面记录。";
  });
})();

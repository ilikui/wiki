(() => {
  "use strict";
  const groups = [
    ["开始使用", [["▣","欢迎","/"],["ϟ","快速开始","/getting-started/"],["♧","知识概念","/1000-questions/"],["♧","知识管理方法","/about/about/"]]],
    ["汽车电子与嵌入式", [["⌘","AUTOSAR 1000 问","/1000-questions/autosar/"],["◈","嵌入式 1000 问","/1000-questions/embedded/"],["⌁","车载通信与诊断","/1000-questions/autosar/"],["▤","C 语言 1000 问","/1000-questions/c-language/"],["⌬","MATLAB / Simulink","/1000-questions/matlab/"]]],
    ["计算机科学", [["⌘","数据结构与算法","/cs/数据结构与算法/"],["▧","软件工程","/cs/软件工程/"],["◉","操作系统","/cs/操作系统/"],["⌁","计算机网络","/cs/计算机网络/"],["▦","数据库系统","/cs/数据库系统/"],["✳","人工智能","/cs/人工智能/"],["◌","机器学习","/cs/机器学习/"]]],
    ["数学与科学", [["∑","数学基础","/cs/数学基础/"],["∿","概率论与数理统计","/1000-questions/probability/"],["⌁","电气工程","/1000-questions/electrical/"]]],
    ["阅读与思考", [["▤","阅读记录","/read/Reading/"],["▣","书籍索引","/read/Books/"],["◈","历史专题","/1000-questions/history/"],["♧","儿童教育","/1000-questions/child-education/"]]],
    ["开发与贡献", [["⌘","开发指南","/dev-guide/"],["▧","API 文档","/dev-guide/api/"],["↗","GitHub 仓库","https://github.com/ilikui/wiki"]]]
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

      // 可折叠分组标题（GitBook 风格 chevron）
      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "wiki-sidebar-toggle";
      toggle.setAttribute("aria-expanded", "true");
      const label = document.createElement("span");
      label.textContent = title;
      const chevron = document.createElement("span");
      chevron.className = "wiki-sidebar-chevron";
      chevron.textContent = "▾";
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
        iconEl.textContent = icon;
        iconEl.setAttribute("aria-hidden", "true");
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

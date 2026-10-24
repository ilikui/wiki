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
  const cleanPath = value => {
    try { value = decodeURIComponent(value); } catch (_) {}
    value = (value || "/").split("?")[0].split("#")[0];
    while (value.length > 1 && value.endsWith("/")) value = value.slice(0, -1);
    return value || "/";
  };
  function render() {
    if (!document.body || document.querySelector(".wiki-sidebar")) return;
    const currentPath = cleanPath(location.pathname);
    const aside = document.createElement("aside");
    aside.className = "wiki-sidebar";
    aside.setAttribute("aria-label", "知识库目录");
    const scroll = document.createElement("div");
    scroll.className = "wiki-sidebar-scroll";
    groups.forEach(([title, links]) => {
      const section = document.createElement("section");
      section.className = "wiki-sidebar-group";
      const heading = document.createElement("h2");
      heading.textContent = title;
      const list = document.createElement("ul");
      links.forEach(([icon, label, href]) => {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = href;
        if (!href.startsWith("http") && cleanPath(href) === currentPath) {
          link.className = "is-active";
          link.setAttribute("aria-current", "page");
        }
        const iconEl = document.createElement("span");
        iconEl.className = "wiki-sidebar-icon";
        iconEl.textContent = icon;
        const labelEl = document.createElement("span");
        labelEl.textContent = label;
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
      section.append(heading, list);
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

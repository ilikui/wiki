(() => {
  const items = [
    { section: "开始使用", links: [
      ["▣","欢迎","/"], ["ϟ","快速开始","/getting-started/"], ["♧","知识概念","/1000-questions/"], ["♧","知识管理方法","/about/about/"]
    ]},
    { section: "汽车电子与嵌入式", links: [
      ["⌘","AUTOSAR 1000 问","/1000-questions/autosar/"], ["◈","嵌入式 1000 问","/1000-questions/embedded/"], ["⌁","车载通信与诊断","/1000-questions/autosar/"], ["▤","C 语言 1000 问","/1000-questions/c-language/"], ["⌬","MATLAB / Simulink","/1000-questions/matlab/"]
    ]},
    { section: "计算机科学", links: [
      ["⌘","数据结构与算法","/cs/数据结构与算法/"], ["▧","软件工程","/cs/软件工程/"], ["◉","操作系统","/cs/操作系统/"], ["⌁","计算机网络","/cs/计算机网络/"], ["▦","数据库系统","/cs/数据库系统/"], ["✳","人工智能","/cs/人工智能/"], ["◌","机器学习","/cs/机器学习/"]
    ]},
    { section: "数学与科学", links: [
      ["∑","数学基础","/cs/数学基础/"], ["∿","概率论与数理统计","/1000-questions/probability/"], ["⌁","电气工程","/1000-questions/electrical/"]
    ]},
    { section: "阅读与思考", links: [
      ["▤","阅读记录","/read/Reading/"], ["▣","书籍索引","/read/Books/"], ["◈","历史专题","/1000-questions/history/"], ["♧","儿童教育","/1000-questions/child-education/"]
    ]},
    { section: "开发与贡献", links: [
      ["⌘","开发指南","/dev-guide/"], ["▧","API 文档","/dev-guide/api/"], ["↗","GitHub 仓库","https://github.com/ilikui/wiki"]
    ]}
  ];
  function render() {
    if (document.querySelector(".wiki-sidebar")) return;
    const aside = document.createElement("aside");
    aside.className = "wiki-sidebar";
    aside.setAttribute("aria-label", "知识库目录");
    aside.innerHTML = '<div class="wiki-sidebar-scroll">' + items.map(group =>
      '<section class="wiki-sidebar-group"><h2>' + group.section + '</h2><ul>' +
      group.links.map(([icon,label,url]) => '<li><a href="' + url + '"' + (location.pathname.replace(/\\/$/,"") === url.replace(/\\/$/,"") ? ' class="is-active" aria-current="page"' : '') + '><span class="wiki-sidebar-icon">' + icon + '</span><span>' + label + '</span>' + (url.startsWith("http") ? '<span class="wiki-external">↗</span>' : '') + '</a></li>').join("") +
      '</ul></section>').join("") + '</div>';
    document.body.appendChild(aside);
    document.body.classList.add("wiki-portal-layout");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-feedback]").forEach(button => button.setAttribute("title", "为页面提供反馈"));
  });
  document.addEventListener("click", function (event) {
    const button = event.target.closest("[data-feedback]");
    if (!button) return;
    const group = button.closest(".wiki-feedback");
    if (!group) return;
    group.querySelectorAll("[data-feedback]").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
    const result = group.querySelector(".wiki-feedback-result");
    if (result) result.textContent = "感谢反馈！你的选择已在本页面记录。";
  });
})();
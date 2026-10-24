document.addEventListener("click", function (event) {
  const button = event.target.closest("[data-feedback]");
  if (!button) return;
  const group = button.closest(".wiki-feedback");
  if (!group) return;
  group.querySelectorAll("[data-feedback]").forEach((item) => {
    item.setAttribute("aria-pressed", String(item === button));
  });
  const result = group.querySelector(".wiki-feedback-result");
  if (result) result.textContent = "感谢反馈！你的选择已在本页面记录。";
});

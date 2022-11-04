const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeAactiveClasses();
    panel.classList.add("active");
  });
});

function removeAactiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

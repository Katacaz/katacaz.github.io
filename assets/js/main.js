// Tabs (sidebar → panel)
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("is-active"));
    panels.forEach(p => p.classList.remove("is-active"));

    tab.classList.add("is-active");
    const panel = document.getElementById(tab.dataset.panel);
    if (panel) panel.classList.add("is-active");
  });
});

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

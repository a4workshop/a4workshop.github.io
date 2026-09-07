document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-navigation");
  const programGroup = document.querySelector(".nav-group");
  const programToggle = document.querySelector(".program-toggle");

  if (toggle && navigation) {
    toggle.addEventListener("click", () => {
      const open = navigation.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  if (!programGroup || !programToggle) return;

  const setProgramMenu = (open) => {
    programGroup.classList.toggle("is-open", open);
    programToggle.setAttribute("aria-expanded", String(open));
  };

  programToggle.addEventListener("click", () => setProgramMenu(!programGroup.classList.contains("is-open")));
  document.addEventListener("click", (event) => { if (!programGroup.contains(event.target)) setProgramMenu(false); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") { setProgramMenu(false); programToggle.focus(); } });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-navigation");

  if (toggle && navigation) {
    toggle.addEventListener("click", () => {
      const open = navigation.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }
});

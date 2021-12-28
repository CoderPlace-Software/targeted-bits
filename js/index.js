const init = () => {
  const mobileMenuOpenEl = document.getElementById("mobile-menu-open");
  const mobileMenuCloseEl = document.getElementById("mobile-menu-close");
  const mobileMenuEl = document.getElementById("mobile-menu");
  const mobileMenuClass = "mobile-menu__opened";

  const toggleMenu = () => mobileMenuEl.classList.toggle(mobileMenuClass);
  mobileMenuOpenEl.addEventListener("click", toggleMenu);
  mobileMenuCloseEl.addEventListener("click", toggleMenu);
};

init();

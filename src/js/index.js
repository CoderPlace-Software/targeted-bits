const initMobileMenu = () => {
  const mobileMenuOpenEl = document.getElementById("mobile-menu-open");
  const mobileMenuCloseEl = document.getElementById("mobile-menu-close");
  const mobileMenuEl = document.getElementById("mobile-menu");
  const mobileMenuClass = "mobile-menu__opened";

  const toggleMenu = () => mobileMenuEl.classList.toggle(mobileMenuClass);
  mobileMenuOpenEl.addEventListener("click", toggleMenu);
  mobileMenuCloseEl.addEventListener("click", toggleMenu);
};

const initHeader = () => {
  const headerEl = document.getElementById("header");
  const headerSmallClass = "header__small";

  const handleHeaderClass = () => {
    const currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 50) {
      headerEl.classList.add(headerSmallClass);
    } else {
      headerEl.classList.remove(headerSmallClass);
    }
  };

  window.addEventListener("scroll", handleHeaderClass, false);
};

const initBackToTop = () => {
  const backToTopEl = document.getElementById("back-to-top");
  const backToTopClass = "visible";

  const handleBackToTopClass = () => {
    const currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 1400) {
      backToTopEl.classList.add(backToTopClass);
    } else {
      backToTopEl.classList.remove(backToTopClass);
    }
  };

  window.addEventListener("scroll", handleBackToTopClass, false);
};

initMobileMenu();
initHeader();
initBackToTop();

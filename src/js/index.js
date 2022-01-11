const initMobileMenu = () => {
  const mobileMenuOpenEl = document.getElementById("mobile-menu-open");
  const mobileMenuCloseEl = document.getElementById("mobile-menu-close");
  const mobileMenuEl = document.getElementById("mobile-menu");
  const mobileMenuClass = "mobile-menu__opened";

  const toggleMenu = () => mobileMenuEl.classList.toggle(mobileMenuClass);
  mobileMenuOpenEl.addEventListener("click", toggleMenu);
  mobileMenuCloseEl.addEventListener("click", toggleMenu);
};

const initMobileSubmenu = () => {
  const mobileSubmenuClickEl = document.querySelectorAll(".right-arrow > a");
  const toggleSubmenu = (e) => {
    const target = e.target;
    const test = target.nextElementSibling;
    const test1 = target.closest(".right-arrow");
   // const mobileSubmenuOpenEl = test.querySelectorAll(".mobile-submenu__item");
    if (test.classList.contains("active")) {
      test.classList.remove("active");
      test1.classList.remove("down-arrow");
    } else {
      console.log(
        document
          .getElementById("mobile-menu")
          .getElementsByClassName("down-arrow")[0]
          .classList.remove("down-arrow")
      );

      test.classList.add("active");
      test1.classList.add("down-arrow");
    }
  };
  for (let i = 0; i < mobileSubmenuClickEl.length; i++) {
    mobileSubmenuClickEl[i].addEventListener("click", (e) => toggleSubmenu(e));
  }
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
initMobileSubmenu();
initHeader();
initBackToTop();

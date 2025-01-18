// source/scripts/menu.js
var menuButton = document.querySelector(".burger");
var menu = document.querySelector(".nav");
var menuItemButtons = document.querySelectorAll(".nav__link");
var header = document.querySelector(".header__wrapper");
var submenus = document.querySelectorAll(".nav__item");
menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("burger--active");
  menu.classList.toggle("nav--active");
  if (menu.classList.contains("nav--active") && window.innerWidth <= 1024) {
    header.style.overflow = "visible";
    document.body.classList.add("body-menu-open");
  } else if (!menu.classList.contains("nav--active") && window.innerWidth <= 1024) {
    header.style.overflow = "hidden";
    document.body.classList.remove("body-menu-open");
  } else if (window.innerWidth >= 1025) {
    header.style.overflow = "visible";
  }
});
var onClickMenuItem = (event) => {
  for (const submenu of submenus) {
    submenu.classList.remove("nav__item--current");
  }
  const parent = event.target.parentNode;
  parent.classList.toggle("nav__item--current");
};
var onMouseoutMenuItem = (event) => {
  const parent = event.target.parentNode;
  parent.classList.remove("nav__item--current");
};
for (const menuItemButton of menuItemButtons) {
  menuItemButton.addEventListener("click", (evt) => {
    removeEventListener("mouseout", onMouseoutMenuItem);
    onClickMenuItem(evt);
  });
}
for (const submenu of submenus) {
  document.addEventListener("keydown", (evt) => {
    if (evt.keyCode === 27) {
      submenu.classList.remove("nav__item--current");
    }
  });
}
window.addEventListener("mouseup", (event) => {
  if (!menu.contains(event.target) && !document.querySelector(".header__wrapper").contains(event.target)) {
    menu.classList.remove("nav--active");
    header.style.overflow = "hidden";
    document.body.classList.remove("body-menu-open");
    menuButton.classList.remove("burger--active");
  }
});
//# sourceMappingURL=menu.js.map

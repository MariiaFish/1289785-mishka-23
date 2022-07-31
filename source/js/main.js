const navigationMenu = document.querySelector(".main-nav");
const navToggelButton = navigationMenu.querySelector(".main-nav__toggle");
const navList = navigationMenu.querySelector(".main-nav__list");

const OPENED_MENU_CLASS_NAME = "main-nav--opened";
const CLOSED_MENU_CLASS_NAME = "main-nav--closed";
const OPENED_MENU_LIST_CLASS_NAME = "main-nav__list--opened";

// Функция для смены открытого-класса-меню на закрытый-класс-меню
const switchMenuIconCondition = (menuElement) => {
  menuElement.classList.toggle(OPENED_MENU_CLASS_NAME);
  menuElement.classList.toggle(CLOSED_MENU_CLASS_NAME);
};

// Функция для открытия/закрытия меню-навигации в мобильной версии
const addHandlerToNavButton = (navButton, menuElement, menuListElement) => {
  navButton.addEventListener("click", () => {
    // Сменить иконку
    switchMenuIconCondition(menuElement);
    // Сменить состояние самого меню
    menuListElement.classList.toggle(OPENED_MENU_LIST_CLASS_NAME);
  });
};

addHandlerToNavButton(navToggelButton, navigationMenu, navList);

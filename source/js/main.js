const OPENED_MENU_CLASS_NAME = "main-nav--opened";
const CLOSED_MENU_CLASS_NAME = "main-nav--closed";
const OPENED_MENU_LIST_CLASS_NAME = "main-nav__list--opened";
const MODAL_CLOSED_CLASS_ELEMEN = "modal--off";
const ADD_TO_CAR_CLASS_NAME = "button--add-to-car";
const ESC_KEY = "Escape";
const MODAL_OVERLAY_CLASS_NAME = "modal__overlay";

const bodyElement = document.querySelector("body");
const navigationMenu = bodyElement.querySelector(".main-nav");
const navToggelButton = navigationMenu.querySelector(".main-nav__toggle");
const navList = navigationMenu.querySelector(".main-nav__list");
const carButtons = document.querySelectorAll(".button--add-to-car");
// const modalElement = bodyElement.querySelector(".modal");

// Находим шаблон сообщения
const modalMessageTemplate = document.querySelector("#modal").content;
const modalMessage = modalMessageTemplate.querySelector(".modal");

const isEscapeKey = (evt) => evt.key === ESC_KEY;
const isModalOverlay = (evt) =>
  evt.target.classList.contains(MODAL_OVERLAY_CLASS_NAME);
const isAddCarButton = (evt) =>
  evt.target.classList.contains(ADD_TO_CAR_CLASS_NAME);

// Функция для копирования шаблона
const getNewMessage = (template) => {
  const copyMessage = template.cloneNode(true);
  return copyMessage;
};

const newModalMessage = getNewMessage(modalMessage);

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

// Функция для открытия модального окна
const showModalElement = (modalElement) => {
  bodyElement.appendChild(modalElement);
  closeOnEsc(window);
  closeOnClick(window);
};

// Функция для закрытия модального окна
const closeModalMessage = (modalElement) => {
  modalElement.remove();
  window.removeEventListener("keydown", closeModalMessageOnEsc);
  window.removeEventListener("click", closeModalMessageOnClick);
};

// Закрыть модальное окно по нажатию на кнопку ESC
const closeModalMessageOnEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModalMessage(newModalMessage);
  }
};

// Установить листенер
const closeOnEsc = (element) => {
  element.addEventListener("keydown", closeModalMessageOnEsc);
};

// Закрыть модальное окно по клику на любую область экрана
const closeModalMessageOnClick = (evt) => {
  evt.preventDefault();
  if (isModalOverlay(evt)) {
    closeModalMessage(newModalMessage);
  }
};

// Установить листенер
const closeOnClick = (element) => {
  element.addEventListener("click", closeModalMessageOnClick);
};

// Установка листенера на кнопки добавления в корзину
const addHendlerToCarButton = (carButtons, carModalElement) => {
  carButtons.forEach((carButton) => {
    carButton.addEventListener("click", (evt) => {
      if (isAddCarButton(evt)) {
        showModalElement(carModalElement);
      }
    });
  });
};

addHandlerToNavButton(navToggelButton, navigationMenu, navList);
addHendlerToCarButton(carButtons, newModalMessage);

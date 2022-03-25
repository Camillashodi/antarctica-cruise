import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  const navMain = document.querySelector('[data-main-nav]');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const body = document.querySelector('[data-page-body]');
  const navLinks = document.querySelectorAll('[data-main-nav-link]');

  const closeNav = function () {
    if (navMain.classList.contains('is-open')) {
      navMain.classList.remove('is-open');
      if (body) {
        body.style.position = 'static';
      }
      if (navToggle.classList.contains('open-toggle')) {
        navToggle.classList.remove('open-toggle');
      }
    }

    if (navLinks.length !== 0) {
      navLinks.forEach((navLink) => {
        navLink.removeEventListener('click', closeNav);
      });
    }
  };

  if (navMain && navToggle) {
    navMain.classList.remove('is-nojs');
    navToggle.classList.remove('nojs-toggle');

    navToggle.addEventListener('click', function () {
      if (!navMain.classList.contains('is-open')) {
        navMain.classList.add('is-open');
        if (body) {
          body.style.position = 'fixed';
        }
        if (!navToggle.classList.contains('open-toggle')) {
          navToggle.classList.add('open-toggle');
        }
      } else {
        navMain.classList.remove('is-open');
        if (body) {
          body.style.position = 'static';
        }
        if (navToggle.classList.contains('open-toggle')) {
          navToggle.classList.remove('open-toggle');
        }
      }

      if (navLinks.length !== 0) {
        navLinks.forEach((navLink) => {
          navLink.addEventListener('click', closeNav);
        });
      }
    });
  }

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✔️

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

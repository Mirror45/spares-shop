import "./menu.js"

// Accordeon

(function () {
  const footerToggles = document.querySelectorAll('.page-footer__accordeon-container button');
  const pageFooterSections = document.querySelectorAll('.page-footer__sections div');

  footerToggles.forEach(function (footerToggle) {
    footerToggle.addEventListener('click', onToggleClicked);
  });

  function onToggleClicked(e) {
    const section = e.target.closest('.page-footer__accordeon-container').parentElement;
    if (section.classList.contains('page-footer__accordeon--opened')) {
      section.classList.remove('page-footer__accordeon--opened');
    } else {
      pageFooterSections.forEach(function (pageFooterSection) {
        pageFooterSection.classList.remove('page-footer__accordeon--opened');
      });
      section.classList.add('page-footer__accordeon--opened');
    }
  }
})();


// menu

// (function () {
//   const menu = document.querySelector('.menu');
//   const menuToggle = document.querySelector('.page-header__menu-toggle');

//   document.body.classList.remove('no-js');

//   if (menuToggle) {
//     menuToggle.addEventListener('click', function (evt) {
//       if (menu) {
//         evt.currentTarget.classList.toggle('page-header__menu-toggle--active');
//         document.body.classList.toggle('menu-opened');
//       }
//     });
//   }

//   const navList = document.querySelector('.nav__list');

//   if (navList) {
//     navList.addEventListener('click', function (evt) {
//       const curTarget = evt.currentTarget;
//       const target = evt.target;
//       const activeLink = 'nav__link--active';
//       if (target.classList.contains('nav__link')) {
//         curTarget.querySelector('.' + activeLink).classList.remove('nav__link--active');
//         target.classList.add(activeLink);
//       }
//     });
//   }
// })();

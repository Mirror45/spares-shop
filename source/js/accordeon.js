const accordeon = () => {
  const footerToggles = document.querySelectorAll('.page-footer__accordeon-container button');
  const pageFooterSections = document.querySelectorAll('.page-footer__sections div');

  const onToggleClicked = (e) => {
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

  footerToggles.forEach(function (footerToggle) {
    footerToggle.addEventListener('click', onToggleClicked);
  });
}

export { accordeon };

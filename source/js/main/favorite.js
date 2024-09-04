const favorite = () => {
  const favBtns = document.querySelectorAll('.favorite');

  if (favBtns.length) {
    favBtns.forEach((favBtn) => {
      favBtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        evt.target.classList.toggle('favorite--active');
      });
    });
  }
}

export { favorite };

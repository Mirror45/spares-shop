const favorite = () => {
  const favBtns = document.querySelectorAll('.favorite');

  if (favBtns.length) {
    favBtns.forEach(function (favBtn) {
      favBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        evt.target.classList.toggle('favorite--active');
      });
    });
  }
}

export { favorite };

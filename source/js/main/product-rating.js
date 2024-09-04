const productRating = () => {
  const rating = document.querySelector('.product__rating');

  if (rating) {
    rating.addEventListener('click', (evt) => {
      const target = evt.target;
      if (target.classList.contains('product__rating-star')) {
        const active = rating.querySelector('.product__rating-star--active');
        active.classList.remove('product__rating-star--active');
        target.classList.add('product__rating-star--active');
      }
    });
  }
}

export { productRating };

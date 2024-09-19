new Swiper(".swiper--popular", {
  effect: 'slide',
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-slider__button-prev--popular",
    prevEl: ".swiper-slider__button-next--popular",
  },
  pagination: {
    el: ".swiper-slider__pagination--popular",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    606: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1060: {
      slidesPerView: "auto",
      pagination: false,
    }
  }
});

new Swiper(".swiper--suggestion", {
  effect: 'slide',
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-slider__button-prev--suggestion",
    prevEl: ".swiper-slider__button-next--suggestion",
  },
  pagination: {
    el: ".swiper-slider__pagination--suggestion",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    606: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1060: {
      slidesPerView: "auto",
      pagination: false,
    }
  }
});

new Swiper(".swiper--promo", {
  effect: 'slide',
  slidesPerView: "auto",
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".swiper-slider__button-next--promo",
    prevEl: ".swiper-slider__button-prev--promo",
  },
  pagination: {
    el: ".swiper-slider__pagination--promo",
    clickable: true,
  },
});

new Swiper(".swiper--action", {
  effect: 'slide',
  slidesPerView: "auto",
  spaceBetween: 5,
  loop: true,
  pagination: {
    el: ".swiper-slider__pagination--action",
    clickable: true,
  },
  autoplay: {
    delay: 10000,
  },
  breakpoints: {
    769: {
      pagination: false,
    }
  }
});

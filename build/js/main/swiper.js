new Swiper(".swiper--popular",{effect:"slide",slidesPerView:"auto",spaceBetween:30,loop:!0,navigation:{nextEl:".swiper-slider__button-prev--popular",prevEl:".swiper-slider__button-next--popular"},pagination:{el:".swiper-slider__pagination--popular",clickable:!0},autoplay:{delay:5e3},breakpoints:{320:{slidesPerView:1},606:{slidesPerView:2},900:{slidesPerView:3},1060:{slidesPerView:"auto",pagination:!1}}}),new Swiper(".swiper--suggestion",{effect:"slide",slidesPerView:"auto",spaceBetween:30,loop:!0,navigation:{nextEl:".swiper-slider__button-prev--suggestion",prevEl:".swiper-slider__button-next--suggestion"},pagination:{el:".swiper-slider__pagination--suggestion",clickable:!0},autoplay:{delay:5e3},breakpoints:{320:{slidesPerView:1},606:{slidesPerView:2},900:{slidesPerView:3},1060:{slidesPerView:"auto",pagination:!1}}}),new Swiper(".swiper--promo",{effect:"slide",slidesPerView:"auto",spaceBetween:0,loop:!0,navigation:{nextEl:".swiper-slider__button-next--promo",prevEl:".swiper-slider__button-prev--promo"},pagination:{el:".swiper-slider__pagination--promo",clickable:!0}}),new Swiper(".swiper--action",{effect:"slide",slidesPerView:"auto",spaceBetween:5,loop:!0,pagination:{el:".swiper-slider__pagination--action",clickable:!0},autoplay:{delay:1e4},breakpoints:{769:{pagination:!1}}});
const slickSlider = () => {
  if (window.$) {
    const $ = window.$;

    const noticeSlider = $('.notice__slider');
    noticeSlider.slick({
      dots: true,
      arrows: true,
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }]
    });

    const actionSlider = $('.notice__action');
    actionSlider.slick({
      dots: false,
      arrows: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }]
    });

    const waresPopularSlider = $('.wares--popular .wares__list');
    waresPopularSlider.slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: false,
      arrows: true,
      responsive: [{
        breakpoint: 1232,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });

    const waresSuggestionSlider = $('.wares--suggestion .wares__list');
    waresSuggestionSlider.slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      dots: false,
      arrows: true,
      responsive: [{
        breakpoint: 1232,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }
};

export { slickSlider };

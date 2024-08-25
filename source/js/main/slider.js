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
  }
};

export { slickSlider };

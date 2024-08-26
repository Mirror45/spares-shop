const tabs = () => {
  if (window.$) {
    const $ = window.$;
    const $tabs = $('.tabs__link');

    $tabs.click(function (evt) {
      evt.preventDefault();
      const $this = $(evt.target);
      const $targetSelector = $this.attr('href');
      const $target = $($targetSelector);
      const activePanelClass = 'tabs__panel--active';
      const activeTabClass = 'tabs__link--active';


      if ($this.hasClass('info__section-link') && $this.hasClass('tabs__link--active')) {
        $this.closest('.tabs__panel--active').removeClass(activePanelClass);
        $this.removeClass(activeTabClass);
        return;
      }

      $target.closest('.tabs').find('.' + activePanelClass).removeClass(activePanelClass);
      $target.addClass(activePanelClass);
      $this.closest('.tabs').find('.' + activeTabClass).removeClass(activeTabClass);
      $this.addClass(activeTabClass);

    });
  }
};

export { tabs };

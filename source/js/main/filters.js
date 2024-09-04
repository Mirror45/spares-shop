const filter = () => {
  const filterToggle = document.querySelector('.top-filters__sorting-mobile button');
  const backFilters = document.querySelector('.form-models__back');
  const body = document.body;

  if (filterToggle) {
    filterToggle.addEventListener('click', () => {
      if (body) {
        if (body.classList.contains('filter-opened')) {
          body.classList.remove('filter-opened');
        } else {
          body.classList.add('filter-opened');
        }
      }
    });
  }

  if (backFilters) {
    backFilters.addEventListener('click', () => {
      if (body) {
        if (body.classList.contains('filter-opened')) {
          body.classList.remove('filter-opened');
        }
      }
    });
  }

  const minPrice = document.getElementById('min-price-mask');
  const maxPrice = document.getElementById('max-price-mask');
  let previousMinPriceValue;
  let previousMaxPriceValue;

  const parsePrice = (inputValue) => {
    return parseInt(inputValue.replace(/ /g, ''), 10);
  }

  if (minPrice) {
    minPrice.addEventListener('focus', (evt) => {
      previousMinPriceValue = evt.target.value;
    });

    minPrice.addEventListener('blur', (evt) => {
      const newMinPrice = parsePrice(evt.target.value);
      if (newMinPrice < parsePrice(maxPrice.value)) {
        const newX = newMinPrice / (maxPriceValue - minPriceValue) * scale.clientWidth;
        updateMin(newX);
      } else {
        evt.target.value = previousMinPriceValue;
      }
    });
  }

  if (maxPrice) {
    maxPrice.addEventListener('focus', (evt) => {
      previousMaxPriceValue = evt.target.value;
    });
    maxPrice.addEventListener('blur', (evt) => {
      const newMaxPrice = parsePrice(evt.target.value);
      if (newMaxPrice > parsePrice(minPrice.value)) {
        const newX = newMaxPrice / (maxPriceValue - minPriceValue) * scale.clientWidth;
        updateMax(newX);
      } else {
        evt.target.value = previousMaxPriceValue;
      }
    });
  }

  const sliderContainer = document.querySelector('.left-filter__price--fieldset');
  const sliderMin = document.querySelector('.left-filter__range-toggle--min');
  const sliderMax = document.querySelector('.left-filter__range-toggle--max');
  const scale = document.querySelector('.left-filter__scale');
  const sliderBar = document.querySelector('.left-filter__bar');
  const minPriceValue = 0;
  const maxPriceValue = 30000;
  let minMoving = false;
  let maxMoving = false;

  if (sliderMin) {
    sliderMin.addEventListener('mousedown', () => {
      minMoving = true;
    });
  }

  if (sliderMax) {
    sliderMax.addEventListener('mousedown', () => {
      maxMoving = true;
    });
  }

  document.addEventListener('mousemove', (evt) => {
    if (minMoving || maxMoving) {
      const newX = evt.clientX - sliderContainer.offsetLeft;
      const newPrice = Math.floor((maxPriceValue - minPriceValue) * newX / scale.clientWidth);
      if (minMoving && newX >= 0 && newX < sliderMax.offsetLeft) {
        updateMin(newX);
        minPrice.value = newPrice;
      }
      if (maxMoving && newX >= sliderMin.offsetLeft && newX <= scale.clientWidth) {
        updateMax(newX);
        maxPrice.value = newPrice;
      }
    }
  });

  const updateMin = (newX) => {
    sliderMin.style.left = newX + 'px';
    sliderBar.style.marginLeft = sliderMin.style.left;
    sliderBar.style.width = (sliderMax.offsetLeft - newX) + 'px';
  }

  const updateMax = (newX) => {
    sliderMax.style.left = newX + 'px';
    sliderBar.style.width = (newX - sliderMin.offsetLeft) + 'px';
  }

  document.addEventListener('mouseup', (evt) => {
    minMoving = false;
    maxMoving = false;
    if (!evt.target.closest('.custom-select')) {
      closeAllSelects();
    }
  });

  const accordeonCloseButtons = document.querySelectorAll('.left-filter__accordion-close');

  accordeonCloseButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', (evt) => {
      const siblings = evt.target.parentNode.childNodes;
      siblings.forEach((sibling) => {
        if (sibling.classList && sibling.classList.contains('left-filter__accordion-wrapper')) {
          if (sibling.classList.contains('accordion-hidden')) {
            sibling.classList.remove('accordion-hidden');
            closeButton.classList.remove('accordion-close-button');
          } else {
            sibling.classList.add('accordion-hidden');
            closeButton.classList.add('accordion-close-button');
          }
        }
      });
    });
  });

  const resetAll = document.querySelector('.left-filter__reset');
  const checkBoxes = document.querySelectorAll('.left-filter__option>input[type=checkbox]');

  if (resetAll) {
    resetAll.addEventListener('click', () => {
      checkBoxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
      minPrice.value = 2000;
      maxPrice.value = 12000;
      updateMin(18);
      updateMax(108);
    });
  }

  const selectButtons = document.querySelectorAll('.custom-select__title');
  selectButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      const select = evt.target.closest('.custom-select');
      if (select.classList.contains('select-opened')) {
        select.classList.remove('select-opened');
      } else {
        select.classList.add('select-opened');
      }
    });
  });

  const selectOptions = document.querySelectorAll('.custom-select li');
  selectOptions.forEach((option) => {
    option.addEventListener('click', (evt) => {
      const select = evt.target.closest('.custom-select');
      select.classList.remove('select-opened');
      const selectedValue = evt.target.getAttribute('data-value');
      const hidden = document.querySelector('#' + select.id + ' input[type=hidden]');
      hidden.value = selectedValue;

      const button = document.querySelector('#' + select.id + ' .custom-select__title');
      button.innerHTML = selectedValue;

      const lis = document.querySelectorAll('#' + select.id + ' li');
      lis.forEach((li) => {
        li.classList.remove('selected');
      });
      evt.target.classList.add('selected');
    });
  });

  const selects = document.querySelectorAll('.custom-select');

  const closeAllSelects = () => {
    selects.forEach((select) => {
      select.classList.remove('select-opened');
    });
  }

  document.onkeydown = (evt) => {
    evt = evt || window.event;
    if (evt.keyCode === 27) {
      closeAllSelects();
    }
  };

}

export { filter };

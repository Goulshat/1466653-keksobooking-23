const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const adFormFieldsets = document.querySelectorAll('.map__filter, .map__features');
const filters = document.querySelectorAll('.map__filter, .map__features');

const disableForm = (items) => {
  items.forEach((item) => {
    item.disabled = !item.disabled;
  });
};

const formDisableToggle = () => {
  disableForm(adFormFieldsets);
  adForm.classList.toggle('ad-form--disabled');
};

const disableFiltersToggle = () => {
  disableForm(filters);
  mapFilters.classList.toggle('.map__filters--disabled');
};

export {formDisableToggle, disableFiltersToggle};

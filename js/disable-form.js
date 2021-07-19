const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const formFieldsets = document.querySelectorAll('.map__filter, fieldset');


const fieldsetDisable = () => {
  formFieldsets.forEach((item) => {
    item.disabled = !item.disabled;
  });
};

const formDisableToggle = () => {
  fieldsetDisable();
  adForm.classList.toggle('ad-form--disabled');
};

const disableFilters = () => {
  mapFilters.classList.toggle('.map__filters--disabled');
};

export {formDisableToggle, disableFilters};

/*
Форма заполнения информации об объявлении .ad-form содержит класс ad-form--disabled;
Все интерактивные элементы формы .ad-form должны быть заблокированы с помощью атрибута disabled, добавленного на них или на их родительские блоки fieldset;
Форма с фильтрами .map__filters заблокирована так же, как и форма .ad-form — на форму добавлен специальный класс, а на её интерактивные элементы атрибуты disabled;
*/
const adForm = document.querySelector('.ad-form');
const adFormFieldsets = document.querySelectorAll('fieldset, select');
const mapFilters = document.querySelector('.map__filters');

const formsDisabled = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('.map__filters--disabled');
  adFormFieldsets.disabled = true;
};

const formsActive = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('.map__filters--disabled');
  adFormFieldsets.disabled = false;
};

export {formsDisabled, formsActive};

import {setDefaultMap} from './map.js';
import {openSuccessPopup, openErrorPopup} from './popup.js'; // closeSuccessPopup, closeErrorPopup
import {request} from './fetch.js';

const adForm = document.querySelector('.ad-form');
const type = adForm.querySelector('#type');
const price = adForm.querySelector('#price');
const submitButton = adForm.querySelector('.ad-form__submit');
const resetButton = adForm.querySelector('.ad-form__reset');

const priceOfType = {
  'palace': '10000',
  'house': '5000',
  'hotel': '3000',
  'flat': '1000',
  'bungalow': '0',
};

const typeAndPriceHandler = () => {
  price.placeholder = priceOfType[type.value];
  price.min = priceOfType[type.value];
};

type.addEventListener('change', typeAndPriceHandler);

const timeField = adForm.querySelector('.ad-form__element--time');
const timeIn = timeField.querySelector('#timein');
const timeOut = timeField.querySelector('#timeout');

timeField.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

const roomNumber = adForm.querySelector('#room_number');
const roomCapacity = adForm.querySelector('#capacity');
const roomCapacityValues = roomCapacity.querySelectorAll('option');

const guestsNumber = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const roomNumberQuest = () => {
  const roomNumberValue = roomNumber.value;

  roomCapacityValues.forEach((item) => {
    const guestsCapacity = guestsNumber[roomNumberValue];
    const isDisabled = (guestsCapacity.indexOf(item.value) === -1);
    item.selected = (guestsCapacity[guestsCapacity.length - 1] === item.value);
    item.disabled = isDisabled;
    item.hidden = isDisabled;
  });
};

roomNumberQuest();

const roomNumberChangeHandler = () => {
  roomNumberQuest();
};

adForm.addEventListener('change', roomNumberChangeHandler);

submitButton.addEventListener('click', (evt) => {
  if (adForm.checkValidity()) {
    evt.preventDefault();
    request(openSuccessPopup, openErrorPopup, 'POST', new FormData(adForm));
  }
});

const resetForm = () => {
  adForm.reset();
  setDefaultMap();
};

const resetButtonClickHandler = (evt) => {
  evt.preventDefault();
  resetForm();
};

resetButton.addEventListener('click', resetButtonClickHandler);

export {resetForm};

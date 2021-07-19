import {isEscEvent} from './utils.js';
import {resetForm} from './form.js';

const ALERT_SHOW_TIME = 2500;

const body = document.querySelector('body');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
let successPopup;
let errorPopup;

const removeOverlay = () => {
  const overlay = document.querySelector('.popup-overlay');
  if (overlay) {
    overlay.remove();
  }
};

const escPopupHandler = () => {
  if(isEscEvent) {
    removeOverlay();
    document.removeEventListener('keydown', escPopupHandler);
  }
};

const closePopupHandler = () => {
  removeOverlay();
  document.removeEventListener('keydown', escPopupHandler);
};

const openSuccessPopup = () => {
  successPopup = successTemplate.cloneNode(true);
  successPopup.classList.add('popup-overlay');
  body.appendChild(successPopup);
  document.addEventListener('keydown', escPopupHandler);
  successPopup.querySelector('.popup-overlay').addEventListener('click', closePopupHandler);
  resetForm();
};

const openErrorPopup = () => {
  errorPopup = errorTemplate.cloneNode(true);
  errorPopup.classList.add('popup-overlay');
  body.appendChild(errorPopup);
  document.addEventListener('keydown', escPopupHandler);
  errorPopup.querySelector('.popup-overlay').addEventListener('click', closePopupHandler);
  const errorButton = errorPopup.querySelector('.error__button');
  errorButton.addEventListener('click', closePopupHandler);
};

const openServerErrorAlert = () => {
  errorPopup = errorTemplate.cloneNode(true);
  errorPopup.classList.add('popup-overlay');
  const errorMessage = errorPopup.querySelector('.error__message');
  errorMessage.textContent = 'Проблема доступа к серверу';
  body.appendChild(errorPopup);
  document.addEventListener('keydown', escPopupHandler);
  errorPopup.querySelector('.popup-overlay').addEventListener('click', closePopupHandler);
  setTimeout(() => {
    removeOverlay();
  }, ALERT_SHOW_TIME);
};

export {openSuccessPopup, openErrorPopup, openServerErrorAlert};

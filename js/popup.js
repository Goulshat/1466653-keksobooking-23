const ALERT_SHOW_TIME = 3000;

const body = document.querySelector('body');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
let successPopup;
let errorPopup;
// const errorButton = errorPopup.querySelector('.error__button');

const escPopupHandler = (evt) => {
  if(evt.key === 'Escape' || evt.key === 'Esc') {
    successPopup.classList.add('hidden');
    errorPopup.classList.add('hidden');
  }
};

const windowClickHandler = (evt) => {
  evt.preventDefault();
  successPopup.classList.add('hidden');
  errorPopup.classList.add('hidden');
};

const openSuccessPopup = () => {
  successPopup = successTemplate.cloneNode(true);
  body.appendChild(successPopup);
  document.addEventListener('keydown', escPopupHandler());
  window.addEventListener('click', windowClickHandler());
};

const openErrorPopup = () => {
  errorPopup = errorTemplate.cloneNode(true);
  body.appendChild(errorPopup);
  document.addEventListener('keydown', escPopupHandler);
  window.addEventListener('click', windowClickHandler());
  //const errorButton = errorPopup.querySelector('.error__button');
  //errorButton.addEventListener('click', closePopup(errorPopup));
};

const closePopup = (popup) => {
  popup.classList.add('hidden');
  document.removeEventListener('keydown', escPopupHandler);
  window.removeEventListener('click', windowClickHandler);
};

// Ошибка на сервере
const openServerErrorAlert = () => {
  errorPopup = errorTemplate.cloneNode(true);
  const errorMessage = errorPopup.querySelector('.error__message');
  errorMessage.textContent = 'Проблема доступа к серверу';
  document.addEventListener('keydown', escPopupHandler);
  window.addEventListener('click', windowClickHandler);
  body.appendChild(errorPopup);
  setTimeout(() => {
    errorPopup.remove();
  }, ALERT_SHOW_TIME);
};

// закрытие по нажатию на кнопку

export {openSuccessPopup, openErrorPopup, closePopup, openServerErrorAlert}; // closeSuccessPopup, closeErrorPopup

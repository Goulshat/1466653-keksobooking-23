/*
  <template id="success">
    <div class="success">
      <p class="success__message">Ваше объявление<br>успешно размещено!</p>
    </div>
  </template>

  <!-- Сообщение об ошибке создания объявления -->
  <template id="error">
    <div class="error">
      <p class="error__message">Ошибка размещения объявления</p>
      <button type="button" class="error__button">Попробовать снова</button>
    </div>
  </template>

*/
const ALERT_SHOW_TIME = 5000;

const body = document.querySelector('body');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successPopup = successTemplate.cloneNode(true);

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorPopup = errorTemplate.cloneNode(true);
// const errorButton = errorPopup.querySelector('.error__button');

const escPopupHandler = (evt) => {
  if(evt.key === 'Escape' || evt.key === 'Esc') {
    successPopup.classList.add('hidden');
    errorPopup.classList.add('hidden');
  }
};

// попапы появляются
const openSuccessPopup = () => {
  body.appendChild(successPopup);
  document.addEventListener('keydown', escPopupHandler);
};

const openErrorPopup = () => {
  body.appendChild(errorPopup);
  document.addEventListener('keydown', escPopupHandler);
};

// Ошибка на сервере
const openServerErrorAlert = () => {
  const errorMessage = errorPopup.querySelector('.error__message');
  errorMessage.textContent = 'Проблема доступа к серверу';
  body.appendChild(errorPopup);
  setTimeout(() => {
    errorPopup.remove();
  }, ALERT_SHOW_TIME);
};

// попапы закрываются
const closeSuccessPopup = () => {
  successPopup.classList.add('hidden');
  document.removeEventListener('keydown', escPopupHandler);
};
const closeErrorPopup = () => {
  errorPopup.classList.add('hidden');
  document.removeEventListener('keydown', escPopupHandler);
};
// закрытие по нажатию на кнопку
// errorButton.addEventListener('click', closeErrorPopup());

export {openSuccessPopup, closeSuccessPopup, openErrorPopup, closeErrorPopup, openServerErrorAlert};

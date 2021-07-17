const adForm = document.querySelector('.ad-form');
const inputsRequired = adForm.querySelectorAll('.js-input-required');

const highlightRequiredInputs = () => {
  for (const inputRequired of inputsRequired) {
    if (!inputRequired.checkValidity()) {
      inputRequired.classList.add('js-input-required--error');
    } else {
      inputRequired.classList.remove('js-input-required--error');
    }
  }
};

export {highlightRequiredInputs};

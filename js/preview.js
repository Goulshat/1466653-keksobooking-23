const adForm = document.querySelector('.ad-form');
const chooseAvatar = adForm.querySelector('#avatar');
const avatarPreview = adForm.querySelector('.ad-form-header__preview-image');
const chooseImages = adForm.querySelector('#images');
const imagesPreview = adForm.querySelector('');

// const ('.ad-form__photo');
const previewHandler = (chooser, preview) => {
  const file = chooser.files[0];
  file.name.toLowerCase();

  const reader = new FileReader();
  reader.addEventListener('load', () => {
    preview.src = reader.result;
  });

  reader.readAsDataURL(file);
};

chooseAvatar.addEventListener('change', previewHandler(chooseAvatar, avatarPreview));

const adForm = document.querySelector('.ad-form');
const chooseAvatar = adForm.querySelector('#avatar');
const avatarPreview = adForm.querySelector('.ad-form-header__preview-image');
const chooseImages = adForm.querySelector('#images');
const imagesPreview = adForm.querySelector('.ad-form__photo');

chooseAvatar.addEventListener('change', () => {
  const file = chooseAvatar.files[0];

  const reader = new FileReader();
  reader.addEventListener('load', () => {
    avatarPreview.src = reader.result;
  });

  reader.readAsDataURL(file);
});

chooseImages.addEventListener('change', () => {
  const file = chooseImages.files[0];

  const reader = new FileReader();
  reader.addEventListener('load', () => {
    imagesPreview.src = reader.result;
  });

  reader.readAsDataURL(file);
});

/*
const previewHandler (chooser, preview) => {
  const file = chooser.files[0];

  const reader = new FileReader();
  reader.addEventListener('load', () => {
    preview.src = reader.result;
  });

  reader.readAsDataURL(file);
};

chooseAvatar.addEventListener('change', previewHandler(chooseAvatar, avatarPreview));
chooseImages.addEventListener('change', previewHandler(chooseImages, imagesPreview));
*/

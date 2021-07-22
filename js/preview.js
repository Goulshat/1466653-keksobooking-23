const adForm = document.querySelector('.ad-form');
const chooseAvatar = adForm.querySelector('#avatar');
const avatarPreview = adForm.querySelector('.ad-form-header__preview-image');

chooseAvatar.addEventListener('change', () => {
  const file = chooseAvatar.files[0];

  const reader = new FileReader();
  reader.addEventListener('load', () => {
    avatarPreview.src = reader.result;
  });

  reader.readAsDataURL(file);
});

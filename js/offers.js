const offerTemplate = document.querySelector('#card').content;
const offerPopup = offerTemplate.querySelector('.popup');

const getFeature = (features, container) => {
  const allFeatures = container.querySelectorAll('.popup__feature');

  if (features) {
    allFeatures.forEach((item) => {
      if (features.indexOf(item.classList[1].replace('popup__feature--', '')) === -1) {
        item.remove();
      }
    });
  }
};

const offerType = {
  'palace': 'Дворец',
  'flat': 'Квартира',
  'house': 'Дом',
  'bungalow': 'Бунгало',
  'hotel': 'Отель',
};

const getNewOffer = ({author, offer}) => {
  const newOffer = offerPopup.cloneNode(true);

  const popupTitle = newOffer.querySelector('.popup__title');
  if (offer.title) {
    popupTitle.textContent = offer.title;
  } else {
    popupTitle.remove();
  }

  const popupAddress = newOffer.querySelector('.popup__text--address');
  if (offer.address) {
    popupAddress.textContent = offer.address;
  } else {
    popupAddress.remove();
  }

  const popupPrice = newOffer.querySelector('.popup__text--price');
  if (offer.price) {
    popupPrice.textContent = `${offer.price} ₽/ночь`;
  } else {
    popupPrice.remove();
  }

  const popupType = newOffer.querySelector('.popup__type');
  popupType.textContent = offerType[offer.type];

  const popupCapacity = newOffer.querySelector('.popup__text--capacity');
  const popupRooms = offer.rooms;
  const popupGuest = offer.guests;
  if (!popupRooms || !popupGuest) {
    popupCapacity.remove();
  } else {
    popupCapacity.textContent = `${popupRooms} комнат для ${popupGuest} гостей`;
  }

  const popupDescription = newOffer.querySelector('.popup__description');
  if (offer.description) {
    popupDescription.textContent = offer.description;
  } else {
    popupDescription.remove();
  }

  const popupCheckIn = newOffer.querySelector('.popup__text--time');
  if (!offer.checkin || !offer.checkout) {
    popupCheckIn.remove();
  } else {
    popupCheckIn.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  }

  const popupFeatures = newOffer.querySelector('.popup__features');
  getFeature(offer.features, popupFeatures);

  const popupImage = newOffer.querySelector('.popup__photos');

  if (!offer.photos) {
    popupImage.remove();
  } else {
    popupImage.querySelector('.popup__photo').src = offer.photos[0];
    if (offer.photos.length > 1) {
      for (let i = 1; i < offer.photos.length; i++) {
        const newPhoto = popupImage.querySelector('.popup__photo').cloneNode(true);
        newPhoto.src = offer.photos[i];
        popupImage.appendChild(newPhoto);
      }
    }
  }

  const popupAvatar = newOffer.querySelector('.popup__avatar');
  if (author.avatar) {
    popupAvatar.src = author.avatar;
  } else {
    popupAvatar.remove();
  }

  return newOffer;
};

export {getNewOffer};

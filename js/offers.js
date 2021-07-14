import {randomOffers} from './random-data.js';

const offersFragment = document.createDocumentFragment();
const offerTemplate = document.querySelector('#card').content;
const offerPopup = offerTemplate.querySelector('.popup');

const getFeatures = (features, container) => {
  const allFeatures = container.querySelectorAll('.popup__feature');

  if (features) {
    allFeatures.forEach((item) => {
      if (features.indexOf(item.classList[1].replace('popup__feature--', '')) === -1) {
        //features.indexOf(wi-fi) === -1 - если в свойствах объекта в features не находит вай-фая,
        // взятого  из коллекции тегов container
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
    popupTitle.remove();
  } else {
    popupTitle.textContent = offer.title;
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
  getFeatures(offer.features, popupFeatures);

  const popupPhotos = newOffer.querySelector('.popup__photos');
  if (!offer.photos) {
    popupPhotos.remove();
  } else {
    for (let j = 0; j < popupPhotos.length; j++) {
      popupPhotos.children[j].src = offer.photos[j];
    }
  }

  const popupAvatar = newOffer.querySelector('.popup__avatar');
  if (author.avatar) {
    popupAvatar.src = author.avatar;
  } else {
    popupAvatar.remove();
  }

  offersFragment.appendChild(newOffer);
};

getNewOffer(randomOffers[0]);

export {getNewOffer};

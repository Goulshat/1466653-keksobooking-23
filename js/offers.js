import {randomOffers} from './random-data.js';
import {hideElement} from './hide-element.js';
// import {nomNumDecline, genNumDecline} from './number-decline.js'; - как корректно использовать в шаблонных строках?

const offersFragment = document.createDocumentFragment();
const offerTemplate = document.querySelector('#card').content;
const offerPopup = offerTemplate.querySelector('.popup');

const getFeatures = (features, container) => {
  const allFeatures = container.querySelectorAll('.popup__feature');

  if (allFeatures) {
    allFeatures.forEach((item) => {
      if (features.indexOf(item.classList[1].replace('popup__feature--', '')) === -1) {
        item.remove();
      }
    });
  }
};

const getOfferType = (object) => {
  if (object.offer.type === 'palace') {
    return 'Дворец';
  }
  if (object.offer.type === 'flat') {
    return 'Квартира';
  }
  if (object.offer.type === 'house') {
    return 'Дом';
  }
  if (object.offer.type === 'bungalow') {
    return 'Бунгало';
  }
  return 'Отель';
};

const getNewOffer = (offerObject) => {
  const newOffer = offerPopup.cloneNode(true);

  const popupTitle = newOffer.querySelector('.popup__title');
  !offerObject.offer.title ? hideElement(popupTitle) : popupTitle.textContent = offerObject.offer.title;

  const popupAddress = newOffer.querySelector('.popup__text--address');
  offerObject.offer.address ? popupAddress.textContent = offerObject.offer.address : hideElement(popupAddress);

  const popupPrice = newOffer.querySelector('.popup__text--price');
  offerObject.offer.price ? popupPrice.textContent = `${offerObject.offer.price} ₽/ночь` : hideElement(popupPrice);

  const popupType = newOffer.querySelector('.popup__type');
  const offerType = getOfferType(offerObject);
  popupType.textContent = offerType;

  const popupCapacity = newOffer.querySelector('.popup__text--capacity');
  const popupRooms = offerObject.offer.rooms;
  const popupGuest = offerObject.offer.guests;
  (!popupRooms || !popupGuest) ? hideElement(popupCapacity) : popupCapacity.textContent = `${popupRooms} комнат для ${popupGuest} гостей`;

  const popupDescription = newOffer.querySelector('.popup__description');
  offerObject.offer.description ? popupDescription.textContent = offerObject.offer.description : hideElement(popupDescription);

  const popupCheckIn = newOffer.querySelector('.popup__text--time');
  (!offerObject.offer.checkin || !offerObject.offer.checkout) ? hideElement(popupCheckIn) : popupCheckIn.textContent = `Заезд после ${offerObject.offer.checkin}, выезд до ${offerObject.offer.checkout}`;

  const popupFeatures = newOffer.querySelector('.popup__features');
  getFeatures(offerObject.offer.features, popupFeatures);

  const popupPhotos = newOffer.querySelector('.popup__photos');
  if (!offerObject.offer.photos) {
    hideElement(popupPhotos);
  } else {
    for (let j = 0; j < popupPhotos.length; j++) {
      popupPhotos.children[j].src = offerObject.offer.photos[j];
    }
  }

  const popupAvatar = newOffer.querySelector('.popup__avatar');
  offerObject.author.avatar ? popupAvatar.src = offerObject.author.avatar : hideElement(popupAvatar);

  offersFragment.appendChild(newOffer);
};

getNewOffer(randomOffers[0]);

export {offersFragment};

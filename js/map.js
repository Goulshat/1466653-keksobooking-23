import {formDisableToggle} from './disable-form.js';
import {getNewOffer} from './offers.js';
import {request} from './fetch.js';
import {openServerErrorAlert} from './popup.js';
import {filterOffers} from './filter.js';

const MAP_ZOOM = 11;
const COORDINATES_DIGITS = 5;
const ADVERT_NUMBERS = 10;
//const FILTERS_DEBOUNCE = 2000;

const MapInitial = {
  LAT: 35.70470,
  LNG: 139.77013,
  URL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  COPYRIGHT: '&copy; <a href="https://www.openstreetmap.org/copyright"> OpenstreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
};

const MainPin = {
  URL: './img/main-pin.svg',
  SIZE: [52, 52],
  ANCHOR: [26, 52],
};

const pin = {
  URL: './img/pin.svg',
  SIZE: [40, 40],
  ANCHOR: [20, 50],
};

const mapFilters = document.querySelector('.map__filters');
const address = document.querySelector('#address');
let advertOffers = [];

const map = L.map('map-canvas')
  .setView({
    lat: MapInitial.LAT,
    lng: MapInitial.LNG,
  }, MAP_ZOOM);

L.tileLayer(
  MapInitial.URL,
  {
    attribution: MapInitial.COPYRIGHT,
  },
).addTo(map);

const pinLayer = L.layerGroup().addTo(map);

const pinIcon = L.icon({
  iconUrl: pin.URL,
  iconSize: pin.SIZE,
  iconAnchor: pin.ANCHOR,
});

const createMarkers = (points) => {
  points.forEach((point) => {
    const { location } = point;
    const regularPin = L.marker(
      {
        lat: location.lat,
        lng: location.lng,
      },
      {
        icon: pinIcon,
      },
    );

    regularPin
      .addTo(pinLayer)
      .bindPopup(() => getNewOffer(point),
        {
          keepInView: true,
        },
      );
  });
};

const mainPinIcon = L.icon(
  {
    iconUrl: MainPin.URL,
    iconSize: MainPin.SIZE,
    iconAnchor: MainPin.ANCHOR,
  },
);

const mainPinMarker = L.marker(
  {
    lat: MapInitial.LAT,
    lng: MapInitial.LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

address.value = `${MapInitial.LAT}, ${MapInitial.LNG}`;

mainPinMarker.on('moveend', (evt) => {
  const { lat, lng } = evt.target.getLatLng();
  address.value = `${lat.toFixed(COORDINATES_DIGITS)}, ${lng.toFixed(COORDINATES_DIGITS)}`;
});

const filtersChangeHandler = () => {
  pinLayer.clearLayers();
  createMarkers(filterOffers(advertOffers));
};

const addAdvertMarkers = (data) => {
  advertOffers = data.slice();
  createMarkers(advertOffers.slice(0, ADVERT_NUMBERS));
  mapFilters.classList.remove('.map__filters--disabled');
  mapFilters.addEventListener('change', filtersChangeHandler);
};

map.whenReady(() => {
  formDisableToggle();
  request(addAdvertMarkers, openServerErrorAlert, 'GET');
});

const setDefaultMap = () => {
  pinLayer.clearLayers();
  address.value = `${MapInitial.LAT}, ${MapInitial.LNG}`;
  mainPinMarker.setLatLng([MapInitial.LAT, MapInitial.LNG]);
  map.setView({
    lat: MapInitial.LAT,
    lng: MapInitial.LNG,
  });
  createMarkers(advertOffers.slice(0, ADVERT_NUMBERS));
};

export {setDefaultMap};

const MAX_OFFERS = 10;
const DEFAULT_VALUE = 'any';

const priceRange = {
  'low': {
    'start': 0,
    'end': 10000,
  },
  'middle': {
    'start': 10000,
    'end': 50000,
  },
  'high': {
    'start': 50000,
    'end': Infinity,
  },
};

const filters = Array.from(document.querySelectorAll('.map__filter, .map__features'));

const filterRules = {
  'housing-type': (data, filter) => filter.value === data.offer.type,
  'housing-price': (data, filter) => data.offer.price >= priceRange[filter.value].start && data.offer.price < priceRange[filter.value].end,
  'housing-rooms': (data, filter) => filter.value === data.offer.rooms.toString(),
  'housing-guests': (data, filter) => filter.value === data.offer.guests.toString(),
  'housing-features': (data, filter) => {
    const checkedFeatures = Array.from(filter.querySelectorAll('input[type="checkbox"]:checked'));
    checkedFeatures.every((checkbox) =>
      data.offer.features.some((feature) =>
        feature === checkbox.value));
  },
};

const filterOffers = (data) => {
  let filteredOffers = [];
  let i = 0;
  let result;

  while (i < data.length && filteredOffers.length < MAX_OFFERS) {
    result = filters.every((filter) =>
      (filter.value === DEFAULT_VALUE) ? true : filterRules[filter.id](data[i], filter));
    if (result) {
      filteredOffers.push(data[i]);
    }

    i++;
  }

  return filteredOffers;
};

export {filterOffers};

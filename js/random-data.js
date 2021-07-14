const MIN = 1;
const MAX = 100;
const OFFERS_NUMBER = 10;
const LINKS_NUMBER = 8;
const Coordinates = {
  LAT_MIN: 35.65000,
  LAT_MAX: 35.70000,
  LNG_MIN: 139.70000,
  LNG_MAX: 139.80000,
  DIGITS: 5,
};

const offerTitles = [
  'Котодом',
  'Кекс-Карлтон',
  'Кошкин Дом',
  'Мечта кота',
  'Кошкино счастье',
  'Кекс Резиденс Блю',
  'Кекс Luxury&Spa',
  'Отель на Кексовой',
  'Рэдиссон Кекс',
  'Cat Inn',
];
const accomodationTypes = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const checkinTimes = ['12:00', '13:00', '14:00'];
const accomodationFeatures = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const accomodationDescriptions = [
  'Аутентичный отель, бережно храняющий кошачьи традиции',
  'Современный отель для деловых котов. Расположен в оживленном городском квартале, в одном прыжке от станции метро',
  'Уютный бутик-отель с экслюзивным дизайнерским интерьером для Котов и их Кошечек',
  'Семейный отель с просторными комнатами, где комфортно могут разместить большие семьи (до 6 котят). Для ваших малышей игрушки, детское питание, лоточки, заводные мышки и другие радости',
  'Кошкино счастье',
  'Первоклассный отель, расположенный прямо на берегу моря. Прекрасный вид. Учтивый персонал. Индивидуальные когтеточки',
  'SPA-отель для расслабления и отдыха от ежедневных забот. Вас почешут, причешут, по желанию сделают стрижку, укладку. Для любителей экстрима - джакузи',
  'Роскошные апартаменты для успешных котов в самом центре города. От отеля лапой подать до Keksby-Center и Cat Mall',
  'Ретрит отдых для уставших от жизни котов. Откройте свое предназначение и начните жизнь заново. Для желающих - мастер-класс по потягиваниям и кото-йога',
  'Эко-мини-отель для пар в живописном уголку. Можно спокойно гулять и наслаждаться природой и тишиной. Отсутсвие собак в радиусе 2км гарантировано',
];
const accomodationPhotos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getRandomInteger = function (min = MIN, max = MAX) {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloat = function (min = MIN, max = MAX, decimalPlaces) {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return (Math.random() * (max - min) + min).toFixed(decimalPlaces);
};

const getRandomIndex = function (array) {
  return getRandomInteger(0, array.length - 1);
};

const getRandomElement = function (array) {
  return array[getRandomInteger(0, array.length - 1)];
};

const shuffle = function (array) {
  let j, temp;
  for(let i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random()*(i + 1));
    temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
};

const getOffers = function () {
  return {
    author: {
      avatar: `./img/avatars/user0${getRandomInteger(MIN, LINKS_NUMBER)}.png`,
    },

    offer: {
      title: getRandomElement(offerTitles),
      address: String(getRandomFloat(Coordinates.LAT_MIN, Coordinates.LAT_MAX, Coordinates.DIGITS), getRandomFloat(Coordinates.LNG_MIN, Coordinates.LNG_MAX, Coordinates.DIGITS)),
      price: getRandomInteger(),
      type: getRandomElement(accomodationTypes),
      rooms: getRandomInteger(),
      guests: getRandomInteger(),
      checkin: getRandomElement(checkinTimes),
      checkout: getRandomElement(checkinTimes),
      features: shuffle(accomodationFeatures).slice(getRandomIndex(accomodationFeatures)),
      description: getRandomElement(accomodationDescriptions),
      photos: shuffle(accomodationPhotos).slice(getRandomIndex(accomodationPhotos)),
    },

    location: {
      lat: getRandomFloat(Coordinates.LAT_MIN, Coordinates.LAT_MAX, Coordinates.DIGITS),
      lng: getRandomFloat(Coordinates.LNG_MIN, Coordinates.LNG_MAX, Coordinates.DIGITS),
    },
  };
};

const randomData = () => new Array(OFFERS_NUMBER).fill(null).map(() => getOffers());
const randomOffers = randomData();

export {randomOffers};

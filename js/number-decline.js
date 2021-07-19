const getLastDigit = (number) => +number.toString().slice(-1);

// Именительный падеж числа
const nomNumDecline = (num, nominative, genitiveSingular, genitivePlural) => {
  const lastDigit = getLastDigit(num);

  if (num === 11 || num === 12 || num === 13 || num === 14) {
    return genitivePlural;
  } else if (lastDigit === 1) {
    return nominative;
  } else if (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) {
    return genitiveSingular;
  }

  return genitivePlural;
};

// Родительный падеж числа
const genNumDecline = (num, genitiveSingular, genitivePlural) => {
  const lastDigit = getLastDigit(num);

  if (lastDigit === 1) {
    return genitiveSingular;
  }
  return genitivePlural;
};

export {nomNumDecline, genNumDecline};

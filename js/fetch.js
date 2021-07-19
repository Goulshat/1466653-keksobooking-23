const RequestUrls = {
  POST: 'https://23.javascript.pages.academy/keksobooking',
  GET: 'https://23.javascript.pages.academy/keksobooking/data',
};

const request = (onSuccess, onError, method, data) => {
  fetch(
    RequestUrls[method],
    {
      method: method,
      body : data,
    },
  )
    .then((response) => response.json())
    .then((offers) => {
      onSuccess(offers);
    }).catch(() => {
      onError();
    });
};

export {request};

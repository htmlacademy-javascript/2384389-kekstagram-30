const SERVER_URL = 'https://30.javascript.pages.academy/kekstagram';
const SERVER_ROUTE = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
};

const TEXT_ERROR = {
  GET: 'Не удалось загрузить данные. Попробуйте еще раз',
  POST: 'Не удалось отправить данные.',
};

const request = async (url, method = HTTP_METHOD.GET, body = null) => {
  const response = await fetch(url, {method, body});
  if (!response.ok) {
    throw new Error(TEXT_ERROR[method]);
  }
  return response.json();
};

const loadData = async () => {
  return request(SERVER_URL + SERVER_ROUTE.GET_DATA);
};

const sendData = async (pictureData) => {
  return request(
    SERVER_URL + SERVER_ROUTE.SEND_DATA,
    HTTP_METHOD.POST,
    pictureData,
  );
};

export {loadData, sendData};

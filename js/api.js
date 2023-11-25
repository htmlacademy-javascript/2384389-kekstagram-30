import { SERVER_URL, SERVER_ROUTE, HTTP_METHOD,TEXT_ERROR } from './constants.js';

const request = async (url, method = HTTP_METHOD.GET, body = null) => {
  const response = await fetch(url, {method, body});
  if (!response.ok) {
    throw new Error(TEXT_ERROR[method]);
  }
  return response.json();
};

const loadData = async () => request(SERVER_URL + SERVER_ROUTE.GET_DATA);

const sendData = async (pictureData) =>
  request(
    SERVER_URL + SERVER_ROUTE.SEND_DATA,
    HTTP_METHOD.POST,
    pictureData,
  );


export {loadData, sendData};

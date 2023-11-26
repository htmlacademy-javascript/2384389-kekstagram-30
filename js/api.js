import { SERVER_URL, ServerRoute, HttpMethod, TextError } from './constants.js';

const request = async (url, method = HttpMethod.GET, body = null) => {
  const response = await fetch(url, {method, body});
  if (!response.ok) {
    throw new Error(TextError[method]);
  }
  return response.json();
};

const loadData = async () => request(SERVER_URL + ServerRoute.GET_DATA);

const sendData = async (pictureData) =>
  request(
    SERVER_URL + ServerRoute.SEND_DATA,
    HttpMethod.POST,
    pictureData,
  );

export { loadData, sendData };

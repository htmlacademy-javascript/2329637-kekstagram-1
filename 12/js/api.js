const BASE_URL = 'https://28.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  GET_DATA: 'При загрузке данных с сервер произошла ошибка, пожалуйста, обновите страницу',
};
/**
 * Функция получает данные с сервера
 * @returns {Promise<any>}
 */
export const getData = () => fetch(
  `${BASE_URL}${Route.GET_DATA}`
)
  .then((response) => {
    if (!response.ok) {
      throw new Error(ErrorText.GET_DATA);
    }
    return response.json();
  });

export const sendData = (formData) => fetch(
  `${BASE_URL}${Route.SEND_DATA}`,
  {
    method: `${Method.POST}`,
    body: formData,
  },
)
  .then((response) => {
    if(!response.ok) {
      throw new Error();
    }
  });

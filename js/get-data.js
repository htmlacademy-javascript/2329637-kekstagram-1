export const getData = () => {
  fetch('https://28.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('УЖОС!ВСЁ СЛОМАЛОСЬ!!!');
      }
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

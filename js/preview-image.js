const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const formInput = document.querySelector('#upload-file');
const previewImage = document
  .querySelector('.img-upload__preview')
  .querySelector('img');
const effectsList = document.querySelector('.effects__list');
const effectsPreview = effectsList.querySelectorAll('.effects__preview');

/**
 * Функция отображает загруженый файл в модальном окне
 */
export const showDownloadImage = () => {
  const downloadImage = formInput.files[0];
  const downloadImageName = downloadImage.name.toLowerCase();
  const checkExtension = FILE_TYPES.some((item) => downloadImageName.endsWith(item));

  if (checkExtension) {
    previewImage.src = URL.createObjectURL(downloadImage);
    effectsPreview.forEach((item) => {
      item.style.backgroundImage = `url(${URL.createObjectURL(downloadImage)})`;
    });
  }
};

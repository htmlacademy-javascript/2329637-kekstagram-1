const HASH_TAG_REGULAR = /^#[a-zа-яё0-9]{1,19}$/i;
const uploadForm = document.querySelector('.img-upload__form');
const textDescription = document.querySelector('.text__description');
const textHashtags = document.querySelector('.text__hashtags');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error',
});

/**
 * Функция проверяет валидность длины текстового сообщения
 * @param value {string}
 * @returns {boolean}
 */
const validateDescription = (value) => value.length <= 140;

/**
 * Функция проверят валидность введённых хэштегов
 * @param value
 * @returns {*|boolean}
 */
const validateHashtags = (value) => {
  let set = new Set(value.toLowerCase().split(' '));
  set = Array.from(set);

  if (value === '') {
    return true;
  } else if (set.length !== value.split(' ').length || value.split(' ').length > 5) {
    return false;
  }

  return set.every((item) => HASH_TAG_REGULAR.test(item));
};

pristine.addValidator(
  textDescription,
  validateDescription,
  'Длина комментария больше 140 символов'
);

pristine.addValidator(
  textHashtags,
  validateHashtags,
  'Хэш-тег должен начинаться со знака #, ' +
  'содержать только кирилицу и/или латиницу и/или арабские цифры, ' +
  'иметь длину от 1-19 символов не включая знак #. ' +
  'Максимальное количество хэштегов: 5. ' +
  'Хэштеги разделяются пробелами и не должны повторяться'
);

export const validateForm = () => pristine.validate();
export const resetForm = () => pristine.reset();

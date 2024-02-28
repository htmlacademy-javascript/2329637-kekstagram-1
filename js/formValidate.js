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

const validateDescription = (value) => value.length <= 140;

pristine.addValidator(textHashtags, validateDescription, 'Длина комментария больше 140 символов');
uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

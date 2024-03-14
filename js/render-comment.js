const commentTemplate = document.querySelector('#comment')
  .content
  .querySelector('.social__comment');
const commentsList = document.querySelector('.social__comments');

/**
 * Функция создаёт комментарий на основе объекта данных
 * @param avatar {string}
 * @param message {string}
 * @param name {string}
 */
export const renderComment = ({avatar, message, name}) => {

  const comment = commentTemplate.cloneNode(true);
  const commentImg = comment.querySelector('.social__picture');
  const commentText = comment.querySelector('.social__text');
  commentImg.src = avatar;
  commentImg.alt = name;
  commentText.textContent = message;

  commentsList.appendChild(comment);
};

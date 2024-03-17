import {initModalForm} from './modal-form.js';
import {getData} from './api.js';
import {renderPosts} from './render-posts.js';
import {showErrorDownload} from './alert-modals.js';

getData()
  .then((data) => renderPosts(data))
  .catch((error) => {
    showErrorDownload(error.message);
  });

initModalForm();

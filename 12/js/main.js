import {initModalForm} from './modal-form.js';
import {getData} from './api.js';
import {renderPosts} from './render-posts.js';
import {showErrorDownload} from './alert-modals.js';
import {hideFilter, showFilter} from './filter.js';

getData()
  .then((data) => renderPosts(data))
  .then(() => showFilter())
  .catch((error) => {
    showErrorDownload(error.message);
    hideFilter();
  });

initModalForm();

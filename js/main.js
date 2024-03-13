import {renderPosts} from './render-posts.js';
import {dataArray} from './create-photo-descriptions.js';
import {initModalForm} from './modal-form.js';
import {getData} from './get-data.js';

renderPosts(dataArray);
console.log(dataArray);
getData();
initModalForm();

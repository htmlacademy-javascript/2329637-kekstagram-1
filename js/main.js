import {renderPosts} from './rendersPosts.js';
import {PICTURE_COUNT} from './data.js';
import {createPhotoDescriptions} from './createPhotoDescriptions.js';

renderPosts(createPhotoDescriptions(PICTURE_COUNT));

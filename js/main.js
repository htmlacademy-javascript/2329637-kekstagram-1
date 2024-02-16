import {renderPosts} from './rendersPosts.js';
import {createPhotoDescriptions} from './createPhotoDescriptions.js';
import {PICTURE_COUNT} from './data.js';
import {addAddListenerModalOpen} from './showFullPhoto.js';

renderPosts(createPhotoDescriptions(PICTURE_COUNT));
addAddListenerModalOpen();

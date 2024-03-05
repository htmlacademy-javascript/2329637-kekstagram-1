import {renderPosts} from './rendersPosts.js';
import {dataArray} from './createPhotoDescriptions.js';
import {renderModalForm} from './renderModalForm.js';
import {renderEffectSlider} from './renderEffectSlider.js';
import {validateForm} from './validateForm.js';

renderPosts(dataArray);
renderModalForm();
renderEffectSlider();
validateForm();

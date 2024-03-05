import {renderPosts} from './rendersPosts.js';
import {dataArray} from './createPhotoDescriptions.js';
import {displaysModalForm} from './displaysModalForm.js';
import {updatesEffectSlider} from './effectsSlider.js';
import {preventFormSubmission} from './preventFormSubmission.js';

renderPosts(dataArray);
displaysModalForm();
updatesEffectSlider();
preventFormSubmission();

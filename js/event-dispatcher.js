import {isEscapeKey} from './util.js';

let eventStack = [];

document.addEventListener('keydown', (evt) => {
  if (eventStack.length && isEscapeKey(evt)) {
    if (!evt.target.classList.contains('text__hashtags') &&
        !evt.target.classList.contains('text__description')) {
      const cb = eventStack.pop();
      cb();
    }
  }
});

export const addHandler = (cb) => {
  eventStack.push(cb);
};

export const removeHandler = (cb) => {
  eventStack = eventStack.filter((item) => cb !== item);
};

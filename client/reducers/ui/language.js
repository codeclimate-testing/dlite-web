'use strict';

import { TYPES }          from '../../actions';

function defaultState() {
  return '';
};

export default function(state = defaultState(), action){
  if (action.type !== TYPES.UPDATE_LANGUAGE) { return state; }
  let locale = action.payload.value;
  document.getElementsByTagName('html')[0].setAttribute('lang', locale);
  return locale;
}

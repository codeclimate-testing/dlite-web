'use strict';

import { TYPES }          from '../../actions';
import {
  getLanguageFromCookie,
  saveLanguageCookie
}   from '../../helpers/data/cookies';

function defaultState() {
  return '';
};

export default function(state = defaultState(), action) {
  if (action.type !== TYPES.UPDATE_LANGUAGE) { return state; }
  let payload = action.payload.value;

  // save cookie with language value
  if(getLanguageFromCookie() !== payload) {
    saveLanguageCookie(payload);
  }
  return payload || state;
}
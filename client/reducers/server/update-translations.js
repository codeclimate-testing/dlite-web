'use strict';

import en_json  from '../../i18n/en.json';

function defaultState() {
  return {
    default:              en_json,
    selected:             { },
    translationLanguage:  'en'
  };
}

export default function(state = defaultState(), action) {
  if (action.type === 'GET_TRANSLATION_SUCCESS') {
    let data = Object.assign({}, state);
    data.selected = action.payload.value;
    return data;
  }
  if(action.type === 'UPDATE_TRANSLATION_LANGUAGE') {
    let data = {};
    if(action.payload) {
      data['translationLanguage'] = action.payload.value;
    }
    return(Object.assign({}, state, data))
  }
  return state;
}

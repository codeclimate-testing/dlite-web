'use strict';

import en_json  from '../../i18n/en.json';

function defaultState() {
  return {
    selected: { },
    default:  en_json
  };
}

export default function(state = defaultState(), action) {
  if (action.type === 'GET_TRANSLATION_SUCCESS') {
    let data = Object.assign({}, state);
    data.selected = action.payload.value;
    return data;
  }
  return state;
}

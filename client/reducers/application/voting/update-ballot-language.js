'use strict';

import { TYPES } from '../../../actions';

function defaultState() {
  return '';
}

export default function(state = defaultState(), action) {
  if (action.type === TYPES.UPDATE_LANGUAGE && state === '') {
      let payload = action.payload.value;
      return payload || state;
  }
  if(action.type === TYPES.UPDATE_BALLOT_LANGUAGE) {
    let payload = action.payload.value;
    return payload || state;
  }
  return state;
}

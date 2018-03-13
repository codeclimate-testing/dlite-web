'use strict';

import { TYPES } from '../../../actions';

function defaultState() {
  return '';
}

export default function(state = defaultState(), action) {
  if (action.type !== TYPES.UPDATE_LANGUAGE) { return state; }
  let payload = action.payload.value;
  return payload || state;
}

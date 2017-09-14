'use strict';

function defaultState() {
  return '';
}

export default function(state = defaultState(), action) {
  if (action.type !== 'UPDATE_SEX') { return state; }
  let payload = action.payload;
  return payload.value || state;
}


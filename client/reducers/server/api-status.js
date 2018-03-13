'use strict';

function defaultState() {
  return '';
}

export default function(state = defaultState(), action) {
  if (action.type !==  'UPDATE_API_STATUS') { return state; }
  let payload = action.payload.value;
  return payload || state;
}

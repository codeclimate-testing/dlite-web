'use strict';

function defaultState() {
  return {
    street: '',
    city: '',
    state: 'CA',
    zip: '',
  };
}

export default function(state = defaultState(), action) {
  if (action.type !== 'UPDATE_RESIDENCE_ADDRESS') { return state; }

  let data = {};
  let payload = action.payload;

  if (payload) {
    let name = payload.name;
    let value = payload.value;
    data[name] = value;
  }

  return Object.assign({}, state, data);
}

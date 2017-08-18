'use strict';

function defaultState() {
  return {
    emailAddress: '',
    phoneNumber: ''
  };
}

export default function(state = defaultState(), action) {
  let data = {};

  let payload = action.payload;
  if (payload) {
    data[payload.name] = payload.value;
  }

  return Object.assign({}, state, data);
}

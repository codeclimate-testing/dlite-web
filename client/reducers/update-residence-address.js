'use strict';

function defaultState() {
  return {
    residentialStreet: '',
    residentialCity: '',
    residentialState: 'CA',
    residentialZip: ''
  };
}

export default function(state = defaultState(), action) {
  let data = {};
  let payload = action.payload;

  if (payload) {
    let name = payload.name;
    let value = payload.value;
    data[name] = value;
  }

  return Object.assign({}, state, data);
}

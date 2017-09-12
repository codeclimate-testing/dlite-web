'use strict';

function defaultState() {
  return {
    month: '',
    day: '',
    year: ''
  };
}

export default function(state = defaultState(), action) {
  if (action.type !== 'UPDATE_DATE_OF_BIRTH') { return state; }

  let data = {};
  let payload = action.payload;

  if (payload) {
    let name = payload.name;
    let value = payload.value;
    data[name] = value;
  }

  return Object.assign({}, state, data);
}

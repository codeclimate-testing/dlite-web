'use strict';

function defaultState() {
  return {
    firstName: '',
    middleName: '',
    lastName: ''
  };
}

export default function(state = defaultState(), action) {
  let nameData = {};
  let payload = action.payload;

  if (payload) {
    nameData[payload.nameType] = payload.value;
  }

  return Object.assign({}, state, nameData);
};

'use strict';

function defaultState() {
  return {
    appsLength: '',
    userID: '',
    apps: [{
      cardAction: '',
      cardType: '',
      name: '',
      id: '',
      updatedAt: ''
    }]
  }
};

export default function(state = defaultState(), action) {
  if (action.type !== 'UPDATE_USER_DATA') { return state; }
  let data = action.payload.value;
  return data;
}
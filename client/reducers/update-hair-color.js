'use strict';

function defaultState() {
  return {
    hairColor: ''
  };
}

export default function(state = defaultState(), action) {
  
  if(action.type !== 'UPDATE_HAIR_COLOR'){
    return state;
  }

  let hairColorValue = {};
  let payload = action.payload;

  if (payload) {
    hairColorValue["hairColor"] = payload.value;
  }

  return Object.assign({}, state, hairColorValue);
}
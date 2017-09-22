'use strict';

export default (defaultState, actionType) => {
  return function(state = defaultState(), action) {
    if (action.type !== actionType) { return state; }
    let payload = action.payload;
    return payload.value || state;
  }
};

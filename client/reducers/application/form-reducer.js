'use strict';

export default (defaultState, actionType) => {
  return function formReducer(state = defaultState(), action) {
    if (action.type !== actionType) { return state; }

    let data = {};
    let payload = action.payload;

    if (payload) {
      let name = payload.name;
      let value = payload.value;
      data[name] = value;
    }

    return Object.assign({}, state, data);
  };
};

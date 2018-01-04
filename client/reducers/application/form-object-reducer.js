'use strict';
import formCheckArrayReducer from './form-check-array-reducer';

export default (defaultState, actionType, array) => {
  return function formReducer(state = defaultState(), action) {
    if (action.type !== actionType) { return state; }
    if (!action.payload) { return state; }

    let data = Object.assign({}, state);
    let payload = action.payload;
    let name = payload.name;
    let value = payload.value === 'true' ? true : payload.value === 'false' ? false : payload.value;

    if(array && array.includes(name)) {
      return data = formCheckArrayReducer(name, value, data);
    }
    data[name] = value;
    return data;
  };
};

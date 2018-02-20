'use strict';

import { TYPES }              from '../../../actions';
import formCheckArrayReducer  from '../form-check-array-reducer';

const defaultState = () => {
  return {
    correctOrUpdate: '',
    sections: [],
    other: ''
  }
};

const formReducer = (state = defaultState(), action) => {
  if (!action.payload) { return state; }
  if (action.type !== TYPES.UPDATE_CARD_CHANGES) { return state; }

  let splitName = action.payload.name.split('-');
  let data = Object.assign({}, state);

  if (splitName[0] === 'DL') {
    let name = splitName[1];

    if (name === 'sections') {
      return formCheckArrayReducer(name, action.payload.value, data);
    } else {
      data[name] = action.payload.value;
      return data;
    }
  }
  return state;
};

export default formReducer;
'use strict';

import { TYPES } from '../../actions';
import formObjectReducer from './form-object-reducer';

const defaultState = () => {
  return {
    new: [],
    renew: '',
    youthIDInstead: ''
  }
}

const checkboxConverter = (name, value, data) => {
  let array = data.new;
  if (value.toString() === 'true') {
    array.push(name);
  } else {
    let index = array.indexOf(name);
    
    if(index > -1) {
      array.splice(index, 1);
    }
  }
  return Object.assign({}, data, {new: array});

};

const youthID = (value, data) => {
  if (value !== 'Yes') { return data; }
  return Object.assign({}, data, {new: ['ID']});
};

const formReducer = (state = defaultState(), action) => {
  if (action.type !== TYPES.UPDATE_CARD_TYPE) { return state; }
  if (!action.payload) { return state; }

  let data = Object.assign({}, state);
  let payload = action.payload;
  let name = payload.name;
  let value = payload.value;

  if (payload.name === 'youthIDInstead') {
    data[payload.name] = payload.value;
    data = youthID(payload.value, data);
  } else if(payload.name === 'renew') {
    data[payload.name] = payload.value;
  } else {
    data = checkboxConverter(payload.name, payload.value, data);
  }

  return data;
};

export default formReducer;

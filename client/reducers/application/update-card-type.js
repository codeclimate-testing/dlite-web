'use strict';

import { TYPES } from '../../actions';
import formObjectReducer from './form-object-reducer';

const defaultState = () => {
  return {
    ID: false,
    DL: false,
    youthIDInstead: ''
  }
}

const cardValueConverter = (value) => {
  let converted = false;
  if (value.toString() === 'true') {
    converted = true;
  }
  return converted;
};

const updateCardData = (value, data) => {
  if (value !== 'Yes') { return data; }
  return Object.assign({}, data, {DL: false, ID: true});
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
    data = updateCardData(payload.value, data);
  } else {
    data[payload.name] = cardValueConverter(payload.value);
  }

  return data;
};

export default formReducer;

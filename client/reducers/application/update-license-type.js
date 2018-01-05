'use strict';

import { TYPES }              from '../../actions';
import formCheckArrayReducer  from './form-check-array-reducer';

const defaultState = () => {
  return {
    type: [],
    endorsement: [],
    needEndorsement: ''
  }
};

const formReducer = (state = defaultState(), action) => {
  if (action.type !== TYPES.UPDATE_LICENSE_TYPE) { return state; }
  if (!action.payload) { return state; }

  let data = Object.assign({}, state);
  let name = action.payload.name;
  let value = action.payload.value === 'true' ? true : action.payload.value === 'false' ? false : action.payload.value;
  if (name === 'needEndorsement') {
    data[name] = value;
  } else {
    let key = name === 'ambulance' || name === 'firefighter' ? 'endorsement' : 'type';
  
    data = formCheckArrayReducer(name, value, data, key);
  }

  return data;
};

export default formReducer;
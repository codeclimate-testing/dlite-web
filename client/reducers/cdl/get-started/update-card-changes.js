'use strict';

import { TYPES }              from '../../../actions';
import formCheckArrayReducer  from '../../form-check-array-reducer';

const defaultState = () => {
  return {
    correctOrUpdate: '',
    sections: [],
    other: ''
  }
};

const formReducer = (state = defaultState(), action) => {
  if (action.type !== TYPES.UPDATE_CDL_CHANGES) { return state; }

  let data = Object.assign({}, state);
  if (action.payload.name === 'sections') {
    data = formCheckArrayReducer('sections', action.payload.value, data);
  }
  else {
    let name = action.payload.name;
    data[name] = action.payload.value;
  }
  return data;
};

export default formReducer;

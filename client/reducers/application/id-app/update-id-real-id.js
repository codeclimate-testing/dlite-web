'use strict';

import {TYPES}          from '../../../actions';

const defaultState = () => {
  return ''
};

const formReducer = (state = defaultState(), action) => {
  if (action.type !== TYPES.UPDATE_REAL_ID) { return state; }

  let data = state;
  if (action.payload.name === 'realIdDesignation'){
    if (action.payload.value === 'ID') {
      data = 'Yes'
    } else {
      data = 'No';
    }
  }
  else if(action.payload.name === 'ID'){
    data = action.payload.value;
  }
  return data;
};

export default formReducer;
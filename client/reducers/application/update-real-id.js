'use strict';

import { TYPES }            from '../../actions';

const defaultState = () =>  {
  return '';
};

const doNotUpdate = (action) => {
  return action.type !== TYPES.UPDATE_REAL_ID || action.payload.name === 'realIdDesignation';
};

const formReducer = (state = defaultState(), action) => {
  if (doNotUpdate(action)) { return state; }
  else {
    return action.payload.value;
  }
};

export default formReducer;
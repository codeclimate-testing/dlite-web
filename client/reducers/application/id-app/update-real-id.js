'use strict';

import { TYPES }          from '../../../actions';

const defaultState = () => {
  return false;
};

const formReducer = (state = defaultState(), action) => {
  if (!action.payload) { return state; }
  if (action.type !== TYPES.UPDATE_REAL_ID) { return state; }

  if (action.payload.name === 'realIdDesignation') {
    return action.payload.value === 'ID' ? 'Yes' : 'No';
  }

  return action.payload.value;
};

export default formReducer;
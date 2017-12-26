'use strict';

import { TYPES } from '../../actions';
import {
  addValue,
  removeValue
} from './array-add-remove';

const validationsReducer = (state=[], action) => {
  if (!action.type.includes('VALIDATION')) { return state; }
  if (action.type === TYPES.CLEAR_VALIDATIONS) { return []; }

  let newState;
  let value = action.payload && action.payload.value
  if (action.type === TYPES.ADD_VALIDATION) {
    newState = addValue(value, state);
  } else {
    newState = removeValue(value, state);
    newState = removeValue('all', newState);
  }

  return newState;
};

export default validationsReducer;


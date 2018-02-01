'use strict';

import { TYPES } from '../../actions';
import {
  addValue,
  removeValue
} from './array-add-remove';

const defaultState = () => {
  return ['basics-summary', 'id-application-details-summary', 'driver-license-application-details-summary'];
};

const accordionsReducer = (state=defaultState() , action) => {
  if (action.type !== TYPES.TOGGLE_ACCORDION) { return state; }

  const value = action.payload.value;

  let newState = addValue(value, state);
  state.forEach((d) => {
    if(d === value) {
      newState = removeValue(value, state);
    }
  });

  return newState
}

export default accordionsReducer;

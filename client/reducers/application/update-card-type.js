'use strict';

import { TYPES }              from '../../actions';
import formValueArrayReducer  from '../form-value-array-reducer';
import {
  cardTypeAction,
  addStringFromSummary,
  addArrayFromSummary
 } from '../../helpers/reducers';

const defaultState = () => {
  return [];
};

const formReducer = (state = defaultState(), action) => {
  if (!action.payload) { return state;}
  if (!cardTypeAction(action)){ return state; }

  let newState = [];
  if (action.type === TYPES.UPDATE_CARD_TYPE) {
    if (addStringFromSummary(action)) {
      newState.push(action.payload.value);
    }
    else if (addArrayFromSummary(action)) {
      newState = action.payload.value;
    }
    else {
      newState = formValueArrayReducer(action, state);
    }
  }

  else if (action.type === TYPES.UPDATE_CARD_ACTION) {
    if (action.payload.name === 'DLAction' || action.payload.name === 'IDAction') {
      newState = state;
    }
  }

  else if (action.type === TYPES.UPDATE_YOUTH_ID_INSTEAD) {
    if (action.payload.value === 'Yes') {
      newState = ['ID'];
    }
    else if (action.payload.name === 'youthIDOnly') {
      newState = ['ID', 'DL'];
    }
    else { newState = ['DL']; }
  }
  return newState;
};

export default formReducer;

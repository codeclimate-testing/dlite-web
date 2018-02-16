'use strict';

import { TYPES }              from '../../actions';
import formValueArrayReducer  from './form-value-array-reducer';
import { cardTypeAction }     from '../../helpers/reducers';
import { driverLicense }      from '../../helpers/data/pathnames';

const defaultState = () => {
  return [];
};

const formReducer = (state = defaultState(), action) => {
  if (!action.payload) { return state;}
  if (!cardTypeAction(action)){ return state; }

  let newState = [];
  if (action.type === TYPES.UPDATE_CARD_TYPE) {
    newState = formValueArrayReducer(action, state);
  }

  else if (action.type === TYPES.UPDATE_CARD_ACTION) {
    if (action.payload.name === 'DLAction') {
      newState = state;
    }
  }

  else if (action.type === TYPES.ADD_APP) {
    if (driverLicense(action.payload.value)) {
      newState = ['DL'];
    } else if (action.payload.name === 'IDAction') {
      newState = ['ID'];
    }
  }

  else if (action.type === TYPES.UPDATE_YOUTH_ID_INSTEAD) {
    if (action.payload.value === 'Yes') {
      newState = ['ID'];
    }
    else if (action.payload.name === 'youthIDOnly') {
      newState = ['ID', 'DL'];
    }
    else { newState = ['DL']} ;
  }
  return newState;
};

export default formReducer;

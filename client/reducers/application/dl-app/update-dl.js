'use strict';

import { TYPES }            from '../../../actions';
import { cardTypeAction }   from '../../../helpers/reducers';
import { driverLicense }    from '../../../helpers/data/pathnames';

const defaultState = () => {
 return false;
};

const formReducer = (state = defaultState(), action) => {
  if (!action.payload) { return state; }
  if (!cardTypeAction(action)) { return state; }

  let newState = false;

  if (action.type === TYPES.UPDATE_CARD_TYPE) {
    let value = action.payload.value.split('-');
    if (value.length > 1) {
      if (value[0] === 'ID'){
        newState = state;
      }
      else {
        newState = action.payload.value === 'DL-true';
      }
    }
    else {
      newState = action.payload.value === 'DL';
    }
  }

  else if (action.type === TYPES.UPDATE_CARD_ACTION) {

    if (action.payload.name === 'DLAction' || action.payload.name === 'IDAction') {
      newState = state;
    }
  }

  else if (action.type === TYPES.ADD_APP ){
    if (driverLicense(action.payload.value)) {
      newState = true;
    } else {
      newState = state;
    }
  }

  else if (action.type === TYPES.UPDATE_YOUTH_ID_INSTEAD) {
    newState = action.payload.value === 'No';
  }

  return newState;
};
export default formReducer;
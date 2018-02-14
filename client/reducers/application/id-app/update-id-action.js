'use strict';

import { TYPES } from '../../../actions';
import { cardTypeAction }   from '../../../helpers/reducers';

const defaultState = () => {
 return '';
};

const formReducer = (state = defaultState(), action) => {
  if (!action.payload) { return state; }
  if (!cardTypeAction(action)) { return state; }

  let newState = defaultState();

  if (action.type === TYPES.UPDATE_CARD_TYPE) {
    let value = action.payload.value.split('-');
    if (value.length > 1) {
      if (value[0] === 'DL') {
        newState = state;
      }
      else {
        newState = action.payload.value === 'ID-true' ? 'new' : defaultState();
      }
    }
    else {
      newState = action.payload.value === 'ID' ? action.payload.name : defaultState();
    }
  }

  else if (action.type === TYPES.UPDATE_CARD_ACTION) {
    newState = defaultState();
  }

  else if (action.type === TYPES.UPDATE_YOUTH_ID_INSTEAD) {
    if (action.payload.name === 'youthIDOnly') {
      newState = 'new';
    }
    else if (action.payload.value === 'Yes') {
      newState = 'new';
    }
  }

  return newState;

};
export default formReducer;

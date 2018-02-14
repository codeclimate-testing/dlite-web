'use strict';

import { TYPES }            from '../../../actions';
import { cardTypeAction }   from '../../../helpers/reducers';

const defaultState = () => {
 return '';
};

const formReducer = (state = defaultState(), action) => {
  if (!action.payload) { return state; }
  if (!cardTypeAction(action)) { return state; }

  let newState = '';

  if (action.type === TYPES.UPDATE_CARD_TYPE) {
    let value = action.payload.value.split('-');
    if (value.length > 1) {
      if (value[0] === 'ID') {
        newState = state;
      }
      else {
        newState = action.payload.value === 'DL-true' ? 'new' : '';
      }
    }
    else {
      newState = action.payload.value === 'DL' ? action.payload.name : defaultState();
    }
  }

  else if (action.type === TYPES.UPDATE_CARD_ACTION) {
    if (action.payload.name === 'DLAction') {
      newState = action.payload.value;
    }
    else {
      newState = defaultState();
    }
  }

  else if (action.type === TYPES.UPDATE_YOUTH_ID_INSTEAD) {
    if (action.payload.value === 'Yes') {
      newState = defaultState();
    } else {
      newState = 'new';
    }
  }

  return newState;

};
export default formReducer;
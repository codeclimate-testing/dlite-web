'use strict';

import { TYPES }            from '../../../actions';
import { cardTypeAction }   from '../../../helpers/reducers';

const defaultState = () => {
 return '';
};

const formReducer = (state = defaultState(), action) => {
  if (!action.payload) { return state; }
  if (!cardTypeAction(action)) { return state; }

  let newState = defaultState();
  let value = action.payload.value;

  if (action.type === TYPES.UPDATE_CARD_TYPE) {
    let split = action.payload.value.split('-');
    if (split.length > 1) {
      if (split[0] === 'ID') {
        newState = state;
      }
      else if(value === 'DL-true'){
        newState = 'new';
      }
    }
    else if (action.payload.name === 'addFromSummary') {
      newState = state;
    }
    else if (value === 'DL' ){
      newState =  action.payload.name;
    }
  }

  else if (action.type === TYPES.UPDATE_CARD_ACTION ){
    if(action.payload.name === 'DLAction') {
      newState = value;
    }
    else if (action.payload.name === 'IDAction') {
      newState = state;
    }
  }

  else if (action.type === TYPES.UPDATE_YOUTH_ID_INSTEAD) {
    if (value === 'No') {
      newState = 'new';
    }
  }
  return newState;
};
export default formReducer;
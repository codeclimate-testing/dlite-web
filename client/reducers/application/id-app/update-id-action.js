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
  let value = action.payload.value;
  let name = action.payload.name;

  if (action.type === TYPES.UPDATE_CARD_TYPE) {
    let split = value.split('-');
    if (split.length > 1) {
      if (split[0] === 'DL') {
        newState = state;
      }
      else if (value === 'ID-true') {
        newState = 'new';
      }
    }
    else if (value === 'ID'){
      newState = name;
    }
  }

  else if (action.type === TYPES.UPDATE_CARD_ACTION){
    if(name === 'IDAction') {
      newState = value;
    }
    else if(name === 'DLAction') {
      newState = state;
    }
  }

  else if (action.type === TYPES.UPDATE_YOUTH_ID_INSTEAD) {
    if (name === 'youthIDOnly') {
      newState = 'new';
    }
    else if (value === 'Yes') {
      newState = 'new';
    }
  }

  else if (action.type === TYPES.ADD_APP) {
    newState = state;
  }

  return newState;

};
export default formReducer;

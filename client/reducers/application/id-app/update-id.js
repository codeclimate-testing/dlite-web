'use strict';

import { TYPES }            from '../../../actions';
import { cardTypeAction }   from '../../../helpers/reducers';

const defaultState = () => {
 return false;
};

const formReducer = (state = defaultState(), action) => {
  if (!action.payload) { return state; }
  if ( !cardTypeAction(action) ) { return state; }

  let newState = false;

  if (action.type === TYPES.UPDATE_CARD_TYPE) {
    let value = action.payload.value.split('-');
    if (value.length > 1) {
      if (value[0] === 'DL') {
        newState = state;
      }
      else {
        newState = action.payload.value === 'ID-true';
      }
    } else {
      newState = action.payload.value === 'ID';
    }
  }

  else if (action.type === TYPES.UPDATE_CARD_ACTION){
    if (action.payload.name === 'IDAction') {
      newState = state;
    }
    else if (action.payload.name === 'DLAction') {
      newState = state;
    }
  }

  else if (action.type === TYPES.ADD_APP){
    if (action.payload.value === 'id-card') {
      newState = true;
    } else {
      newState = state;
    }
  }

  else if (action.type === TYPES.UPDATE_YOUTH_ID_INSTEAD) {
    if (action.payload.name === 'youthIDOnly') {
      newState = true;
    }
    else {
      newState = action.payload.value === 'Yes';
    }
  }
  return newState;
};
export default formReducer;
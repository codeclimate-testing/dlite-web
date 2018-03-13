'use strict';

import { TYPES }            from '../../../actions';
import {
  cardTypeAction,
  sameIfAdding,
  trueIfYesNeverFalse
}   from '../../../helpers/reducers';

const defaultState = () => {
 return false;
};


const formReducer = (state = defaultState(), action) => {
  if (!action.payload) { return state; }
  if ( !cardTypeAction(action) ) { return state; }

  let newState = false;
  let name = action.payload.name;

  if (action.type === TYPES.UPDATE_CARD_TYPE) {
    let value = action.payload.value.split('-');
    if (value.length > 1) {
      if (value[0] === 'DL') {
        newState = state;
      }
      else {
        newState = action.payload.value === 'ID-true';
      }
    } else if(name === 'addFromSummary'){
      newState = trueIfYesNeverFalse(action.payload.value, 'ID', state);

    } else {
      newState = action.payload.value === 'ID';
    }
  }

  else if (action.type === TYPES.UPDATE_CARD_ACTION){
    newState = sameIfAdding(name, state);
  }

  else if (action.type === TYPES.UPDATE_YOUTH_ID_INSTEAD) {
    if (name === 'youthIDOnly') {
      newState = true;
    }
    else {
      newState = action.payload.value === 'Yes';
    }
  }
  return newState;
};
export default formReducer;
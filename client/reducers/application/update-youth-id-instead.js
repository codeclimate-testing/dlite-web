'use strict';

import { TYPES } from '../../actions';

const  defaultState = () => {
  return '';
};

const formReducer = (state = defaultState(), action) => {
  if (!action.payload) { return state;}
  if (action.type === TYPES.UPDATE_YOUTH_ID_INSTEAD) {
    return action.payload.value;
  }
  else if (action.type === TYPES.UPDATE_CARD_TYPE) {
    return defaultState();
  }
  else {
    return state;
  }
};

export default formReducer;

'use strict';

import { TYPES }            from '../../../actions';

const defaultState = () => {
  return {
    reason: ''
  }
};

const formReducer = (state = defaultState(), action) => {
  if (!action.payload) { return state;}
  if (action.type !== TYPES.UPDATE_CARD_REPLACEMENT) { return state; }

  if (action.payload.name === 'DL') {
    return Object.assign({}, state, {reason: action.payload.value});
  }
  return state;
};

export default formReducer;
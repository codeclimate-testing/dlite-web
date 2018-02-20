'use strict';

import { TYPES }            from '../../actions';

const defaultState = () =>  {
  return '';
};

const formReducer = (state = defaultState(), action) => {
  if (!action.payload) { return state; }
  if (action.type !== TYPES.ADD_APP && action.type !== TYPES.UPDATE_CARD_ACTION) { return state; }

  if (action.type === TYPES.UPDATE_CARD_ACTION) {
    return action.payload.value;
  }
  return defaultState();
};

export default formReducer;
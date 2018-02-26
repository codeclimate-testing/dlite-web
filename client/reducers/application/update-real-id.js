'use strict';

import { TYPES }            from '../../actions';

const defaultState = () =>  {
  return '';
};

const updateRealIDOnBothCards = (action) => {
  return action.type === TYPES.UPDATE_REAL_ID && action.payload.name === 'both';
};

const formReducer = (state = defaultState(), action) => {
  if (!updateRealIDOnBothCards(action)) { return state; }
  else {
    return action.payload.value;
  }
};

export default formReducer;
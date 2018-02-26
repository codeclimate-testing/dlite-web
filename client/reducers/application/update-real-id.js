'use strict';

import { TYPES }            from '../../actions';

const defaultState = () =>  {
  return '';
};

const formReducer = (state = defaultState(), action) => {
  if (action.type !== TYPES.UPDATE_REAL_ID) { return state; }
  let data = state;

  if (action.payload.name === 'both') {
    data = action.payload.value;
  };
  return data;
};

export default formReducer;
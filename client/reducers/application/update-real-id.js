'use strict';

import { TYPES }          from '../../actions';

const defaultState = () => {
  return {
    getRealID: '',
    realIdDesignation: ''
  };
};

const formReducer = (state = defaultState(), action) => {
  if (action.type !== TYPES.UPDATE_REAL_ID) { return state; }

  let data = Object.assign({}, state);
  let splitName = action.payload.name.split('-');

  data[splitName[0]] = action.payload.value;

  if (splitName[0] !== 'realIdDesignation' && splitName[1] !== 'both') {
    data.realIdDesignation = splitName[1];
  }
  return data;
};

export default formReducer;

'use strict';

import {TYPES}          from '../../../actions';
import { realID }       from '../../../helpers/reducers';

const defaultState = () => {
  return '';
};

const formReducer = (state = defaultState(), action) => {
  if (action.type !== TYPES.UPDATE_REAL_ID) { return state; }

  return realID(state, action, 'DL')
};

export default formReducer;
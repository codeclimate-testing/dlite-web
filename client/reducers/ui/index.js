'use strict';

import { combineReducers } from 'redux';

import focus from './focus';

const rootReducer = combineReducers({
  focus: focus
});

export default rootReducer;


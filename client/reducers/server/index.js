'use strict';

import { combineReducers }  from 'redux';

import apiStatus            from './api-status';

const rootReducer = combineReducers({
  apiStatus
});

export default rootReducer;


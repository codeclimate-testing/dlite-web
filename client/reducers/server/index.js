'use strict';

import { combineReducers }  from 'redux';

import apiStatus            from './api-status';
import translations         from './update-translations';
import userData             from './user-data';

const rootReducer = combineReducers({
  apiStatus,
  translations,
  userData
});

export default rootReducer;


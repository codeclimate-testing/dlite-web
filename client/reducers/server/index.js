'use strict';

import { combineReducers }  from 'redux';

import apiStatus            from './api-status';
import translations         from './update-translations';

const rootReducer = combineReducers({
  apiStatus,
  translations
});

export default rootReducer;


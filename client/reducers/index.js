'use strict';

import { combineReducers }    from 'redux';
import reduceReducers         from 'reduce-reducers';
import applicationReducers    from './application';
import uiReducers             from './ui';
import apiReducer             from './api-reducer';
import serverReducers         from './server';


const combinedReducers = combineReducers({
  application:    applicationReducers,
  ui:             uiReducers,
  server:         serverReducers
});

const rootReducer = reduceReducers(combinedReducers, apiReducer);

export default rootReducer;



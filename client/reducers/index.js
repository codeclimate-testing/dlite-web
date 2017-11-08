'use strict';

import { combineReducers }    from 'redux';
import reduceReducers         from 'reduce-reducers';
import applicationReducers    from './application';
import apiReducer             from './api-reducer';


const combinedReducers = combineReducers({
  application: applicationReducers
});

const rootReducer = reduceReducers(combinedReducers, apiReducer);

export default rootReducer;



'use strict';

import { combineReducers }  from 'redux';

import focus                from './focus';
import accordions           from './accordions';

const rootReducer = combineReducers({
  focus:        focus,
  accordions:   accordions
});

export default rootReducer;


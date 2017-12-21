'use strict';

import { combineReducers }  from 'redux';

import focus                from './focus';
import accordions           from './accordions';
import section              from './section';

const rootReducer = combineReducers({
  focus,
  accordions,
  section
});

export default rootReducer;


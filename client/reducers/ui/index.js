'use strict';

import { combineReducers }  from 'redux';

import focus                from './focus';
import accordions           from './accordions';
import section              from './section';
import validations          from './validations';

const rootReducer = combineReducers({
  focus,
  accordions,
  section,
  validations
});

export default rootReducer;


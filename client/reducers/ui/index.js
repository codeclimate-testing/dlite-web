'use strict';

import { combineReducers }  from 'redux';

import focus                from './focus';
import accordions           from './accordions';
import section              from './section';
import validations          from './validations';
import hover                from './hover';
import addApp               from './add-app';
import chooseApp            from './choose-app';
import locale               from './locale';

const rootReducer = combineReducers({
  focus,
  accordions,
  section,
  validations,
  hover,
  addApp,
  chooseApp,
  locale
});

export default rootReducer;

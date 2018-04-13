'use strict';

import { combineReducers }  from 'redux';

import focus                from './focus';
import accordions           from './accordions';
import section              from './section';
import validations          from './validations';
import hover                from './hover';
import flow                 from './app-type';
import chooseApp            from './choose-app';
import language             from './language';
import isLoggedIn           from './is-logged-in';
import timeout              from './timeout';
import adaTst               from './ada-tst';

const rootReducer = combineReducers({
  focus,
  accordions,
  section,
  validations,
  hover,
  flow  ,
  chooseApp,
  language,
  isLoggedIn,
  timeout,
  adaTst
});

export default rootReducer;

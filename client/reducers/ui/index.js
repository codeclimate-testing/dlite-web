'use strict';

import { combineReducers }  from 'redux';

import focus                from './focus';
import faqDrawers           from './faq-drawers';

const rootReducer = combineReducers({
  focus:        focus,
  faqDrawers:   faqDrawers
});

export default rootReducer;


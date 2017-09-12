'use strict';

import { combineReducers }    from 'redux';
import applicationReducers    from './application';

const rootReducer = combineReducers({
  application: applicationReducers
});

export default rootReducer;

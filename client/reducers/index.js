'use strict';

import { combineReducers }    from 'redux';
import reduceReducers         from 'reduce-reducers';
import applicationReducers    from './application';

const crossSliceReducer = function (state, action) {
	switch(action.type) {
    case 'RECV_ERROR':
      console.log(state);
			return Object.assign({}, state, {isLoading: false, data: action.data, error: true});
    case 'RECV_DATA':
      console.log(action);
			return Object.assign({}, state, {isLoading: false, data: action.data, error: false });
    case 'REQ_DATA':
      console.log(action);
			return Object.assign({}, state, {isLoading: true, error: false });
		default:
			return state;
	}
};

const combinedReducers = combineReducers({
  application: applicationReducers
});

const rootReducer = reduceReducers(combinedReducers, crossSliceReducer);

export default rootReducer;



'use strict';

import { TYPES }          from '../../actions';
import formValueReducer   from '../form-value-reducer';

function defaultState() {
  return false;
};

export default formValueReducer(defaultState, TYPES.UPDATE_LOGGED_IN);

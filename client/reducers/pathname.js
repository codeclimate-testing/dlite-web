'use strict';

import { TYPES }          from '../actions';
import formValueReducer   from './form-value-reducer';

function defaultState() {
  return '';
};

export default formValueReducer(defaultState, TYPES.CHANGE_PATHNAME);

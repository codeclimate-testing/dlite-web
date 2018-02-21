'use strict';

import { TYPES }          from '../../actions';
import formValueReducer   from '../application/form-value-reducer';

function defaultState() {
  return '';
};

export default formValueReducer(defaultState, TYPES.CHOOSE_APP);
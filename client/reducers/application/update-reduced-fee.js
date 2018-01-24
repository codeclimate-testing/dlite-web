'use strict';

import { TYPES }          from '../../actions';
import formObjectReducer  from './form-object-reducer';

function defaultState() {
  return {
    ID: '',
    form: ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_REDUCED_FEE);

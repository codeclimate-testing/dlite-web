'use strict';

import { TYPES }          from '../../actions';
import formObjectReducer  from './form-object-reducer';

function defaultState() {
  return {
    firstName: '',
    middleName: '',
    lastName: '',
    suffix: ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_LEGAL_NAME);

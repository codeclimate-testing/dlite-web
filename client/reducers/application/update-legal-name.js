'use strict';

import { TYPES } from '../../actions';
import formReducer from './form-reducer';

function defaultState() {
  return {
    firstName: '',
    middleName: '',
    lastName: ''
  };
}

export default formReducer(defaultState, TYPES.UPDATE_LEGAL_NAME);

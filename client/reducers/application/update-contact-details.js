'use strict';

import { TYPES } from '../../actions';
import formReducer from './form-reducer';

function defaultState() {
  return {
    emailAddress: '',
    phoneNumber: ''
  };
}

export default formReducer(defaultState, TYPES.UPDATE_CONTACT_DETAILS);

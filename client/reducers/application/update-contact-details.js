'use strict';

import { TYPES } from '../../actions';
import formObjectReducer from './form-object-reducer';

function defaultState() {
  return {
    emailAddress: '',
    phoneNumber: ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_CONTACT_DETAILS);

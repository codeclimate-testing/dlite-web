'use strict';

import { TYPES }          from '../../../actions';
import formObjectReducer  from '../form-object-reducer';

function defaultState() {
  return {
    shouldContact: '',
    emailAddress: '',
    phoneNumber1: '',
    phoneNumber2: '',
    phoneNumber3: ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_CONTACT_METHODS);

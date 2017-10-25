'use strict';

import { TYPES } from '../../actions';
import formObjectReducer from './form-object-reducer';

function defaultState() {
  return {
    shouldContact:  '',
    emailAddress:   '',
    phoneNumber:    ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_POLITICAL_CONTACT);

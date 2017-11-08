'use strict';

import { TYPES } from '../../actions';
import formObjectReducer from './form-object-reducer';

function defaultState() {
  return {
    street_1: '',
    street_2: '',
    city: '',
    state: 'CA',
    zip: '',
    homeAddressSameAsMailing: ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_HOME_ADDRESS);

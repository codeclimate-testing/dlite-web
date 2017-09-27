'use strict';

import { TYPES } from '../../actions';
import formObjectReducer from './form-object-reducer';

function defaultState() {
  return {
    street_1: '',
    street_2: '',
    city: '',
    state: 'CA',
    zip: ''
  };
}

export default formObjectReducer(defaultState, TYPES.COPY_HOME_ADDRESS);

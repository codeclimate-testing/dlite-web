'use strict';

import { TYPES } from '../../actions';
import formReducer from './form-reducer';

function defaultState() {
  return {
    street: '',
    city: '',
    state: 'CA',
    zip: '',
  };
}

export default formReducer(defaultState, TYPES.UPDATE_RESIDENCE_ADDRESS);

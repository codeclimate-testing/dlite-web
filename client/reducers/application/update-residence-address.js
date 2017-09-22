'use strict';

import { TYPES } from '../../actions';
import formObjectReducer from './form-object-reducer';

function defaultState() {
  return {
    street: '',
    city: '',
    state: 'CA',
    zip: '',
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_RESIDENCE_ADDRESS);

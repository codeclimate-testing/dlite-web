'use strict';

import { TYPES } from '../../actions';
import formReducer from './form-reducer';

function defaultState() {
  return {
    month: '',
    day: '',
    year: ''
  };
}

export default formReducer(defaultState, TYPES.UPDATE_DATE_OF_BIRTH);

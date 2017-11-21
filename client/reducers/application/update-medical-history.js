'use strict';

import { TYPES } from '../../actions';
import formObjectReducer from './form-object-reducer';

function defaultState() {
  return {
    medicalCondition: '',
    medicalInfo: ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_MEDICAL_HISTORY);

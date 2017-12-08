'use strict';

import { TYPES } from '../../actions';
import formObjectReducer from './form-object-reducer';

function defaultState() {
  return {
    getRealID: '',
    realIdDesignation: ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_REAL_ID);

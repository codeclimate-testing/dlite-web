'use strict';

import { TYPES } from '../../actions';
import formObjectReducer from './form-object-reducer';

function defaultState() {
  return {
    DLIDNumber:   '',
    issuedBy:     '',
    month:        '',
    day:          '',
    year:         ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_EXISTING_DL_ID_INFO);

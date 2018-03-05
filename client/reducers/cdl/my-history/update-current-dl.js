'use strict';

import { TYPES }          from '../../../actions';
import formObjectReducer  from '../../form-object-reducer';

function defaultState() {
  return {
    number:   '',
    month:        '',
    day:          '',
    year:         '',
    isIssued:     '',
    issuedBy:     ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_CDL_CURRENT_DL);

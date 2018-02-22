'use strict';

import { TYPES }          from '../../../actions';
import formObjectReducer  from '../../form-object-reducer';

function defaultState() {
  return {
    DLIDNumber:   '',
    issuedBy:     '',
    month:        '',
    day:          '',
    year:         '',
    isIssued:     ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_LICENSE_AND_ID_HISTORY);

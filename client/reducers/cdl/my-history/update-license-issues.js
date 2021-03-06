'use strict';

import { TYPES }          from '../../../actions';
import formObjectReducer  from '../../form-object-reducer';

function defaultState() {
  return {
    isSuspended:  '',
    month:        '',
    day:          '',
    year:         '',
    reason:       ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_CDL_LICENSE_ISSUES);

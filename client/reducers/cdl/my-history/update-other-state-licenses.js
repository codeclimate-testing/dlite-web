'use strict';

import { TYPES }          from '../../../actions';
import formObjectReducer  from '../../form-object-reducer';

function defaultState() {
  return {
    hasNonCALicense: '',
    tenYearHistory: '',
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_CDL_OTHER_STATE_LICENSES);

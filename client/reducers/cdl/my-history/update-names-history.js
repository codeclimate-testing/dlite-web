'use strict';

import { TYPES }          from '../../../actions';
import formObjectReducer  from '../../form-object-reducer';

function defaultState() {
  return {
    hasUsedPreviousNames: '',
    previousNames: ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_CDL_NAMES_HISTORY);

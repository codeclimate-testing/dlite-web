'use strict';

import { TYPES } from '../../actions';
import formObjectReducer from './form-object-reducer';

function defaultState() {
  return {
    usedPreviousNames: '',
    previousNames: ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_NAMES_HISTORY);

'use strict';

import { TYPES } from '../../actions';
import formObjectReducer from './form-object-reducer';

function defaultState() {
  return {
    names: '',
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_PREVIOUS_NAMES_INFO);

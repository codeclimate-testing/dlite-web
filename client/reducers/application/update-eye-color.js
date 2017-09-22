'use strict';

import { TYPES } from '../../actions';
import formObjectReducer from './form-object-reducer';

function defaultState() {
  return {
    eyeColor: ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_EYE_COLOR);

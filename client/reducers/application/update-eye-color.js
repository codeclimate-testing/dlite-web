'use strict';

import { TYPES } from '../../actions';
import formReducer from './form-reducer';

function defaultState() {
  return {
    eyeColor: ''
  };
}

export default formReducer(defaultState, TYPES.UPDATE_EYE_COLOR);

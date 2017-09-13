'use strict';

import { TYPES } from '../../actions';
import formReducer from './form-reducer';

function defaultState() {
  return {
    hairColor: ''
  };
}

export default formReducer(defaultState, TYPES.UPDATE_HAIR_COLOR);

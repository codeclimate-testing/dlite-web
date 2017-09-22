'use strict';

import { TYPES } from '../../actions';
import formObjectReducer from './form-object-reducer';

function defaultState() {
  return {
    hairColor: ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_HAIR_COLOR);

'use strict';

import { TYPES } from '../../actions';
import formObjectReducer from './form-object-reducer';

function defaultState() {
  return {
    feet: '',
    inches: '',
    weight: ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_TRAITS_HEIGHT_WEIGHT);

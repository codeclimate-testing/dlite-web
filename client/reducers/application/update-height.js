'use strict';

import { TYPES } from '../../actions';
import formObjectReducer from './form-object-reducer';

function defaultState() {
  return {
    feet: '',
    inches: ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_HEIGHT);

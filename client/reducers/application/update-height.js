'use strict';

import { TYPES } from '../../actions';
import formReducer from './form-reducer';

function defaultState() {
  return {
    feet: '',
    inches: ''
  };
}

export default formReducer(defaultState, TYPES.UPDATE_HEIGHT);

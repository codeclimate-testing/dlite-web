'use strict';

import { TYPES } from '../../actions';
import formObjectReducer from './form-object-reducer';

function defaultState() {
  return {
    ID: false,
    DL: false
  }
}

export default formObjectReducer(defaultState, TYPES.UPDATE_CARD_TYPE);


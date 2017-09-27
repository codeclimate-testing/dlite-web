'use strict';

import { TYPES } from '../../actions';
import formValueRecurer from './form-value-reducer';

function defaultState() {
  return '';
}

export default formValueRecurer(defaultState, TYPES.UPDATE_VOTER_CITIZEN_STATUS);


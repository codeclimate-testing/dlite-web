'use strict';

import { TYPES }          from '../../actions';
import formObjectReducer  from './form-object-reducer';

function defaultState() {
  return {
    donateOrgan: '',
    donateMoney: ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_ORGAN_DONATION);

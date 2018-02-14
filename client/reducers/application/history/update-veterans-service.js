'use strict';

import { TYPES }          from '../../../actions';
import formObjectReducer  from '../form-object-reducer';

function defaultState() {
  return {
    isVeteran: '',
    receiveBenefits: '',
    veteransIdentifier: '',
    previouslyDesignated: ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_VETERANS_SERVICE);

'use strict';

import { TYPES }          from '../../../actions';
import formObjectReducer  from '../../form-object-reducer';

function defaultState() {
  return {
    isVeteran: '',
    receiveBenefits: '',
    militaryWaiver: '',
    veteransIdentifier: '',
    previouslyDesignated: ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_CDL_VETERANS_SERVICE);

'use strict';

import { TYPES } from '../../actions';
import formObjectReducer from './form-object-reducer';

function defaultState() {
 return {
    isSelected:  '',
    politicalPartyChoose: ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_POLITICAL_PARTY_CHOOSE);
'use strict';

import { TYPES }          from '../../../actions';
import formObjectReducer  from '../../form-object-reducer';

function defaultState() {
  return {
    weight: '',
    heightFeet: '',
    heightInches: ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_CDL_HEIGHT_WEIGHT);

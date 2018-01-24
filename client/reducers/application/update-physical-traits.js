'use strict';

import { TYPES }          from '../../actions';
import formObjectReducer  from './form-object-reducer';

function defaultState() {
  return {
    sex: '',
    eyeColor: '',
    hairColor: ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_PHYSICAL_TRAITS);

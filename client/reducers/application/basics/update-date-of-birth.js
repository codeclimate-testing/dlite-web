'use strict';

import { TYPES }          from '../../../actions';
import formObjectReducer  from '../../form-object-reducer';

function defaultState() {
  return {
    month: '',
    day: '',
    year: ''
  }
}

export default formObjectReducer(defaultState, TYPES.UPDATE_DATE_OF_BIRTH);

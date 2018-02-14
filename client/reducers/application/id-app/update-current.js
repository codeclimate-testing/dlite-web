'use strict';

import { TYPES }          from '../../../actions';
import formObjectReducer  from '../form-object-reducer';

function defaultState() {
  return {
    number:   '',
    month:        '',
    day:          '',
    year:         ''
  };
}

export default formObjectReducer(defaultState, TYPES.UPDATE_CURRENT_CARD_INFO);

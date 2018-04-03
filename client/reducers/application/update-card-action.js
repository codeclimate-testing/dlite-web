'use strict';

import { TYPES }            from '../../actions';
import formValueReducer     from './../form-value-reducer';

const defaultState = () =>  {
  return '';
};

export default formValueReducer(defaultState, TYPES.UPDATE_CARD_ACTION);

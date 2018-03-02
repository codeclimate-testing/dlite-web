'use strict';

import { TYPES }            from '../../actions';
import formValueReducer    from '../form-object-reducer';

function defaultState() {
  return '';
};

export default formValueReducer(defaultState, TYPES.UPDATE_CDL_CLASS);

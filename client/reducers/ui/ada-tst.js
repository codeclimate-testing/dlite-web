'use strict';

import formValueReducer   from '../form-value-reducer';

function defaultState() {
  return false;
};

export default formValueReducer(defaultState, 'UPDATE_ADA_TST');

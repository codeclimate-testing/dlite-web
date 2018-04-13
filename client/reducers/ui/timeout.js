'use strict';

import formValueReducer   from '../form-value-reducer';

function defaultState() {
  return '600000';
};

export default formValueReducer(defaultState, 'UPDATE_APP_TIMEOUT');

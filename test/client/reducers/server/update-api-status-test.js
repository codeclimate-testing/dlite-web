'use strict';

import assert           from 'assert';
import updateAPIStatus  from '../../../../client/reducers/server/api-status';

describe('licenseTypeReducer', function() {
  let action, state;
  beforeEach(function() {
    state = '';
    action = {
      type: 'UPDATE_API_STATUS',
      payload: {
        value: ''
      }
    };
  });
  it('saves value to redux', function() {
    action.payload.value = 'loading';
    assert.equal(
      updateAPIStatus(state, action), 'loading'
    );
  });
});



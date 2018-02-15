'use strict';

import assert           from 'assert';
import addAppReducer    from '../../../../client/reducers/ui/add-app';

describe('addApp reducer', function() {
  let state;
  beforeEach(function() {
    state = '';
  });

  it('does not update addApp for non ADD_APP actions', function() {
    assert.deepEqual(addAppReducer(state, {type: 'WHATEVER'}), state);
  });

  it('on value "driver-license" updates state to value', function() {
    let action = {
      type: 'ADD_APP',
      payload: {
        value: 'driver-license'
      }
    };
    assert.equal(addAppReducer(state, action), 'driver-license');
  });
});

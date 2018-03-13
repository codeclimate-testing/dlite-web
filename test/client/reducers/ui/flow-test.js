'use strict';

import assert             from 'assert';
import appTypeReducer     from '../../../../client/reducers/ui/app-type';

describe('app type reducer', function() {
  let state;
  beforeEach(function() {
    state = '';
  });

  it('on value "ID" updates state to value', function() {
    let action = {
      type: 'ADD_APP',
      payload: {
        value: 'ID'
      }
    };
    assert.equal(appTypeReducer(state, action), 'ID');
  });
});

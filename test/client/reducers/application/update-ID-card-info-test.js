'use strict';

import assert               from 'assert';
import updateCurrent        from '../../../../client/reducers/application/id-app/update-current';

const currentID = {
  type: 'UPDATE_CURRENT_CARD_INFO',
  payload: {
    name: 'number',
    value: '0000'
  }
};


describe('ID replacement reason', function() {
  let state;

  beforeEach(function() {
    state = {
      number:   '',
      month:        '',
      day:          '',
      year:         ''
    };
  });

  it('returns the action payload value', function() {
    let newState = updateCurrent(state, currentID);
    assert.deepEqual(newState.number, currentID.payload.value);
  });

  it('returns the existing state if action is other type', function(){
    let newState = updateCurrent(state, {
      type: 'OTHER'
    });
    assert.deepEqual(newState, state);
  });
});
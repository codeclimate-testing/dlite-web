'use strict';

import assert               from 'assert';
import updateCurrent        from '../../../../client/reducers/application/dl-app/update-current';

const currentDL = {
  type: 'UPDATE_CURRENT_CARD_INFO',
  payload: {
    name: 'number',
    value: '0000'
  }
};



describe('DL replacement reason', function() {
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
    let newState = updateCurrent(state, currentDL);
    assert.deepEqual(newState.number, currentDL.payload.value);
  });

  it('returns the existing state if other action type', function(){
    let newState = updateCurrent(state, {
      type: 'OTHER_TYPE'
    });
    assert.deepEqual(newState, state);
  });
});
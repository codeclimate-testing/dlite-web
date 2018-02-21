'use strict';

import assert               from 'assert';
import updateChanges        from '../../../../client/reducers/application/dl-app/update-changes';

const IDChanges = {
  type: 'UPDATE_CARD_CHANGES',
  payload: {
    name: 'ID-correctOrUpdate',
    value: 'update'
  }
};

const DLChanges = {
  type: 'UPDATE_CARD_CHANGES',
  payload: {
    name: 'DL-correctOrUpdate',
    value: 'correct'
  }
};


describe('DL replacement reason', function() {
  let state;

  beforeEach(function() {
    state = {
      correctOrUpdate: '',
      sections: [],
      other: ''
    };
  });

  it('returns the action payload value if action payload name is DL', function() {
    let newState = updateChanges(state, DLChanges);
    assert.deepEqual(newState.correctOrUpdate, DLChanges.payload.value);
  });

  it('returns the existing state if action payload name is ID', function(){
    let newState = updateChanges(state, IDChanges);
    assert.deepEqual(newState, state);
  });
});
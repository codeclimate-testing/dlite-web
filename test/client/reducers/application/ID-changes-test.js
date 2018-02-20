'use strict';

import assert               from 'assert';
import updateChanges        from '../../../../client/reducers/application/id-app/update-changes';

const IDChanges = {
  type: 'UPDATE_CARD_CHANGES',
  payload: {
    name: 'ID-sections',
    value: 'update-true'
  }
};

const DLChanges = {
  type: 'UPDATE_CARD_CHANGES',
  payload: {
    name: 'DL-sections',
    value: 'correct-true'
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

  it('pushes the action payload value if action payload name is ID-sections', function() {
    let newState = updateChanges(state, IDChanges);
    assert.deepEqual(newState.sections, ['update']);
  });

  it('returns the existing state if action payload name is DL', function(){
    let newState = updateChanges(state, DLChanges);
    assert.deepEqual(newState, state);
  });
});
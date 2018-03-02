'use strict';

import assert           from 'assert';
import updateChanges    from '../../../../client/reducers/cdl/update-card-changes';


describe('CDL update card changes reducer', function() {
  let action, state;

  beforeEach(function() {
    action = {
      type: 'UPDATE_CDL_CHANGES',
      payload: {
        name: '',
        value: ''
      }
    };
    state = {
      correctOrUpdate: '',
      sections: [],
      other: ''
    };
  });

  describe('#update correctOrUpdate', function() {

    it('passes selection to correctOrUpdate', function() {
      action.payload.name = 'correctOrUpdate';
      action.payload.value = 'correct';
      let firstState = updateChanges(state, action);
      assert.equal(firstState.correctOrUpdate, action.payload.value);
    });

    it('passes selection to other', function() {
      action.payload.name = 'other';
      action.payload.value = 'would like some cake';
      let firstState = updateChanges(state, action);
      assert.equal(firstState.other, action.payload.value);
    });
  });

  describe('#update sections', function() {
    it('pushes payload value into array', function() {
      action.payload.name = 'sections';
      action.payload.value = 'name-true';
      let firstState = updateChanges(state, action);
      assert.ok(firstState.sections.includes('name'));
    });
  });
});
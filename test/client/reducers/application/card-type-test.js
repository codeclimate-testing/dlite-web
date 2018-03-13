'use strict';

import assert from 'assert';

import updateCardType  from '../../../../client/reducers/application/update-card-type';

const buildState = (type, action) => {
  return [type];
};

const checkboxID = {
  type: 'UPDATE_CARD_TYPE',
  payload: {
    name: 'new',
    value: 'ID-true'
  }
};

const checkboxDL = {
  type: 'UPDATE_CARD_TYPE',
  payload: {
    name: 'IDDL',
    value: 'DL-true'
  }
};

const radioDL = {
  type: 'UPDATE_CARD_TYPE',
  payload: {
    name: 'IDDL',
    value: 'DL'
  }
};

const radioID = {
  type: 'UPDATE_CARD_TYPE',
  payload: {
    name: 'IDDL',
    value: 'ID'
  }
};

const selectYes = {
  type: 'UPDATE_YOUTH_ID_INSTEAD',
  payload: {
    name: 'youthIDInstead',
    value: 'Yes'
  }
};

const selectNo = {
  type: 'UPDATE_YOUTH_ID_INSTEAD',
  payload: {
    name: 'youthIDInstead',
    value: 'No'
  }
};

const updateAction = {
  type: 'UPDATE_CARD_ACTION',
  payload: {
    name: 'cardAction',
    value: 'renew'
  }
};

describe('cardTypeReducer', function() {
  let state;
  beforeEach(function() {
    state = ['DL'];
  });

  describe('#youthID', function() {
    it('it updates the array to just have an ID if youthIDInstead is Yes', function() {
      const newState = updateCardType(state, selectYes);

      assert.deepEqual(
        newState, ['ID'], 'youthIDInstead data element not saved'
      );
    });

    it('returns the existing state if youthIDInstead is No', function() {
      const newState = updateCardType(state, selectNo);

      assert.deepEqual(newState, ['DL'], 'array not updated to have only ID card');
    });

    it('changes from both card types to just ID when user has selected Yes', function() {
      state = ['ID', 'DL'];
      let newState = updateCardType(state, selectYes);
      assert.deepEqual(newState, ['ID']);
    });

    it('shows the user getting both an ID and a DL when user has selected No', function() {
      let newState = updateCardType(state, {
        type: 'UPDATE_YOUTH_ID_INSTEAD',
        payload: {
          name: 'youthIDOnly',
          value: 'No'
        }
      });
      assert.deepEqual(newState, ['ID', 'DL']);
    });

    it('shows getting an ID after selecting Yes after No', function() {
      let newState1 = updateCardType(state, selectNo);
      let newState2 = updateCardType(newState1, selectYes);
      assert.deepEqual(newState2, ['ID']);
    });

    it('shows getting a DL after selecting No after Yes', function() {
      let newState1 = updateCardType(state, selectYes);
      let newState2 = updateCardType(newState1, selectNo);
      assert.deepEqual(newState2, ['DL']);
    });

  });

  describe('#updates cardTypes', function(){

    it('it adds ID to empty array when ID checkbox is updated', function() {
      let newState = updateCardType(state, checkboxID);
      assert.ok(newState.includes('ID'));
      assert.ok(newState.includes('DL'));
    });

    it('passing true value as boolean behaves the same way as as a string (test above)', function() {
      assert.deepEqual(
        updateCardType(state,
          {
            type: 'UPDATE_CARD_TYPE',
            payload: {
              name: 'IDDL',
              value: 'ID-'+true
            }
          }
        ),
        state
      );
    });

    it('removes DL from the array when unselected', function() {
      let newState = updateCardType(state, {
        type: 'UPDATE_CARD_TYPE',
        payload: {
          name: 'new',
          value: 'DL-false'
        }
      });
      assert.deepEqual(newState, []);
    });

    it('changes the array from [DL] to [ID] when ID radio box is selected', function() {
      state = ['DL'];
      let newState = updateCardType(state, radioID);
      assert.deepEqual(newState, ['ID']);
    });

    it('pushes to the array when a second checkbox is selected', function() {
      state = ['DL'];
      let newState = updateCardType(state, checkboxID);
      assert.ok(newState.includes('ID'));
      assert.ok(newState.includes('DL'));
    });

    it('returns existing state when payload name is addFromSummary and action.payload.value matches the current state', function() {
      let action = {
        type: 'UPDATE_CARD_TYPE',
        payload: {
          name: 'addFromSummary',
          value: 'DL'
        }
      };
      let newState = updateCardType(state, action);
      assert.deepEqual(newState, state);
    });

  });

  describe('#cardAction', function() {

    it('clears the array when cardAction changed', function() {
      let newState = updateCardType(['ID', 'DL'], updateAction);

      assert.deepEqual(newState, []);
    });

    it('maintains the current state when cardAction on addDL wdywtdt page is changed', function() {
      state = ['DL'];
      let newState = updateCardType(state, {
        type: 'UPDATE_CARD_ACTION',
        payload: {
          name: 'DLAction',
          value: 'renew'
        }
      });
      assert.deepEqual(newState, state);
    });

    it('updates to just an ID when cardAction is changed from get an ID path', function() {
      let newState = updateCardType(['ID'], {
        type: 'UPDATE_CARD_ACTION',
        payload: {
          name: 'IDAction',
          value: 'replace'
        }
      });
      assert.deepEqual(newState, ['ID']);
    });

    it('updates to just an ID when cardAction is changed from get an ID path', function() {
      let newState = updateCardType(['ID'], {
        type: 'UPDATE_CARD_ACTION',
        payload: {
          name: 'IDAction',
          value: 'replace'
        }
      });
      assert.deepEqual(newState, ['ID']);
    });
  });

});



'use strict';

import assert           from 'assert';
import updateCardType   from '../../../../client/reducers/application/dl-app/update-dl';


const checkboxID = {
  type: 'UPDATE_CARD_TYPE',
  payload: {
    name: 'IDDL',
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

describe('DLApp isApplying reducer', function() {
  let state;
  beforeEach(function() {
    state = true;
  });

  describe('#youthID', function() {
    describe('## user getting just one card', function(){
      it('it returns false if youthIDInstead is Yes', function() {
        const newState = updateCardType(state, selectYes);
        assert.deepEqual( newState, false, 'DL is applying not changed to false' );
      });

      it('it returns true if youthIDInstead is No', function() {
        const newState = updateCardType(state, selectNo);
        assert.deepEqual( newState, true, 'DL is applying not changed to true' );
      });

      it ('reverts back to true is No chosen after choosing Yes', function() {
        const state1 = updateCardType(state, selectYes);
        const state2 = updateCardType(state1, selectNo);

        assert.deepEqual(state2, state);
      });
    });
  });


  describe('#updates cardTypes', function(){

    it('it returns the same starting value when ID checkbox is updated', function() {
      let newState = updateCardType(state, checkboxID);
      assert.deepEqual(newState, state);
    });

    it('it returns true when DL checkbox is updated', function() {
      let newState = updateCardType(state, checkboxDL);

      assert.deepEqual(newState, true);
    });

    it('passing true value as boolean behaves the same way as as a string (test above)', function() {
      assert.deepEqual(
        updateCardType(state,
          {
            type: 'UPDATE_CARD_TYPE',
            payload: {
              name: 'IDDL',
              value: 'DL-'+true
            }
          }
        ),
        true
      );
    });

    it('returns false when ID radio box is selected', function() {
      let newState = updateCardType(state, radioID);
      assert.deepEqual(newState, false);
    });

    it('returns true when DL radio box is selected', function() {
      let newState = updateCardType(state, radioDL);

      assert.deepEqual(newState, true);
    });
  });

  describe('#cardAction', function() {
    beforeEach(function() {
      state = false;
    });
    it('reverts to default state when action updated', function() {
      let newState = updateCardType(state, updateAction);

      assert.deepEqual(newState, false);
    });

    it('retains existing state when user is on the add DL flow', function() {
      let newState = updateCardType(state, {
        type: 'UPDATE_CARD_ACTION',
        payload: {
          name: 'DLAction',
          value: 'renew'
        }
      });

      assert.equal(newState, state);
    });

    it('retains existing state when user is on the add ID flow', function() {
      let newState = updateCardType(state, {
        type: 'UPDATE_CARD_ACTION',
        payload: {
          name: 'IDAction',
          value: 'renew'
        }
      });

      assert.equal(newState, state);
    });

  });

  describe('#addApp', function() {
    it('returns true when user has clicked button to add DL application', function() {
      state = false;
      let newState = updateCardType(state, {
        type: 'ADD_APP',
        payload: {
          value: 'driver-license'
        }
      });
      assert.equal(newState, true);
    });

    it('maintains state when has clicked button to add ID application', function() {
      state = false;
      let newState = updateCardType(state, {
        type: 'ADD_APP',
        payload: {
          value: 'id-card'
        }
      });
      assert.equal(newState, state);
    });
  });
});



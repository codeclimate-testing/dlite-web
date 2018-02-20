'use strict';

import assert           from 'assert';
import updateCardType   from '../../../../client/reducers/application/id-app/update-id';


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

describe('IDApp isApplying reducer', function() {
  let state;

  beforeEach(function() {
    state = false;
  });

  describe('#youthID', function() {
    describe('## user getting just one card', function(){

      it('it returns true if youthIDInstead is Yes', function() {
        const newState = updateCardType(state, selectYes);
        assert.deepEqual( newState, true);
      });

      it('it returns false if youthIDInstead is No', function() {
        const newState = updateCardType(state, selectNo);
        assert.deepEqual( newState, false );
      });

      it ('reverts back to false is No chosen after choosing Yes', function() {
        const state1 = updateCardType(state, selectYes);
        const state2 = updateCardType(state1, selectNo);

        assert.deepEqual(state2, state);
      });
    });

    describe('## youthIDOnly when user is getting both ID and DL', function() {

      it('it returns true if youthIDInstead is Yes', function() {
        const newState = updateCardType(true, {
          action: 'UPDATE_YOUTH_ID_INSTEAD',
          payload: {
            name: 'youthIDOnly',
            value: 'Yes'
          }
        });
        assert.deepEqual( newState, true);
      });

      it('it returns true if youthIDInstead is No', function() {
        const newState = updateCardType(true, {
          action: 'UPDATE_YOUTH_ID_INSTEAD',
          payload: {
            name: 'youthIDOnly',
            value: 'No'
          }
        });
        assert.deepEqual(newState, true );
      });

      it('returns false if No is chosen after choosing Yes', function() {
        const state1 = updateCardType(true, {
          type: 'UPDATE_YOUTH_ID_INSTEAD',
          payload: {
            name: 'youthIDOnly',
            value: 'Yes'
          }
        });
        const state2 = updateCardType(state1, selectNo);
        assert.deepEqual(state2, false);
      });
    });
  });


  describe('#updates cardTypes', function(){

    it('it returns true when ID checkbox is updated', function() {
      let newState = updateCardType(state, checkboxID);
      assert.deepEqual(newState, true);
    });

    it('it returns false when DL checkbox is updated', function() {
      let newState = updateCardType(state, checkboxDL);
      assert.deepEqual(newState, false);
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
        true
      );
    });

    it('returns true when ID radio box is selected', function() {
      let newState = updateCardType(state, radioID);
      assert.deepEqual(newState, true);
    });

    it('returns false when DL radio box is selected', function() {
      let newState = updateCardType(state, radioDL);

      assert.deepEqual(newState, false);
    });
  });

  describe('#cardAction', function() {

    it('reverts to default state when action updated', function() {
      state = true;
      let newState = updateCardType(state, updateAction);

      assert.deepEqual(newState, false);
    });

    it('retains existing state when card action updated from get ID flow', function() {
      let newState = updateCardType(state, {
        type: 'UPDATE_CARD_ACTION',
        payload: {
          name: 'IDAction',
          value: 'new'
        }
      });
      assert.equal(newState, state);
    });

    it('maintains the existing state when card action updated from get DL flow', function() {
      let newState = updateCardType(state, {
        type: 'UPDATE_CARD_ACTION',
        payload: {
          name: 'DLAction',
          value: 'new'
        }
      });
      assert.equal(newState, state);
    });

  });


  describe('#addApp', function() {
    it('returns true when user has clicked button to add ID application', function() {
      state = false;
      let newState = updateCardType(state, {
        type: 'ADD_APP',
        payload: {
          value: 'id-card'
        }
      });
      assert.equal(newState, true);
    });

    it('maintains state when has clicked button to add DL application', function() {
      state = false;
      let newState = updateCardType(state, {
        type: 'ADD_APP',
        payload: {
          value: 'driver-license'
        }
      });
      assert.equal(newState, state);
    });
  });
});


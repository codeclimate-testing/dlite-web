'use strict';

import assert           from 'assert';
import updateCardType   from '../../../../client/reducers/application/id-app/update-id-action';


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
    name: 'new',
    value: 'DL-true'
  }
};

const radioDL = {
  type: 'UPDATE_CARD_TYPE',
  payload: {
    name: 'renew',
    value: 'DL'
  }
};

const radioID = {
  type: 'UPDATE_CARD_TYPE',
  payload: {
    name: 'renew',
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

describe('IDApp action reducer', function() {
  let state;

  beforeEach(function() {
    state = '';
  });

  describe('#youthID', function() {
    describe('## getting just DL', function(){

      it('it returns "new" if youthIDInstead is Yes', function() {
        const newState = updateCardType(state, selectYes);
        assert.deepEqual( newState, 'new');
      });

      it('it returns "" if youthIDInstead is No', function() {
        const newState = updateCardType(state, selectNo);
        assert.deepEqual( newState, '' );
      });

      it ('reverts back to "new" is No chosen after choosing Yes', function() {
        const state1 = updateCardType(state, selectYes);
        const state2 = updateCardType(state1, selectNo);

        assert.deepEqual(state2, state);
      });
    });

    describe('## when user is getting both ID and DL', function() {
      it('it returns "new" if youthIDInstead is Yes', function() {
        const newState = updateCardType('new', {
          type: 'UPDATE_YOUTH_ID_INSTEAD',
          payload: {
            name: 'youthIDOnly',
            value: 'Yes'
          }
        });

        assert.equal(newState, "new");
      });

      it('it returns "new" if youthIDInstead is No', function() {
        const newState = updateCardType('new', {
          type: 'UPDATE_YOUTH_ID_INSTEAD',
          payload: {
            name: 'youthIDOnly',
            value: 'No'
          }
        });
        assert.equal( newState, 'new');
      });

      it ('reverts back to "new" if Yes is chosen after choosing No', function() {
        const state1 = updateCardType('new', {
          type: 'UPDATE_YOUTH_ID_INSTEAD',
          payload: {
            name: 'youthIDOnly',
            value: 'No'
          }
        });
        const state2 = updateCardType(state1, selectYes);

        assert.deepEqual(state2, 'new');
      });
    });
  });


  describe('#updates cardTypes', function(){

    it('it returns existing state when DL checkbox is updated', function() {
      let newState = updateCardType(state, checkboxDL);

      assert.deepEqual(newState, state);
    });

    it('it returns "new" when ID checkbox is updated', function() {
      let newState = updateCardType(state, checkboxID);

      assert.deepEqual(newState, 'new');
    });

    it('passing true value as boolean behaves the same way as as a string (test above)', function() {
      assert.deepEqual(
        updateCardType(state,
          {
            type: 'UPDATE_CARD_TYPE',
            payload: {
              name: 'new',
              value: 'ID-'+true
            }
          }
        ),
        'new'
      );
    });

    it('returns blank string when DL radio box is selected', function() {
      let newState = updateCardType(state, radioDL);
      assert.deepEqual(newState, '');
    });

    it('returns payload action name when ID radio box is selected', function() {
      let newState = updateCardType(state, radioID);

      assert.deepEqual(newState, radioDL.payload.name);
    });
  });

  describe('#cardAction', function() {
    it('reverts to default state when action updated', function() {
      state = 'new';
      let newState = updateCardType(state, updateAction);
      assert.deepEqual(newState, '');
    });
    it('returns the action payload value when action updated from get ID flow', function() {
      let newState = updateCardType(state, {
        type: 'UPDATE_CARD_ACTION',
        payload: {
          name: 'IDAction',
          value: 'replace'
        }
      });
      assert.equal(newState, 'replace');
    });

    it('returns the existing state when action updated from get DL flow', function() {
      state = 'change';
      let newState = updateCardType(state, {
        type: 'UPDATE_CARD_ACTION',
        payload: {
          name: 'DLAction',
          value: 'replace'
        }
      });
      assert.equal(newState, state);
    });
  });

  describe('#addApp', function() {
    it('returns existing state when user clicks button to add a DL after completing ID app', function() {
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



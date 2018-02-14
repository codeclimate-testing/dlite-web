'use strict';

import assert           from 'assert';
import updateCardType   from '../../../../client/reducers/application/dl-app/update-dl-action';


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

describe('DL app action reducer', function() {
  let state;

  beforeEach(function() {
    state = 'new';
  });

  describe('#youthID', function() {
    describe('##getting one card', function() {

      it('it returns blank if youthIDInstead is Yes', function() {
        const newState = updateCardType(state, selectYes);
        assert.deepEqual( newState, '');
      });

      it('it returns "new" if youthIDInstead is No', function() {
        const newState = updateCardType(state, selectNo);
        assert.deepEqual( newState, 'new' );
      });

      it ('reverts back to "new" is No chosen after choosing Yes', function() {
        const state1 = updateCardType(state, selectYes);
        const state2 = updateCardType(state1, selectNo);

        assert.deepEqual(state2, state);
      });
    });
  });


  describe('#UPDATE_CARD_TYPE', function(){

    it('it returns state when ID checkbox is updated', function() {
      let newState = updateCardType(state, checkboxID);

      assert.deepEqual(newState, state);
    });

    it('it returns "new" when DL checkbox is updated', function() {
      let newState = updateCardType(state, checkboxDL);

      assert.deepEqual(newState, 'new');
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
        'new'
      );
    });

    it('returns blank string when ID radio box is selected', function() {
      let newState = updateCardType(state, radioID);
      assert.deepEqual(newState, '');
    });

    it('returns payload action name when DL radio box is selected', function() {
      let newState = updateCardType(state, radioDL);

      assert.deepEqual(newState, radioDL.payload.name);
    });
  });

  describe('#cardAction', function() {
    it('reverts to default state when action updated', function() {
      let newState = updateCardType(state, updateAction);

      assert.deepEqual(newState, '');
    });

  });
});



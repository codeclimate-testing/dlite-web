'use strict';

import assert               from 'assert';
import updateYouthInstead   from '../../../../client/reducers/application/update-youth-id-instead';



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

const updateType = {
  type: 'UPDATE_CARD_TYPE',
  payload: {
    name: 'new',
    value: 'DL-true'
  }
};

describe('youth ID instead reducer', function() {
  let state;

  beforeEach(function() {
    state = '';
  });

  describe('#changing youth ID instead', function() {

    it('it returns "Yes" if youthIDInstead is Yes', function() {
      const newState = updateYouthInstead(state, selectYes);
      assert.equal( newState, 'Yes');
    });

    it('it returns "No" if youthIDInstead is No', function() {
      const newState = updateYouthInstead(state, selectNo);
      assert.equal(newState, 'No' );
    });
  });


  describe('#resets when card type changed', function(){

    beforeEach(function() {
      state = 'Yes'
    });

    it('it returns blank when DL checkbox is checked', function() {
      let newState = updateYouthInstead(state, updateType);

      assert.deepEqual(newState, '');
    });
  });

});



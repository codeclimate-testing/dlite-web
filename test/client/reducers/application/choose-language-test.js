'use strict';

import assert from 'assert';

import updateLanguage from '../../../../client/reducers/application/update-language';

describe('app and ballot language reducer', function() {
  let action, state, firstState;
  beforeEach(function() {
    action = {
      type: 'UPDATE_LANGUAGE',
      payload: {
        name: 'appLanguage',
        value: 'zh'
      }
    };
    state = {
      appLanguage: 'en',
      ballotLanguage: 'en',
      hasChosenBallot: false
    };
    firstState = updateLanguage(state, action);
  });

  describe('#app language', function() {
    it('initially defaults to english as pre-selected app and ballot language', function() {
      assert.equal(state.appLanguage, 'en');
      assert.equal(state.ballotLanguage, 'en');
    });
    it('passes selection to app language', function() {
      assert.equal(firstState.appLanguage, 'zh');
    });
  });

  describe('#ballot language', function() {

    it('should be pre-filled with user\'s selection from app language page ', function() {
      assert.deepEqual(firstState.ballotLanguage, firstState.appLanguage);
    });

    it('changing the ballot language does not change the app language', function() {
      action.payload.name = 'ballotLanguage';
      action.payload.value = 'en';
      let secondState = updateLanguage(firstState, action);
      assert.deepEqual(secondState.appLanguage, firstState.appLanguage, 'changing the ballot language has incorrectly updated the app language');
    });

    it('changing the ballot language updates the ballotLanguage redux state', function() {
      action.payload.name = 'ballotLanguage';
      action.payload.value = 'en';
      let secondState = updateLanguage(firstState, action);
      assert.equal(secondState.ballotLanguage, 'en');
      assert.equal(firstState.ballotLanguage, 'zh');
    });

    it('changing the app language when the ballot language has already been selected will not update the ballot language', function() {
      action.payload.name = 'ballotLanguage';
      action.payload.value = 'en';
      let secondState = updateLanguage(firstState, action);
      action.payload.name = 'appLanguage',
      action.payload.value = 'ko';
      let thirdState = updateLanguage(secondState, action);
      assert.equal(thirdState.appLanguage, 'ko');
      assert.equal(thirdState.ballotLanguage, 'en');
    });

    it('the ballot language will be pre-filled with the most recent app language selection', function() {
      action.payload.name = 'appLanguage';
      action.payload.value = 'tl';
      let secondState = updateLanguage(firstState, action);
      assert.equal(secondState.ballotLanguage, 'tl');
    });
  });
});



'use strict';

import assert from 'assert';

import updateBallotLanguage from '../../../../../client/reducers/application/voting/update-ballot-language';

describe('ballot language reducer', function() {

  let action, ballotLanguage, firstState;

  describe('ACTION UPDATE LANGUAGE', function() {

    beforeEach(function() {
      action = {
        type: 'UPDATE_LANGUAGE',
        payload: {
          name: 'language',
          value: 'zh'
        }
      };

      ballotLanguage = '';

      firstState = updateBallotLanguage(ballotLanguage, action);
    });

    it('initially nothing is selected', function() {
      assert.equal(ballotLanguage, '');
    });
    it('should be pre-filled with user\'s selection from app language page ', function() {
      assert.equal(firstState, 'zh');
    });

  });

  describe('ACTION UPDATE BALLOT LANGUAGE', function() {

    beforeEach(function() {
      action = {
        type: 'UPDATE_BALLOT_LANGUAGE',
        payload: {
          name: 'language',
          value: 'ko'
        }
      };

      ballotLanguage = '';

      firstState = updateBallotLanguage(ballotLanguage, action);
    });

    it('initially nothing is selected', function() {
      assert.equal(ballotLanguage, '');
    });

    it('selects ballot language', function() {
      assert.equal(firstState, 'ko');
    });

    it('updates ballot language', function() {
      let secondState = updateBallotLanguage(firstState, { type: 'UPDATE_BALLOT_LANGUAGE', payload: { name: 'language', value: 'hi' }});
      assert.equal(secondState, 'hi');
    });
  });

});



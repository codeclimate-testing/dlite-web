'use strict';

import assert from 'assert';

import updateLanguage from '../../../../../client/reducers/application/basics/update-language';

describe('application language reducer', function() {
  let action, language, firstState;
  beforeEach(function() {
    action = {
      type: 'UPDATE_LANGUAGE',
      payload: {
        name: 'language',
        value: 'zh'
      }
    };
    language =  '',

    firstState = updateLanguage(language, action);
  });

  describe('updates application basic language', function() {
    it('initially nothing is selected', function() {
      assert.equal(language, '');
    });
    it('updates app language', function() {
      assert.equal(firstState, 'zh');
    });
  });

});

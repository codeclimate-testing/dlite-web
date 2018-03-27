'use strict';

import assert                       from 'assert';
import updateLanguage               from '../../../../client/reducers/ui/language';
import { getLanguageFromCookie }    from '../../../../client/helpers/data/cookies';
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
    it('updates the language cookie', function() {
      assert.equal(getLanguageFromCookie(), action.payload.value);
    });
  });

});

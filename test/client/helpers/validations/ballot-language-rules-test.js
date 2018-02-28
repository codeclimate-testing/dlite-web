'use strict';

import assert     from 'assert';
import rule       from '../../../../client/helpers/validations/ballot-language-rules';
import messages   from '../../../../client/presentations/error-messages';

describe('ballot language rules:', function() {
  it('will give the ballotLanguageSelectionMissing message when nothing is selected', function() {
    let props = {
      locale: 'en'
    };

    assert.deepEqual(rule.ballotLanguage(props), [messages.ballotLanguageSelectionMissing]);
  });
});
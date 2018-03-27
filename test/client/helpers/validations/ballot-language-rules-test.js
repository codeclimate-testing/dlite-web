'use strict';

import assert     from 'assert';
import rule       from '../../../../client/helpers/validations/ballot-language-rules';

describe('ballot language rules:', function() {
  it('will give the ballotLanguageSelectionMissing message when nothing is selected', function() {
    let props = { };

    assert.deepEqual(rule.ballotLanguage(props), ['errorMessages.ballotLanguageSelectionMissing']);
  });
});
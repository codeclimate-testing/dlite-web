'use strict';

import assert     from 'assert';
import rule       from '../../../../client/helpers/validations/ballot-by-mail-rules';
import messages   from '../../../../client/presentations/error-messages';

describe('ballot by mail rules:', function() {
  it('will give the ballotByMailSelectionMissing message when nothing is selected', function() {
    let props = {
      locale: 'en'
    };

    assert.deepEqual(rule.ballotByMail(props), [messages.ballotByMailSelectionMissing]);
  });
});
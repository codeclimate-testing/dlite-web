'use strict';

import assert     from 'assert';
import rule       from '../../../../client/helpers/validations/ballot-by-mail-rules';

describe('ballot by mail rules:', function() {
  it('will give the ballotByMailSelectionMissing message when nothing is selected', function() {
    let props = { };

    assert.deepEqual(rule.ballotByMail(props), ['errorMessages.ballotByMailSelectionMissing']);
  });
});
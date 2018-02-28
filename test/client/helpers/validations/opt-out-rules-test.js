'use strict';

import assert     from 'assert';
import rule       from '../../../../client/helpers/validations/opt-out-rules';
import messages   from '../../../../client/presentations/error-messages';

describe('opt out rules:', function() {
  it('will give the wantToPreregisterSelectionMissing message when nothing is selected', function() {
    let props = {
      locale: 'en'
    };

    assert.deepEqual(rule.optOut(props), [messages.wantToPreregisterSelectionMissing]);
  });
});
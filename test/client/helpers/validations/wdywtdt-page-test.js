'use strict';

import assert   from 'assert';

import rules    from '../../../../client/helpers/validations/wdywtdt-rules';
import messages from '../../../../client/presentations/error-messages';

describe('WDYWTDT page validation rules:', function() {
  it('will give error when nothing has been selected', function() {
    let props = '';

    assert.deepEqual(rules.cardAction(props), [messages.applicationActionMissing]);
  });

  it('when an action is chosen it will not give an error', function() {
    let props = 'replace';

    assert.deepEqual(rules.cardAction(props), []);
  });
});


'use strict';

import assert   from 'assert';
import rules    from '../../../../client/helpers/validations/wdywtdt-rules';

describe('WDYWTDT page validation rules:', function() {
  it('will give error when nothing has been selected', function() {
    let props = { };

    assert.deepEqual(rules.cardAction(props), ['errorMessages.applicationActionMissing']);
  });

  it('when an action is chosen it will not give an error', function() {
    let props = 'replace';

    assert.deepEqual(rules.cardAction(props), []);
  });
});


'use strict';

import assert   from 'assert';
import rules    from '../../../../client/helpers/validations/replace-rules';

describe('replacement page validation rules', function() {
  it('when nothing has been selected, it gives the selectionMissing error message', function() {
    let props = {
      reason: ''
    };
    assert.deepEqual(rules.reason(props), ['errorMessages.selectionMissing']);
  });

  it('when a reason has been selected, it returns no errors', function() {
    let props = {
      reason: 'lost'
    };
    assert.deepEqual(rules.reason(props), []);
  });
});

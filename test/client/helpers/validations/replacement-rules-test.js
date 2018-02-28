'use strict';

import assert   from 'assert';

import rules    from '../../../../client/helpers/validations/replace-rules';
import messages from '../../../../client/presentations/error-messages';

describe('replacement page validation rules', function() {
  it('when nothing has been selected, it gives the selectionMissing error message', function() {
    let props = {
      reason: '',
      locale: 'en'
    };
    assert.deepEqual(rules.reason(props), [messages.selectionMissing]);
  });

  it('when a reason has been selected, it returns no errors', function() {
    let props = {
      reason: 'lost',
      locale: 'en'
    };
    assert.deepEqual(rules.reason(props), []);
  });
});

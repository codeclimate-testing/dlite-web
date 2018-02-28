'use strict';

import assert   from 'assert';

import rules    from '../../../../client/helpers/validations/seniorID-rules';
import messages from '../../../../client/presentations/error-messages';

describe('SeniorID page validation rules:', function() {
  it('will give error when nothing has been selected', function() {
    let props = {
      locale: 'en'
    };

    assert.deepEqual(rules.seniorID(props), [messages.selectionMissing]);
  });

  it('when "No" is selected it will not give an error', function() {
    let props = 'No';

    assert.deepEqual(rules.seniorID(props), []);
  });

  it('when "Yes" is selected it will not give an error', function() {
    let props = 'Yes';

    assert.deepEqual(rules.seniorID(props), []);
  });
});


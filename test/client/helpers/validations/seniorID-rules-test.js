'use strict';

import assert   from 'assert';
import rules    from '../../../../client/helpers/validations/seniorID-rules';

describe('SeniorID page validation rules:', function() {
  it('will give error when nothing has been selected', function() {
    let props = { };

    assert.deepEqual(rules.seniorID(props), ['errorMessages.selectionMissing']);
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


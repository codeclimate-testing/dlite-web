'use strict';

import assert   from 'assert';

import rules    from '../../../../client/helpers/validations/youthDL-rules';
import messages from '../../../../client/presentations/error-messages';

describe('YouthDL page validation rules:', function() {
  it('will give error when nothing has been selected', function() {
    let props = {
      locale: 'en'
    };

    assert.deepEqual(rules.youthIDInstead(props), [messages.selectionMissing]);
  });

  it('when "No" is selected it will not give an error', function() {
    let props = 'No';

    assert.deepEqual(rules.youthIDInstead(props), []);
  });

  it('when "Yes" is selected it will not give an error', function() {
    let props = 'Yes';

    assert.deepEqual(rules.youthIDInstead(props), []);
  });
});


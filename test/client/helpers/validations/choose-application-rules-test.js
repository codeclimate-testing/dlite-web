'use strict';

import assert   from 'assert';
import rules    from '../../../../client/helpers/validations/choose-application-rules';
import messages from '../../../../client/presentations/error-messages';

describe('Choose Application page validation rules:', function() {
  let props;
  beforeEach(function() {
    props = {
      chooseApp: '',
      locale:    'en'
    };
  });

  it('when nothing has been selected, it shows the generic selection missing error', function() {
    assert.deepEqual(rules.chooseApplication(props), [messages['selectionMissing']]);
  });

  it('when chooseApp equals "cdl" no error is returned', function() {
    props.chooseApp = 'cdl';
    assert.deepEqual(rules.chooseApplication(props), []);
  });

  it('when chooseApp equals "iddl" no error is returned', function() {
    props.chooseApp = 'iddl';
    assert.deepEqual(rules.chooseApplication(props), []);
  });

});


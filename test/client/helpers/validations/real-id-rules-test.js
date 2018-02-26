'use strict';

import assert   from 'assert';

import rules    from '../../../../client/helpers/validations/realID-rules';
import messages from '../../../../client/presentations/error-messages';

let props;

describe('RealID page validation rules:', function() {
  beforeEach(function() {
    let cardType = {
      IDDL: [],
      cardAction: '',
      youthIDInstead: ''
    };


    props = {
      cardType: [],
      realID: '',
      cardAction: '',
      IDApp: {
        isApplying: false,
        action: '',
        realID: ''
      },
      DLApp: {
        isApplying: false,
        action: '',
        realID: ''
      },
      locale: 'en'
    }
  });
  it('when nothing has been selected it will give realIdSelectionMissing error', function() {
    assert.deepEqual(rules.realID(props), [messages.realIdSelectionMissing]);
  });

  it('when "No" is selected it will not give an error', function() {
    props.realID = 'No';

    assert.deepEqual(rules.realID(props), []);
  });

});


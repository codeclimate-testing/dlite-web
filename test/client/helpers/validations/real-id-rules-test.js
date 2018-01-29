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

    let realID = {
      getRealID: '',
      realIdDesignation: ''
    };

    props = {
      cardType,
      realID
    }
  });
  it('when nothing has been selected it will give realIdSelectionMissing error', function() {
    assert.deepEqual(rules.realID(props), [messages.realIdSelectionMissing]);
  });

  it('when "No" is selected it will not give an error', function() {
    props.realID = {
      getRealID: 'No',
      realIdDesignation: ''
    };

    assert.deepEqual(rules.realID(props), []);
  });

  it('when no realIdDesignation is selected it will give realIdCardSelectionMissing', function() {
    props.cardType.IDDL = ['ID', 'DL'];
    props.cardType.cardAction = 'new';
    props.realID = {
      getRealID: 'Yes',
      realIdDesignation: ''
    };

    assert.deepEqual(rules.designation(props), [messages.realIdCardSelectionMissing]);
  });
});


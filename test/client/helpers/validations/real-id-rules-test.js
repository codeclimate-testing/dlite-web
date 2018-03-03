'use strict';

import assert   from 'assert';

import rules    from '../../../../client/helpers/validations/realID-rules';
import messages from '../../../../client/presentations/error-messages';

let props;

describe('RealID page validation rules:', function() {
  beforeEach(function() {
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

  describe('#realID', function() {
    it('gives error when value is blank', function() {
      assert.ok(rules.realID(props).length > 0);
    });
    it('when nothing has been selected it will give realIdSelectionMissing error', function() {
      assert.deepEqual(rules.realID(props), [messages.realIdSelectionMissing]);
    });
    it('when "No" is selected it will not give an error', function() {
      props.realID = 'No';
      assert.deepEqual(rules.realID(props), []);
    });
  });

  describe('#designation', function() {
    it('does not give error if user is only getting one card', function() {
      props.IDApp.isApplying = true;
      props.realID = 'Yes';
      assert.ok(rules.designation(props).length === 0);
    });

    it('does not give error if user is not getting a real ID', function() {
      props.realID = 'No';
      assert.ok(rules.designation(props).length === 0);
    });

    it('gives error if user is getting real ID on both cards', function() {
      props.realID = 'Yes';
      props.IDApp.realID = 'Yes';
      props.DLApp.realID = 'Yes';
      assert.ok(rules.designation(props).length > 0);
    });

  });

});


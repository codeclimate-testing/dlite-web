'use strict';

import assert from 'assert';

import {
  getIDInfoString,
  getCorrectString
} from '../../../../client/helpers/data/get-started';

describe('Data helpers for get started page', function() {
  let props;
  beforeEach(function() {
    props = {
      seniorID: '',
      reducedFee: {
        ID: '',
        form: ''
      },
      realID: {
        getRealID: '',
        realIdDesignation: ''
      },
      cardType: {
        cardAction: '',
        IDDL: []
      }
    }
  });
  describe('#getIDInfoString', function() {
    const newString = 'new';
    const reducedString = 'reduced';
    const noFeeString = 'no fee';
    const seniorString = 'senior';

    it('returns the no fee string if user selected Yes to getting senior ID', function() {
      props.seniorID = 'Yes';
      let result = getIDInfoString(props, newString, reducedString, noFeeString, seniorString);
      assert.equal(result, noFeeString);
    });
    it('returns the senior string if user selected no to getting senior ID', function() {
      props.seniorID = 'No';
      let result = getIDInfoString(props, newString, reducedString, noFeeString, seniorString);
      assert.equal(result, seniorString);
    });
    it('returns the reduced fee string if user opted for reduced fee', function() {
      props.reducedFee.ID = 'Yes';
      let result = getIDInfoString(props, newString, reducedString, noFeeString, seniorString);
      assert.equal(result, reducedString);
    });
    it('returns the new string by default', function() {
      let result = getIDInfoString(props, newString, reducedString, noFeeString, seniorString);
      assert.equal(result, newString);
    });
  });

  describe('#getCorrectString', function() {
    const DLString = 'license string';
    const IDString = 'ID string';
    it('returns ID string when user is changing ID', function() {
      props.cardType.IDDL = ['ID'];
      props.cardType.cardAction = 'change';
      let result = getCorrectString(props, DLString, IDString);
      assert.equal(result, IDString);
    });

    it('returns DL string when user is changing a DL', function() {
      props.cardType.IDDL = ['DL'];
      props.cardType.cardAction = 'change';
      let result = getCorrectString(props, DLString, IDString);
      assert.equal(result, DLString);
    });
  });
});
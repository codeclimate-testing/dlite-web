'use strict';

import assert from 'assert';

import {
  getCorrectString,
  getIDString,
  getStringByAction,
  getEndorsementString,
  getRealIDString,
  getVehicleInfoArray
} from '../../../../client/helpers/data/get-started';

const DLString = 'license string';
const IDString = 'ID string';

const defaultString = 'show this if other conditions not met';
const reducedString = 'reduced';
const noFeeString = 'no fee';
const seniorString = 'senior';

const newString = 'new string';
const renewString = 'this is the string I see when I renew my card';
const replaceString = 'now i am replacing it';
const updateString = 'update string';
const correctString = 'correct string';

const classC = 'class C';
const classM = 'class M';
const classA = 'A';
const classB = 'B';

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
      },
      licenseType: {
        type: [],
        endorsement: []
      },
      cardChanges: {
        correctOrUpdate: ''
      }
    }
  });

  describe('#getCorrectString', function() {
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

  describe('#getIDString', function() {
    it('returns the no fee string if user selected Yes to getting senior ID', function() {
      props.seniorID = 'Yes';
      let result = getIDString(props, defaultString, reducedString, noFeeString, seniorString);
      assert.equal(result, noFeeString);
    });
    it('returns the senior string if user selected no to getting senior ID', function() {
      props.seniorID = 'No';
      let result = getIDString(props, defaultString, reducedString, noFeeString, seniorString);
      assert.equal(result, seniorString);
    });
    it('returns the reduced fee string if user opted for reduced fee', function() {
      props.reducedFee.ID = 'Yes';
      let result = getIDString(props, defaultString, reducedString, noFeeString, seniorString);
      assert.equal(result, reducedString);
    });
    it('returns the default string if other conditions are not met', function() {
      let result = getIDString(props, defaultString, reducedString, noFeeString, seniorString);
      assert.equal(result, defaultString);
    });
  });

  describe('#getStringByAction', function() {
    it('returns the new string if cardAction is new', function() {
      props.cardType.cardAction = 'new';
      assert.equal(getStringByAction(props, newString, renewString, replaceString, updateString, correctString), newString);
    });
    it('returns the renew string if cardAction is renew', function() {
      props.cardType.cardAction = 'renew';
      assert.equal(getStringByAction(props, newString, renewString, replaceString, updateString, correctString), renewString);
    });
    it('returns the replace string if cardAction is replace', function() {
      props.cardType.cardAction = 'replace';
      assert.equal(getStringByAction(props, newString, renewString, replaceString, updateString, correctString), replaceString);
    });
    it('returns the update string if cardAction is change and cardChange is update', function() {
      props.cardType.cardAction = 'change';
      props.cardChanges.correctOrUpdate = 'update';
      assert.equal(getStringByAction(props, newString, renewString, replaceString, updateString, correctString), updateString);
    });
    it('returns the correct string if cardAction is change and cardChange is correct', function() {
      props.cardType.cardAction = 'change';
      props.cardChanges.correctOrUpdate = 'correct';
      assert.equal(getStringByAction(props, newString, renewString, replaceString, updateString, correctString), correctString);
    });
  });

  describe('#getEndorsementString', function() {
    const fireString = 'test test test';
    it('returns the firefighter endorsement if the endorsement array includes firefighter', function() {
      props.licenseType.endorsement = ['firefighter'];
      assert.equal(getEndorsementString(props, fireString), fireString);
    });
    it('returns a blank string if array does not include firefighter', function() {
      assert.equal(getEndorsementString(props, fireString), '');
    });
  });
  describe('#getRealIDString', function() {
    it('returns the DL string if user is only getting a DL', function() {
      props.cardType.IDDL = ['DL'];
      assert.equal(getRealIDString(props, IDString, DLString), DLString);
    });
    it('returns the DL string if user is getting both card types and has specified real ID on DL', function() {
      props.cardType.IDDL = ['DL', 'ID'];
      props.realID.realIdDesignation = 'DL';
      assert.equal(getRealIDString(props, IDString, DLString), DLString);
    });
    it('returns the ID string if user is getting only an ID', function() {
      props.cardType.IDDL = ['ID'];
      assert.equal(getRealIDString(props, IDString, DLString), IDString);
    });
    it('returns the ID string if user is getting both card types and has specified real ID on ID', function() {
      props.cardType.IDDL = ['DL', 'ID'];
      props.realID.realIdDesignation = 'ID';
      assert.equal(getRealIDString(props, IDString, DLString), IDString);
    });
    it('returns a blank string if user is getting both card types but has not specified which card to put real id', function() {
      props.cardType.IDDL = ['DL', 'ID'];
      assert.equal(getRealIDString(props, IDString, DLString), '');
    });
  });
  describe('#getVehicleInfoArray', function() {
    it('pushes classC text to array when type array includes "car"', function() {
      props.licenseType.type = ['car'];
      assert.equal(getVehicleInfoArray(props, classC, classM, classA, classB)[0], classC);
    });
    it('pushes classM text to array when type array includes "cycle"', function() {
      props.licenseType.type = ['cycle'];
      assert.equal(getVehicleInfoArray(props, classC, classM, classA, classB)[0], classM);
    });
    it('pushes classA text to array when type array includes "long"', function() {
      props.licenseType.type = ['long'];
      assert.equal(getVehicleInfoArray(props, classC, classM, classA, classB)[0], classA);
    });
    it('pushes classB text to array when type array includes "trailer"', function() {
      props.licenseType.type = ['trailer'];
      assert.equal(getVehicleInfoArray(props, classC, classM, classA, classB)[0], classB);
    });
  });
});
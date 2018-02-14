'use strict';

import assert from 'assert';

import {
  getIDString,
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

const classC = 'class C';
const classM = 'class M';
const classA = 'A';
const classB = 'B';

describe('Data helpers for get started page', function() {
  let props;
  beforeEach(function() {
    props = {
      realID: {
        getRealID: '',
        realIdDesignation: ''
      },
      cardType: [],
      cardAction: '',
      DLApp: {
        licenseType: {
          type: [],
          endorsement: []
        },
        cardChanges: {
          correctOrUpdate: ''
        }
      },
      IDApp: {
        seniorID: '',
        reducedFee: {
          ID: '',
          form: ''
        },
        cardChanges: {
          correctOrUpdate: ''
        }
      }
    }
  });

  describe('#getIDString', function() {
    it('returns the no fee string if user selected Yes to getting senior ID', function() {
      props.IDApp.seniorID = 'Yes';
      let result = getIDString(props, defaultString, reducedString, noFeeString, seniorString);
      assert.equal(result, noFeeString);
    });
    it('returns the senior string if user selected no to getting senior ID', function() {
      props.IDApp.seniorID = 'No';
      let result = getIDString(props, defaultString, reducedString, noFeeString, seniorString);
      assert.equal(result, seniorString);
    });
    it('returns the reduced fee string if user opted for reduced fee', function() {
      props.IDApp.reducedFee.ID = 'Yes';
      let result = getIDString(props, defaultString, reducedString, noFeeString, seniorString);
      assert.equal(result, reducedString);
    });
    it('returns the default string if other conditions are not met', function() {
      let result = getIDString(props, defaultString, reducedString, noFeeString, seniorString);
      assert.equal(result, defaultString);
    });
  });

  describe('#getEndorsementString', function() {
    const fireString = 'test test test';
    it('returns the firefighter endorsement if the endorsement array includes firefighter', function() {
      props.DLApp.licenseType.endorsement = ['firefighter'];
      assert.equal(getEndorsementString(props, fireString), fireString);
    });
    it('returns a blank string if array does not include firefighter', function() {
      assert.equal(getEndorsementString(props, fireString), '');
    });
  });
  describe('#getRealIDString', function() {
    it('returns the DL string if user is only getting a DL', function() {
      props.cardType = ['DL'];
      assert.equal(getRealIDString(props, IDString, DLString), DLString);
    });
    it('returns the DL string if user is getting both card types and has specified real ID on DL', function() {
      props.cardType= ['DL', 'ID'];
      props.realID.realIdDesignation = 'DL';
      assert.equal(getRealIDString(props, IDString, DLString), DLString);
    });
    it('returns the ID string if user is getting only an ID', function() {
      props.cardType = ['ID'];
      assert.equal(getRealIDString(props, IDString, DLString), IDString);
    });
    it('returns the ID string if user is getting both card types and has specified real ID on ID', function() {
      props.cardType = ['DL', 'ID'];
      props.realID.realIdDesignation = 'ID';
      assert.equal(getRealIDString(props, IDString, DLString), IDString);
    });
    it('returns a blank string if user is getting both card types but has not specified which card to put real id', function() {
      props.cardType = ['DL', 'ID'];
      assert.equal(getRealIDString(props, IDString, DLString), '');
    });
  });
  describe('#getVehicleInfoArray', function() {
    it('pushes classC text to array when type array includes "car"', function() {
      props.DLApp.licenseType.type = ['car'];
      assert.equal(getVehicleInfoArray(props, classC, classM, classA, classB)[0], classC);
    });
    it('pushes classM text to array when type array includes "cycle"', function() {
      props.DLApp.licenseType.type = ['cycle'];
      assert.equal(getVehicleInfoArray(props, classC, classM, classA, classB)[0], classM);
    });
    it('pushes classA text to array when type array includes "long"', function() {
      props.DLApp.licenseType.type = ['long'];
      assert.equal(getVehicleInfoArray(props, classC, classM, classA, classB)[0], classA);
    });
    it('pushes classB text to array when type array includes "trailer"', function() {
      props.DLApp.licenseType.type = ['trailer'];
      assert.equal(getVehicleInfoArray(props, classC, classM, classA, classB)[0], classB);
    });
  });
});
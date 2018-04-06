'use strict';

const assert = require('assert');

import {
  validToContinue,
  tooYoungForDL,
  checkPreReg,
  continueHidden,
  under16GuardianSignature,
  requireGuardianSignature,
  isNewDriver,
  needsKnowledgeTest,
  guardianSigned,
  guardianNotSigned,
  guardianHasValue,
  secondGuardian
} from '../../../../client/helpers/data/youth';

describe('Data helpers for youth', function() {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let data;

  beforeEach(function() {
    data = {
      dateOfBirth: {
        year: (year - 15).toString(),
        month: month.toString(),
        day: day.toString()
      },
      cardType:  ['DL'],
      cardAction: 'new',
      youthIDInstead: '',
      guardianSignature: {
        isSigned: '',
        guardianInfo: {
          0: {

          },
          1: {
            acceptLiabilities: ''
          }
        }
      }
    };
  });

  describe('validToContinue', function() {
    it('should be false if they are under 15 and dont want to switch to an ID', function() {
      data.dateOfBirth.year = (year - 10).toString();
      data.youthIDInstead = 'No';
      assert.equal(validToContinue(data), false);
    });

    it('should be true if they are 15 or over', function() {
      assert.equal(validToContinue(data), true);
    });

    it('should be true if they are a month under 15 but will switch to an ID', function() {
      data.dateOfBirth.year = (year - 15).toString();
      data.dateOfBirth.month = (month + 1).toString();
      data.youthIDInstead = 'Yes';

      assert.equal(validToContinue(data), true);
    });
  });

  describe('#tooYoungForDL', function() {
    it('should be true if they are under 15.5 and getting both an ID and a DL', function() {
      data.cardType = ['ID', 'DL'];
      assert.equal(tooYoungForDL(data), true);
    });

    it('should be false if they are under 15.5 but only getting an ID', function() {
      data.cardType = ['ID'];
      assert.equal(tooYoungForDL(data), false);
    });

    it('should be false if user is over 15.5 and getting a DL', function() {
      data.dateOfBirth.year = (year - 16).toString();

      assert.equal(tooYoungForDL(data), false);
    });
  });

  describe('#under16GuardianSignature', function() {
    it('is true if they are under 16', function() {
      assert.equal(tooYoungForDL(data), true);
    });

    it('should be false if they over 16', function() {
      data.dateOfBirth.year = (year - 16).toString();

      assert.equal(tooYoungForDL(data), false);
    });
  });

  describe('#checkPreReg', function() {
    it('returns "voterPreRegistration" if user is pre-registering to vote', function() {
      let dateOfBirth = {
        year: (year - 17).toString(),
        month: month.toString(),
        day: day.toString()
      };
      assert.equal(checkPreReg(dateOfBirth), 'voterPreRegistration');
    });

    it('returns "voterRegistration" if user is old enough to register to vote', function() {
      let dateOfBirth = {
        year: (year - 20).toString(),
        month: month.toString(),
        day: day.toString()
      };
      assert.equal(checkPreReg(dateOfBirth), 'voterRegistration');
    });
  });

  describe('#continueHidden', function() {
    it('returns true if user is not valid to continue', function() {
      data.dateOfBirth.year = (year - 10).toString();
      data.youthIDInstead = 'No';
      assert.equal(continueHidden(data), true);
    });

    it('returns false if user is valid to continue because they are over 15', function() {
      data.youthIDInstead = 'No';

      assert.equal(continueHidden(data), false);
    });

    it('returns false if user is under 15 but selects Yes to getting an ID instead of a DL', function() {
      data.dateOfBirth.year = (year - 15).toString();
      data.dateOfBirth.month = (month + 1).toString();
      data.youthIDInstead = 'Yes';
      assert.equal(continueHidden(data), false);
    });
  });

  describe('#under16GuardianSignature', function() {
    it('returns true when under 16', function() {
      assert.equal(under16GuardianSignature(data), true);
    });
    it('returns false when user over 16', function() {
      data.dateOfBirth.year = (year - 16).toString();
      assert.equal(under16GuardianSignature(data), false);
    });
  });

  describe('#requireGuardianSignature', function() {
    it('returns true if user is under 18 and getting a DL', function() {
      data.dateOfBirth.year = (year - 17).toString();
      data.DLApp = { isApplying : true };
      assert.equal(requireGuardianSignature(props), true);
    });
    it('returns true if user is under 18 and getting a DL and ID', function() {
      data.dateOfBirth.year = (year - 17).toString();
      data.DLApp = { isApplying : true };
      data.IDApp = { isApplying: true };
      assert.equal(requireGuardianSignature(props), true);
    });
    it('returns false if user is under 18 and getting an ID', function() {
      data.dateOfBirth.year = (year - 17).toString();
      data.DLApp = { isApplying : false };
      data.IDApp = { isApplying: true };
      assert.equal(requireGuardianSignature(props), false);
    });
  });

  describe('#isNewDriver', function() {
    it('returns true when user is 16', function() {
      data.dateOfBirth.year = (year - 16).toString();
      assert.equal(isNewDriver(data), true);
    });
    it('returns false when user is 14', function() {
      data.dateOfBirth.year = (year - 14).toString();
      assert.equal(isNewDriver(data), false);
    });
    it('returns false when user is 18', function() {
      data.dateOfBirth.year = (year - 18).toString();
      assert.equal(isNewDriver(data), false);
    });
  });
  describe('#needsKnowledgeTest', function() {
    it('returns true when user is under 17.5', function() {
      assert.equal(needsKnowledgeTest(data), true);
    });
    it('returns false when user is 18', function() {
      data.dateOfBirth.year = (year - 18).toString();
      assert.equal(needsKnowledgeTest(data), false);
    });
  });
  describe('#guardianSigned', function() {
    it('returns true when value is Yes', function() {
      data.guardianSignature.isSigned = 'Yes';
      assert.equal(guardianSigned(data), true);
    });
    it('returns false when value is No', function() {
      data.guardianSignature.isSigned = 'No';
      assert.equal(guardianSigned(data), false);
    });
    it('returns false when value is blank', function() {
      assert.equal(guardianSigned(data), false);
    });
  });
  describe('#guardianNotSigned', function() {
    it('returns true when value is No', function() {
      data.guardianSignature.isSigned = 'No';
      assert.equal(guardianNotSigned(data), true);
    });
    it('returns false when value is Yes', function() {
      data.guardianSignature.isSigned = 'Yes';
      assert.equal(guardianNotSigned(data), false);
    });
    it('returns false when value is blank', function() {
      assert.equal(guardianNotSigned(data), false);
    });
  });
  describe('#guardianHasValue', function() {
    it('returns true when value is Yes', function() {
      data.guardianSignature.isSigned = 'Yes';
      assert.equal(guardianHasValue(data), true);
    });
    it('returns true when value is Yes', function() {
      data.guardianSignature.isSigned = 'No';
      assert.equal(guardianHasValue(data), true);
    });
    it('returns false when value is blank', function() {
      assert.equal(guardianHasValue(data), false);
    });
  });
  describe('#secondGuardian', function() {
    it('returns true when value is true', function() {
      data.guardianSignature.guardianInfo[1].acceptLiabilities = true;
      assert.equal(secondGuardian(data), true);
    });
    it('returns false when value is false', function() {
      data.guardianSignature.guardianInfo[1].acceptLiabilities = false;
      assert.equal(secondGuardian(data), false);
    });
    it('returns false when value is blank', function() {
      assert.equal(secondGuardian(data), false);
    });
  });
});

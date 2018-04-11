'use strict';

const assert = require('assert');

import {
  IDme,
  dateOfBirth,
  wdywtdt,
  chooseCardType,
  currentCardInfo,
  changedCard,
  realID,
  seniorID,
  chooseLicenseClass
} from '../../../../../client/helpers/navigation/id-dl/get-started/next-path';

const today = new Date();

const state = () => {
  return {
    cardType: [],
    cardAction: '',
    dateOfBirth: {
      year: (today.getFullYear() - 40).toString(),
      month: (today.getMonth()).toString(),
      day: today.getDate().toString()
    },
    currentCardInfo: {
      number: '',
      day: '',
      year: ''
    },
    licenseAndIdHistory: {
      isIssued: '',
      month: '',
      year: '',
      day: ''
    },
    reducedFee: {
      ID: ''
    },
    seniorID: '',
    flow: ''
  };
};

const ID = ['ID'];
const DL = ['DL'];
const both = ['ID', 'DL'];

const seniorYear = (today.getFullYear() - 65).toString();

const youthYear = (today.getFullYear() - 15).toString();

describe('Data helpers for determining next path from current page and props in get-started section', function() {
  let data;

  describe('#normal flow', function() {
    beforeEach(function() {
      data = state();
    });

    describe('##IDme', function() {
      let props;
      beforeEach(function(){
        props = {
          flow: '',
          userData: {
            appsLength: '',
            userID: '',
            apps: [{
              cardType: [],
              cardAction: [],
              name: ''
            }]
          },
          appName: 'id-and-license'
        };
      });
      it('goes to legalName if user does not have multiple apps and appName is id-and-license', function() {
        props.userData.appsLength = 0;
        assert.ok(IDme(props), 'legalName');
      });

      it('goes to openApplications if user has multiple apps', function() {
        props.userData.appsLength = 2;
        assert.ok(IDme(props), 'openApplications');
      });
      it('goes to openApplications if user already has an app', function() {
        props.userData.appsLength = 1;
        assert.ok(IDme(props), 'openApplications');
      });
    });
    describe('##dateOfBirth', function() {
      it('goes to wdywtdt page', function() {
        assert.equal(dateOfBirth(data), 'wdywtdt');
      });
    });
    describe('##wdywtdt', function() {
      it('goes to chooseCardType', function() {
        assert.equal(wdywtdt(data), 'chooseCardType');
      });
    });
    describe('##chooseCardType', function() {
      it('if senior customer has existing card it will navigate to the existing card page', function() {
        data.cardType = ID;
        data.cardAction = 'renew';
        data.dateOfBirth.year = seniorYear;
        assert.equal(chooseCardType(data), 'currentCardInfo');
      });

      it('if too young for a DL diverts to the youth notifcation page', function() {
        data.cardType = DL;
        data.cardAction = 'new';
        data.dateOfBirth.year =(today.getFullYear() - 15).toString();

        assert.equal(chooseCardType(data), 'youthIDInstead');
      });

      it('if applying for a new ID and a senior', function() {
        data.cardType = ID;
        data.cardAction = 'new';
        data.dateOfBirth.year = seniorYear;
        assert.equal(chooseCardType(data), 'seniorID');
      });

      it('if applying for a new DL, will go to real id', function() {
        data.cardType = DL;
        data.cardAction = 'new';
        assert.equal(chooseCardType(data), 'realID');
      });
    });
    describe('##changedCard', function() {
      it('takes seniors replacing a DL to the realID page', function() {
        data.cardType = DL;
        data.cardAction = 'replace';
        data.dateOfBirth.year = seniorYear;

        assert.equal(changedCard(data), 'realID');
      });

      it('takes seniors replacing an ID to the seniorID page', function(){
        data.cardType = ID;
        data.cardAction = 'replace';
        data.cardType = ID;
        data.cardAction = 'replace';
        data.dateOfBirth.year = seniorYear;

        assert.equal(changedCard(data), 'seniorID');
      });

      it('takes not-yet-seniors to the realID page', function() {
        data.cardType = DL;
        data.cardAction = 'replace';
        data.dateOfBirth.year = (today.getFullYear() - 30).toString();

        assert.equal(changedCard(data), 'realID');
      });
    });
    describe('##currentCardInfo', function() {
      it('senior renewing an ID goes to seniorID', function() {
        data.cardType = ID;
        data.cardAction = 'renew';
        data.dateOfBirth.year = seniorYear;
        assert.equal(currentCardInfo(data), 'seniorID');
      });

      it('non-senior user renewing an ID goes to realID', function() {
        data.cardType = ID;
        data.cardAction = 'renew';
        assert.equal(currentCardInfo(data), 'realID');
      });

      it('senior renewing a DL goes to real id', function() {
        data.cardType = DL;
        data.cardAction = 'renew';
        data.dateOfBirth.year = seniorYear;
        assert.equal(currentCardInfo(data), 'realID');
      });
      it('senior changing an ID goes to updates and corrections', function() {
        data.cardType = ID;
        data.cardAction = 'change';
        data.dateOfBirth.year = seniorYear;
        assert.equal(currentCardInfo(data), 'updateAndCorrect');
      });
      it('senior changing a DL goes to updates and corrections', function() {
        data.cardType = DL;
        data.cardAction = 'change';
        data.dateOfBirth.year = seniorYear;
        assert.equal(currentCardInfo(data), 'updateAndCorrect');
      });
      it('senior replacing an ID goes to replacementDetails', function() {
        data.cardType = ID;
        data.cardAction = 'replace';
        data.dateOfBirth.year = seniorYear;
        assert.equal(currentCardInfo(data), 'replacementDetails');
      });
      it('senior replacing a DL goes to updates and corrections', function() {
        data.cardType = DL;
        data.cardAction = 'replace';
        data.dateOfBirth.year = seniorYear;
        assert.equal(currentCardInfo(data), 'replacementDetails');
      });
    });
    describe('##realID', function() {
      it('when getting a DL, it goes to the page for choosing a class', function() {
        data.cardType = DL;
        data.cardAction = 'renew';
        assert.equal(realID(data), 'chooseLicenseClass');
      });

      it('if eligible for a reduced fee, it goes to that page', function() {
        data.cardType = ID;
        data.cardAction = 'renew';
        assert.equal(realID(data), 'reducedFeeID');
      });

      it('goes to addresses if user is renewing a senior ID', function() {
        data.cardType = ID;
        data.cardAction = 'renew';
        data.dateOfBirth.year = seniorYear;
        data.seniorID = 'Yes';
        assert.equal(realID(data), 'addresses');
      });
    });
    describe('##seniorID', function() {
      it('goes to realID', function() {
        assert.equal(seniorID(data), 'realID');
      });
    });
    describe('#chooseLicenseClass', function() {
      it('if eligible for a reduced fee, it goes to that page', function() {
        data.cardType = both;
        data.reducedFee.ID = 'Yes';
        assert.equal(chooseLicenseClass(data), 'reducedFeeID');
      });

      it('goes to addresses in other cases', function() {
        data.cardType = both;
        data.dateOfBirth.year = seniorYear;
        data.seniorID = 'Yes';

        assert.equal(chooseLicenseClass(data), 'addresses');
      });
    });
  });

  describe('#adding card flow', function() {
    beforeEach(function() {
      data = state()
      data.flow = 'add';
    });
    describe('##wdywtdt', function() {
      it('user getting a new DL goes to licenseClass', function() {
        data.cardType = DL;
        data.cardAction = 'new';
        assert.equal(wdywtdt(data), 'chooseLicenseClass');
      });
      it('non-senior user getting a new ID goes to reducedfee', function() {
        data.cardType = ID;
        data.cardAction = 'new';
        assert.equal(wdywtdt(data), 'reducedFeeID');
      });
      it('senior user getting a new DL goes to licenseClass', function() {
        data.cardType = DL;
        data.cardAction = 'new';
        data.dateOfBirth.year = seniorYear;
        assert.equal(wdywtdt(data), 'chooseLicenseClass');
      });
      it('senior user getting a new ID goes to seniorID', function() {
        data.cardType = ID;
        data.cardAction = 'new';
        data.dateOfBirth.year = seniorYear;
        assert.equal(wdywtdt(data), 'seniorID');
      });
      it('user replacing an ID  who has not entered current card info goes to currentCardInfo', function() {
        data.cardType = ID;
        data.cardAction = 'replace';
        assert.equal(wdywtdt(data), 'currentCardInfo');
      });
      it('user renewing an ID who has not entered current card info goes to currentCardInfo', function() {
        data.cardType = ID;
        data.cardAction = 'renew';
        assert.equal(wdywtdt(data), 'currentCardInfo');
      });
      it('user changing an ID who has not entered current card info goes to currentCardInfo', function() {
        data.cardType = ID;
        data.cardAction = 'change';
        assert.equal(wdywtdt(data), 'currentCardInfo');
      });
      it('user replacing a DL who has not entered current card info goes to currentCardInfo', function() {
        data.cardType = DL;
        data.cardAction = 'replace';
        assert.equal(wdywtdt(data), 'currentCardInfo');
      });
      it('user renewing a DL who has not entered current card info goes to currentCardInfo', function() {
        data.cardType = DL;
        data.cardAction = 'renew';
        assert.equal(wdywtdt(data), 'currentCardInfo');
      });
      it('user changing a DL who has not entered current card info goes to currentCardInfo', function() {
        data.cardType = DL;
        data.cardAction = 'change';
        assert.equal(wdywtdt(data), 'currentCardInfo');
      });
      it('user renewing an ID who has entered current card info goes to reduced fee', function() {
        data.cardType = ID;
        data.cardAction = 'renew';
        data.currentCardInfo.number = '1111';
        assert.equal(wdywtdt(data), 'reducedFeeID');
      });
      it('senior renewing an ID who has entered current card info goes to seniorID', function() {
        data.cardType = ID;
        data.cardAction = 'renew';
        data.dateOfBirth.year = seniorYear;
        data.currentCardInfo.number = '1111';
        assert.equal(wdywtdt(data), 'seniorID');
      });
      it('user renewing a DL who has entered current card info goes to licenseClass', function() {
        data.cardType = DL;
        data.cardAction = 'renew';
        data.currentCardInfo.number = '1111';
        assert.equal(wdywtdt(data), 'chooseLicenseClass');
      });
      it('user replacing an ID who has entered current card info goes to replacementDetails', function() {
        data.cardType = ID;
        data.cardAction = 'replace';
        data.currentCardInfo.number = '1111';
        assert.equal(wdywtdt(data), 'replacementDetails');
      });
      it('user changing an ID who has entered current card info goes to updateAndCorrect', function() {
        data.cardType = ID;
        data.cardAction = 'change';
        data.currentCardInfo.number = '1111';
        assert.equal(wdywtdt(data), 'updateAndCorrect');
      });
      it('user replacing a DL who has entered current card info goes to replacementDetails', function() {
        data.cardType = DL;
        data.cardAction = 'replace';
        data.currentCardInfo.number = '1111';
        assert.equal(wdywtdt(data), 'replacementDetails');
      });
      it('user changing a DL who has entered current card info goes to updateAndCorrect', function() {
        data.cardType = DL;
        data.cardAction = 'change';
        data.currentCardInfo.number = '1111';
        assert.equal(wdywtdt(data), 'updateAndCorrect');
      });
    });
    describe('##currentCardInfo', function() {
      it('user renewing a DL goes to licenseClass', function() {
        data.cardType = DL;
        data.cardAction = 'renew';
        data.currentCardInfo.number = '1111';
        assert.equal(currentCardInfo(data), 'chooseLicenseClass');
      });
      it('user getting a new DL goes to chooseLicenseClass', function() {
        data.cardType = DL;
        data.cardAction = 'new';
        data.currentCardInfo.number = '1111';
        assert.equal(currentCardInfo(data), 'chooseLicenseClass');
      });
      it('senior user renewing an ID goes to reducedFee (not seniorID, that will come later)', function() {
        data.cardType = ID;
        data.cardAction = 'renew';
        data.currentCardInfo.number = '1111';
        data.dateOfBirth.year = seniorYear;
        assert.equal(currentCardInfo(data), 'reducedFeeID');
      });
      it('user getting a new ID goes to reducedFee', function() {
        data.cardType = ID;         data.cardAction = 'new';
        data.currentCardInfo.number = '1111';
        assert.equal(currentCardInfo(data), 'reducedFeeID');
      });
      it('user replacing an ID goes to replacementDetails', function() {
        data.cardType = ID;
        data.cardAction = 'replace';
        assert.equal(currentCardInfo(data), 'replacementDetails');
      });
      it('user changing an ID goes to updateAndCorrect', function() {
        data.cardType = ID;
        data.cardAction = 'change';
        assert.equal(currentCardInfo(data), 'updateAndCorrect');
      });
      it('user replacing a DL goes to replacementDetails', function() {
        data.cardType = DL;
        data.cardAction = 'replace';
        assert.equal(currentCardInfo(data), 'replacementDetails');
      });
      it('user changing a DL goes to updateAndCorrect', function() {
        data.cardType = DL;
        data.cardAction = 'change';
        assert.equal(currentCardInfo(data), 'updateAndCorrect');
      });
    });
    describe('##changedCard', function() {
      it('user getting a DL goes to licenseClass', function() {
        data.cardType = DL;
        data.cardAction = 'replace';
        assert.equal(changedCard(data), 'chooseLicenseClass');
      });
      it('user getting an ID goes to reducedFee', function() {
        data.cardType = ID;
        data.cardAction = 'replace';
        assert.equal(changedCard(data), 'reducedFeeID');
      });
      it('senior user getting an ID goes to seniorID', function() {
        data.cardType = ID;
        data.cardAction = 'replace';
        data.dateOfBirth.year = seniorYear;
        assert.equal(changedCard(data), 'seniorID');
      });
    });
    describe('##realID', function() {
      it('goes to summary', function() {
        assert.equal(realID(data), 'summary');
      });
    });
    describe('##seniorID', function() {
      it('senior user getting a senior ID goes to summary', function() {
        data.cardType = ID;
        data.cardAction = 'new';
        data.seniorID = 'Yes';
        data.dateOfBirth.year = seniorYear;
        assert.equal(seniorID(data), 'summary');
      });
      it('senior user not getting a senior ID goes to reducedFee', function() {
        data.cardType = ID;
        data.cardAction = 'new';
        data.seniorID = 'No';
        data.dateOfBirth.year = seniorYear;
        assert.equal(seniorID(data), 'reducedFeeID');
      });
    });

    describe('##chooseLicenseClass', function() {
      it('user adding a DL goes to medicalHistory', function() {
        data.cardType = DL;
        data.cardAction = 'new';
        assert.equal(chooseLicenseClass(data), 'medicalHistory');
      });
    })
  });

  describe('#editing card flow', function() {
    beforeEach(function() {
      data = state()
      data.flow = 'edit';
    });

    describe('##dateOfBirth', function() {
      it('senior user getting an ID goes to seniorID', function() {
        data.cardType = ID;
        data.cardAction = 'renew';
        data.dateOfBirth.year = seniorYear;
        assert.equal(dateOfBirth(data), 'seniorID');
      });
      it('youth user getting an ID goes to summary', function() {
        data.cardType = ID;
        data.cardAction = 'renew';
        data.dateOfBirth.year = youthYear;
        assert.equal(dateOfBirth(data), 'summary');
      });
      it('youth user getting a DL goes to youthIDInstead', function() {
        data.cardType = DL;
        data.cardAction = 'new';
        data.dateOfBirth.year = youthYear;
        assert.equal(dateOfBirth(data), 'youthIDInstead');
      });
      it('30-something user goes to summary always', function() {
        data.cardType = DL;
        data.cardAction = 'new';
        assert.equal(dateOfBirth(data), 'summary');
      });
    });

    describe('##wdywtdt', function() {
      it('user replacing an ID  who has not entered current card info goes to currentCardInfo', function() {
        data.cardType = ID;
        data.cardAction = 'replace';
        assert.equal(wdywtdt(data), 'currentCardInfo');
      });
      it('user renewing an ID who has not entered current card info goes to currentCardInfo', function() {
        data.cardType = ID;
        data.cardAction = 'renew';
        assert.equal(wdywtdt(data), 'currentCardInfo');
      });
      it('user changing an ID who has not entered current card info goes to currentCardInfo', function() {
        data.cardType = ID;
        data.cardAction = 'change';
        assert.equal(wdywtdt(data), 'currentCardInfo');
      });
      it('user replacing a DL who has not entered current card info goes to currentCardInfo', function() {
        data.cardType = DL;
        data.cardAction = 'replace';
        assert.equal(wdywtdt(data), 'currentCardInfo');
      });
      it('user renewing a DL who has not entered current card info goes to currentCardInfo', function() {
        data.cardType = DL;         data.cardAction = 'renew';
        assert.equal(wdywtdt(data), 'currentCardInfo');
      });
      it('user changing a DL who has not entered current card info goes to currentCardInfo', function() {
        data.cardType = DL;
        data.cardAction = 'change';
        assert.equal(wdywtdt(data), 'currentCardInfo');
      });
      it('user replacing an ID who has entered current card info goes to replacementDetails', function() {
        data.cardType = ID;
        data.cardAction = 'replace';
        data.currentCardInfo.number = '1111';
        assert.equal(wdywtdt(data), 'replacementDetails');
      });
      it('user changing an ID who has entered current card info goes to updateAndCorrect', function() {
        data.cardType = ID;
        data.cardAction = 'change';
        data.currentCardInfo.number = '1111';
        assert.equal(wdywtdt(data), 'updateAndCorrect');
      });
      it('user replacing a DL who has entered current card info goes to replacementDetails', function() {
        data.cardType = DL;
        data.cardAction = 'replace';
        data.currentCardInfo.number = '1111';
        assert.equal(wdywtdt(data), 'replacementDetails');
      });
      it('user changing a DL who has entered current card info goes to updateAndCorrect', function() {
        data.cardType = DL;
        data.cardAction = 'change';
        data.currentCardInfo.number = '1111';
        assert.equal(wdywtdt(data), 'updateAndCorrect');
      });
      it('user who is getting a new ID or DL who has not entered any licenseAndIdHistory goes to cardHistory', function() {
        data.cardType = DL;
        data.cardAction = 'new';
        assert.equal(wdywtdt(data), 'cardHistory');
      });
      it('user who is getting a new ID or DL who has entered licenseAndIdHistory goes to summary', function() {
        data.cardType = DL;
        data.cardAction = 'new';
        data.licenseAndIdHistory.isIssued = 'No';
        assert.equal(wdywtdt(data), 'summary');
      });
      it('user who is renewing an ID or DL who has not entered any licenseAndIdHistory goes to currentCardInfo ', function() {
        data.cardType = ID;
        data.cardAction = 'renew';
        assert.equal(wdywtdt(data), 'currentCardInfo');
      });
      it('user who is renewing an ID or DL who has entered current card info goes to summary', function() {
        data.cardType = ID;
        data.cardAction = 'renew';
        data.currentCardInfo.number = '1111';
        assert.equal(wdywtdt(data), 'summary');
      });
    });

    describe('##currentCardInfo', function() {
      it('user replacing an ID goes to replacementDetails', function() {
        data.cardType = ID;
        data.cardAction = 'replace';
        assert.equal(currentCardInfo(data), 'replacementDetails');
      });
      it('user changing an ID goes to updateAndCorrect', function() {
        data.cardType = ID;
        data.cardAction = 'change';
        assert.equal(currentCardInfo(data), 'updateAndCorrect');
      });
      it('user replacing a DL goes to replacementDetails', function() {
        data.cardType = DL;
        data.cardAction = 'replace';
        assert.equal(currentCardInfo(data), 'replacementDetails');
      });
      it('user changing a DL goes to updateAndCorrect', function() {
        data.cardType = DL;
        data.cardAction = 'change';
        assert.equal(currentCardInfo(data), 'updateAndCorrect');
      });
      it('user renewing an ID or DL goes to summary', function() {
        data.cardType = ID;
        data.cardAction = 'renew';
        assert.equal(currentCardInfo(data), 'summary');
      });
      it('user getting a new ID or DL goes to cardHistory', function() {
        data.cardType = ID;
        data.cardAction = 'new';
        assert.equal(currentCardInfo(data), 'cardHistory');
      });
      it('user getting a new ID or DL who has already entered licenseAndIdHistory goes to summary', function() {
        data.cardType = DL;
        data.cardAction = 'new';
        data.licenseAndIdHistory.isIssued = 'No';
        assert.equal(currentCardInfo(data), 'summary');
      });
    });

    describe('##changedCard', function() {
      it('senior user replacing an ID goes to summary', function() {
        data.cardType = ID;
        data.cardAction = 'replace';
        data.dateOfBirth.year = seniorYear;
        assert.equal(changedCard(data), 'summary');
      });
      it('user getting a new card who has not entered licenseAndIdHistory goes to cardHistory', function() {
        data.cardType = DL;
        data.cardAction = 'new';
        assert.equal(changedCard(data), 'cardHistory');
      });
      it('user getting a new card who has entered licenseAndIdHistory goes to summary', function() {
        data.cardType = DL;
        data.cardAction = 'new';
        data.licenseAndIdHistory.isIssued = 'No';
        assert.equal(changedCard(data), 'summary');
      });
    });

    describe('##realID', function(){
      it('goes to summary', function() {
        assert.equal(realID(data), 'summary');
      });
    });

    describe('##seniorID', function() {
      it('senior user getting senior ID goes to summary', function() {
        data.seniorID = 'Yes';
        assert.equal(seniorID(data), 'summary');
      });
      it('senior user not getting senior ID who has already entered reduced fee info goes to summary', function() {
        data.seniorID = 'No';
        data.reducedFee.ID = 'No';
        assert.equal(seniorID(data), 'summary');
      });
      it('senior user not getting senior ID who has not already entered reduced fee info goes to reducedFee', function() {
        data.seniorID = 'No';
        data.reducedFee.ID = '';
        assert.equal(seniorID(data), 'reducedFeeID');
      });
    });
  });
});


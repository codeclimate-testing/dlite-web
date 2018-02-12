'use strict';

const assert = require('assert');

import {
  chooseCardType,
  currentCardInfo,
  updateAndCorrect,
  replacementDetails,
  realID,
  chooseLicenseClass,
  socialSecurity,
  medicalHistory,
  nameHistory,
  summary
} from '../../../../client/helpers/data/next-path';

const bothCards = {
  IDDL: ['ID', 'DL'],
  cardAction: 'new',
  ID: {
    isApplying: true,
    action: 'new'
  },
  DL: {
    isApplying: true,
    action: 'new'
  }
};

const buildCardType = (type, action) => {
  let cardType = {
    IDDL: [type],
    cardAction: action,
    ID: {
      isApplying: false,
      action: ''
    },
    DL: {
      isApplying: false,
      action: ''
    },
    youthIDInstead: ''
  };
  cardType[type].isApplying = true;
  cardType[type].action = action;
  return cardType;
};

const seniorYear = (today) => {
  return (today.getFullYear() - 65).toString()
};

const today = new Date();

describe('Data helpers for determining next path from current page and props', function() {
  let data;
  beforeEach(function() {
    data = {
      dateOfBirth: {
        year: (today.getFullYear() - 40).toString(),
        month: (today.getMonth()).toString(),
        day: today.getDate().toString()
      },
      cardType: {
        IDDL: [''],
        cardAction: '',
        ID: {
          isApplying: false,
          action: ''
        },
        DL: {
          isApplying: false,
          action: ''
        }
      }
    };
  });
  describe('#getStarted section', function() {
    describe('##chooseCardType', function() {

      it('if senior customer has existing card it will navigate to the existing card page', function() {
        data.cardType = buildCardType('ID', 'renew');
        data.dateOfBirth.year = seniorYear(today);
        assert.equal(chooseCardType(data), 'currentCardInfo');
      });

      it('if too young for a DL diverts to the youth notifcation page', function() {
        data.dateOfBirth.year =(today.getFullYear() - 15).toString();
        data.cardType = buildCardType('DL', 'new');
        assert.equal(chooseCardType(data), 'youthIDInstead');
      });

      it('if applying for a new ID and a senior', function() {
        data.cardType = buildCardType('ID', 'new');
        data.dateOfBirth.year = seniorYear(today);
        assert.equal(chooseCardType(data), 'seniorID');
      });

      it('if applying for a new DL, will go to real id', function() {
        data.cardType = buildCardType('DL', 'new');
        assert.equal(chooseCardType(data), 'realID');
      });
    });

    describe('##replacementDetails', function() {
      it('takes seniors replacing a DL to the realID page', function() {
        data.dateOfBirth.year = seniorYear(today);
        data.cardType = buildCardType('DL', 'replace');
        assert.equal(replacementDetails(data), 'realID');
      });

      it('takes seniors replacing an ID to the seniorID page', function(){
        data.dateOfBirth.year = seniorYear(today);
        data.cardType = buildCardType('ID', 'replace');

        assert.equal(replacementDetails(data), 'seniorID');
      });

      it('takes not-yet-seniors to the realID page', function() {
        data.dateOfBirth.year = (today.getFullYear() - 30).toString();
        data.cardType = buildCardType('DL', 'replace');
        assert.equal(replacementDetails(data), 'realID');
      });
    });

    describe('##currentCardInfo', function() {
      it('if applying for an ID and a senior', function() {
        data.dateOfBirth.year = seniorYear(today);
        data.cardType = buildCardType('ID', 'renew');
        assert.equal(currentCardInfo(data), 'seniorID');
      });

      it('if not eligible for senior id moves to real id', function() {
        data.dateOfBirth.year = seniorYear(today);
        data.cardType = buildCardType('DL', 'renew');

        assert.equal(currentCardInfo(data), 'realID');
      });
    });

    describe('#updateAndCorrect', function() {
      it('goes to seniorID page if user is senior updating an ID', function() {
        data.dateOfBirth.year = seniorYear(today);
        data.cardType = buildCardType('ID', 'change');
        data.cardChanges = {
          correctOrUpdate: 'update',
          sections: ['name']
        };
        assert.equal(updateAndCorrect(data), 'seniorID');
      });
      it('otherwise goes to realID page', function() {
        assert.equal(updateAndCorrect(data), 'realID');
      });
    });

    describe('##realID', function() {
      it('when getting a DL, it goes to the page for choosing a class', function() {
        data.cardType = buildCardType('DL', 'renew');
        assert.equal(realID(data), 'chooseLicenseClass');
      });

      it('if eligible for a reduced fee, it goes to that page', function() {
        data.cardType = buildCardType('ID', 'renew');
        assert.equal(realID(data), 'reducedFeeID');
      });

      it('goes to get started in other cases', function() {
        data.dateOfBirth.year = seniorYear(today);
        data.cardType = buildCardType('ID', 'renew');
        data.seniorID = 'Yes';
        assert.equal(realID(data), 'getStarted');
      });
    });

    describe('#chooseLicenseClass', function() {
      it('if eligible for a reduced fee, it goes to that page', function() {
        data.cardType = bothCards;
        assert.equal(chooseLicenseClass(data), 'reducedFeeID');
      });

      it('goes to get started in other cases', function() {
        data.dateOfBirth.year = seniorYear(today);
        data.cardType = bothCards;
        data.seniorID = 'Yes';

        assert.equal(chooseLicenseClass(data), 'getStarted');
      });
    });
  });

  describe('#myBasics section', function() {
    describe('#socialSecurity', function() {
      it('goes to medicalHistory page if user is replacing a DL', function() {
        data.cardType = buildCardType('DL', 'replace');
        assert.equal(socialSecurity(data), 'medicalHistory');
      });

      it('goes to medicalHistory page if user is getting a new DL', function() {
        data.cardType = buildCardType('DL', 'new');
        assert.equal(socialSecurity(data), 'medicalHistory');
      });

      it('goes to cardHistory, skipping medicalHistory, if user is getting a new ID', function() {
        data.cardType = buildCardType('ID', 'new');
        assert.equal(socialSecurity(data), 'cardHistory');
      });

      it('goes to nameHistory, skipping medicalHistory and cardHistory, if user is replacing an ID', function() {
        data.cardType = buildCardType('ID', 'replace');
        assert.equal(socialSecurity(data), 'nameHistory');
      });
    });
  });

  describe('#myHistory section', function() {
    describe('#medicalHistory', function() {
      it('goes to cardHistory if user is getting a new DL', function() {
        data.cardType = buildCardType('DL', 'new');

        assert.equal(medicalHistory(data), 'cardHistory');
      });

      it('goes to nameHistory, skipping cardHistory, if user is changing an existing DL', function() {
        data.cardType = buildCardType('DL', 'replace');

        assert.equal(medicalHistory(data), 'nameHistory');
      });

      it('goes to nameHistory, skipping cardHistory, if user is getting a new ID', function() {
        data.cardType = buildCardType('ID', 'new');
        assert.equal(medicalHistory(data), 'nameHistory');
      });
    });

    describe('#nameHistory', function() {
      it('goes to licenseIssues if user is getting a new DL', function() {
        data.cardType = buildCardType('DL', 'new');
        assert.equal(nameHistory(data), 'licenseIssues');
      });

      it('goes to licenseIssues page if user is getting a DL that is not new', function() {
        data.cardType = buildCardType('DL', 'change');
        assert.equal(nameHistory(data), 'licenseIssues');
      });

      it('goes to veterans page if user is getting an ID', function() {
        data.cardType = buildCardType('ID', 'new');
        assert.equal(nameHistory(data), 'veterans');
      });
    });
  });

  describe('#organDonation section', function() {

  });

  describe('#voterRegistration', function() {

  });

  describe('#conclusion section', function() {
    describe('#summary', function() {
      it('goes to application prep page if server apiStatus is successful', function() {
        let res = 'success'
        assert.equal(summary(res), 'appointmentPreparation');
      });
      it('goes to summary page if server apiStatus is unsuccessful', function() {
        let res = 'api-fail'
        assert.equal(summary(res), 'summary');
      });
    });
  });
});


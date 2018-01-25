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
  medicalHistory
} from '../../../../client/helpers/data/next-path';

describe('Data helpers for determining next path from current page and props', function() {
  describe('#chooseCardType', function() {
    it('if senior customer has existing card it will navigate to the existing card page', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 65).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          renew: 'ID',
          new: [],
          replace: '',
          change: ''
        },
        cardAction: 'renew'
      };

      assert.equal(chooseCardType(data), 'currentCardInfo');
    });

    it('if too young for a DL diverts to the youth notifcation page', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 15).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          new: ['DL']
        },
        cardAction: 'new'
      };

      assert.equal(chooseCardType(data), 'youthIDInstead');
    });

    it('if applying for a new ID and a senior', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 65).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          new: ['ID']
        },
        cardAction: 'new'
      };
      assert.equal(chooseCardType(data), 'seniorID');
    });

    it('if applying for a new DL, will go to real id', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 65).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          new: ['DL']
        },
        cardAction: 'new'
      };
      assert.equal(chooseCardType(data), 'realID');
    });
  });

  describe('#currentCardInfo', function() {
    it('if applying for an ID and a senior', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 65).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          new: [],
          renew: 'ID'
        },
        cardAction: 'renew'
      };
      assert.equal(currentCardInfo(data), 'seniorID');
    });

    it('if not eligible for senior id moves to real id', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 65).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          new: [],
          renew: 'DL'
        },
        cardAction: 'renew'
      };
      assert.equal(currentCardInfo(data), 'realID');
    });
  });

  describe('#replacementDetails', function() {
    it('takes seniors replacing a DL to the realID page', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 65).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          new: [],
          renew: '',
          replace: 'DL'
        },
        cardAction: 'replace'
      };
      assert.equal(replacementDetails(data), 'realID');
    });

    it('takes seniors replacing an ID to the seniorID page', function(){
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 65).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          new: [],
          renew: '',
          replace: 'ID'
        },
        cardAction: 'replace'
      };
      assert.equal(replacementDetails(data), 'seniorID');
    });

    it('takes not-yet-seniors to the realID page', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 30).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          new: [],
          renew: '',
          replace: 'DL'
        },
        cardAction: 'replace'
      };
      assert.equal(replacementDetails(data), 'realID');
    });
  });

  describe('#realID', function() {
    it('when getting a DL, it goes to the page for choosing a class', function() {
      let data = {
        cardType: {
          new: [],
          renew: 'DL'
        },
        cardAction: 'renew'
      };
      assert.equal(realID(data), 'chooseLicenseClass');
    });

    it('if eligible for a reduced fee, it goes to that page', function() {
      let data = {
        cardType: {
          new: [],
          renew: 'ID'
        },
        cardAction: 'renew'
      };
      assert.equal(realID(data), 'reducedFeeID');
    });

    it('goes to get started in other cases', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 65).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          new: [],
          renew: 'ID',
        },
        seniorID: 'Yes',
        cardAction: 'renew'
      };
      assert.equal(realID(data), 'getStarted');
    });
  });

  describe('#chooseLicenseClass', function() {
    it('if eligible for a reduced fee, it goes to that page', function() {
      let data = {
        cardType: {
          new: ['ID', 'DL'],
          renew: ''
        },
        cardAction: 'new'
      };
      assert.equal(chooseLicenseClass(data), 'reducedFeeID');
    });

    it('goes to get started in other cases', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 65).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardType: {
          new: ['ID', 'DL'],
          renew: '',
        },
        seniorID: 'Yes',
        cardAction: 'new'
      };
      assert.equal(chooseLicenseClass(data), 'getStarted');
    });
  });

  describe('#updateAndCorrect', function() {
    it('goes to seniorID page if user is senior updating an ID', function() {
      let today = new Date();

      let data = {
        dateOfBirth: {
          year: (today.getFullYear() - 65).toString(),
          month: (today.getMonth()).toString(),
          day: today.getDate().toString()
        },
        cardAction: 'change',
        cardType: {
          change: "ID",
          new: []
        },
        cardChanges: {
          correctOrUpdate: 'update',
          sections: ['name']
        }
      };
      assert.equal(updateAndCorrect(data), 'seniorID');
    });
  });

  describe('#socialSecurity', function() {
    it('goes to medicalHistory page if user is replacing a DL', function() {
      let props = {
        cardType: {
          replace: 'DL',
          new: []
        }
      };
      assert.equal(socialSecurity(props), 'medicalHistory');
    });

    it('goes to medicalHistory page if user is getting a new DL', function() {
      let props = {
        cardType: {
          replace: '',
          new: ['DL']
        }
      };
      assert.equal(socialSecurity(props), 'medicalHistory');
    });

    it('goes to cardHistory, skipping medicalHistory, if user is getting a new ID', function() {
      let props = {
        cardType: {
          replace: '',
          new: ['ID']
        }
      };
      assert.equal(socialSecurity(props), 'cardHistory');
    });

    it('goes to nameHistory, skipping medicalHistory and cardHistory, if user is replacing an ID', function() {
      let props = {
        cardType: {
          replace: 'ID',
          new: []
        }
      };
      assert.equal(socialSecurity(props), 'nameHistory');
    });
  });

  describe('#medicalHistory', function() {
    it('goes to cardHistory if user is getting a new DL', function() {
      let props = {
        cardType: {
          replace: '',
          new: ['DL']
        }
      };
      assert.equal(medicalHistory(props), 'cardHistory');
    });

    it('goes to nameHistory, skipping cardHistory, if user is changing an existing DL', function() {
      let props = {
        cardType: {
          replace: 'DL',
          new: []
        }
      };
      assert.equal(medicalHistory(props), 'nameHistory');
    });
  });
});


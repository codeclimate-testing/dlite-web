'use strict';

const assert = require('assert');

import {
  isVeteran,
  mustChoosePreviousDesignation,
  mustChooseIdentifier,
  mustChooseKeepVeteranIdentifier,
  mustChooseAddVeteranIdentifier,
  showPreviousDesignationPage,
  showIdentifierPage,
  isPreviouslyDesignated,
  showIdentifierMessage,
  removeIdentifierNotification,
  showPreviousIDHeader,
  showPreviousDLHeader,
  showNewIDHeader,
  showNewDLHeader,
  keepOrAdd
} from '../../../../client/helpers/data/veteran';

describe('Data helpers for veterans', function() {
  let data;
  beforeEach(function() {
    data = {
      veteransService: {
        isVeteran: '',
        receiveBenefits: '',
        previouslyDesignated: '',
        veteransIdentifier: ''
      },
      cardType: {
        cardAction: 'renew',
        IDDL: []
      }
    };
  });

  describe('#isVeteran', function() {
    it('is false if not a veteran', function() {
      data.veteransService.isVeteran = 'No';
      assert.equal(isVeteran(data), false);
    });

    it('is true if a veteran', function() {
      data.veteransService.isVeteran = 'Yes';
      assert.equal(isVeteran(data), true);
    });
  });

  describe('#mustChoosePreviousDesignation', function() {
    it('is false if not a veteran', function() {
      data.veteransService.isVeteran = 'No';
      data.veteransService.receiveBenefits = 'Yes';
      assert.equal(mustChoosePreviousDesignation(data), false);
    });

    it('is false if not renewing a card', function() {
      data.veteransService.isVeteran = 'Yes';
      data.veteransService.receiveBenefits = 'Yes';
      data.cardType.cardAction = 'new';
      assert.equal(mustChoosePreviousDesignation(data), false);
    });

    it('is true if veteran and renewing', function() {
      data.veteransService.isVeteran = 'Yes';
      data.veteransService.receiveBenefits = 'Yes';
      assert.equal(mustChoosePreviousDesignation(data), true);
    });
  });

  describe('#mustChooseIdentifier', function() {
    it('is false if not a veteran', function() {
      data.veteransService.isVeteran = 'No';

      assert.equal(mustChooseIdentifier(data), false);
    });

    it('is false if renewing', function() {
      data.veteransService.isVeteran = 'Yes';
      data.veteransService.receiveBenefits = 'Yes';

      assert.equal(mustChooseIdentifier(data), false);
    });

    it('is true if veteran and not renewing', function() {
      data.veteransService.isVeteran = 'Yes';
      data.veteransService.receiveBenefits = 'Yes';
      data.cardType.cardAction = 'replace';

      assert.equal(mustChooseIdentifier(data), true);
    });
  });

  describe('#mustChooseKeepVeteranIdentifier', function() {
    it('is false if not a veteran', function() {
      data.veteransService.isVeteran = 'No';
      data.cardType.cardAction = 'replace';

      assert.equal(mustChooseKeepVeteranIdentifier(data), false);
    });

    it('is false if getting a new card', function() {
      data.veteransService.isVeteran = 'Yes';
      data.veteransService.receiveBenefits = 'Yes';
      data.veteransService.previouslyDesignated = 'Yes';
      data.cardType.cardAction = 'new';

      assert.equal(mustChooseKeepVeteranIdentifier(data), false);
    });

    it('is false if not previously designated', function() {
      data.veteransService.isVeteran = 'Yes';
      data.veteransService.receiveBenefits = 'Yes';
      data.veteransService.previouslyDesignated = 'No';
      assert.equal(mustChooseKeepVeteranIdentifier(data), false);
    });

    it('is true when previously designated veteran is renewing', function() {
      data.veteransService.isVeteran = 'Yes';
      data.veteransService.receiveBenefits = 'Yes';
      data.veteransService.previouslyDesignated = 'Yes';

      assert.equal(mustChooseKeepVeteranIdentifier(data), true);
    });
  });

  describe('#mustChooseAddVeteranIdentifier', function() {
    it('is false if not a veteran', function() {
      data.veteransService.isVeteran = 'No';

      assert.equal(mustChooseAddVeteranIdentifier(data), false);
    });

    it('is false if not renewing', function() {
      data.veteransService.isVeteran = 'Yes';
      data.veteransService.receiveBenefits = 'Yes';
      data.veteransService.previouslyDesignated = 'Yes';
      data.cardType.cardAction = 'replace';

      assert.equal(mustChooseAddVeteranIdentifier(data), false);
    });

    it('is false if previously designated', function() {
      data.veteransService.isVeteran = 'Yes';
      data.veteransService.receiveBenefits = 'Yes';
      data.veteransService.previouslyDesignated = 'Yes';

      assert.equal(mustChooseAddVeteranIdentifier(data), false);
    });

    it('is true when new veteran is renewing', function() {
      data.veteransService.isVeteran = 'Yes';
      data.veteransService.receiveBenefits = 'Yes';
      data.veteransService.previouslyDesignated = 'No';

      assert.equal(mustChooseAddVeteranIdentifier(data), true);
    });
  });

  describe('#showPreviousDesignationPage', function() {
    it('is true if user is veteran not getting a new card', function() {
      data.veteransService.isVeteran = 'Yes';
      assert.equal(showPreviousDesignationPage(data), true);
    });

    it('is false if user is not a veteran', function() {
      data.veteransService.isVeteran = 'No';
      assert.equal(showPreviousDesignationPage(data), false);
    });

    it('is false if user is getting a new card', function() {
      data.veteransService.isVeteran = 'Yes';
      data.cardType.cardAction = 'new';
      assert.equal(showPreviousDesignationPage(data), false);
    });
  });

  describe('#showIdentifierPage', function() {
    it('is true if user is a veteran getting a new card', function() {
      data.veteransService.isVeteran = 'Yes';
      data.cardType.cardAction = 'new';
      assert.equal(showIdentifierPage(data), true);
    });

    it('is true if user is a veteran who has been previously designated', function() {
      data.veteransService.isVeteran = 'Yes';
      data.veteransService.previouslyDesignated = 'Yes';
      assert.equal(showIdentifierPage(data), true);
    });

    it('is true if user is a veteran who has not been previously designated', function() {
      data.veteransService.isVeteran = 'Yes';
      data.veteransService.previouslyDesignated = 'No';
      assert.equal(showIdentifierPage(data), true);
    });

    it('is false if user is not a veteran', function() {
      data.veteransService.isVeteran = 'No';
      assert.equal(showIdentifierPage(data), false);
    });

    it('is false if user is a veteran who has not selected previous designation', function() {
      data.veteransService.isVeteran = 'Yes';
      data.veteransService.previouslyDesignated = '';
      assert.equal(showIdentifierPage(data), false);
    });
  });

  describe('#isPreviouslyDesignated', function() {
    it('is true if equal to Yes', function() {
      data.veteransService.previouslyDesignated = 'Yes';
      assert.equal(isPreviouslyDesignated(data), true);
    });
    it('is false if equal to No', function() {
      data.veteransService.previouslyDesignated = 'No';
      assert.equal(isPreviouslyDesignated(data), false);
    });
    it('is false if blank', function() {
      data.veteransService.previouslyDesignated = '';
      assert.equal(isPreviouslyDesignated(data), false);
    });
  });

  describe('#showIdentifierMessage', function() {
    it('is true if equal to Yes', function() {
      data.veteransService.veteransIdentifier = 'Yes';
      assert.equal(showIdentifierMessage(data), true);
    });
    it('is false if equal to No', function() {
      data.veteransService.veteransIdentifier = 'No';
      assert.equal(showIdentifierMessage(data), false);
    });
    it('is false if blank', function() {
      data.veteransService.veteransIdentifier = '';
      assert.equal(showIdentifierMessage(data), false);
    });
  });

  describe('#removeIdentifierNotification', function() {
    it('is true if user is previously designated but does not want to be identified', function() {
      data.veteransService.previouslyDesignated = 'Yes';
      data.veteransService.veteransIdentifier = 'No';
      assert.equal(removeIdentifierNotification(data), true);
    });

    it('is false if user is previously designated and does want to be identified', function() {
      data.veteransService.previouslyDesignated = 'Yes';
      data.veteransService.veteransIdentifier = 'Yes';
      assert.equal(removeIdentifierNotification(data), false);
    });

    it('is false if user is not previously designated', function() {
      data.veteransService.previouslyDesignated = 'No';
      assert.equal(removeIdentifierNotification(data), false);
    });
  });

  describe('#showPreviousIDHeader', function() {
    it('is true if user is previously designated and renewing a ID', function() {
      data.veteransService.previouslyDesignated = 'Yes';
      data.cardType.IDDL = ['ID'];
      assert.equal(showPreviousIDHeader(data), true);
    });

    it('is true if user is previously designated and getting a new ID', function() {
      data.veteransService.previouslyDesignated = 'Yes';
      data.cardType.IDDL = ['ID'];
      data.cardType.cardAction = 'new';
      assert.equal(showPreviousIDHeader(data), true);
    });

    it('is false if user is previously designated and getting a new DL', function() {
      data.veteransService.previouslyDesignated = 'Yes';
      data.cardType.IDDL = ['DL'];
      data.cardType.cardAction = 'new';
      assert.equal(showPreviousIDHeader(data), false);
    });

    it('is false if user is not previously designated', function() {
      data.veteransService.previouslyDesignated = 'No';
      assert.equal(showPreviousIDHeader(data), false);
    });
  });

  describe('#showPreviousDLHeader', function() {
    it('is true if user is previously designated and renewing a DL', function() {
      data.veteransService.previouslyDesignated = 'Yes';
      data.cardType.IDDL = ['DL'];
      assert.equal(showPreviousDLHeader(data), true);
    });

    it('is true if user is previously designated and getting a new DL', function() {
      data.veteransService.previouslyDesignated = 'Yes';
      data.cardType.IDDL = ['DL'];
      data.cardType.cardAction = 'new';
      assert.equal(showPreviousDLHeader(data), true);
    });

    it('is false if user is previously designated and getting a new ID', function() {
      data.veteransService.previouslyDesignated = 'Yes';
      data.cardType.IDDL = ['ID'];
      data.cardType.cardAction = 'new';
      assert.equal(showPreviousDLHeader(data), false);
    });

    it('is false if user is not previously designated', function() {
      data.veteransService.previouslyDesignated = 'No';
      assert.equal(showPreviousDLHeader(data), false);
    });
  });

  describe('#showNewIDHeader', function() {
    it('is true if user is not previously designated and renewing an ID', function() {
      data.veteransService.previouslyDesignated = 'No';
      data.cardType.IDDL = ['ID'];
      assert.equal(showNewIDHeader(data), true);
    });

    it('is true if user is not previously designated and getting a new ID', function() {
      data.veteransService.previouslyDesignated = 'No';
      data.cardType.IDDL = ['ID'];
      data.cardType.cardAction = 'new';
      assert.equal(showNewIDHeader(data), true);
    });

    it('is false if user is previously designated and getting a new ID', function() {
      data.veteransService.previouslyDesignated = 'Yes';
      data.cardType.IDDL = ['ID'];
      data.cardType.cardAction = 'new';
      assert.equal(showNewIDHeader(data), false);
    });

    it('is false if user is previously designated', function() {
      data.veteransService.previouslyDesignated = 'Yes';
      assert.equal(showNewIDHeader(data), false);
    });
  });
  describe('#showNewDLHeader', function() {
    it('is true if user is not previously designated and renewing a DL', function() {
      data.veteransService.previouslyDesignated = 'No';
      data.cardType.IDDL = ['DL'];
      assert.equal(showNewDLHeader(data), true);
    });

    it('is true if user is not previously designated and getting a new DL', function() {
      data.veteransService.previouslyDesignated = 'No';
      data.cardType.IDDL = ['DL'];
      data.cardType.cardAction = 'new';
      assert.equal(showNewDLHeader(data), true);
    });

    it('is false if user is not previously designated and getting a new ID', function() {
      data.veteransService.previouslyDesignated = 'No';
      data.cardType.IDDL = ['ID'];
      data.cardType.cardAction = 'new';
      assert.equal(showNewDLHeader(data), false);
    });

    it('is false if user is previously designated', function() {
      data.veteransService.previouslyDesignated = 'Yes';
      assert.equal(showNewDLHeader(data), false);
    });
  });

  describe('#keepOrAdd', function() {
    it('returns "previous" if user is previously designated', function() {
      data.veteransService.previouslyDesignated = 'Yes';
      assert.equal(keepOrAdd(data), 'previous');
    });

    it('returns "new" if user is not previously designated', function() {
      data.veteransService.previouslyDesignated = 'No';
      assert.equal(keepOrAdd(data), 'new');
    });
  });
});

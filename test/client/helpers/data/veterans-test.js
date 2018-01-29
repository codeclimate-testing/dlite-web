'use strict';

const assert = require('assert');

import { 
  mustChooseBenefits,
  mustChoosePreviousDesignation,
  mustChooseIdentifier,
  mustChooseKeepVeteranIdentifier,
  mustChooseAddVeteranIdentifier
} from '../../../../client/helpers/data/veteran';

describe('Data helpers for veterans', function() {
  let cardType;
  beforeEach(function() {
    cardType = {
      cardAction: 'renew'
    };
  });


  describe('#mustChooseBenefits', function() {
    
    it('is false if not a veteran', function() {
      let data = {
        veteransService: {
          isVeteran: 'No',
          receiveBenefits: '',
          previouslyDesignated: '',
          veteransIdentifier: ''
        },
        cardType: cardType
      };
      assert.equal(mustChooseBenefits(data), false);
    });

    it('is true if a veteran', function() {
      let data = {
        veteransService: {
          isVeteran: 'Yes',
          receiveBenefits: '',
          previouslyDesignated: '',
          veteransIdentifier: ''
        },
        cardType: cardType
      };
      assert.equal(mustChooseBenefits(data), true);
    });
  });

  describe('#mustChoosePreviousDesignation', function() {
    it('is false if not a veteran', function() {
      let data = {
        veteransService: {
          isVeteran: 'No',
          receiveBenefits: 'Yes',
          previouslyDesignated: '',
          veteransIdentifier: ''
        },
        cardType: cardType
      };
      assert.equal(mustChoosePreviousDesignation(data), false);
    });

    it('is false if not renewing a card', function() {
      let data = {
        veteransService: {
          isVeteran: 'Yes',
          receiveBenefits: 'Yes',
          previouslyDesignated: '',
          veteransIdentifier: ''
        },
        cardType: {
          cardAction: 'new'
        }
      };
      assert.equal(mustChoosePreviousDesignation(data), false);
    });

    it('is true if veteran and renewing', function() {
      let data = {
        veteransService: {
          isVeteran: 'Yes',
          receiveBenefits: 'Yes',
          previouslyDesignated: '',
          veteransIdentifier: ''
        },
        cardType: cardType
      };
      assert.equal(mustChoosePreviousDesignation(data), true);
    });
  });

  describe('#mustChooseIdentifier', function() {
    it('is false if not a veteran', function() {
      let data = {
        veteransService: {
          isVeteran: 'No',
          receiveBenefits: 'Yes',
          previouslyDesignated: 'Yes',
          veteransIdentifier: ''
        },
        cardType: cardType
      };
      assert.equal(mustChooseIdentifier(data), false);
    });

    it('is false if renewing', function() {
      let data = {
        veteransService: {
          isVeteran: 'Yes',
          receiveBenefits: 'Yes',
          previouslyDesignated: '',
          veteransIdentifier: ''
        },
        cardType: cardType
      };
      assert.equal(mustChooseIdentifier(data), false);
    });

    it('is true if veteran and not renewing', function() {
      let data = {
        veteransService: {
          isVeteran: 'Yes',
          receiveBenefits: 'Yes',
          previouslyDesignated: '',
          veteransIdentifier: ''
        },
        cardType: {
          cardAction: 'replace'
        }
      };
      assert.equal(mustChooseIdentifier(data), true);
    });
  });

  describe('#mustChooseKeepVeteranIdentifier', function() {
    it('is false if not a veteran', function() {
      let data = {
        veteransService: {
          isVeteran: 'No',
          receiveBenefits: '',
          previouslyDesignated: '',
          veteransIdentifier: ''
        },
        cardType: cardType
      };
      assert.equal(mustChooseKeepVeteranIdentifier(data), false);
    });

    it('is false if not renewing', function() {
      let data = {
        veteransService: {
          isVeteran: 'Yes',
          receiveBenefits: 'Yes',
          previouslyDesignated: 'Yes',
          veteransIdentifier: ''
        },
        cardType: {
          cardAction: 'replace'
        }
      };
      assert.equal(mustChooseKeepVeteranIdentifier(data), false);
    });

    it('is false if not previously designated', function() {
      let data = {
        veteransService: {
          isVeteran: 'Yes',
          receiveBenefits: 'Yes',
          previouslyDesignated: 'No',
          veteransIdentifier: ''
        },
        cardType: cardType
      };
      assert.equal(mustChooseKeepVeteranIdentifier(data), false);
    });

    it('is true when previously designated veteran is renewing', function() {
      let data = {
        veteransService: {
          isVeteran: 'Yes',
          receiveBenefits: 'Yes',
          previouslyDesignated: 'Yes',
          veteransIdentifier: ''
        },
        cardType: cardType
      };
      assert.equal(mustChooseKeepVeteranIdentifier(data), true);
    });
  });

  describe('#mustChooseAddVeteranIdentifier', function() {
    it('is false if not a veteran', function() {
      let data = {
        veteransService: {
          isVeteran: 'No',
          receiveBenefits: '',
          previouslyDesignated: '',
          veteransIdentifier: ''
        },
        cardType: cardType
      };
      assert.equal(mustChooseAddVeteranIdentifier(data), false);
    });

    it('is false if not renewing', function() {
      let data = {
        veteransService: {
          isVeteran: 'Yes',
          receiveBenefits: 'Yes',
          previouslyDesignated: 'Yes',
          veteransIdentifier: ''
        },
        cardType: {
          cardAction: 'replace'
        }
      };
      assert.equal(mustChooseAddVeteranIdentifier(data), false);
    });

    it('is false if previously designated', function() {
      let data = {
        veteransService: {
          isVeteran: 'Yes',
          receiveBenefits: 'Yes',
          previouslyDesignated: 'Yes',
          veteransIdentifier: ''
        },
        cardType: cardType
      };
      assert.equal(mustChooseAddVeteranIdentifier(data), false);
    });

    it('is true when new veteran is renewing', function() {
      let data = {
        veteransService: {
          isVeteran: 'Yes',
          receiveBenefits: 'Yes',
          previouslyDesignated: 'No',
          veteransIdentifier: ''
        },
        cardType: cardType
      };
      assert.equal(mustChooseAddVeteranIdentifier(data), true);
    });
  });
});

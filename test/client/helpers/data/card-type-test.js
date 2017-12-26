'use strict';

const assert = require('assert');

import {
  getID,
  getDL,
  getNewID,
  getNewDL,
  canContinue,
  prettyDL
} from '../../../../client/helpers/data/card-type';

describe('Data helpers for card-type', function() {
  describe('getID', function() {
    it('is false if user is not getting a new ID or renewing an ID', function() {
      let data = {
        cardType: {
          new: [''],
          renew: ''
        }
      };
      assert.equal(getID(data), false);
    });

    it('is true if user is getting a new ID', function() {
      let data = {
        cardType: {
          new: ['ID'],
          renew: ''
        }
      };
      assert.equal(getID(data), true);
    });

    it('is true if user is getting both a new ID and a new DL', function() {
      let data = {
        cardType: {
          new: ['ID', 'DL'],
          renew: ''
        }
      }
      assert.equal(getID(data), true);
    });

    it('is true if user is renewing an ID', function() {
      let data = {
        cardType: {
          new: ['DL'],
          renew: 'ID'
        }
      }
      assert.equal(getID(data), true);
    });
  });

  describe('getDL', function() {
    it('is false if user is not getting a new DL or renewing a DL', function() {
      let data = {
        cardType: {
          new: ['ID'],
          renew: ''
        }
      };
      assert.equal(getDL(data), false);
    });

    it('is true if user is getting a new DL', function() {
      let data = {
        cardType: {
          new: ['DL'],
          renew: ''
        }
      };
      assert.equal(getDL(data), true);
    });

    it('is true if user is getting both a new ID and a new DL', function() {
      let data = {
        cardType: {
          new: ['ID', 'DL'],
          renew: ''
        }
      }
      assert.equal(getDL(data), true);
    });

    it('is true if user is renewing a DL', function() {
      let data = {
        cardType: {
          new: ['ID'],
          renew: 'DL'
        }
      }
      assert.equal(getDL(data), true);
    });
  });

  describe('getNewDL', function() {
    it('is false if user is not getting a new ID or renewing an ID', function() {
      let data = {
        cardType: {
          new: [''],
          renew: ''
        }
      };
      assert.equal(getNewDL(data), false);
    });

    it('is true if user is getting a new DL', function() {
      let data = {
        cardType: {
          new: ['DL'],
          renew: ''
        }
      };
      assert.equal(getNewDL(data), true);
    });

    it('is true if user is getting both a new ID and a new DL', function() {
      let data = {
        cardType: {
          new: ['ID', 'DL'],
          renew: ''
        }
      }
      assert.equal(getNewDL(data), true);
    });

    it('is false if user is renewing a DL', function() {
      let data = {
        cardType: {
          new: ['ID'],
          renew: 'DL'
        }
      }
      assert.equal(getNewDL(data), false);
    });
  });

  describe('getNewID', function() {
    it('is false if user is not getting a new ID or renewing an ID', function() {
      let data = {
        cardType: {
          new: [''],
          renew: ''
        }
      };
      assert.equal(getNewID(data), false);
    });

    it('is true if user is getting a new ID', function() {
      let data = {
        cardType: {
          new: ['ID'],
          renew: ''
        }
      };
      assert.equal(getNewID(data), true);
    });

    it('is true if user is getting both a new ID and a new DL', function() {
      let data = {
        cardType: {
          new: ['ID', 'DL'],
          renew: ''
        }
      }
      assert.equal(getNewID(data), true);
    });

    it('is false if user is renewing an ID', function() {
      let data = {
        cardType: {
          new: ['DL'],
          renew: 'ID'
        }
      }
      assert.equal(getNewID(data), false);
    });
  });

  describe('canContinue', function() {
    it('is false if cardAction is new but no new card type has been selected', function() {
      let data = {
        cardType: {
          new: [],
          renew: 'ID'
        },
        cardAction: 'new'
      };
      assert.equal(canContinue(data), false);
    });

    it('is false if cardAction is renew but no renewal card type has been selected', function() {
      let data = {
        cardType: {
          new: ['ID'],
          renew: ''
        },
        cardAction: 'renew'
      };
      assert.equal(canContinue(data), false);
    });

    it('is true if cardAction is new and a new card type is selected', function() {
      let data = {
        cardType: {
          new: ['ID'],
          renew: 'ID'
        },
        cardAction: 'new'
      };
      assert.equal(canContinue(data), true);
    });

    it('is true if cardAction is renew and a renewal card type is selected', function() {
      let data = {
        cardType: {
          new: ['ID'],
          renew: 'ID'
        },
        cardAction: 'renew'
      };
      assert.equal(canContinue(data), true);
    });
  });

  describe('prettyDL', function() {
    it('returns "Driver License" when user is renewing a DL', function() {
      let data = {
        cardType: {
          renew: 'DL'
        }
      };
      assert.equal(prettyDL(data), 'Driver License');
    });
  });
});

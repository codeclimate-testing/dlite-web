'use strict';

const assert = require('assert');

import {
  getID,
  getDL,
  getNewID,
  getNewDL,
  replaceID,
  replaceDL,
  changeID,
  changeDL,
  renewID,
  renewDL,
  prettyDL
} from '../../../../client/helpers/data/card-type';

describe('Data helpers for card-type', function() {
  describe('getID', function() {
    it('is false if user is not getting a new ID or renewing an ID', function() {
      let data = {
        cardType: {
          IDDL: [''],
          cardAction: 'renew'
        }
      };
      assert.equal(getID(data), false);
    });

    it('is true if user is getting a new ID', function() {
      let data = {
        cardType: {
          IDDL: ['ID'],
          cardAction: 'new'
        }
      };
      assert.equal(getID(data), true);
    });

    it('is true if user is getting both a new ID and a new DL', function() {
      let data = {
        cardType: {
          IDDL: ['ID', 'DL'],
          cardAction: 'new'
        }
      }
      assert.equal(getID(data), true);
    });

    it('is true if user is renewing an ID', function() {
      let data = {
        cardType: {
          IDDL: ['ID'],
          cardAction: 'renew'
        }
      }
      assert.equal(getID(data), true);
    });
  });

  describe('getDL', function() {
    it('is false if user is not getting a new DL or renewing a DL', function() {
      let data = {
        cardType: {
          IDDL: ['ID'],
          cardAction: 'new'
        }
      };
      assert.equal(getDL(data), false);
    });

    it('is true if user is getting a new DL', function() {
      let data = {
        cardType: {
          IDDL: ['DL'],
          cardAction: 'new'
        }
      };
      assert.equal(getDL(data), true);
    });

    it('is true if user is getting both a new ID and a new DL', function() {
      let data = {
        cardType: {
          IDDL: ['ID', 'DL'],
          cardAction: 'new'
        }
      }
      assert.equal(getDL(data), true);
    });

    it('is true if user is renewing a DL', function() {
      let data = {
        cardType: {
          IDDL: ['DL'],
          cardAction: 'renew'
        }
      }
      assert.equal(getDL(data), true);
    });
  });

  describe('getNewDL', function() {
    it('is false if user is not getting a new ID or renewing an ID', function() {
      let data = {
        cardType: {
          IDDL: [''],
          cardAction: '',
          DL: {
            isApplying: false,
            action: ''
          },
          ID: {
            isApplying: false,
            action: ''
          }
        }
      };
      assert.equal(getNewDL(data), false);
    });

    it('is true if user is getting a new DL', function() {
      let data = {
        cardType: {
          IDDL: ['DL'],
          cardAction: 'new',
          DL: {
            isApplying: true,
            action: 'new'
          },
          ID: {
            isApplying: false,
            action: ''
          }
        }
      };
      assert.equal(getNewDL(data), true);
    });

    it('is true if user is getting both a new ID and a new DL', function() {
      let data = {
        cardType: {
          IDDL: ['ID', 'DL'],
          cardAction: 'new',
          DL: {
            isApplying: true,
            action: 'new'
          },
          ID: {
            isApplying: true,
            action: 'new'
          }
        }
      }
      assert.equal(getNewDL(data), true);
    });

    it('is false if user is renewing a DL', function() {
      let data = {
        cardType: {
          IDDL: ['DL'],
          cardAction: 'renew',
          DL: {
            isApplying: true,
            action: 'renew'
          },
          ID: {
            isApplying: false,
            action: ''
          }
        }
      }
      assert.equal(getNewDL(data), false);
    });
  });

  describe('getNewID', function() {
    it('is false if user is not getting a new ID or renewing an ID', function() {
      let data = {
        cardType: {
          IDDL: [''],
          cardAction: '',
          DL: {
            isApplying: false,
            action: ''
          },
          ID: {
            isApplying: false,
            action: ''
          }
        }
      };
      assert.equal(getNewID(data), false);
    });

    it('is true if user is getting a new ID', function() {
      let data = {
        cardType: {
          IDDL: ['ID'],
          cardAction: 'new',
          DL: {
            isApplying: false,
            action: ''
          },
          ID: {
            isApplying: true,
            action: 'new'
          }
        }
      };
      assert.equal(getNewID(data), true);
    });

    it('is true if user is getting both a new ID and a new DL', function() {
      let data = {
        cardType: {
          IDDL: ['ID', 'DL'],
          cardAction: 'new',
          DL: {
            isApplying: true,
            action: 'new'
          },
          ID: {
            isApplying: true,
            action: 'new'
          }
        }
      }
      assert.equal(getNewID(data), true);
    });

    it('is false if user is renewing an ID', function() {
      let data = {
        cardType: {
          IDDL: ['ID'],
          cardAction: 'renew',
          DL: {
            isApplying: false,
            action: ''
          },
          ID: {
            isApplying: true,
            action: 'renew'
          }
        }
      }
      assert.equal(getNewID(data), false);
    });
  });

  describe('#replaceID', function() {
    let data;
    beforeEach(function() {
      data = {
        cardType: {
          IDDL: ['ID'],
          cardAction: 'replace',
          DL: {
            isApplying: false,
            action: ''
          },
          ID: {
            isApplying: true,
            action: 'replace'
          }
        }
      };
    });

    it('is true if the ID object is true and action is replace', function(){
      assert.equal(replaceID(data), true);
    });
    it('is false if the ID object action is not replace', function() {
      data.cardType.ID.action = 'change';
      assert.equal(replaceID(data), false);
    });
  });

  describe('#changeID', function() {
    let data;
    beforeEach(function() {
      data = {
        cardType: {
          IDDL: ['ID'],
          cardAction: 'change',
          DL: {
            isApplying: false,
            action: ''
          },
          ID: {
            isApplying: true,
            action: 'change'
          }
        }
      };
    });

    it('is true if the ID object is true and action is change', function(){
      assert.equal(changeID(data), true);
    });
    it('is false if the ID object action is not change', function() {
      data.cardType.ID.action = 'renew';
      assert.equal(changeID(data), false);
    });
  });

  describe('#renewID', function() {
    let data;
    beforeEach(function() {
      data = {
        cardType: {
          IDDL: ['ID'],
          cardAction: 'renew',
          DL: {
            isApplying: false,
            action: ''
          },
          ID: {
            isApplying: true,
            action: 'renew'
          }
        }
      };
    });

    it('is true if the ID object is true and action is renew', function(){
      assert.equal(renewID(data), true);
    });
    it('is false if the ID object action is not renew', function() {
      data.cardType.ID.action = 'change';
      assert.equal(renewID(data), false);
    });
  });

  describe('prettyDL', function() {
    it('returns "Driver License" when user is renewing a DL', function() {
      let data = 'DL';
      assert.equal(prettyDL(data), 'Driver License');
    });
  });
});

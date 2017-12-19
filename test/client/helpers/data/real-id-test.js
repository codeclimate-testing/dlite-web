'use strict';

const assert = require('assert');

import {
  validToContinue,
  mustChooseCard
} from '../../../../client/helpers/data/real-id';

describe('Data helpers for real-id', function() {
  describe('mustChooseCard', function() {
    it('is false if real id has not been chosen', function() {
      let data = {
        realID: {
          getRealID: 'No'
        },
        cardType: {
          DL: true,
          ID: true
        }
      };
      assert.equal(mustChooseCard(data), false);
    });

    it('is false if real id has been chosen but only one card exists', function() {
      let data = {
        realID: {
          getRealID: 'Yes'
        },
        cardType: {
          DL: true,
          ID: false
        }
      };
      assert.equal(mustChooseCard(data), false);
    });

    it('is true if real id has been chosen and both cards are desired', function() {
      let data = {
        realID: {
          getRealID: 'Yes'
        },
        cardType: {
          DL: true,
          ID: true
        }
      };
      assert.equal(mustChooseCard(data), true);
    });
  });

  describe('validToContinue', function() {
    it('should be false if the person has not yet made a decision about real id', function() {
      let data = {
        realID: {
          getRealID: ''
        },
        cardType: {
          DL: true,
          ID: true
        }
      };
      assert.equal(validToContinue(data), false);
    });

    it('should be true if the person is not getting a real id', function() {
      let data = {
        realID: {
          getRealID: 'No'
        },
        cardType: {
          DL: true,
          ID: true
        }
      };
      assert.equal(validToContinue(data), true);
    });

    it('should be false if the person is choosing a real id and has not yet chosen which card', function() {
      let data = {
        realID: {
          getRealID: 'Yes'
        },
        cardType: {
          DL: true,
          ID: true
        }
      };
      assert.equal(validToContinue(data), false);
    });

    it('should be false if the person is choosing a real id and does not need to choose a card', function() {
      let data = {
        realID: {
          getRealID: 'Yes'
        },
        cardType: {
          DL: true,
          ID: false
        }
      };
      assert.equal(validToContinue(data), true);
    });

    it('should be true if the person is choosing a real id and has chosen which card', function() {
      let data = {
        realID: {
          getRealID: 'Yes',
          realIdDesignation: 'ID'
        },
        cardType: {
          DL: true,
          ID: true
        },
      };
      assert.equal(validToContinue(data), true);
    });
  });
});

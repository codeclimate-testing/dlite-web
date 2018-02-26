'use strict';

const assert = require('assert');

import {
  mustChooseCard,
  showDesignation,
  designatedValue,
  isSelected,
  gettingRealID,
  IDgettingRealID,
  DLgettingRealID,
  getCorrectRealIDApp
} from '../../../../client/helpers/data/real-id';

describe('Data helpers for real-id', function() {
  let data;
  beforeEach(function() {
    data = {
      realID: '',
      cardType: ['ID'],
      IDApp: {
        isApplying: true,
        realID: ''
      },
      DLApp: {
        isApplying: true,
        realID: ''
      }
    }
  });
  describe('#mustChooseCard', function() {
    it('is false if real id has not been chosen', function() {
      assert.equal(mustChooseCard(data), false);
    });

    it('is false if real id has been chosen on only ID card not DL', function() {
      data.IDApp.realID = 'Yes';
      assert.equal(mustChooseCard(data), false);
    });

    it('is false if real id has been chosen on only DL card not ID', function() {
      data.DLApp.realID = 'Yes';
      data.cardType = ['DL'];
      assert.equal(mustChooseCard(data), false);
    });

    it('is true if real id has been chosen and both cards are desired', function() {
      data.DLApp.realID = 'Yes';
      data.IDApp.realID = 'Yes';
      assert.equal(mustChooseCard(data), true);
    });
  });
  describe('#showDesignation', function() {
    it('is true if cardType array has two cards in it and user has selected Yes to getting real ID', function() {
      data.realID = 'Yes';
      data.cardType = ['ID', 'DL'];
      assert.equal(showDesignation(data), true);
    });

    it('is true if cardType array has two cards in it and user has selected Yes to getting real ID then specified to get realID on ID card', function() {
      data.realID = 'Yes';
      data.cardType = ['ID', 'DL'];
      data.DLApp.realID = 'No';
      assert.equal(showDesignation(data), true);
    });

    it('is false if cardType array has two cards in it and user has selected No to getting real ID', function() {
      data.realID = 'No';
      data.cardType = ['ID', 'DL'];
      assert.equal(showDesignation(data), false);
    });

    it('is true if cardType array has one card in it but both IDApp and DLApp are getting real ID', function() {
      data.DLApp.realID = 'Yes';
      data.IDApp.realID = 'Yes';
      assert.equal(showDesignation(data), true);
    });

    it('is true if cardType array has one card in it and both card apps have realID values', function() {
      data.DLApp.realID = 'No';
      data.IDApp.realID = 'Yes';
      data.cardType = ['ID']
      assert.equal(showDesignation(data), true);
    });

    it('is false if cardType array has one card in it and only one card app has a realID value', function() {
      data.DLApp.realID = '';
      data.IDApp.realID = 'No';
      data.cardType = ['ID']
      assert.equal(showDesignation(data), false);
    });
  });
  describe('#designatedValue', function() {
    it('returns blank string if both IDApp.realID and DLApp.realID are blank', function() {
      assert.equal(designatedValue(data), '');
    });
    it('returns "DL" if DLApp.realID is "Yes" and IDApp.realID is blank', function() {
      data.DLApp.realID = 'Yes';
      assert.equal(designatedValue(data), 'DL');
    });
    it('returns "ID" if IDApp.realID is "Yes" and DLApp.realID is blank', function() {
      data.IDApp.realID = 'Yes';
      assert.equal(designatedValue(data), 'ID');
    });
  });

  describe('#isSelected', function() {
    it('returns false if realID is blank', function() {
      assert.equal(isSelected(data), false);
    });
  });

  describe('#gettingRealID', function() {
    it('returns true if user is getting real ID on IDApp', function() {
      data.IDApp.realID = 'Yes';
      assert.equal(gettingRealID(data), true);
    });
    it('returns true if user is getting real ID on DLApp', function() {
      data.DLApp.realID = 'Yes';
      assert.equal(gettingRealID(data), true);
    });
    it('returns true if user is getting real ID on either of two cards', function() {
      data.cardType = ['ID', 'DL'];
      data.realID = 'Yes';
      assert.equal(gettingRealID(data), true);
    });
    it('returns false if user is not getting a real ID', function() {
      assert.equal(gettingRealID(data), false);
    });
  });

  describe('#getCorrectRealIDApp', function() {
    it('returns the state.application object if cardType includes ID and DL', function() {
      data.cardType = ['ID', 'DL'];
      assert.deepEqual(getCorrectRealIDApp(data), data);
    });
    it('returns the state.application.IDApp object if cardType includes only ID', function() {
      data.cardType = ['ID'];
      assert.deepEqual(getCorrectRealIDApp(data), data.IDApp);
    });
    it('returns the state.application.DLApp object if cardType includes only DL', function() {
      data.cardType = ['DL'];
      assert.deepEqual(getCorrectRealIDApp(data), data.DLApp);
    });
  });

});

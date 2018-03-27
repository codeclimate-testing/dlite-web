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

    it('is true if real id has been chosen and both cards are getting the real ID', function() {
      data.DLApp.realID = 'Yes';
      data.IDApp.realID = 'Yes';
      data.realID = 'Yes';
      assert.equal(mustChooseCard(data), true);
    });
  });

  describe('#showDesignation', function() {
    it('is true if user is getting both cards, and user has selected Yes to getting real ID', function() {
      data.realID = 'Yes';
      data.IDApp.isApplying = true;
      data.DLApp.isApplying = true;
      assert.equal(showDesignation(data), true);
    });

    it('is true if user is getting both cards and is getting a real ID only on the DL', function() {
      data.realID = 'Yes';
      data.IDApp.isApplying = true;
      data.DLApp.isApplying = true;
      data.IDApp.realID = 'Yes';
      data.DLApp.realID = 'No';
      assert.equal(showDesignation(data), true);
    });

    it('is false if user is getting both cards and user has selected No to getting real ID', function() {
      data.realID = 'No';
      data.IDApp.isApplying = true;
      data.DLApp.isApplying = true;
      assert.equal(showDesignation(data), false);
    });

    it('is true if user is on a single-card flow but both IDApp and DLApp are getting real ID', function() {
      data.DLApp.realID = 'Yes';
      data.IDApp.realID = 'Yes';
      data.IDApp.isApplying = true;
      data.DLApp.isApplying = true;
      data.realID = 'Yes';
      data.cardType = ['ID'];
      assert.equal(showDesignation(data), true);
    });

    it('is true if cardType array has one card in it and both card apps have realID values', function() {
      data.DLApp.realID = 'No';
      data.IDApp.realID = 'Yes';
      data.IDApp.isApplying = true;
      data.DLApp.isApplying = true;
      data.realID = 'Yes';
      data.cardType = ['ID']
      assert.equal(showDesignation(data), true);
    });

    it('is true if user is on a single-card flow and only one card app has a realID value but user is getting both cards', function() {
      data.DLApp.realID = '';
      data.IDApp.realID = 'Yes';
      data.realID = 'Yes';
      data.IDApp.isApplying = true;
      data.DLApp.isApplying = true;
      data.cardType = ['DL']
      assert.equal(showDesignation(data), true);
    });

    it('is false if container did not pass along a cardType array', function() {
      assert.equal(showDesignation({}), false);
    })
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
    it('returns true if user is getting real ID', function() {
      data.realID = 'Yes';
      assert.equal(gettingRealID(data), true);
    });
    it('returns false if user is not getting a real ID', function() {
      data.realID = 'No';
      assert.equal(gettingRealID(data), false);
    });
    it('returns false if value is blank', function() {
      data.realID = '';
      assert.equal(gettingRealID(data), false);
    });
  });

});

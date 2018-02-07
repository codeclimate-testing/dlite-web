'use strict';

const assert = require('assert');

import {
  getID,
  getDL,
  prettyDL,
  IDorDL,
  IDOnly,
  getNewID,
  getNewDL,
  replaceID,
  replaceDL,
  changeID,
  changeDL,
  correctDL,
  correctID,
  updateDL,
  updateID,
  renewID,
  renewDL,
  needsEndorsement,
  getCorrectString
} from '../../../../client/helpers/data/card-type';


const bothCards = {
  cardType: {
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
  }
};


describe('Data helpers for card-type', function() {
  let data;

  function buildCardType(type, action){
    return {
      cardType: {
        IDDL: [type],
        cardAction: action
      }
    };
  };

  beforeEach(function() {
    data = buildCardType('', '');
  });

  describe('#getID', function() {
    it('is false if user is not getting a new ID or renewing an ID', function() {
      assert.equal(getID(data), false);
    });

    it('is true if user is getting a new ID', function() {
      data = buildCardType('ID', 'new');
      assert.equal(getID(data), true);
    });

    it('is true if user is getting both a new ID and a new DL', function() {
      data = bothCards;
      assert.equal(getID(data), true);
    });

    it('is true if user is renewing an ID', function() {
      data = buildCardType('ID', 'renew');
      assert.equal(getID(data), true);
    });
  });

  describe('#getDL', function() {
    it('is false if user is not getting a new DL or renewing a DL', function() {
      data = buildCardType('ID', 'new');
      assert.equal(getDL(data), false);
    });

    it('is true if user is getting a new DL', function() {
      data = buildCardType('DL', 'new');
      assert.equal(getDL(data), true);
    });

    it('is true if user is getting both a new ID and a new DL', function() {
      data = bothCards;
      assert.equal(getDL(data), true);
    });

    it('is true if user is renewing a DL', function() {
      data = buildCardType('DL', 'renew');
      assert.equal(getDL(data), true);
    });
  });

  describe('#getNewDL', function() {
    it('is false if user is not getting a new ID or renewing an ID', function() {
      assert.equal(getNewDL(data), false);
    });

    it('is true if user is getting a new DL', function() {
      data = buildCardType('DL', 'new');
      assert.equal(getNewDL(data), true);
    });

    it('is true if user is getting both a new ID and a new DL', function() {
      data = bothCards;
      assert.equal(getNewDL(data), true);
    });

    it('is false if user is renewing a DL', function() {
      data = buildCardType('DL', 'renew');
      assert.equal(getNewDL(data), false);
    });
  });

  describe('#getNewID', function() {
    it('is false if user is not getting a new ID or renewing an ID', function() {
      assert.equal(getNewID(data), false);
    });

    it('is true if user is getting a new ID', function() {
      data = buildCardType('ID', 'new');
      assert.equal(getNewID(data), true);
    });

    it('is true if user is getting both a new ID and a new DL', function() {
      data = bothCards;
      assert.equal(getNewID(data), true);
    });

    it('is false if user is renewing an ID', function() {
      data = buildCardType('ID', 'renew');
      assert.equal(getNewID(data), false);
    });
  });

  describe('#replaceID', function() {
    beforeEach(function() {
      data = buildCardType('ID', 'replace');
    });

    it('is true if the cardAction is replace and IDDL includes ID', function(){
      assert.equal(replaceID(data), true);
    });
    it('is false if the cardAction is not replace', function() {
      data.cardType.cardAction = 'new';
      assert.equal(replaceID(data), false);
    });
    it('is false if IDDL does not include ID', function() {
      data.cardType.IDDL = ['DL'];
      assert.equal(replaceID(data), false);
    });
  });

  describe('#replaceDL', function() {
    beforeEach(function() {
      data = buildCardType('DL', 'replace');
    });

    it('is true if the cardAction is replace and IDDL includes DL', function(){
      assert.equal(replaceDL(data), true);
    });
    it('is false if the cardAction is not replace', function() {
      data.cardType.cardAction = 'new';
      assert.equal(replaceDL(data), false);
    });
    it('is false if IDDL does not include DL', function() {
      data.cardType.IDDL = ['ID'];
      assert.equal(replaceDL(data), false);
    });
  });

  describe('#changeID', function() {
    beforeEach(function() {
      data = buildCardType('ID', 'change');
    });

    it('is true if the cardAction is change and the IDDL includes ID', function(){
      assert.equal(changeID(data), true);
    });
    it('is false if the cardAction is not change', function() {
      data = buildCardType('ID', 'renew');
      assert.equal(changeID(data), false);
    });
    it('is false if IDDL does not include ID', function() {
      data.cardType.IDDL = ['DL'];
      assert.equal(changeID(data), false);
    });
  });

  describe('#changeDL', function() {
    beforeEach(function() {
      data = buildCardType('DL', 'change');
    });

    it('is true if the cardAction is change and the IDDL includes DL', function(){
      assert.equal(changeDL(data), true);
    });
    it('is false if the cardAction is not change', function() {
      data = buildCardType('ID', 'renew');
      assert.equal(changeDL(data), false);
    });
    it('is false if IDDL does not include DL', function() {
      data.cardType.IDDL = ['ID'];
      assert.equal(changeDL(data), false);
    });
  });

  describe('#correctID', function() {
    beforeEach(function() {
      data = {
        cardType: {
          cardAction: 'change',
          IDDL: ['ID']
        },
        cardChanges: {
          correctOrUpdate: 'correct'
        }
      };
    });

    it('is true if the cardAction is change and the IDDL includes ID and the user is correcting the card', function(){
      assert.equal(correctID(data), true);
    });
    it('is false if the cardAction is not change', function() {
      data = buildCardType('ID', 'renew');
      assert.equal(correctID(data), false);
    });
    it('is false if IDDL does not include ID', function() {
      data.cardType.IDDL = ['DL'];
      assert.equal(correctID(data), false);
    });
    it('is false if the user is updating the card', function() {
      data.cardChanges.correctOrUpdate = 'update';
      assert.equal(correctID(data), false);
    });
  });

  describe('#updateID', function() {
    beforeEach(function() {
      data = {
        cardType: {
          cardAction: 'change',
          IDDL: ['ID']
        },
        cardChanges: {
          correctOrUpdate: 'update'
        }
      };
    });

    it('is true if the cardAction is change and the IDDL includes ID and the user is updating the card', function(){
      assert.equal(updateID(data), true);
    });
    it('is false if the cardAction is not change', function() {
      data = buildCardType('ID', 'renew');
      assert.equal(updateID(data), false);
    });
    it('is false if IDDL does not include ID', function() {
      data.cardType.IDDL = ['DL'];
      assert.equal(updateID(data), false);
    });
    it('is false if the user is correcting the card', function() {
      data.cardChanges.correctOrUpdate = 'correct';
      assert.equal(updateID(data), false);
    });
  });

  describe('#renewID', function() {
    beforeEach(function() {
      data = buildCardType('ID', 'renew');
    });

    it('is true if the cardAction is renew and IDDL includes ID', function(){
      assert.equal(renewID(data), true);
    });
    it('is false if the cardAction is not renew', function() {
      data = buildCardType('ID', 'change');
      assert.equal(renewID(data), false);
    });
    it('is false if the IDDL does not include ID', function() {
      data.cardType.IDDL = ['DL'];
      assert.equal(renewID(data), false);
    });
  });

  describe('#renewDL', function() {
    beforeEach(function() {
      data = buildCardType('DL', 'renew');
    });

    it('is true if the cardAction is renew and IDDL includes DL', function(){
      assert.equal(renewDL(data), true);
    });
    it('is false if the cardAction is not renew', function() {
      data = buildCardType('DL', 'change');
      assert.equal(renewDL(data), false);
    });
    it('is false if the IDDL does not include DL', function() {
      data.cardType.IDDL = ['ID'];
      assert.equal(renewDL(data), false);
    });
  });

  describe('#prettyDL', function() {

    it('returns "Driver License" when user is renewing a DL', function() {
      data = buildCardType('DL', 'renew');
      assert.equal(prettyDL(IDorDL(data)), 'Driver License');
    });
  });

  describe('#IDorDL', function() {
    it('returns "ID" if user is just getting an ID', function() {
      data = buildCardType('ID', 'renew');
      assert.equal(IDorDL(data), 'ID');
    });

    it('returns "DL" if user is just getting a DL', function() {
      data = buildCardType('DL', 'renew');
      assert.equal(IDorDL(data), 'DL');
    });

    it('returns "both" if user is getting both cards', function() {
      data = bothCards;
      assert.equal(IDorDL(data), 'both');
    });

    it('returns "none" if user has not selected any cards yet', function() {
      assert.equal(IDorDL(data), 'none');
    });
  });

  describe('#IDOnly', function() {
    it('returns true if IDDL array only contains an ID', function() {
      data = buildCardType('ID', 'replace');
      assert.equal(IDOnly(data), true);
    });
    it('returns false if IDDL array only contains a DL', function() {
      data = buildCardType('DL', 'new')
      assert.equal(IDOnly(data), false);
    });
    it('returns false if IDDL array only contains both ID and DL', function() {
      data = bothCards;
      assert.equal(IDOnly(data), false);
    });
    it('returns false if IDDL array is empty', function() {
      assert.equal(IDOnly(data), false);
    });
  });

  describe('#needsEndorsement', function() {
    let props;
    beforeEach(function() {
      props = {
        licenseType: {
          needEndorsement: ''
        }
      }
    });
    it('returns true if value is Yes', function() {
      props.licenseType.needEndorsement = 'Yes';
      assert.equal(needsEndorsement(props), true);
    });
    it('returns false if value is blank', function() {
      props.licenseType.needEndorsement = '';
      assert.equal(needsEndorsement(props), false);
    });
    it('returns false if value is No', function() {
      props.licenseType.needEndorsement = 'No';
      assert.equal(needsEndorsement(props), false);
    });
  });
  describe('#getCorrectString', function() {
    const DLString = 'license string';
    const IDString = 'ID string';
    it('returns ID string when user is changing ID', function() {
      data.cardType.IDDL = ['ID'];
      data.cardType.cardAction = 'change';
      let result = getCorrectString(data, DLString, IDString);
      assert.equal(result, IDString);
    });

    it('returns DL string when user is changing a DL', function() {
      data.cardType.IDDL = ['DL'];
      data.cardType.cardAction = 'change';
      let result = getCorrectString(data, DLString, IDString);
      assert.equal(result, DLString);
    });
  });
});

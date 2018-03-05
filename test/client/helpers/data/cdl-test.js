'use strict';

import assert           from 'assert';
import {
  showCDLUnder21,
  needsAddress,
  needsCurrentDLInfo,
  firstTime,
  expiredCard,
  noCardTypeArray,
  yesClassM,
  noClassM,
  getClassText
} from '../../../../client/helpers/data/cdl';

describe('Data helpers for cdl data', function() {
  let props;
  beforeEach(function() {
    props = {
      addApp: '',
      dateOfBirth: {
        month: '03',
        day: '10',
        year: (new Date().getFullYear() - 15).toString()
      }
    };
  });
  describe('#showCDLUnder21', function() {
    it('returns false when user is on regular IDDL application', function() {
      props.addApp = 'iddl';
      assert.equal(showCDLUnder21(props), false);
    });

    it('returns false when user is older than 21', function() {
      props.addApp = 'cdl';
      props.dateOfBirth = '1970';
      assert.equal(showCDLUnder21(props), false);
    });

    it('returns true when user is under than 21 and is on cdl application', function() {
      props.addApp = 'cdl';
      assert.equal(showCDLUnder21(props), true);
    });
  });
  describe('#expiredCard', function() {
    let currentCardInfo;
    beforeEach(function() {
      currentCardInfo = {
        month: '',
        day: '',
        year: ''
      };
    });

    it('returns true if expired date is in the past', function() {
      let today = new Date();

      currentCardInfo.year = today.getFullYear().toString();
      currentCardInfo.month = (today.getMonth() + 1).toString();
      currentCardInfo.day = (today.getDate() - 1).toString();

      assert.equal(expiredCard(currentCardInfo), true);
    });

    it('returns false if expired date is today', function() {
      let today = new Date();

      currentCardInfo.year = today.getFullYear();
      currentCardInfo.month = today.getMonth() + 1;
      currentCardInfo.day = today.getDate();
      assert.equal(expiredCard(currentCardInfo), false);
    });

    it('returns false if expired date is tomorrow', function() {
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);

      currentCardInfo.year = tomorrow.getFullYear();
      currentCardInfo.month = tomorrow.getMonth() + 1;
      currentCardInfo.day = tomorrow.getDate();

      assert.equal(expiredCard(currentCardInfo), false);
    });
  });

  describe('#needsAddress', function() {
    it('returns true if props does not have isResident property', function() {
      assert.equal(needsAddress(props), true);
    });
    it('returns true if props has isResident property that equals "Yes"', function() {
      props.isResident = 'Yes';
      assert.equal(needsAddress(props), true);
    });
    it('returns false if props has isResident property that equals "No"', function() {
      props.isResident = 'No';
      assert.equal(needsAddress(props), false);
    });
  });

  describe('#noCardTypeArray', function() {
    it('returns true if props do not include cardType array', function() {
      assert.equal(noCardTypeArray({}), true);
    });
    it('returns false if props include cardType array', function() {
      let props = {
        cardType: []
      };
      assert.equal(noCardTypeArray(props), false);
    });
  });

  describe('#getClassText', function() {
    it('returns "Class A" when value is "classA"', function() {
      assert.equal(getClassText('classA', 'en'), 'Class A');
    });

    it('returns "Class B" when value is "classB"', function() {
      assert.equal(getClassText('classB', 'en'), 'Class B');
    });

    it('returns "Class C" when value is "classC"', function() {
      assert.equal(getClassText('classC', 'en'), 'Class C');
    });
  });

  describe('#yesClassM', function() {
    it('returns true if props.classM equals "Yes"', function() {
      let props = {
        classM: 'Yes'
      };
      assert.equal(yesClassM(props), true);
    });
    it('returns false if props.classM equals "No"', function() {
      let props = {
        classM: 'No'
      };
      assert.equal(yesClassM(props), false);
    });
  });

  describe('#noClassM', function() {
    it('returns false if props.classM equals "Yes"', function() {
      let props = {
        classM: 'Yes'
      };
      assert.equal(noClassM(props), false);
    });
    it('returns true if props.classM equals "No"', function() {
      let props = {
        classM: 'No'
      };
      assert.equal(noClassM(props), true);
    });
  });

});
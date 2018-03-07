'use strict';

const assert            = require('assert');
const dataParser        = require('../../../../server/models/parsers/data-parser');

describe('dataParser', function() {

  describe('parseParty', function() {
    it('returns the selected party that has been saved to politicalPartyChoose', function() {
      let obj = {
        isSelected: 'Yes',
        politicalPartyChoose: 'Peace and Freedom Party',
        otherParty: ''
      };
      assert.equal(dataParser.parseParty(obj), 'Peace and Freedom Party');
    });

    it('returns the other party that has been typed in', function() {
      let obj = {
        isSelected: 'Yes',
        politicalPartyChoose: 'Other',
        otherParty: 'Oprah'
      };
      assert.equal(dataParser.parseParty(obj), 'Oprah');
    });
  });

  describe('stringToBool', function() {
    it('returns "decline" when data equals "decline"', function() {
      let val = 'decline';
      assert.equal(dataParser.strToBool(val), 'decline');
    });

    it('returns null when data is unrecognized', function() {
      let val = 'foo';
      assert.equal(dataParser.strToBool(val), null);
    });

    it('returns false when data equals "No"', function(){
      let val = 'No';
      assert.equal(dataParser.strToBool(val), false);
    });

    it('returns true when data equals "Yes"', function() {
      let val = 'Yes';
      assert.equal(dataParser.strToBool(val), true);
    });
  });

  describe('boolToStr', function() {
    it('returns "decline" when data equals "decline"', function() {
      let val = "decline";
      assert.equal(dataParser.boolToStr(val), 'decline');
    });

    it('returns "No" when data is false', function() {
      let val = false;
      assert.equal(dataParser.boolToStr(val), 'No');
    });

    it('returns "Yes" when data is true', function() {
      let val = true;
      assert.equal(dataParser.boolToStr(val), 'Yes');
    });
  });


  it('returns string when date object has all values', function() {
    let date = {
      month: 12,
      year: 2004,
      day: 24
    };
    assert.equal(dataParser.createDateString(date), '12/24/2004');
  });

  describe('createDateJson', function() {
    it('returns empty values when date string is not correct', function() {
      let date = '12/2004'
      assert.deepEqual(
        dataParser.createDateJson(date),
        {
          month:  '',
          day:    '',
          year:   ''
        }
      );
    });

    it('returns proper json with all values when date string is correct', function() {
      let date = '12/24/2004'
      assert.deepEqual(
        dataParser.createDateJson(date),
        {
          month:  '12',
          day:    '24',
          year:   '2004'
        }
      );
    });
  });

});

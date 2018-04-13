'use strict';

const assert            = require('assert');
const dataParser        = require('../../../../server/models/parsers/data-parser');

describe('dataParser', function() {
  describe('#formatCompletedAtDate', function () {
    let date = new Date(2018, 3, 13, 11, 45, 53)
    it('format completed at date for saving in databas', function() {
      assert.equal(dataParser.formatCompletedAtDate(date), '2018-3-13 11:45:53')
    });
  });

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
    it('returns "null" when data equals "decline"', function() {
      let val = 'decline';
      assert.equal(dataParser.strToBool(val), null);
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
    it('returns empty string when data equals null', function() {
      let val = null;
      assert.equal(dataParser.boolToStr(val), '');
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

  describe('#buildName', function() {
    it('returns a string of first name, last name, and suffix', function() {
      let app = {
        first_name: 'first',
        middle_name: '',
        last_name: 'last',
        suffix_name: ''
      };
      assert.equal(dataParser.buildName(app), 'first last ');
    });
  });

  describe('#sameAddress', function() {
    let mailing_address, home_address;
    beforeEach(function() {
      mailing_address = {
        type: 'mailing',
        street_address_1: '',
        city: '',
        state: '',
        zip: ''
      };
      home_address = {
        type: 'home',
        street_address_1: '',
        city: '',
        state: '',
        zip: ''
      };
    });
    it('returns blank if addresses are empty', function() {
      assert.equal(dataParser.sameAddress(home_address, mailing_address), '');
    });
    it('returns Yes if addresses match', function() {
      mailing_address.street_address_1 = '1111 street';
      mailing_address.city = 'a city';
      home_address.street_address_1 = '1111 street';
      home_address.city = 'a city';
      assert.equal(dataParser.sameAddress(home_address, mailing_address), 'Yes');
    });
    it('returns No if addresses do not match', function() {
      mailing_address.street_address_1 = '1111 street';
      mailing_address.city = 'a city';
      home_address.street_address_1 = '1114 street';
      home_address.city = 'another city';
      assert.equal(dataParser.sameAddress(home_address, mailing_address), 'No');
    });
  });

});

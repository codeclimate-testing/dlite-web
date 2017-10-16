'use strict';

import assert from 'assert';

import * as dataPresent from '../../../client/helpers/data-present';

describe('dataPresent', function() {
  describe('#value', function() {
    it('is false with an empty string', function() {
      assert(!dataPresent.value(''), 'empty string is present');
    });

    it('is false with a padded empty string', function() {
      assert(!dataPresent.value('    '), 'padded empty string is present');
    });

    it('is true for strings with content', function() {
      assert(dataPresent.value('  0  '), 'padded string with value not present');
    });
  });

  describe('#legalName', function() {
    it('is true with only last name', function() {
      assert(dataPresent.legalName({lastName: 'Smith'}), 'legalName not present with last name');
    });

    it('is false without a last name', function() {
      assert(!dataPresent.legalName({firstName: 'Agent'}), 'legalName present with only firstName');
    });
  });

  describe('#address', function() {
    it('is true with any field but state', function() {
      assert(dataPresent.address({street_1: '123 Main'}), 'address not present with street');
      assert(dataPresent.address({city: 'San Fukiama'}), 'address not present with city');
      assert(dataPresent.address({zip: '94000'}), 'address not present with zip');
    });

    it('is false with only state', function() {
      assert(!dataPresent.address({state: 'CA'}), 'legalName present with only state');
    });
  });

  describe('#date', function() {
    it('is true when all three parts are present', function() {
      assert(
        dataPresent.date({month: '12', day: '28', year: '1931'}),
        'date not present with all fields'
      );
    });

    it('is false when only partial data present', function() {
      assert(
        !dataPresent.date({month: '12', year: '1931'}),
        'date present with only parts of date'
      );
    });
  });

  describe('#height', function() {
    it('is true when the feet are present', function() {
      assert(dataPresent.height({feet: '5'}), 'height data not present with feet only');
    });

    it('is false without the feet', function() {
      assert(!dataPresent.height({inches: '5'}), 'height data present with inches only');
      assert(!dataPresent.height({}), 'height data present when blank');
    });
  });

  describe('#socialSecurity', function() {
    it('is true when there is a value in each element', function() {
      let data = {
        part1: '5',
        part2: '5',
        part3: '5'
      };
      assert(dataPresent.socialSecurity(data), 'ssn data not considered present with all three parts');
    });

    it('is false without the feet', function() {
      assert(!dataPresent.socialSecurity({part1: '5', part2: '5'}), 'ssn data present with only partial fields');
    });
  });

  describe('#contactDetails', function() {
    it('is true with only email address', function() {
      assert(dataPresent.contactDetails({emailAddress: 'smith@wrangler.com'}), 'contactDetails not present with email address');
    });

    it('is true with phone enumber only', function() {
      assert(dataPresent.contactDetails({phoneNumber: '(916)000-1111'}), 'contactDetails not present with phon enumber');
    });

    it('is false without email or phone number', function() {
      assert(!dataPresent.contactDetails({emailAddress: '', phoneNumber: ''}), 'contactDetails present without email or phone umber');
    });
  });

  describe('#suspendedLicenseInfo', function() {
    it('is true when all three parts of date are present', function() {
      assert(
        dataPresent.suspendedLicenseInfo({month: '10', day: '15', year: '1985'}),
        'suspended license date not present with all fields'
      );
    });

    it('is false when only partial date present', function() {
      assert(
        !dataPresent.suspendedLicenseInfo({month: '10', year: '1985'}),
        'suspended license date present with only parts of date'
      );
    });

    it('is true when ony reason is present', function() {
      assert(
        dataPresent.suspendedLicenseInfo({'reason': 'Testing for your presence'}),
        'suspended license not present with just reason field'
      );
    });
  });

  describe('#application', function() {
    it('is true when there is a legalName', function() {
      let data = {
        legalName: {
          lastName: 'Baccigalupi'
        }
      };

      assert(dataPresent.application(data), 'Data not present with legalName');
    });

    it('is true when there is a sex selection', function() {
      let data = {
        sex: 'male'
      };

      assert(dataPresent.application(data), 'Data not present with sex');
    });

    it('is true when there is an eye color', function() {
      let data = {
        eyeColor: 'red'
      };

      assert(dataPresent.application(data), 'Data not present with eyeColor');
    });

    it('is true when there is hair color', function() {
      let data = {
        hairColor: 'red'
      };

      assert(dataPresent.application(data), 'Data not present with hairColor');
    });

    it('is true when there is a height', function() {
      let data = {
        height: { feet: '12' }
      };

      assert(dataPresent.application(data), 'Data not present with height');
    });

    it('is true when there is a weight', function() {
      let data = {
        weight: '12'
      };

      assert(dataPresent.application(data), 'Data not present with weight');
    });

    it('is true when there is a social security number', function() {
      let data = {
        socialSecurity: {
          part1: '123',
          part2: '12',
          part3: '1234'
        }
      };

      assert(dataPresent.application(data), 'Data not present with social security');
    });

    it('is true when there is a home address', function() {
      let data = {
        homeAddress: {
          street1: '123 Main street',
          city: 'Miami',
          state: 'CA',
          zip: '94111'
        }
      };

      assert(dataPresent.application(data), 'Data not present with an home address');
    });

    it('is true when there is a mailing address', function() {
      let data = {
        mailingAddress: {
          street1: '123 Main street',
          city: 'Miami',
          state: 'CA',
          zip: '94111'
        }
      };

      assert(dataPresent.application(data), 'Data not present with a mailing address');
    });
  });
});

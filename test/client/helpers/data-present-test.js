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

  describe('#organDonation', function() {
    it('is true with donate and contribute', function() {
      assert(dataPresent.organDonation({donate: 'Yes', contribute: 'Yes'}), 'organDonation not present with donate and contribute');
    });

    it('is false without donate and contribute', function() {
      assert(!dataPresent.organDonation({contribute: 'Yes'}), 'organDonation not present with contribute');
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

  describe('#privilegeRemovedHistory', function() {
    it('is true when all three parts of date are present', function() {
      assert(
        dataPresent.privilegeRemovedHistory({month: '10', day: '15', year: '1985'}),
        'suspended license date not present with all fields'
      );
    });

    it('is false when only partial date present', function() {
      assert(
        !dataPresent.privilegeRemovedHistory({month: '10', year: '1985'}),
        'suspended license date present with only parts of date'
      );
    });

    it('is true when ony reason is present', function() {
      assert(
        dataPresent.privilegeRemovedHistory({'reason': 'Testing for your presence'}),
        'suspended license not present with just reason field'
      );
    });

    it('is true when ony isSuspended is present', function() {
      assert(
        dataPresent.privilegeRemovedHistory({'isSuspended': 'Yes'}),
        'suspended license not present with just isSuspended field'
      );
    });

  });

  describe('#existingDLIDInfo', function() {
    it('is true when all three parts of date are present', function() {
      assert(
        dataPresent.existingDLIDInfo({month: '10', day: '15', year: '1985'}),
        'existing DL ID date not present with all fields'
      );
    });

    it('is false when only partial date present', function() {
      assert(
        !dataPresent.existingDLIDInfo({month: '10', year: '1985'}),
        'existing DL ID date present with only parts of date'
      );
    });

    it('is true when ony DLIDNumber is present', function() {
      assert(
        dataPresent.existingDLIDInfo({'DLIDNumber': 'DMV00100101'}),
        'existing DL ID not present with just DLIDNumber field'
      );
    });

    it('is true when ony issuedBy is present', function() {
      assert(
        dataPresent.existingDLIDInfo({'issuedBy': 'USA'}),
        'existing DL ID not present with just issuedBy field'
      );
    });

    it('is true when ony hasExisting is present', function() {
      assert(
        dataPresent.existingDLIDInfo({'hasExisting': 'Yes'}),
        'existing DL ID not present with just hasExisting field'
      );
    });

  });

  describe('#previousNamesInfo', function() {
    it('is true when only name is present', function() {
      assert(
        dataPresent.previousNamesInfo({names: 'John Doe, Jane Doe'}),
        'previous names info not present with just names'
      );
    });

    it('is true when only hasPreviousNames is present', function() {
      assert(
        dataPresent.previousNamesInfo({hasPreviousNames: 'Yes'}),
        'previous names info not present with just hasPreviousNames'
      );
    });

    it('is false without email or phone number', function() {
      assert(!dataPresent.previousNamesInfo({names: '', hasPreviousNames: ''}),
      'previousNamesInfo present without names or hasPreviousNames');
    });

  });

  describe('#politicalContact', function() {
    it('is true with only email address', function() {
      assert(dataPresent.politicalContact({shouldContact: 'Yes', emailAddress: 'smith@wrangler.com'}), 'politicalContact not present with email address');
    });

    it('is true with phone enumber only', function() {
      assert(dataPresent.politicalContact({shouldContact: 'Yes', phoneNumber: '(916)000-1111'}), 'politicalContact not present with phone enumber');
    });

    it('is false without email or phone number', function() {
      assert(!dataPresent.politicalContact({shouldContact: 'Yes', emailAddress: '', phoneNumber: ''}), 'politicalContact present without email or phone umber');
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

    it('is true when there is a date of birth', function() {
      let data = {
        dateOfBirth : {
          month:  '12',
          day:    '28',
          year:   '1931'
        }
      };

      assert(dataPresent.application(data), 'Data not present with date of birth');
    });

    it('is true when there is a home address', function() {
      let data = {
        homeAddress: {
          street1:  '123 Main street',
          city:     'Miami',
          state:    'CA',
          zip:      '94111'
        }
      };

      assert(dataPresent.application(data), 'Data not present with an home address');
    });

    it('is true when there is a mailing address', function() {
      let data = {
        mailingAddress: {
          street1:  '123 Main street',
          city:     'Miami',
          state:    'CA',
          zip:      '94111'
        }
      };

      assert(dataPresent.application(data), 'Data not present with a mailing address');
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

    it('is true when there is suspended license info', function(){
      let data = {
        privilegeRemovedHistory: {
          isSuspended:  'Yes',
          month:        '10',
          day:          '15',
          year:         '1985',
          reason:       'I was not being very responsible.'
        }
      };

      assert(dataPresent.application(data), 'Data not present with suspended license info');
    });

    it('is true when there is previous name info', function(){
      let data = {
        previousNamesInfo: {
          names: 'Captain America',
          hasPreviousNames: 'Yes'
        }
      };

      assert(dataPresent.application(data), 'Data not present with previous name info');
    });

    it('is true when there is existing DL/ID info', function(){
      let data = {
        existingDLIDInfo: {
          DLIDNumber:   'DMV001',
          issuedBy:     'California',
          month:        '10',
          day:          '15',
          year:         '1981',
          hasExisting:  'Yes'
        }
      };

      assert(dataPresent.application(data), 'Data not present with existing DL/ID info');
    });

    it('is true when there is am-citizen status', function(){
      let data = {
        citizenStatus: 'Yes'
      };

      assert(dataPresent.application(data), 'Data not present with am-citizen status');
    });

    it('is true when there is ballot by mail', function(){
      let data = {
        ballotByMail: 'No'
      };

      assert(dataPresent.application(data), 'Data not present with ballot by mail');
    });

    it('is true when there is eligibility requirements', function(){
      let data = {
        eligibilityRequirements: 'No'
      };

      assert(dataPresent.application(data), 'Data not present with eligibility requirements');
    });

     it('is true when there is political party choose', function(){
      let data = {
        politicalPartyChoose: {
          politicalPartyChoose:  'Yes',
          isSelected:   'Independent'
        }
      };

      assert(dataPresent.application(data), 'Data not present with political party choose');
    });

    it('is true when there is political contact', function(){
      let data = {
        politicalContact: {
          shouldContact:  'Yes',
          emailAddress:   'abc@xyz.gov',
          phoneNumber:    '(111) 000-1111'
        }
      };

      assert(dataPresent.application(data), 'Data not present with political contact');
    });

    it('is true when there is ballot language', function(){
      let data = {
        ballotLanguage: 'English'
      };

      assert(dataPresent.application(data), 'Data not present with ballot language');
    });

    it('is true when there is opt out info', function(){
      let data = {
        optOut: 'Yes'
      };

      assert(dataPresent.application(data), 'Data not present with opt out info');
    });

  });
});

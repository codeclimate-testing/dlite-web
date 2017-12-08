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

  describe('#veteransService', function() {
    it('is true when user is not a veteran', function() {
      assert(dataPresent.veteransService({isVeteran: 'No'}), 'veteransService not present when user is not a veteran');
    });

    it('is true when user is a veteran', function() {
      assert(dataPresent.veteransService({
        isVeteran           : 'Yes',
        receiveBenefits     : 'No',
        veteransIdentifier  : 'Yes'
      }), 'veteransService not present when user is a veteran')
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

  describe('#cardType', function() {
    it('is true when one part is true', function() {
      assert(
        dataPresent.cardType({DL: false, ID: true}),
        'card type not true with one field'
      );
    });

    it('is true when two parts are true', function() {
      assert(
        dataPresent.cardType({DL: true, ID: true}),
        'card type not true with both fields'
      );
    });

    it('is false when no parts are true', function() {
      assert(
        !dataPresent.cardType({DL: false, ID: false}),
        'card type not false when no fields selected'
      );
    });
  });

  describe('#reducedFee', function() {
    it('is true when both parts have values', function() {
      assert(
        dataPresent.reducedFee({ID: 'Yes', form: 'Yes'}),
        'reduced fee test should be true when both parts have values'
      )
    });
    it('is false when there is no value', function() {
      assert(
        dataPresent.reducedFee({ID: '', form: ''}),
        'reduced fee test should not be true when there is no value'
      )
    });
  });

  describe('#traitsHeightWeight', function() {
    it('is true when all three parts are present', function() {
      assert(
        dataPresent.traitsHeightWeight({heightFeet: '5', heightInches: '5', weight: '201'}),
        'date not present with all fields'
      );
    });

    it('is false when only partial data present', function() {
      assert(
        !dataPresent.traitsHeightWeight({heightInches: '5', weight: '201'}),
        'date present with only parts of height and weight'
      );
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

    it('is false without the social security', function() {
      assert(!dataPresent.socialSecurity({part1: '5', part2: '5'}), 'ssn data present with only partial fields');
    });
  });

  describe('#licenseIssues', function() {
    it('is true when all three parts of date are present', function() {
      assert(
        dataPresent.licenseIssues({month: '10', day: '15', year: '1985'}),
        'suspended license date not present with all fields'
      );
    });

    it('is false when only partial date present', function() {
      assert(
        !dataPresent.licenseIssues({month: '10', year: '1985'}),
        'suspended license date present with only parts of date'
      );
    });

    it('is true when ony reason is present', function() {
      assert(
        dataPresent.licenseIssues({'reason': 'Testing for your presence'}),
        'suspended license not present with just reason field'
      );
    });

    it('is true when ony isSuspended is present', function() {
      assert(
        dataPresent.licenseIssues({'isSuspended': 'Yes'}),
        'suspended license not present with just isSuspended field'
      );
    });

  });

  describe('#licenseAndIdHistory', function() {
    it('is true when all three parts of date are present', function() {
      assert(
        dataPresent.licenseAndIdHistory({month: '10', day: '15', year: '1985'}),
        'existing DL ID date not present with all fields'
      );
    });

    it('is false when only partial date present', function() {
      assert(
        !dataPresent.licenseAndIdHistory({month: '10', year: '1985'}),
        'existing DL ID date present with only parts of date'
      );
    });

    it('is true when ony DLIDNumber is present', function() {
      assert(
        dataPresent.licenseAndIdHistory({'DLIDNumber': 'DMV00100101'}),
        'existing DL ID not present with just DLIDNumber field'
      );
    });

    it('is true when ony issuedBy is present', function() {
      assert(
        dataPresent.licenseAndIdHistory({'issuedBy': 'USA'}),
        'existing DL ID not present with just issuedBy field'
      );
    });

    it('is true when ony isIssued is present', function() {
      assert(
        dataPresent.licenseAndIdHistory({'isIssued': 'Yes'}),
        'existing DL ID not present with just isIssued field'
      );
    });

  });

  describe('#namesHistory', function() {
    it('is true when only name is present', function() {
      assert(
        dataPresent.namesHistory({hasUsedPreviousNames: 'Yes', previousNames: 'John Doe, Jane Doe'}),
        'previous names info not present with just names'
      );
    });

    it('is false without a name', function() {
      assert(
        !dataPresent.namesHistory({hasUsedPreviousNames: 'Yes', previousNames: ''}),
        'previous names info present without just names'
      );
    });
  });

    describe('#medicalHistory', function() {
    it('is true when only medical history is present', function() {
      assert(
        dataPresent.medicalHistory({hasMedicalCondition: 'Yes', medicalInfo: 'epileptic seizure, tremor'}),
        'medical history not present with just medical conditions'
      );
    });

    it('is false without a medical condition', function() {
      assert(
        !dataPresent.medicalHistory({hasMedicalCondition: 'Yes', medicalInfo: ''}),
        'medical history present without medical conditions'
      );
    });
  });

  describe('#contactMethods', function() {
    it('is true with only email address', function() {
      assert(dataPresent.contactMethods({shouldContact: 'Yes', emailAddress: 'smith@wrangler.com'}), 'contactMethods not present with email address');
    });

    it('is true with phone enumber only', function() {
      assert(dataPresent.contactMethods({shouldContact: 'Yes', phoneNumber: '(916)000-1111'}), 'contactMethods not present with phone enumber');
    });

    it('is false without email or phone number', function() {
      assert(!dataPresent.contactMethods({shouldContact: 'Yes', emailAddress: '', phoneNumber: ''}), 'contactMethods present without email or phone umber');
    });
  });

  describe('#physicalTraits', function() {
    it('is true when all physical traits are present', function() {
      assert(dataPresent.physicalTraits({sex: 'female', eyeColor: 'blue', hairColor: 'blonde'}), 'physical traits not present with all fields' );
    });

    it('is false when a physical trait is missing', function() {
      assert(!dataPresent.physicalTraits({sex: 'female', eyeColor: '', hairColor: 'auburn'}), 'physical traits present with only some traits');
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

      it('is true when there is height and weight', function() {
      let data = {
        traitsHeightWeight : {
          heightFeet:  '5',
          heightInches:    '5',
          weight:   '201'
        }
      };

      assert(dataPresent.application(data), 'Data not present with height and weight');
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

    it('is true when the user is a veteran', function() {
      let data = {
        veteransService: {
          isVeteran           : 'Yes',
          receiveBenefits     : 'No',
          veteransIdentifier  : 'Yes'
        }
      };
      assert(dataPresent.application(data), 'Data not present when user is a veteran');
    });

    it('is true when there is suspended license info', function(){
      let data = {
        licenseIssues: {
          isSuspended:  'Yes',
          month:        '10',
          day:          '15',
          year:         '1985',
          reason:       'I was not being very responsible.'
        }
      };

      assert(dataPresent.application(data), 'Data not present with suspended license info');
    });

    it('is true when there is medical history info', function(){
      let data = {
        medicalHistory: {
          hasMedicalCondition: 'Yes',
          medicalInfo: 'Tremor'
        }
      };

      assert(dataPresent.application(data), 'Data not present with previous medical history info');
    });


    it('is true when there is previous name info', function(){
      let data = {
        namesHistory: {
          hasUsedPreviousNames: 'Yes',
          previousNames: 'Captain America'
        }
      };

      assert(dataPresent.application(data), 'Data not present with previous name info');
    });

    it('is true when there is existing DL/ID info', function(){
      let data = {
        licenseAndIdHistory: {
          DLIDNumber:   'DMV001',
          issuedBy:     'California',
          month:        '10',
          day:          '15',
          year:         '1981',
          isIssued:     'Yes'
        }
      };

      assert(dataPresent.application(data), 'Data not present with existing DL/ID info');
    });

    it('is true when there is citizenship status', function(){
      let data = {
        citizenStatus: 'Yes'
      };

      assert(dataPresent.application(data), 'Data not present with citizenship status');
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

    it('is true when there is contact methods', function(){
      let data = {
        contactMethods: {
          shouldContact:  'Yes',
          emailAddress:   'abc@xyz.gov',
          phoneNumber:    '(111) 000-1111'
        }
      };

      assert(dataPresent.application(data), 'Data not present with contact methods');
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

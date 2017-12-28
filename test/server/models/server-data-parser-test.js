'use strict';

const assert             = require('assert');

const dataHelper         = require('../../support/data-helper');
const parse              = require('../../../server/models/server-data-parser');
const createApplication  = require('../../../server/models/db/create-application');
const getApplication     = require('../../../server/models/db/get-application');

describe('server data parser', function() {
  let data, parsedData;
  let clientData = dataHelper.fakeClientData();

  beforeEach(function(done) {
    data = dataHelper.fakeRecords();
    createApplication(data)
    .then(() => { done(); })
    .catch(done);
  });

  it('correctly extracts the legal name ', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.equal(parsedData.application.legalName.firstName, clientData.legalName.firstName);
      assert.equal(parsedData.application.legalName.middleName, clientData.legalName.middleName);
      assert.equal(parsedData.application.legalName.lastName, clientData.legalName.lastName);
      assert.equal(parsedData.application.legalName.suffix, clientData.legalName.suffix);
      done();
    })
    .catch(done);
  });

  it('correctly extracts the date of birth', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.equal(parsedData.application.dateOfBirth.day, clientData.dateOfBirth.day);
      assert.equal(parsedData.application.dateOfBirth.month, clientData.dateOfBirth.month);
      assert.equal(parsedData.application.dateOfBirth.year, clientData.dateOfBirth.year);
      done();
    })
    .catch(done);
  });

  it('correctly extracts the home address', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.equal(parsedData.application.homeAddress.street_1, clientData.homeAddress.street_1);
      assert.equal(parsedData.application.homeAddress.street_2, clientData.homeAddress.street_2);
      assert.equal(parsedData.application.homeAddress.city, clientData.homeAddress.city);
      assert.equal(parsedData.application.homeAddress.state, clientData.homeAddress.state);
      assert.equal(parsedData.application.homeAddress.zip, clientData.homeAddress.zip);
      done();
    })
    .catch(done);
  });

  it('correctly extracts the mailing address', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.equal(parsedData.application.mailingAddress.street_1, clientData.mailingAddress.street_1);
      assert.equal(parsedData.application.mailingAddress.street_2, clientData.mailingAddress.street_2);
      assert.equal(parsedData.application.mailingAddress.city, clientData.mailingAddress.city);
      assert.equal(parsedData.application.mailingAddress.state, clientData.mailingAddress.state);
      assert.equal(parsedData.application.mailingAddress.zip, clientData.mailingAddress.zip);
      done();
    })
    .catch(done);
  });

  it('correctly extracts the cards', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.deepEqual(parsedData.application.cardType.new, clientData.cardType.new);
      assert.equal(parsedData.application.cardType.renew, clientData.cardType.renew);
      done();
    })
    .catch(done);
  } )

  it('correctly extracts the card options', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.equal(parsedData.application.realID.getRealID, clientData.realID.getRealID);
      assert.equal(parsedData.application.realID.realIdDesignation, clientData.realID.realIdDesignation);
      assert.equal(parsedData.application.seniorID, clientData.seniorID);
      assert.equal(parsedData.application.seniorID, 'Yes');
      done();
    })
    .catch(done);
  } )

  it('correctly extracts the renewal card info', function(done) {
    getApplication(data.application.id)
    .then( records => {
      parsedData = parse(records);
      assert.equal(parsedData.application.currentCardInfo.number, clientData.currentCardInfo.number);
      assert.equal(parsedData.application.currentCardInfo.day, clientData.currentCardInfo.day);
      assert.equal(parsedData.application.currentCardInfo.month, clientData.currentCardInfo.month);
      assert.equal(parsedData.application.currentCardInfo.year, clientData.currentCardInfo.year);
      done();
    })
    .catch(done);
  });

  it('correctly extracts the physical traits', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.equal(parsedData.application.physicalTraits.hairColor, clientData.physicalTraits.hairColor);
      assert.equal(parsedData.application.physicalTraits.eyeColor, clientData.physicalTraits.eyeColor);
      assert.equal(parsedData.application.physicalTraits.sex, clientData.physicalTraits.sex);
      done();
    })
    .catch(done);
  });

  it('correctly extracts the traits height and weight', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.equal(parsedData.application.traitsHeightWeight.weight, clientData.traitsHeightWeight.weight);
      assert.equal(parsedData.application.traitsHeightWeight.heightFeet, clientData.traitsHeightWeight.heightFeet);
      assert.equal(parsedData.application.traitsHeightWeight.heightInches, clientData.traitsHeightWeight.heightInches);
      done();
    })
    .catch(done);
  });

  it('correctly extracts the social security', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.equal(parsedData.application.socialSecurity.part1, clientData.socialSecurity.part1);
      assert.equal(parsedData.application.socialSecurity.part2, clientData.socialSecurity.part2);
      assert.equal(parsedData.application.socialSecurity.part3, clientData.socialSecurity.part3);
      assert.equal(parsedData.application.socialSecurity.hasSocialSecurity, clientData.socialSecurity.hasSocialSecurity);
      done();
    })
    .catch(done);
  });

  it('correctly extracts the organ donation', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.equal(parsedData.application.organDonation.donate, clientData.organDonation.donate);
      assert.equal(parsedData.application.organDonation.contribute, clientData.organDonation.contribute);
      done();
    })
    .catch(done);
  });

  it('correctly extracts the license and ID history', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.equal(parsedData.application.licenseAndIdHistory.DLIDNumber, clientData.licenseAndIdHistory.DLIDNumber);
      assert.equal(parsedData.application.licenseAndIdHistory.issuedBy, clientData.licenseAndIdHistory.issuedBy);
      assert.equal(parsedData.application.licenseAndIdHistory.month, clientData.licenseAndIdHistory.month);
      assert.equal(parsedData.application.licenseAndIdHistory.day, clientData.licenseAndIdHistory.day);
      assert.equal(parsedData.application.licenseAndIdHistory.year, clientData.licenseAndIdHistory.year);
      assert.equal(parsedData.application.licenseAndIdHistory.isIssued, clientData.licenseAndIdHistory.isIssued);
      done();
    })
    .catch(done);
  });

  it('correctly extracts the names history', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.equal(parsedData.application.namesHistory.hasUsedPreviousNames, clientData.namesHistory.hasUsedPreviousNames);
      assert.equal(parsedData.application.namesHistory.previousNames, clientData.namesHistory.previousNames);
      done();
    })
    .catch(done);
  });

  it('correctly extracts the medical history', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.equal(parsedData.application.medicalHistory.hasMedicalCondition, clientData.medicalHistory.hasMedicalCondition);
      assert.equal(parsedData.application.medicalHistory.medicalInfo, clientData.medicalHistory.medicalInfo);
      done();
    })
    .catch(done);
  });

  it('correctly extracts the license issues', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.equal(parsedData.application.licenseIssues.isSuspended, clientData.licenseIssues.isSuspended);
      assert.equal(parsedData.application.licenseIssues.month, clientData.licenseIssues.month);
      assert.equal(parsedData.application.licenseIssues.day, clientData.licenseIssues.day);
      assert.equal(parsedData.application.licenseIssues.year, clientData.licenseIssues.year);
      assert.equal(parsedData.application.licenseIssues.reason, clientData.licenseIssues.reason);
      done();
    })
    .catch(done);
  });

  it('correctly extracts the veterans info', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.equal(parsedData.application.veteransService.isVeteran, clientData.veteransService.isVeteran);
      assert.equal(parsedData.application.veteransService.receiveBenefits, clientData.veteransService.receiveBenefits);
      assert.equal(parsedData.application.veteransService.previouslyDesignated, clientData.veteransService.previouslyDesignated);
      assert.equal(parsedData.application.veteransService.veteransIdentifier, clientData.veteransService.veteransIdentifier);
      done();
    })
    .catch(done);
  });

  it('correctly extracts the citizenship status', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.equal(parsedData.application.citizenStatus, clientData.citizenStatus);
      done();
    })
    .catch(done);
  });

  it('correctly extracts the ballot by mail info', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.equal(parsedData.application.ballotByMail, clientData.ballotByMail);
      done();
    })
    .catch(done);
  });

  it('correctly extracts the ballot language', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.equal(parsedData.application.ballotLanguage, clientData.ballotLanguage);
      done();
    })
    .catch(done);
  });

  it('correctly extracts the eligibility requirements', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.equal(parsedData.application.eligibilityRequirements, clientData.eligibilityRequirements);
      done();
    })
    .catch(done);
  });

  it('correctly extracts the opted out info', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.equal(parsedData.application.optOut, clientData.optOut);
      done();
    })
    .catch(done);
  });

  it('correctly extracts the political party info', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.equal(parsedData.application.politicalPartyChoose.isSelected, clientData.politicalPartyChoose.isSelected);
      assert.equal(parsedData.application.politicalPartyChoose.politicalPartyChoose, clientData.politicalPartyChoose.politicalPartyChoose);
      done();
    })
    .catch(done);
  });

  it('correctly extracts the contact methods', function(done) {
    getApplication(data.application.id)
    .then((records) => {
      parsedData = parse(records);
      assert.equal(parsedData.application.contactMethods.shouldContact, clientData.contactMethods.shouldContact);
      assert.equal(parsedData.application.contactMethods.emailAddress, clientData.contactMethods.emailAddress);
      assert.equal(parsedData.application.contactMethods.phoneNumber, clientData.contactMethods.phoneNumber);
      done();
    })
    .catch(done);
  });
});

'use strict';

const assert             = require('assert');

const dataHelper         = require('../../../support/data-helper');
const parse              = require('../../../../server/db/parsers/server-to-client-parser');
const post               = require('../../../../server/db/models/post-application');
const getApplication     = require('../../../../server/db/models/get-application');

describe('server data parser', function() {

  describe('#get new ID and DL default data', function() {
    let data, parsedData;
    let clientData = dataHelper.fakeClientData();

    beforeEach(function(done) {
      data = dataHelper.fakeRecords();
      post.saveApplication(data)
      .then(() => { done(); })
      .catch(done);
    });

    it('correctly extracts the legal name ', function(done) {
      getApplication(data.application.id)
      .then((records) => {
        parsedData = parse(records);
        assert.equal(parsedData.application.basics.legalName.firstName, clientData.basics.legalName.firstName);
        assert.equal(parsedData.application.basics.legalName.middleName, clientData.basics.legalName.middleName);
        assert.equal(parsedData.application.basics.legalName.lastName, clientData.basics.legalName.lastName);
        assert.equal(parsedData.application.basics.legalName.suffix, clientData.basics.legalName.suffix);
        done();
      })
      .catch(done);
    });

    it('correctly extracts the date of birth', function(done) {
      getApplication(data.application.id)
      .then((records) => {
        parsedData = parse(records);
        assert.equal(parsedData.application.basics.dateOfBirth.day, clientData.basics.dateOfBirth.day);
        assert.equal(parsedData.application.basics.dateOfBirth.month, clientData.basics.dateOfBirth.month);
        assert.equal(parsedData.application.basics.dateOfBirth.year, clientData.basics.dateOfBirth.year);
        done();
      })
      .catch(done);
    });

    it('correctly extracts the home address', function(done) {
      getApplication(data.application.id)
      .then((records) => {
        parsedData = parse(records);
        assert.equal(parsedData.application.basics.address.home.street_1, clientData.basics.address.home.street_1);
        assert.equal(parsedData.application.basics.address.home.street_2, clientData.basics.address.home.street_2);
        assert.equal(parsedData.application.basics.address.home.city, clientData.basics.address.home.city);
        assert.equal(parsedData.application.basics.address.home.state, clientData.basics.address.home.state);
        assert.equal(parsedData.application.basics.address.home.zip, clientData.basics.address.home.zip);
        done();
      })
      .catch(done);
    });

    it('correctly extracts the mailing address', function(done) {
      getApplication(data.application.id)
      .then((records) => {
        parsedData = parse(records);
        assert.equal(parsedData.application.basics.address.mailing.street_1, clientData.basics.address.mailing.street_1);
        assert.equal(parsedData.application.basics.address.mailing.street_2, clientData.basics.address.mailing.street_2);
        assert.equal(parsedData.application.basics.address.mailing.city, clientData.basics.address.mailing.city);
        assert.equal(parsedData.application.basics.address.mailing.state, clientData.basics.address.mailing.state);
        assert.equal(parsedData.application.basics.address.mailing.zip, clientData.basics.address.mailing.zip);
        done();
      })
      .catch(done);
    });

    it('correctly extracts the card options', function(done) {
      getApplication(data.application.id)
      .then((records) => {
        parsedData = parse(records);
        assert.equal(parsedData.application.realID.getRealID, clientData.realID.getRealID);
        assert.equal(parsedData.application.realID.realIdDesignation, clientData.realID.realIdDesignation);
        assert.equal(parsedData.application.IDApp.seniorID, clientData.IDApp.seniorID);
        assert.equal(parsedData.application.IDApp.seniorID, 'Yes');
        done();
      })
      .catch(done);
    });

    it('correctly extracts the license classes info', function(done) {
      getApplication(data.application.id)
      .then( records => {
        parsedData = parse(records);
        assert.deepEqual(parsedData.application.DLApp.licenseType.type, clientData.DLApp.licenseType.type);
        assert.deepEqual(parsedData.application.DLApp.licenseType.needEndorsement, clientData.DLApp.licenseType.needEndorsement);
        done();
      })
      .catch(done)
    });

    it('correctly extracts the renewal card info', function(done) {
      getApplication(data.application.id)
      .then( records => {
        parsedData = parse(records);
        assert.equal(parsedData.application.IDApp.currentCard.number, clientData.IDApp.currentCard.number);
        assert.equal(parsedData.application.IDApp.currentCard.day, clientData.IDApp.currentCard.day);
        assert.equal(parsedData.application.IDApp.currentCard.month, clientData.IDApp.currentCard.month);
        assert.equal(parsedData.application.IDApp.currentCard.year, clientData.IDApp.currentCard.year);
        done();
      })
      .catch(done);
    });

    it('correctly extracts the physical traits', function(done) {
      getApplication(data.application.id)
      .then((records) => {
        parsedData = parse(records);
        assert.equal(parsedData.application.basics.physicalTraits.hairColor, clientData.basics.physicalTraits.hairColor);
        assert.equal(parsedData.application.basics.physicalTraits.eyeColor, clientData.basics.physicalTraits.eyeColor);
        assert.equal(parsedData.application.basics.physicalTraits.sex, clientData.basics.physicalTraits.sex);
        done();
      })
      .catch(done);
    });

    it('correctly extracts the traits height and weight', function(done) {
      getApplication(data.application.id)
      .then((records) => {
        parsedData = parse(records);
        assert.equal(parsedData.application.basics.traitsHeightWeight.weight, clientData.basics.traitsHeightWeight.weight);
        assert.equal(parsedData.application.basics.traitsHeightWeight.heightFeet, clientData.basics.traitsHeightWeight.heightFeet);
        assert.equal(parsedData.application.basics.traitsHeightWeight.heightInches, clientData.basics.traitsHeightWeight.heightInches);
        done();
      })
      .catch(done);
    });

    it('correctly extracts the social security', function(done) {
      getApplication(data.application.id)
      .then((records) => {
        parsedData = parse(records);
        assert.equal(parsedData.application.basics.socialSecurity.part1, clientData.basics.socialSecurity.part1);
        assert.equal(parsedData.application.basics.socialSecurity.part2, clientData.basics.socialSecurity.part2);
        assert.equal(parsedData.application.basics.socialSecurity.part3, clientData.basics.socialSecurity.part3);
        assert.equal(parsedData.application.basics.socialSecurity.hasSocialSecurity, clientData.basics.socialSecurity.hasSocialSecurity);
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
        assert.equal(parsedData.application.history.licenseAndIdHistory.DLIDNumber, clientData.history.licenseAndIdHistory.DLIDNumber);
        assert.equal(parsedData.application.history.licenseAndIdHistory.issuedBy, clientData.history.licenseAndIdHistory.issuedBy);
        assert.equal(parsedData.application.history.licenseAndIdHistory.month, clientData.history.licenseAndIdHistory.month);
        assert.equal(parsedData.application.history.licenseAndIdHistory.day, clientData.history.licenseAndIdHistory.day);
        assert.equal(parsedData.application.history.licenseAndIdHistory.year, clientData.history.licenseAndIdHistory.year);
        assert.equal(parsedData.application.history.licenseAndIdHistory.isIssued, clientData.history.licenseAndIdHistory.isIssued);
        done();
      })
      .catch(done);
    });

    it('correctly extracts the names history', function(done) {
      getApplication(data.application.id)
      .then((records) => {
        parsedData = parse(records);
        assert.equal(parsedData.application.history.namesHistory.hasUsedPreviousNames, clientData.history.namesHistory.hasUsedPreviousNames);
        assert.equal(parsedData.application.history.namesHistory.previousNames, clientData.history.namesHistory.previousNames);
        done();
      })
      .catch(done);
    });

    it('correctly extracts the medical history', function(done) {
      getApplication(data.application.id)
      .then((records) => {
        parsedData = parse(records);
        assert.equal(parsedData.application.history.medicalHistory.hasMedicalCondition, clientData.history.medicalHistory.hasMedicalCondition);
        assert.equal(parsedData.application.history.medicalHistory.medicalInfo, clientData.history.medicalHistory.medicalInfo);
        done();
      })
      .catch(done);
    });

    it('correctly extracts the license issues', function(done) {
      getApplication(data.application.id)
      .then((records) => {
        parsedData = parse(records);
        assert.equal(parsedData.application.history.licenseIssues.isSuspended, clientData.history.licenseIssues.isSuspended);
        assert.equal(parsedData.application.history.licenseIssues.month, clientData.history.licenseIssues.month);
        assert.equal(parsedData.application.history.licenseIssues.day, clientData.history.licenseIssues.day);
        assert.equal(parsedData.application.history.licenseIssues.year, clientData.history.licenseIssues.year);
        assert.equal(parsedData.application.history.licenseIssues.reason, clientData.history.licenseIssues.reason);
        done();
      })
      .catch(done);
    });

    it('correctly extracts the veterans info', function(done) {
      getApplication(data.application.id)
      .then((records) => {
        parsedData = parse(records);
        assert.equal(parsedData.application.history.veteransService.isVeteran, clientData.history.veteransService.isVeteran);
        assert.equal(parsedData.application.history.veteransService.receiveBenefits, clientData.history.veteransService.receiveBenefits);
        //assert.equal(parsedData.application.history.veteransService.previouslyDesignated, clientData.history.veteransService.previouslyDesignated);
        assert.equal(parsedData.application.history.veteransService.veteransIdentifier, clientData.history.veteransService.veteransIdentifier);
        done();
      })
      .catch(done);
    });

    it('correctly extracts the citizenship status', function(done) {
      getApplication(data.application.id)
      .then((records) => {
        parsedData = parse(records);
        assert.equal(parsedData.application.voting.citizenStatus, clientData.voting.citizenStatus);
        done();
      })
      .catch(done);
    });

    it('correctly extracts the ballot language', function(done) {
      getApplication(data.application.id)
      .then((records) => {
        parsedData = parse(records);
        assert.equal(parsedData.application.basics.language.ballotLanguage, clientData.basics.language.ballotLanguage);
        done();
      })
      .catch(done);
    });

    it('correctly extracts the eligibility requirements', function(done) {
      getApplication(data.application.id)
      .then((records) => {
        parsedData = parse(records);
        assert.equal(parsedData.application.voting.eligibilityRequirements, clientData.voting.eligibilityRequirements);
        done();
      })
      .catch(done);
    });

    it('correctly extracts the opted out info', function(done) {
      getApplication(data.application.id)
      .then((records) => {
        parsedData = parse(records);
        assert.equal(parsedData.application.voting.optOut, clientData.voting.optOut);
        done();
      })
      .catch(done);
    });

    it('correctly extracts the political party info', function(done) {
      getApplication(data.application.id)
      .then((records) => {
        parsedData = parse(records);
        assert.equal(parsedData.application.voting.politicalPartyChoose.isSelected, clientData.voting.politicalPartyChoose.isSelected);
        assert.equal(parsedData.application.voting.politicalPartyChoose.politicalPartyChoose, clientData.voting.politicalPartyChoose.politicalPartyChoose);
        done();
      })
      .catch(done);
    });

    it('correctly extracts the contact methods', function(done) {
      getApplication(data.application.id)
      .then((records) => {
        parsedData = parse(records);
        assert.equal(parsedData.application.voting.contactMethods.shouldContact, clientData.voting.contactMethods.shouldContact);
        assert.equal(parsedData.application.voting.contactMethods.emailAddress, clientData.voting.contactMethods.emailAddress);
        assert.equal(parsedData.application.voting.contactMethods.phoneNumber, clientData.voting.contactMethods.phoneNumber);
        done();
      })
      .catch(done);
    });
  });
});

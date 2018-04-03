'use strict';

const assert             = require('assert');

const dataHelper         = require('../../../support/data-helper');
const parse              = require('../../../../server/models/parsers/server-to-client-parser');
const post               = require('../../../../server/models/db/post-application');
const getApplication     = require('../../../../server/models/db/get-application');

describe('server data parser', function() {

  describe('#IDDL app', function(done) {
    describe('#get new ID and DL default data', function() {
      let data, parsedData;
      let clientData = dataHelper.IDDLData.fakeClientData();

      beforeEach(function(done) {
        data = dataHelper.fakeIDDLRecords();
        post.saveApplication(data)
        .then(() => { done(); })
        .catch(done);
      });

      it('correctly extracts the legal name ', function(done) {
        getApplication.byId(data.application.id)
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
        getApplication.byId(data.application.id)
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
        getApplication.byId(data.application.id)
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
        getApplication.byId(data.application.id)
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
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.application.realID, clientData.realID);
          assert.equal(parsedData.application.DLApp.realID, clientData.DLApp.realID);
          assert.equal(parsedData.application.IDApp.seniorID, clientData.IDApp.seniorID);
          assert.equal(parsedData.application.IDApp.seniorID, 'Yes');
          done();
        })
        .catch(done);
      });

      it('correctly extracts the license classes info', function(done) {
        getApplication.byId(data.application.id)
        .then( records => {
          parsedData = parse(records);
          assert.deepEqual(parsedData.application.DLApp.licenseType.type, clientData.DLApp.licenseType.type);
          assert.deepEqual(parsedData.application.DLApp.licenseType.needEndorsement, clientData.DLApp.licenseType.needEndorsement);
          done();
        })
        .catch(done)
      });

      it('correctly extracts the renewal card info', function(done) {
        getApplication.byId(data.application.id)
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
        getApplication.byId(data.application.id)
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
        getApplication.byId(data.application.id)
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
        getApplication.byId(data.application.id)
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
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.application.organDonation.donate, clientData.organDonation.donate);
          assert.equal(parsedData.application.organDonation.contribute, clientData.organDonation.contribute);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the license and ID history', function(done) {
        getApplication.byId(data.application.id)
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
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.application.history.namesHistory.hasUsedPreviousNames, clientData.history.namesHistory.hasUsedPreviousNames);
          assert.equal(parsedData.application.history.namesHistory.previousNames, clientData.history.namesHistory.previousNames);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the medical history', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.application.history.medicalHistory.hasMedicalCondition, clientData.history.medicalHistory.hasMedicalCondition);
          assert.equal(parsedData.application.history.medicalHistory.medicalInfo, clientData.history.medicalHistory.medicalInfo);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the license issues', function(done) {
        getApplication.byId(data.application.id)
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
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.application.history.veteransService.isVeteran, clientData.history.veteransService.isVeteran);
          assert.equal(parsedData.application.history.veteransService.receiveBenefits, clientData.history.veteransService.receiveBenefits);
          assert.equal(parsedData.application.history.veteransService.previouslyDesignated, clientData.history.veteransService.previouslyDesignated);
          assert.equal(parsedData.application.history.veteransService.veteransIdentifier, clientData.history.veteransService.veteransIdentifier);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the citizenship status', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.application.voting.citizenStatus, clientData.voting.citizenStatus);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the ballot language', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.application.voting.ballotLanguage, clientData.voting.ballotLanguage);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the eligibility requirements', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.application.voting.eligibilityRequirements, clientData.voting.eligibilityRequirements);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the opted out info', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.application.voting.optOut, clientData.voting.optOut);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the political party info', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.application.voting.politicalPartyChoose.isSelected, clientData.voting.politicalPartyChoose.isSelected);
          assert.equal(parsedData.application.voting.politicalPartyChoose.politicalPartyChoose, clientData.voting.politicalPartyChoose.politicalPartyChoose);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the contact methods', function(done) {
        getApplication.byId(data.application.id)
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

  describe('#CDL app', function() {
    describe('##getting new CDL', function(done) {
      let data, parsedData;
      let clientData = dataHelper.CDLData.clientData();

      beforeEach(function(done) {
        data = dataHelper.fakeRecords(clientData);
        post.saveApplication(data)
        .then(() => {done(); })
        .catch(done);
      });

      it('extracts the new cardAction', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.cardAction, clientData.cardAction);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the legal name ', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.basics.legalName.firstName, clientData.basics.legalName.firstName);
          assert.equal(parsedData.cdl.basics.legalName.middleName, clientData.basics.legalName.middleName);
          assert.equal(parsedData.cdl.basics.legalName.lastName, clientData.basics.legalName.lastName);
          assert.equal(parsedData.cdl.basics.legalName.suffix, clientData.basics.legalName.suffix);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the date of birth', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.basics.dateOfBirth.day, clientData.basics.dateOfBirth.day);
          assert.equal(parsedData.cdl.basics.dateOfBirth.month, clientData.basics.dateOfBirth.month);
          assert.equal(parsedData.cdl.basics.dateOfBirth.year, clientData.basics.dateOfBirth.year);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the home address', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.basics.address.home.street_1, clientData.basics.address.home.street_1);
          assert.equal(parsedData.cdl.basics.address.home.street_2, clientData.basics.address.home.street_2);
          assert.equal(parsedData.cdl.basics.address.home.city, clientData.basics.address.home.city);
          assert.equal(parsedData.cdl.basics.address.home.state, clientData.basics.address.home.state);
          assert.equal(parsedData.cdl.basics.address.home.zip, clientData.basics.address.home.zip);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the mailing address', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.basics.address.mailing.street_1, clientData.basics.address.mailing.street_1);
          assert.equal(parsedData.cdl.basics.address.mailing.street_2, clientData.basics.address.mailing.street_2);
          assert.equal(parsedData.cdl.basics.address.mailing.city, clientData.basics.address.mailing.city);
          assert.equal(parsedData.cdl.basics.address.mailing.state, clientData.basics.address.mailing.state);
          assert.equal(parsedData.cdl.basics.address.mailing.zip, clientData.basics.address.mailing.zip);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the card options', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.realID, clientData.realID);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the license classes info', function(done) {
        getApplication.byId(data.application.id)
        .then( records => {
          parsedData = parse(records);
          assert.deepEqual(parsedData.cdl.cdlEndorsements.type, clientData.cdlEndorsements.type);
          assert.deepEqual(parsedData.cdl.cdlEndorsements.needEndorsement, clientData.cdlEndorsements.needEndorsement);
          assert.deepEqual(parsedData.cdl.cdlCertificates.type, clientData.cdlCertificates.type);
          assert.deepEqual(parsedData.cdl.cdlCertificates.needCertificates, clientData.cdlCertificates.needCertificates);
          assert.deepEqual(parsedData.cdl.classM, clientData.classM);
          assert.deepEqual(parsedData.cdl.licenseClass, clientData.licenseClass);
          assert.deepEqual(parsedData.cdl.certification, clientData.certification);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the physical traits', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.basics.physicalTraits.hairColor, clientData.basics.physicalTraits.hairColor);
          assert.equal(parsedData.cdl.basics.physicalTraits.eyeColor, clientData.basics.physicalTraits.eyeColor);
          assert.equal(parsedData.cdl.basics.physicalTraits.sex, clientData.basics.physicalTraits.sex);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the traits height and weight', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.basics.traitsHeightWeight.weight, clientData.basics.traitsHeightWeight.weight);
          assert.equal(parsedData.cdl.basics.traitsHeightWeight.heightFeet, clientData.basics.traitsHeightWeight.heightFeet);
          assert.equal(parsedData.cdl.basics.traitsHeightWeight.heightInches, clientData.basics.traitsHeightWeight.heightInches);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the social security', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.basics.socialSecurity.part1, clientData.basics.socialSecurity.part1);
          assert.equal(parsedData.cdl.basics.socialSecurity.part2, clientData.basics.socialSecurity.part2);
          assert.equal(parsedData.cdl.basics.socialSecurity.part3, clientData.basics.socialSecurity.part3);
          assert.equal(parsedData.cdl.basics.socialSecurity.hasSocialSecurity, clientData.basics.socialSecurity.hasSocialSecurity);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the organ donation', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.organDonation.donate, clientData.organDonation.donate);
          assert.equal(parsedData.cdl.organDonation.contribute, clientData.organDonation.contribute);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the license and ID history', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.history.currentDLInfo.number, clientData.history.currentDLInfo.number);
          assert.equal(parsedData.cdl.history.currentDLInfo.issuedBy, clientData.history.currentDLInfo.issuedBy);
          assert.equal(parsedData.cdl.history.currentDLInfo.month, clientData.history.currentDLInfo.month);
          assert.equal(parsedData.cdl.history.currentDLInfo.day, clientData.history.currentDLInfo.day);
          assert.equal(parsedData.cdl.history.currentDLInfo.year, clientData.history.currentDLInfo.year);
          assert.equal(parsedData.cdl.history.currentDLInfo.isIssued, clientData.history.currentDLInfo.isIssued);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the names history', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.history.namesHistory.hasUsedPreviousNames, clientData.history.namesHistory.hasUsedPreviousNames);
          assert.equal(parsedData.cdl.history.namesHistory.previousNames, clientData.history.namesHistory.previousNames);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the medical history', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.history.medicalHistory.hasMedicalCondition, clientData.history.medicalHistory.hasMedicalCondition);
          assert.equal(parsedData.cdl.history.medicalHistory.medicalInfo, clientData.history.medicalHistory.medicalInfo);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the license issues', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.history.licenseIssues.isSuspended, clientData.history.licenseIssues.isSuspended);
          assert.equal(parsedData.cdl.history.licenseIssues.month, clientData.history.licenseIssues.month);
          assert.equal(parsedData.cdl.history.licenseIssues.day, clientData.history.licenseIssues.day);
          assert.equal(parsedData.cdl.history.licenseIssues.year, clientData.history.licenseIssues.year);
          assert.equal(parsedData.cdl.history.licenseIssues.reason, clientData.history.licenseIssues.reason);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the veterans info', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.history.veteransService.isVeteran, clientData.history.veteransService.isVeteran);
          assert.equal(parsedData.cdl.history.veteransService.receiveBenefits, clientData.history.veteransService.receiveBenefits);
          assert.equal(parsedData.cdl.history.veteransService.previouslyDesignated, clientData.history.veteransService.previouslyDesignated);
          assert.equal(parsedData.cdl.history.veteransService.veteransIdentifier, clientData.history.veteransService.veteransIdentifier);
          assert.equal(parsedData.cdl.history.veteransService.militaryWaiver, clientData.history.veteransService.militaryWaiver);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the citizenship status', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.voting.citizenStatus, clientData.voting.citizenStatus);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the ballot language', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.voting.ballotLanguage, clientData.voting.ballotLanguage);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the eligibility requirements', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.voting.eligibilityRequirements, clientData.voting.eligibilityRequirements);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the opted out info', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.voting.optOut, clientData.voting.optOut);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the political party info', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.voting.politicalPartyChoose.isSelected, clientData.voting.politicalPartyChoose.isSelected);
          assert.equal(parsedData.cdl.voting.politicalPartyChoose.politicalPartyChoose, clientData.voting.politicalPartyChoose.politicalPartyChoose);
          done();
        })
        .catch(done);
      });

      it('correctly extracts the contact methods', function(done) {
        getApplication.byId(data.application.id)
        .then((records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.voting.contactMethods.shouldContact, clientData.voting.contactMethods.shouldContact);
          assert.equal(parsedData.cdl.voting.contactMethods.emailAddress, clientData.voting.contactMethods.emailAddress);
          assert.equal(parsedData.cdl.voting.contactMethods.phoneNumber, clientData.voting.contactMethods.phoneNumber);
          done();
        })
        .catch(done);
      });
    });

    describe('##renewing CDL', function(done) {
      let data, parsedData;
      let clientData = dataHelper.CDLData.renew();

      beforeEach(function(done) {
        data = dataHelper.fakeRecords(clientData);
        post.saveApplication(data)
        .then(() => { done(); })
        .catch(done);
      });
      it('correctly extracts the renewal card info', function(done) {
        getApplication.byId(data.application.id)
        .then( records => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.cardAction, clientData.cardAction);
          assert.equal(parsedData.cdl.currentCardInfo.number, clientData.currentCardInfo.number);
          assert.equal(parsedData.cdl.currentCardInfo.day, clientData.currentCardInfo.day);
          assert.equal(parsedData.cdl.currentCardInfo.month, clientData.currentCardInfo.month);
          assert.equal(parsedData.cdl.currentCardInfo.year, clientData.currentCardInfo.year);
          done();
        })
        .catch(done);
      });
    });

    describe('##replacing CDL', function(done) {
      let data, parsedData;
      let clientData = dataHelper.CDLData.replace();

      beforeEach(function(done) {
        data = dataHelper.fakeRecords(clientData);
        post.saveApplication(data)
        .then(() => { done(); })
        .catch(done);
      });
      it('correctly extracts the replacement card info', function(done) {
        getApplication.byId(data.application.id)
        .then( records => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.cardAction, clientData.cardAction);
          assert.equal(parsedData.cdl.currentCardInfo.number, clientData.currentCardInfo.number);
          assert.equal(parsedData.cdl.currentCardInfo.day, clientData.currentCardInfo.day);
          assert.equal(parsedData.cdl.currentCardInfo.month, clientData.currentCardInfo.month);
          assert.equal(parsedData.cdl.currentCardInfo.year, clientData.currentCardInfo.year);
          done();
        })
        .catch(done);
      });

      it('extracts the cardReplacement details', function(done) {
        getApplication.byId(data.application.id)
        .then( (records) => {
          parsedData = parse(records);
          assert.deepEqual(parsedData.cdl.cardReplacement, clientData.cardReplacement);
          done();
        })
        .catch(done);
      });
    });

    describe('##changing CDL', function(done) {
      let data, parsedData;
      let clientData = dataHelper.CDLData.updateCorrect();

      beforeEach(function(done) {
        data = dataHelper.fakeRecords(clientData);
        post.saveApplication(data)
        .then(() => { done(); })
        .catch(done);
      });

      it('extracts the cardChanges details', function(done) {
        getApplication.byId(data.application.id)
        .then( (records) => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.cardAction, clientData.cardAction);
          assert.deepEqual(parsedData.cdl.cardChanges, clientData.cardChanges);
          done()
        })
        .catch(done);
      });

      it('correctly extracts the update/correct card info', function(done) {
        getApplication.byId(data.application.id)
        .then( records => {
          parsedData = parse(records);
          assert.equal(parsedData.cdl.currentCardInfo.number, clientData.currentCardInfo.number);
          assert.equal(parsedData.cdl.currentCardInfo.day, clientData.currentCardInfo.day);
          assert.equal(parsedData.cdl.currentCardInfo.month, clientData.currentCardInfo.month);
          assert.equal(parsedData.cdl.currentCardInfo.year, clientData.currentCardInfo.year);
          done();
        })
        .catch(done);
      });
    });
  });
});

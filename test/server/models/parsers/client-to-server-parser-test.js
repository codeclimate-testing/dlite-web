'use strict';

const assert             = require('assert');
const env                = require('../../../support/env');
const dataHelper         = require('../../../support/data-helper');
const parse              = require('../../../../server/models/parsers/client-to-server-parser');
const parserHelper       = require('../../../../server/models/parsers/data-parser');

describe('client data parser', function() {
  describe('#IDDL app', function() {

    describe('##get new dl ', function() {
      it('extracts the license history', function() {
        const data = dataHelper.IDDLData.getNewDL();
        const parsedData = parse(data);
        const cardHistories = parsedData.card_histories[0];
        let _date = parserHelper.createDateString(data.history.licenseAndIdHistory);
        assert.equal(cardHistories.application_id, data.id);
        assert.equal(cardHistories.number, data.history.licenseAndIdHistory.DLIDNumber);
        assert.equal(cardHistories.issuing_entity, data.history.licenseAndIdHistory.issuedBy);
        assert.equal(cardHistories.date_description, _date);
      });
    });

    describe('##update/correct client data parser', function() {
      const data = dataHelper.IDDLData.updateCorrect();
      const parsedData = parse(data);

      it('correctly extracts cards', function() {
        let cards = parsedData.cards;
        assert.equal(cards[0].application_id, data.id);
        assert.equal(cards[0].type, 'DL');
      });

      it('correctly extracts card options', function() {
        let options = parsedData.card_options;
        assert.equal(options[0].option_type, 'action');
        assert.equal(options[0].option_value, 'change');
        assert.equal(options[1].option_type, 'modification');
        assert.equal(options[1].option_value, 'change-correct-name_other-I dislike my photograph');
      });
    });

    describe('##replace damaged DL', function() {
      const data = dataHelper.IDDLData.replaceDamaged();
      const parsedData = parse(data);

      it('correctly extracts cards', function() {
        let cards = parsedData.cards;
        assert.equal(cards[0].application_id, data.id);
        assert.equal(cards[0].type, 'DL');
      });

      it('correctly extracts card options', function() {
        let options = parsedData.card_options;
        assert.equal(options[0].option_type, 'action');
        assert.equal(options[0].option_value, 'replace');
        assert.equal(options[1].option_type, 'modification');
        assert.equal(options[1].option_value, 'replace-damaged');
      });
    });

    describe('##get ID and DL default story', function() {
      const data = dataHelper.IDDLData.fakeClientData();
      let parsedData = parse(data);

      it('correctly extracts the application table data', function() {
        let applicationData = parsedData.application;
        let dob = new Date(parserHelper.createDateString(data.basics.dateOfBirth));
        let social = data.basics.socialSecurity.part1+'-'+data.basics.socialSecurity.part2+'-'+data.basics.socialSecurity.part3
        assert.equal(applicationData.id, data.id);
        assert.equal(applicationData.language, data.basics.language);
        assert.equal(applicationData.first_name, data.basics.legalName.firstName);
        assert.equal(applicationData.middle_name, data.basics.legalName.middleName);
        assert.equal(applicationData.last_name, data.basics.legalName.lastName);
        assert.equal(applicationData.suffix_name, data.basics.legalName.suffix);
        assert.equal(applicationData.date_of_birth.toString(), dob.toString());
        assert.equal(applicationData.hair_color, data.basics.physicalTraits.hairColor);
        assert.equal(applicationData.eye_color, data.basics.physicalTraits.eyeColor);
        assert.equal(applicationData.sex, data.basics.physicalTraits.sex);
        assert.equal(applicationData.height_feet, data.basics.traitsHeightWeight.heightFeet);
        assert.equal(applicationData.height_inches, data.basics.traitsHeightWeight.heightInches);
        assert.equal(applicationData.weight, data.basics.traitsHeightWeight.weight);
        assert.equal(applicationData.social_security_number, social);
      });

      it('correctly extracts the addresses', function() {
        let addresses = parsedData.addresses;

        let address = addresses[0];
        assert.equal(address.application_id, data.id);
        assert.equal(address.type, 'mailing');
        assert.equal(address.street_address_1,  data.basics.address.mailing.street_1);
        assert.equal(address.street_address_2,  data.basics.address.mailing.street_2);
        assert.equal(address.city,              data.basics.address.mailing.city);
        assert.equal(address.state,             data.basics.address.mailing.state);
        assert.equal(address.zip,               data.basics.address.mailing.zip);

        address = addresses[1];
        assert.equal(address.application_id, data.id);
        assert.equal(address.type, 'home');
        assert.equal(address.street_address_1,  data.basics.address.home.street_1);
        assert.equal(address.street_address_2,  data.basics.address.home.street_2);
        assert.equal(address.city,              data.basics.address.home.city);
        assert.equal(address.state,             data.basics.address.home.state);
        assert.equal(address.zip,               data.basics.address.home.zip);
      });

      it('correctly extracts cards', function() {
        let cards = parsedData.cards;
        assert.equal(cards[0].application_id, data.id);
        assert.equal(cards[1].application_id, data.id);
        assert.equal(cards[0].type, 'ID');
        assert.equal(cards[1].type, 'DL');
      });

      it('correctly extracts card options', function() {
        let options = parsedData.card_options;
        assert.equal(options[0].option_type, 'action');
        assert.equal(options[0].option_value, 'renew');
        assert.equal(options[1].option_type, 'modification');
        assert.equal(options[1].option_value, 'real-id');
        assert.equal(options[2].option_type, 'action');
        assert.equal(options[2].option_value, 'new');
        assert.equal(options[3].option_type, 'modification');
        assert.equal(options[3].option_value, 'reduced-fee');
        assert.equal(options[4].option_type, 'modification');
        assert.equal(options[4].option_value, 'senior-id');
      });

      it('correctly extracts the license type info', function() {
        let licenseType = parsedData.license_classes;
        assert.equal(licenseType[0].type, data.DLApp.licenseType.type[0]);
        assert.equal(licenseType[1].type, data.DLApp.licenseType.type[1]);
      });

      it('correctly extracts the email', function() {
        let email = parsedData.emails;
        assert.equal(email.application_id, data.id);
        assert.equal(email.address, data.voting.contactMethods.emailAddress);
      });

      it('correctly extracts the phone number', function() {
        let phoneNumber = parsedData.phone_numbers;
        assert.equal(phoneNumber.application_id, data.id);
        assert.equal(phoneNumber.number, data.voting.contactMethods.phoneNumber1 + data.voting.contactMethods.phoneNumber2 + data.voting.contactMethods.phoneNumber3);
      });

      it('correctly extracts the organ donations', function() {
        let organDonations = parsedData.organ_donations;
        assert.equal(organDonations.application_id, data.id);
        assert.equal(organDonations.donating_organs, parserHelper.strToBool(data.organDonation.donateOrgan));
        assert.equal(organDonations.donating_money, parserHelper.strToBool(data.organDonation.donateMoney));
      });

      it('correctly extracts the licenseAndIdHistory into the card_histories array', function() {
        let cardHistories = parsedData.card_histories[0];
        let _date = parserHelper.createDateString(data.history.licenseAndIdHistory);

        assert.equal(cardHistories.application_id, data.id);
        assert.equal(cardHistories.number, data.history.licenseAndIdHistory.DLIDNumber);
        assert.equal(cardHistories.issuing_entity, data.history.licenseAndIdHistory.issuedBy);
        assert.equal(cardHistories.date_description, _date);
        assert.equal(cardHistories.application_id, data.id);
      });

      it('correctly extracts the current DL card info', function() {
        let _date = parserHelper.createDateString(data.DLApp.currentCard);
        assert.equal(parsedData.card_histories[1].number, data.DLApp.currentCard.number);
        assert.equal(parsedData.card_histories[1].date_description, _date);
        assert.equal(parsedData.card_histories[1].issuing_entity, '');
      });

      it('correctly extracts the names history', function() {
        let namesHistory = parsedData.previous_names;
        let _names = data.history.namesHistory.previousNames.split(',');
        assert.equal(namesHistory[0].application_id, data.id);
        assert.equal(namesHistory[1].application_id, data.id);
        assert.equal(namesHistory[2].application_id, data.id);
        assert.equal(namesHistory[0].name, _names[0].trim());
        assert.equal(namesHistory[1].name, _names[1].trim());
        assert.equal(namesHistory[2].name, _names[2].trim());
      });

      it('correctly extracts the medical history', function() {
        let medicalHistory = parsedData.medical_histories;
        assert.equal(medicalHistory.application_id, data.id);
        assert.equal(medicalHistory.description, data.history.medicalHistory.medicalInfo);
      });

      it('correctly extracts the license issues', function() {
        let licenseIssues = parsedData.license_issues;
        let _date = parserHelper.createDateString(data.history.licenseIssues);
        assert.equal(licenseIssues.application_id, data.id);
        assert.equal(licenseIssues.description, data.history.licenseIssues.reason);
        assert.equal(licenseIssues.date_description, _date);
      });

      it('correctly extracts the veterans info', function() {
        let veteransInfo = parsedData.veterans_info;
        let _label = null;
        let previously_designated = null;
        if(data.history.veteransService.veteransIdentifier){
          _label = 'add';
        }
        if(data.history.veteransService.previouslyDesignated){
          previously_designated = 'Yes';
        }
        assert.equal(veteransInfo.application_id, data.id);
        assert.equal(veteransInfo.has_requested_information, parserHelper.strToBool(data.history.veteransService.receiveBenefits));
        assert.equal(veteransInfo.previously_designated, parserHelper.strToBool(previously_designated));
        assert.equal(veteransInfo.labeling, _label);
      });

      it('correctly extracts the voting registrations', function() {
        let votingReg = parsedData.voting_registrations;
        assert.equal(votingReg.application_id, data.id);
        assert.equal(votingReg.is_citizen, data.voting.citizenStatus);
        assert.equal(votingReg.is_eligible, data.voting.eligibilityRequirements);
        assert.equal(votingReg.type, 'new');
        assert.equal(votingReg.opted_out, false);
        assert.equal(votingReg.party, data.voting.politicalPartyChoose.politicalPartyChoose);
        assert.equal(votingReg.language, data.voting.ballotLanguage);
        assert.equal(votingReg.vote_by_mail, parserHelper.strToBool(data.voting.ballotByMail));
        assert.equal(votingReg.should_contact, parserHelper.strToBool(data.voting.contactMethods.shouldContact));
      });

      it('saves citizenship and eligibility decline to answer as "decline" string', function() {
        data.voting.citizenStatus = 'decline';
        data.voting.eligibilityRequirements = 'decline';
        parsedData = parse(data);
        let votingReg = parsedData.voting_registrations;
        assert.equal(votingReg.is_citizen, data.voting.citizenStatus);
        assert.equal(votingReg.is_citizen, 'decline');
        assert.equal(votingReg.is_eligible, 'decline');
      });

      it('saves other political party that has been typed in', function() {
        data.voting.politicalPartyChoose.otherParty = 'some other one';
        data.voting.politicalPartyChoose.politicalPartyChoose = 'Other';
        parsedData = parse(data).voting_registrations;
        assert.equal(parsedData.party, data.voting.politicalPartyChoose.otherParty);
      });

      it('does not have a table "other_state_licenses" ', function() {
        assert.ok(!parsedData.hasOwnProperty('other_state_licenses'));
      })
    });

    describe('##replace damaged DL', function() {
      const data = dataHelper.IDDLData.replaceDamaged();
      const parsedData = parse(data);

      it('correctly extracts cards', function() {
        let cards = parsedData.cards;
        assert.equal(cards[0].application_id, data.id);
        assert.equal(cards[0].type, 'DL');
      });

      it('correctly extracts card options', function() {
        let options = parsedData.card_options;
        assert.equal(options[0].option_type, 'action');
        assert.equal(options[0].option_value, 'replace');
        assert.equal(options[1].option_type, 'modification');
        assert.equal(options[1].option_value, 'replace-damaged');
      });
    });
  });

  describe('#CDL app', function() {
    describe('##get new CDL', function() {
      const data = dataHelper.CDLData.clientData();
      const parsedData = parse(data);

      it('correctly extracts the application table data', function() {
        let applicationData = parsedData.application;
        let dob = new Date(parserHelper.createDateString(data.basics.dateOfBirth));
        let social = data.basics.socialSecurity.part1+'-'+data.basics.socialSecurity.part2+'-'+data.basics.socialSecurity.part3
        assert.equal(applicationData.id, data.id);
        assert.equal(applicationData.language, data.basics.language);
        assert.equal(applicationData.first_name, data.basics.legalName.firstName);
        assert.equal(applicationData.middle_name, data.basics.legalName.middleName);
        assert.equal(applicationData.last_name, data.basics.legalName.lastName);
        assert.equal(applicationData.suffix_name, data.basics.legalName.suffix);
        assert.equal(applicationData.date_of_birth.toString(), dob.toString());
        assert.equal(applicationData.hair_color, data.basics.physicalTraits.hairColor);
        assert.equal(applicationData.eye_color, data.basics.physicalTraits.eyeColor);
        assert.equal(applicationData.sex, data.basics.physicalTraits.sex);
        assert.equal(applicationData.height_feet, data.basics.traitsHeightWeight.heightFeet);
        assert.equal(applicationData.height_inches, data.basics.traitsHeightWeight.heightInches);
        assert.equal(applicationData.weight, data.basics.traitsHeightWeight.weight);
        assert.equal(applicationData.social_security_number, social);
      });

      it('correctly extracts the addresses', function() {
        let addresses = parsedData.addresses;

        let address = addresses[0];
        assert.equal(address.application_id, data.id);
        assert.equal(address.type, 'mailing');
        assert.equal(address.street_address_1,  data.basics.address.mailing.street_1);
        assert.equal(address.street_address_2,  data.basics.address.mailing.street_2);
        assert.equal(address.city,              data.basics.address.mailing.city);
        assert.equal(address.state,             data.basics.address.mailing.state);
        assert.equal(address.zip,               data.basics.address.mailing.zip);

        address = addresses[1];
        assert.equal(address.application_id, data.id);
        assert.equal(address.type, 'home');
        assert.equal(address.street_address_1,  data.basics.address.home.street_1);
        assert.equal(address.street_address_2,  data.basics.address.home.street_2);
        assert.equal(address.city,              data.basics.address.home.city);
        assert.equal(address.state,             data.basics.address.home.state);
        assert.equal(address.zip,               data.basics.address.home.zip);
      });

      it('correctly extracts cards', function() {
        let cards = parsedData.cards;
        assert.equal(cards[0].application_id, data.id);
        assert.equal(cards[0].type, 'CDL');
      });

      it('correctly extracts card options', function() {
        let options = parsedData.card_options;
        assert.equal(options[0].option_type, 'action');
        assert.equal(options[0].option_value, 'new');
        assert.equal(options[1].option_type, 'modification');
        assert.equal(options[1].option_value, 'real-id');

      });

      it('correctly extracts the license class, endorsements, and certificates info', function() {
        let licenseType = parsedData.license_classes;
        assert.equal(licenseType[0].type, data.licenseClass);
        assert.equal(licenseType[1].type, data.certification);
        assert.equal(licenseType[2].type, 'motorcycle');
        assert.equal(licenseType[3].type, data.cdlEndorsements.type[0]);
        assert.equal(licenseType[4].type, data.cdlCertificates.type[0]);
        assert.equal(licenseType[5].type, data.cdlCertificates.type[1]);
      });

      it('correctly extracts the email', function() {
        let email = parsedData.emails;
        assert.equal(email.application_id, data.id);
        assert.equal(email.address, data.voting.contactMethods.emailAddress);
      });

      it('correctly extracts the phone number', function() {
        let phoneNumber = parsedData.phone_numbers;
        assert.equal(phoneNumber.application_id, data.id);
        assert.equal(phoneNumber.number, data.voting.contactMethods.phoneNumber1 + data.voting.contactMethods.phoneNumber2 + data.voting.contactMethods.phoneNumber3);
      });

      it('correctly extracts the organ donations', function() {
        let organDonations = parsedData.organ_donations;
        assert.equal(organDonations.application_id, data.id);
        assert.equal(organDonations.donating_organs, parserHelper.strToBool(data.organDonation.donateOrgan));
        assert.equal(organDonations.donating_money, parserHelper.strToBool(data.organDonation.donateMoney));
      });

      it('correctly extracts the current DL history', function() {
        let cardHistories = parsedData.card_histories[0];
        let _date = parserHelper.createDateString(data.history.currentDLInfo);
        assert.equal(cardHistories.application_id, data.id);
        assert.equal(cardHistories.number, data.history.currentDLInfo.number);
        assert.equal(cardHistories.issuing_entity, data.history.currentDLInfo.issuedBy);
        assert.equal(cardHistories.date_description, _date);
      });

      it('correctly extracts the names history', function() {
        let namesHistory = parsedData.previous_names;
        let _names = data.history.namesHistory.previousNames.split(',');
        assert.equal(namesHistory[0].application_id, data.id);
        assert.equal(namesHistory[1].application_id, data.id);
        assert.equal(namesHistory[2].application_id, data.id);
        assert.equal(namesHistory[0].name, _names[0].trim());
        assert.equal(namesHistory[1].name, _names[1].trim());
        assert.equal(namesHistory[2].name, _names[2].trim());
      });

      it('correctly extracts the medical history', function() {
        let medicalHistory = parsedData.medical_histories;
        assert.equal(medicalHistory.application_id, data.id);
        assert.equal(medicalHistory.description, data.history.medicalHistory.medicalInfo);
      });

      it('correctly extracts the license issues', function() {
        let licenseIssues = parsedData.license_issues;
        let _date = parserHelper.createDateString(data.history.licenseIssues);
        assert.equal(licenseIssues.application_id, data.id);
        assert.equal(licenseIssues.description, data.history.licenseIssues.reason);
        assert.equal(licenseIssues.date_description, _date);
      });

      it('correctly extracts the veterans info', function() {
        let veteransInfo = parsedData.veterans_info;
        let _label = null;
        let previously_designated = null;
        if(data.history.veteransService.veteransIdentifier){
          _label = 'add';
        }
        if(data.history.veteransService.previouslyDesignated){
          previously_designated = 'Yes';
        }
        assert.equal(veteransInfo.application_id, data.id);
        assert.equal(veteransInfo.has_requested_information, parserHelper.strToBool(data.history.veteransService.receiveBenefits));
        assert.equal(veteransInfo.previously_designated, parserHelper.strToBool(previously_designated));
        assert.equal(veteransInfo.labeling, _label);
        assert.equal(veteransInfo.military_waiver, parserHelper.strToBool(data.history.veteransService.militaryWaiver));
      });

      it('correctly extracts the voting registrations', function() {
        let votingReg = parsedData.voting_registrations;
        assert.equal(votingReg.application_id, data.id);
        assert.equal(votingReg.is_citizen, data.voting.citizenStatus);
        assert.equal(votingReg.is_eligible, data.voting.eligibilityRequirements);
        assert.equal(votingReg.type, 'new');
        assert.equal(votingReg.opted_out, false);
        assert.equal(votingReg.party, data.voting.politicalPartyChoose.otherParty);
        assert.equal(votingReg.language, data.voting.ballotLanguage);
        assert.equal(votingReg.vote_by_mail, parserHelper.strToBool(data.voting.ballotByMail));
        assert.equal(votingReg.should_contact, parserHelper.strToBool(data.voting.contactMethods.shouldContact));
      });

    });

    describe('##renew CDL', function() {
      const data = dataHelper.CDLData.renew();
      const parsedData = parse(data);
      it('correctly extracts the current card info', function() {
        let _date = parserHelper.createDateString(data.currentCardInfo);
        assert.equal(parsedData.card_histories[0].number, data.currentCardInfo.number);
        assert.equal(parsedData.card_histories[0].date_description, _date);
      });
    });

    describe('##update/correct CDL', function() {
      const data = dataHelper.CDLData.updateCorrect();
      const parsedData = parse(data);
      it('correctly extracts the current card info', function() {
        let _date = parserHelper.createDateString(data.currentCardInfo);
        assert.equal(parsedData.card_histories[0].number, data.currentCardInfo.number);
        assert.equal(parsedData.card_histories[0].date_description, _date);
      });
      it('correctly extracts the cardChanges', function() {
        let options = parsedData.card_options;
        assert.equal(options[0].option_type, 'action');
        assert.equal(options[0].option_value, 'change');
        assert.equal(options[1].option_type, 'modification');
        assert.equal(options[1].option_value, 'change-correct-name_other-please make this license the color red');
      });
    });

    describe('##replace CDL', function() {
      const data = dataHelper.CDLData.replace();
      const parsedData = parse(data);
      it('correctly extracts the current card info', function() {
        let _date = parserHelper.createDateString(data.currentCardInfo);
        assert.equal(parsedData.card_histories[0].number, data.currentCardInfo.number);
        assert.equal(parsedData.card_histories[0].date_description, _date);
      });
      it('correctly extracts the cardReplacement', function() {
        let options = parsedData.card_options;
        assert.equal(options[0].option_type, 'action');
        assert.equal(options[0].option_value, 'replace');
        assert.equal(options[1].option_type, 'modification');
        assert.equal(options[1].option_value, 'replace-other');
      });
    });
  });
});

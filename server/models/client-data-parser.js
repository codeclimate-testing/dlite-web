'use strict';

const parserHelper = require('../helpers/data-parser');
const voterChoiceConverter = require('./parsers/voter-choice-converter');

function parse(data) {
  return Object.assign(
    {},
    { application:            extractApplication(data) },
    { addresses:              extractAddresses(data) },
    { emails:                 extractEmail(data) },
    { phone_numbers:          extractPhoneNumber(data) },
    { organ_donations:        extractOrganDonation(data) },
    { card_histories:         extractCardHistories(data) },
    { previous_names:         extractPreviousNames(data) },
    { medical_histories:      extractMedicalHistories(data) },
    { license_issues:         extractLicenseIssues(data) },
    { veterans_info:          extractVeteransInfo(data) },
    { voting_registrations:   extractVotingRegistrations(data) },
    {cards:                   extractCardTypes(data) },
    {card_options:            extractCardOptions(data) }
  );
}

function extractApplication(data) {
  let legalName         = data.legalName || {};
  let heightWeight      = data.traitsHeightWeight || {};
  let physicalTraits    = data.physicalTraits || {};
  let dob               = null;
  let socialSecurity    = null;


  if(data.dateOfBirth.month && data.dateOfBirth.day && data.dateOfBirth.year){
    dob = new Date(parserHelper.createDateString(data.dateOfBirth));
  }

  if(data.socialSecurity && data.socialSecurity.hasSocialSecurity === 'Yes'){
    let _socialSecurity = data.socialSecurity;
    socialSecurity = _socialSecurity.part1+'-'+_socialSecurity.part2+'-'+_socialSecurity.part3;
  }

  return {
    id:                       data.id,
    first_name:               legalName.firstName,
    middle_name:              legalName.middleName,
    last_name:                legalName.lastName,
    suffix_name:              legalName.suffix,
    date_of_birth:            dob,
    hair_color:               physicalTraits.hairColor,
    eye_color:                physicalTraits.eyeColor,
    height_feet:              heightWeight.heightFeet,
    height_inches:            heightWeight.heightInches,
    weight:                   heightWeight.weight,
    sex:                      physicalTraits.sex,
    social_security_number:   socialSecurity
  };
}

function extractAddresses(data) {
  return [
    {
      application_id:     data.id,
      type:               'mailing',
      street_address_1:   data.mailingAddress.street_1,
      street_address_2:   data.mailingAddress.street_2,
      city:               data.mailingAddress.city,
      state:              data.mailingAddress.state,
      zip:                data.mailingAddress.zip
    },
    {
      application_id:     data.id,
      type:               'home',
      street_address_1:   data.homeAddress.street_1,
      street_address_2:   data.homeAddress.street_2,
      city:               data.homeAddress.city,
      state:              data.homeAddress.state,
      zip:                data.homeAddress.zip
    }
  ];
}

function extractEmail(data) {
  return [{
    application_id:   data.id,
    address:          data.contactMethods.emailAddress
  }];
}

function extractPhoneNumber(data) {
  return [{
    application_id:   data.id,
    number:           data.contactMethods.phoneNumber
  }];
}

function extractOrganDonation(data) {
  return [{
    application_id:   data.id,
    donating_organs:  parserHelper.strToBool(data.organDonation.donate),
    donating_money:   parserHelper.strToBool(data.organDonation.contribute)
  }];
}

function extractCardHistories(data) {
  if(data.licenseAndIdHistory.isIssued === 'Yes'){
    let _date = parserHelper.createDateString(data.licenseAndIdHistory);
    return [{
      application_id:   data.id,
      number:           data.licenseAndIdHistory.DLIDNumber,
      issuing_entity:   data.licenseAndIdHistory.issuedBy,
      date_description: _date,
    }];
  }
  else {
    return null;
  }

}

function extractPreviousNames(data) {
  let _previousNames  = data.namesHistory;
  let _names          = [];
  if( _previousNames.hasUsedPreviousNames === 'Yes') {
    let tokens = _previousNames.previousNames.split(',');
    tokens.forEach(function (token){
      token = token.trim();
      if(token){
        _names.push(
          {
            application_id:   data.id,
            name:             token
          }
        );
      }
    });
    return _names;
  }
  else {
    return null;
  }
}

function extractMedicalHistories(data) {
  if(data.medicalHistory.hasMedicalCondition === 'Yes') {
    return [{
      application_id:   data.id,
      description:      data.medicalHistory.medicalInfo
    }];
  }
  else {
    return null;
  }
}

function extractLicenseIssues(data) {
  if( data.licenseIssues.isSuspended === 'Yes'){
    let _date = parserHelper.createDateString(data.licenseIssues);
    return [{
      application_id:     data.id,
      description:        data.licenseIssues.reason,
      date_description:   _date
    }];
  }
  else{
    return null;
  }
}

function extractVeteransInfo(data) {
  if(data.veteransService.isVeteran === 'Yes'){
    let label = null;
    if(data.veteransService.veteransIdentifier === 'Yes'){
      label = 'add';
    }
    return [{
      application_id:               data.id,
      has_requested_information:    parserHelper.strToBool(data.veteransService.receiveBenefits),
      labeling:                     label
    }];
  }
  else {
    return null;
  }

}

function extractVotingRegistrations(data) {
  const voterChoice = voterChoiceConverter.uiToRecord(data.optOut);
  return [{
    application_id:     data.id,
    is_citizen:         parserHelper.strToBool(data.citizenStatus),
    is_eligible:        parserHelper.strToBool(data.eligibilityRequirements),
    type:               voterChoice.type,
    opted_out:          parserHelper.strToBool(voterChoice.opted_out),
    is_preregistering:  parserHelper.strToBool(data.politicalPartyChoose.isSelected),
    party:              data.politicalPartyChoose.politicalPartyChoose,
    language:           data.ballotLanguage,
    vote_by_mail:       parserHelper.strToBool(data.ballotByMail),
    should_contact:     parserHelper.strToBool(data.contactMethods.shouldContact)
  }];
}

function extractCardTypes(data) {
  let cards = [ ];
  if(data.cardType.ID){
    cards.push({
      application_id:   data.id,
      type:             'ID'
    })
  }

  if(data.cardType.DL){
    cards.push({
      application_id:   data.id,
      type:             'DL'
    })
  }
  return cards;
}

function extractCardOptions(data) {
  let cardOptions = [ ];
  if(data.cardType.ID){
    cardOptions.push({
      type:               'ID',
      option_type:        'action',
      option_value:       'new'
    })
    if(data.realID.getRealID === 'Yes') {
      cardOptions.push({
        type:               'ID',
        option_type:        'modification',
        option_value:       'real-id'
      })
    }
    if(data.reducedFee.ID === 'Yes' && data.reducedFee.form === 'Yes') {
      cardOptions.push({
        type:               'ID',
        option_type:        'modification',
        option_value:       'reduced-fee-has-form'
      })
    }
    else if(data.reducedFee.ID === 'Yes' && !data.reducedFee.form === 'Yes') {
      cardOptions.push({
        type:               'ID',
        option_type:        'modification',
        option_value:       'reduced-fee-no-form'
      })
    }
  }

  if(data.cardType.DL){
    cardOptions.push({
      type:               'DL',
      option_type:        'action',
      option_value:       'new'
    })
  }

  if(data.realID.getRealID === 'Yes') {
    cardOptions.push({
      type:               data.realID.realIdDesignation,
      option_type:        'modification',
      option_value:       'real-id'
    })
  }

  return cardOptions;

}

module.exports = parse;

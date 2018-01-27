'use strict';

const parserHelper          = require('../helpers/data-parser');
const voterChoiceConverter  = require('./parsers/voter-choice-converter');
const cardTypeParser        = require('./parsers/card-type');

function parse(data) {
  return Object.assign(
    {},
    { application:            extractApplication(data) },
    { addresses:              extractAddresses(data) },
    { emails:                 extractEmail(data) },
    { phone_numbers:          extractPhoneNumber(data) },
    { organ_donations:        extractOrganDonation(data) },
    { card_histories:         extractCardHistories(data) },
    { renewal_card:           extractCardInfo(data) },
    { previous_names:         extractPreviousNames(data) },
    { medical_histories:      extractMedicalHistories(data) },
    { license_issues:         extractLicenseIssues(data) },
    { veterans_info:          extractVeteransInfo(data) },
    { voting_registrations:   extractVotingRegistrations(data) },
    { cards:                  extractCardTypes(data) },
    { card_options:           extractCardOptions(data) },
    { license_classes:        extractLicenseClasses(data) }
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
    language:                 data.language.appLanguage,
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
      street_address_1:   data.address.mailing.street_1,
      street_address_2:   data.address.mailing.street_2,
      city:               data.address.mailing.city,
      state:              data.address.mailing.state,
      zip:                data.address.mailing.zip
    },
    {
      application_id:     data.id,
      type:               'home',
      street_address_1:   data.address.home.street_1,
      street_address_2:   data.address.home.street_2,
      city:               data.address.home.city,
      state:              data.address.home.state,
      zip:                data.address.home.zip
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
    number:           data.contactMethods.phoneNumber1 + data.contactMethods.phoneNumber2 + data.contactMethods.phoneNumber3
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

function extractCardInfo(data) {
  if (!cardTypeParser.needCurrentCardInfo(data.cardType)) { return null; }
  let _date = parserHelper.createDateString(data.currentCardInfo);
  return {
    application_id:   data.id,
    number:           data.currentCardInfo.number,
    date:             _date
  };
};

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
    let designation = null;
    let label = null;
    if(data.veteransService.previouslyDesignated === 'Yes') {
      designation = 'Yes';
    }
    if(data.veteransService.veteransIdentifier === 'Yes'){
      label = 'add';
    }
    return [{
      application_id:               data.id,
      has_requested_information:    parserHelper.strToBool(data.veteransService.receiveBenefits),
      previously_designated:        designation,
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
    is_citizen:         parserHelper.blankIsDecline(data.citizenStatus),
    is_eligible:        parserHelper.blankIsDecline(data.eligibilityRequirements),
    type:               voterChoice.type,
    opted_out:          parserHelper.strToBool(voterChoice.opted_out),
    is_preregistering:  parserHelper.strToBool(data.politicalPartyChoose.isSelected),
    party:              parserHelper.parseParty(data.politicalPartyChoose),
    language:           data.language.ballotLanguage,
    vote_by_mail:       parserHelper.strToBool(data.ballotByMail),
    should_contact:     parserHelper.strToBool(data.contactMethods.shouldContact)
  }];
}

function extractCardTypes(data) {
  let cards = [ ];
  if(cardTypeParser.hasID(data.cardType)){
    cards.push({
      application_id:   data.id,
      type:             'ID'
    });
  }

  if(cardTypeParser.hasDL(data.cardType)) {
    cards.push({
      application_id:   data.id,
      type:             'DL'
    })
  }

  return cards;
}

function extractCardOptions(data) {
  let cardOptions = [ ];

  data.cardType.IDDL.forEach(type => {
    cardOptions.push({
      type        : type,
      option_type : 'action',
      option_value: data.cardType[type].action
    });
  });

  ////////// CHANGES AND REPLACEMENTS ///////////
  if (cardTypeParser.getChange(data.cardType)){
    const correctOrUpdate = data.cardChanges.correctOrUpdate;
    const changes = data.cardChanges.sections.join('_');

    cardOptions.push({
      type:               data.cardType.IDDL[0],
      option_type:        'modification',
      option_value:       'change-' + correctOrUpdate + '-' + changes + '-' + data.cardChanges.other
    });
  } else if (cardTypeParser.getReplace(data.cardType)) {
    cardOptions.push({
      type:               data.cardType.IDDL[0],
      option_type:        'modification',
      option_value:       'replace-' + data.cardReplacement.reason
    });
  }


  ///////// REDUCED FEE ////////////////
  if(data.reducedFee.ID === 'Yes' && data.reducedFee.form === 'Yes') {
    cardOptions.push({
      type:               'ID',
      option_type:        'modification',
      option_value:       'reduced-fee-has-form'
    })
  } else if(data.reducedFee.ID === 'Yes' && !data.reducedFee.form === 'Yes') {
    cardOptions.push({
      type:               'ID',
      option_type:        'modification',
      option_value:       'reduced-fee-no-form'
    })
  }

  ////////// REAL ID ///////////////
  if(data.realID.getRealID === 'Yes'){
    var hasID = cardTypeParser.hasID(data.cardType);
    var hasDL = cardTypeParser.hasDL(data.cardType);
    var designation = hasID && hasDL ? data.realID.realIdDesignation : data.cardType.IDDL[0];

    cardOptions.push({
      type:               designation,
      option_type:        'modification',
      option_value:       'real-id'
    });
  }

  ///////// SENIOR ID ///////////
  if(data.seniorID=== 'Yes') {
    cardOptions.push({
      type:               'ID',
      option_type:        'modification',
      option_value:       'senior-id'
    })
  }

  return cardOptions;
};

function extractLicenseClasses(data) {
  let license_classes = [];
  function pushToLicenseClasses(item) {
    license_classes.push({
      type: item
    });
  };

  data.licenseType.endorsement.forEach(function(item) {
    pushToLicenseClasses(item);
  });

  data.licenseType.type.forEach(function(item) {
    pushToLicenseClasses(item);
  });

  return license_classes;
}

module.exports = parse;

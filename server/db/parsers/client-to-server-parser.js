'use strict';

const parserHelper          = require('../../helpers/data-parser');
const voterChoiceConverter  = require('../../helpers/voter-choice');
const cardTypeParser        = require('../../helpers/card-type');

function parse(data) {
  return Object.assign(
    {},
    { application:            extractApplication(data) },
    { addresses:              extractAddresses(data) },
    { emails:                 extractEmail(data) },
    { phone_numbers:          extractPhoneNumber(data) },
    { organ_donations:        extractOrganDonation(data) },
    { card_histories:         extractCardHistories(data) },
    { renewal_card:           extractExistingCardInfo(data) },
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
  let dob               = new Date(parserHelper.createDateString(data.dateOfBirth));
  let socialSecurity    = 'No';

  if(data.socialSecurity.hasSocialSecurity === 'Yes'){
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
    sex:                      physicalTraits.sex,
    height_feet:              heightWeight.heightFeet ? heightWeight.heightFeet : 0,
    height_inches:            heightWeight.heightInches ? heightWeight.heightInches : 0,
    weight:                   heightWeight.weight ? heightWeight.weight : 0,
    social_security_number:   socialSecurity
  };
}

function extractAddresses(data) {
  if(data.address.home.street_1 === '') { return null; }
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
  let email = data.contactMethods.emailAddress;
  if(email) {
    return {
      application_id:   data.id,
      address:          email
    };
  }
  return null;
}

function extractPhoneNumber(data) {
  if (data.contactMethods.phoneNumber1 || data.contactMethods.phoneNumber2 || data.contactMethods.phoneNumber3) {
    return {
      application_id:   data.id,
      number:           data.contactMethods.phoneNumber1 + data.contactMethods.phoneNumber2 + data.contactMethods.phoneNumber3
    };
  }
  return null;
}

function extractOrganDonation(data) {
  if(data.organDonation.donateOrgan === '' || data.organDonation.donateMoney === '') { return null; }
  return {
    application_id:   data.id,
    donating_organs:  parserHelper.strToBool(data.organDonation.donateOrgan),
    donating_money:   parserHelper.strToBool(data.organDonation.donateMoney)
  };
}

function extractCardHistories(data) {
  if(data.licenseAndIdHistory.isIssued === 'Yes'){
    let dateString = parserHelper.createDateString(data.licenseAndIdHistory);
    return {
      application_id:   data.id,
      number:           data.licenseAndIdHistory.DLIDNumber,
      issuing_entity:   data.licenseAndIdHistory.issuedBy,
      date_description: dateString,
    };
  }
  else {
    return null;
  }
}

function extractExistingCardInfo(data) {
  if (!cardTypeParser.needCurrentCardInfo(data.cardType)) { return null; }
  let dateString = parserHelper.createDateString(data.currentCardInfo);
  return {
    application_id:   data.id,
    number:           data.currentCardInfo.number,
    date:             dateString
  };
}

function extractPreviousNames(data) {
  let previousNames  = data.namesHistory;
  let names          = [];
  if( previousNames.hasUsedPreviousNames === 'Yes') {
    let tokens = previousNames.previousNames.split(',');
    tokens.forEach(function (token){
      token = token.trim();
      if(token){
        names.push(
          {
            application_id: data.id,
            name:           token
          }
        );
      }
    });
    return names;
  }
  else {
    return null;
  }
}

function extractMedicalHistories(data) {
  if(data.medicalHistory.hasMedicalCondition === 'Yes') {
    return {
      application_id:   data.id,
      description:      data.medicalHistory.medicalInfo
    };
  }
  else {
    return null;
  }
}

function extractLicenseIssues(data) {
  if( data.licenseIssues.isSuspended === 'Yes'){
    let dateString = parserHelper.createDateString(data.licenseIssues);
    return {
      application_id:     data.id,
      description:        data.licenseIssues.reason,
      date_description:   dateString
    };
  }
  else{
    return null;
  }
}

function extractVeteransInfo(data) {
  if(data.veteransService.isVeteran === 'Yes'){

    let label = null;
    if(data.veteransService.veteransIdentifier === 'Yes') {
      label = 'add';
    }
    if(data.veteransService.previouslyDesignated === 'Yes' && data.veteransService.veteransIdentifier === 'No' ) {
      label = 'remove';
    }

    return {
      application_id:               data.id,
      has_requested_information:    parserHelper.strToBool(data.veteransService.receiveBenefits),
      previously_designated:        parserHelper.strToBool(data.veteransService.previouslyDesignated),
      labeling:                     label
    };
  }
  else {
    return null;
  }

}

function extractVotingRegistrations(data) {
  if(data.citizenStatus === '' || data.eligibilityRequirements === '' || data.optOut === '') { return null; }
  const voterChoice = voterChoiceConverter.clientToDBMapping(data.optOut);
  return {
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
  };
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

  ////////// CHANGES(UPDATE or CORRECT) AND REPLACEMENTS ///////////
  if (cardTypeParser.getChange(data.cardType)){
    const correctOrUpdate = data.cardChanges.correctOrUpdate;
    const changes = data.cardChanges.sections.join('_');

    cardOptions.push({
      type:               cardTypeParser.getSingleCardType(data.cardType),
      option_type:        'modification',
      option_value:       'change-' + correctOrUpdate + '-' + changes + '-' + data.cardChanges.other
    });
  } else if (cardTypeParser.getReplace(data.cardType)) {
    cardOptions.push({
      type:               cardTypeParser.getSingleCardType(data.cardType),
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
  } else if(data.reducedFee.ID === 'Yes' && data.reducedFee.form !== 'Yes') {
    cardOptions.push({
      type:               'ID',
      option_type:        'modification',
      option_value:       'reduced-fee-no-form'
    })
  }

  ////////// REAL ID ///////////////
  if(data.realID.getRealID === 'Yes'){
    cardOptions.push({
      type:               data.realID.realIdDesignation,
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

  data.licenseType.endorsement.forEach(function(item) {
    license_classes.push({
      type: item
    });
  });

  data.licenseType.type.forEach(function(item) {
    license_classes.push({
      type: item
    });
  });

  return license_classes;
}

module.exports = parse;

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
  let basics            = data.basics;
  let legalName         = basics.legalName || {};
  let heightWeight      = basics.traitsHeightWeight || {};
  let physicalTraits    = basics.physicalTraits || {};
  let language          = basics.language.appLanguage || '';
  let dob               = null;
  let socialSecurity    = 'No';

  if(parserHelper.createDateString(basics.dateOfBirth)) {
    dob = new Date(parserHelper.createDateString(basics.dateOfBirth));
  }

  if(basics.socialSecurity.hasSocialSecurity === 'Yes'){
    let _socialSecurity = basics.socialSecurity;
    socialSecurity = _socialSecurity.part1+'-'+_socialSecurity.part2+'-'+_socialSecurity.part3;
  }

  return {
    id:                       data.id,
    language:                 language,
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
  if(data.basics.address.home.street_1 === '') { return null; }
  return [
    {
      application_id:     data.id,
      type:               'mailing',
      street_address_1:   data.basics.address.mailing.street_1,
      street_address_2:   data.basics.address.mailing.street_2,
      city:               data.basics.address.mailing.city,
      state:              data.basics.address.mailing.state,
      zip:                data.basics.address.mailing.zip
    },
    {
      application_id:     data.id,
      type:               'home',
      street_address_1:   data.basics.address.home.street_1,
      street_address_2:   data.basics.address.home.street_2,
      city:               data.basics.address.home.city,
      state:              data.basics.address.home.state,
      zip:                data.basics.address.home.zip
    }
  ];
}

function extractEmail(data) {
  let email = data.voting.contactMethods.emailAddress;
  if(email) {
    return {
      application_id:   data.id,
      address:          email
    };
  }
  return null;
}

function extractPhoneNumber(data) {
  if (data.voting.contactMethods.phoneNumber1 || data.voting.contactMethods.phoneNumber2 || data.voting.contactMethods.phoneNumber3) {
    return {
      application_id:   data.id,
      number:           data.voting.contactMethods.phoneNumber1 + data.voting.contactMethods.phoneNumber2 + data.voting.contactMethods.phoneNumber3
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
  let cardHistories = [];
  let getIDInfo = cardTypeParser.needCurrentCardInfo(data.IDApp.action);
  let getDLInfo = cardTypeParser.needCurrentCardInfo(data.DLApp.action);

  if (cardTypeParser.hasNewDL(data.DLApp)){
    if(data.history.licenseAndIdHistory.isIssued === 'Yes'){
      let dateString = parserHelper.createDateString(data.history.licenseAndIdHistory);
      cardHistories.push({
        application_id:   data.id,
        number:           data.history.licenseAndIdHistory.DLIDNumber,
        issuing_entity:   data.history.licenseAndIdHistory.issuedBy,
        date_description: dateString,
      });
    } else if (data.history.licenseAndIdHistory.isIssued === 'No') {
      cardHistories.push({
        application_id:   data.id,
        number:           '',
        issuing_entity:   'licenseAndIdHistory not issued',
        date_description: ''
      });
    }
  } else if (getDLInfo) {
    let _date = parserHelper.createDateString(data.DLApp.currentCard);
    cardHistories.push({
      application_id:   data.id,
      number:           data.DLApp.currentCard.number,
      issuing_entity:   '',
      date_description: _date
    });
  }

  if (getIDInfo) {
    let _date = parserHelper.createDateString(data.IDApp.currentCard);
    cardHistories.push({
      application_id:   data.id,
      number:           data.IDApp.currentCard.number,
      issuing_entity:   '',
      date_description: _date
    });
  }

  return cardHistories;
}

function extractPreviousNames(data) {
  let _previousNames  = data.history.namesHistory;
  let names          = [];
  if( _previousNames.hasUsedPreviousNames === 'Yes') {
    let tokens = _previousNames.previousNames.split(',');
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
  if(data.history.medicalHistory.hasMedicalCondition === 'Yes') {
    return {
      application_id:   data.id,
      description:      data.history.medicalHistory.medicalInfo
    };
  }
  else {
    return null;
  }
}

function extractLicenseIssues(data) {
  if( data.history.licenseIssues.isSuspended === 'Yes'){
    let dateString = parserHelper.createDateString(data.history.licenseIssues);
    return {
      application_id:     data.id,
      description:        data.history.licenseIssues.reason,
      date_description:   dateString
    };
  }
  else{
    return null;
  }
}

function extractVeteransInfo(data) {
  if(data.history.veteransService.isVeteran === 'Yes'){
    let label = null;

    if(data.history.veteransService.veteransIdentifier === 'Yes'){
      label = 'add';
    }
    if(data.history.veteransService.previouslyDesignated === 'Yes' && data.history.veteransService.veteransIdentifier === 'No' ) {
      label = 'remove';
    }

    return {
      application_id:               data.id,
      has_requested_information:    parserHelper.strToBool(data.history.veteransService.receiveBenefits),
      previously_designated:        parserHelper.strToBool(data.history.veteransService.previouslyDesignated),
      labeling:                     label
    };
  }
  else {
    return null;
  }

}

function extractVotingRegistrations(data) {

  if(data.voting.citizenStatus === '' || data.voting.eligibilityRequirements === '' || data.voting.optOut === '') { return null; }
  const voterChoice = voterChoiceConverter.clientToDBMapping(data.voting.optOut);
  return {
    application_id:     data.id,
    is_citizen:         parserHelper.strToBool(data.voting.citizenStatus),
    is_eligible:        parserHelper.strToBool(data.voting.eligibilityRequirements),
    type:               voterChoice.type,
    opted_out:          parserHelper.strToBool(voterChoice.opted_out),
    is_preregistering:  parserHelper.strToBool(data.isPreRegistering),
    party:              parserHelper.parseParty(data.voting.politicalPartyChoose),
    language:           data.basics.language.ballotLanguage,
    vote_by_mail:       parserHelper.strToBool(data.voting.ballotByMail),
    should_contact:     parserHelper.strToBool(data.voting.contactMethods.shouldContact)
  };
}

function extractCardTypes(data) {
  let cards = [ ];
  if(cardTypeParser.hasID(data.IDApp)){
    cards.push({
      application_id:   data.id,
      type:             'ID'
    });
  }

  if(cardTypeParser.hasDL(data.DLApp)) {
    cards.push({
      application_id:   data.id,
      type:             'DL'
    })
  }

  return cards;
}

function extractCardOptions(data) {
  let cardOptions = [ ];

  //////----------- DRIVER LICENSE OPTIONS ---------/////////
  if (cardTypeParser.hasDL(data.DLApp)) {
    cardOptions.push({
      type        : 'DL',
      option_type : 'action',
      option_value: data.DLApp.action
    });

    // changing and replacing DL
    if (cardTypeParser.getChange(data.DLApp.action)) {
      let correctOrUpdate = data.DLApp.cardChanges.correctOrUpdate;
      let changes = data.DLApp.cardChanges.sections.join('_');
      cardOptions.push({
        type:               'DL',
        option_type:        'modification',
        option_value:       'change-' + correctOrUpdate + '-' + changes + '-' + data.DLApp.cardChanges.other
      });
    }
    else if (cardTypeParser.getReplace(data.DLApp.action)) {
      cardOptions.push({
        type:               'DL',
        option_type:        'modification',
        option_value:       'replace-' + data.DLApp.replacementDetails.reason
      });
    }
  }

  //////-----  ID OPTIONS --------------//////////////////
  if (cardTypeParser.hasID(data.IDApp)) {
    cardOptions.push({
      type        : 'ID',
      option_type : 'action',
      option_value: data.IDApp.action
    });

    // changing and replacing ID
    if (cardTypeParser.getChange(data.IDApp.action)) {
      let correctOrUpdate = data.IDApp.cardChanges.correctOrUpdate;
      let changes = data.IDApp.cardChanges.sections.join('_');
      cardOptions.push({
        type:               'ID',
        option_type:        'modification',
        option_value:       'change-' + correctOrUpdate + '-' + changes + '-' + data.cardChanges.other
      });
    }
    else if (cardTypeParser.getReplace(data.IDApp.action)) {
      cardOptions.push({
        type:               'ID',
        option_type:        'modification',
        option_value:       'replace-' + data.IDApp.replacementDetails.reason
      });
    };

    // reduced fee
    if(data.IDApp.reducedFee.ID === 'Yes' && data.IDApp.reducedFee.form === 'Yes') {
      cardOptions.push({
        type:               'ID',
        option_type:        'modification',
        option_value:       'reduced-fee-has-form'
      })
    } else if(data.IDApp.reducedFee.ID === 'Yes' && !data.IDApp.reducedFee.form === 'Yes') {
      cardOptions.push({
        type:               'ID',
        option_type:        'modification',
        option_value:       'reduced-fee-no-form'
      })
    };

    // senior ID
    if(data.IDApp.seniorID=== 'Yes') {
      cardOptions.push({
        type:               'ID',
        option_type:        'modification',
        option_value:       'senior-id'
      })
    };
  };

  ////////// REAL ID ///////////////
  if(data.realID.getRealID === 'Yes'){
    var hasID = cardTypeParser.hasID(data.IDApp);
    var hasDL = cardTypeParser.hasDL(data.DLApp);
    var designation = hasID && hasDL ? data.realID.realIdDesignation : hasID ? 'ID' : 'DL';

    cardOptions.push({
      type:               data.realID.realIdDesignation,
      option_type:        'modification',
      option_value:       'real-id'
    });
  };

  return cardOptions;
};

function extractLicenseClasses(data) {
  let license_classes = [];

  data.DLApp.licenseType.endorsement.forEach(function(item) {
    license_classes.push({
      type: item
    });
  });

  data.DLApp.licenseType.type.forEach(function(item) {
    license_classes.push({
      type: item
    });
  });

  return license_classes;
}

module.exports = parse;

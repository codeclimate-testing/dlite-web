'use strict';

const parserHelper         = require('../helpers/data-parser');
const voterChoiceConverter = require('./parsers/voter-choice-converter');
const defaultClientState   = require('../helpers/client-default-state');

function parse(data) {
  if(!data) {
    return defaultClientState;
  }
  let application           = data.application;
  let addresses             = data.addresses;
  let emails                = data.emails;
  let phone_numbers         = data.phone_numbers;
  let organ_donations       = data.organ_donations;
  let card_histories        = data.card_histories;
  let renewal_card          = data.renewal_card;
  let previous_names        = data.previous_names;
  let medical_histories     = data.medical_histories;
  let license_issues        = data.license_issues;
  let veterans_info         = data.veterans_info;
  let voting_registrations  = data.voting_registrations;
  let cards                 = data.cards;
  let card_options          = data.card_options;
  let license_classes       = data.license_classes;

  return Object.assign(
    {},
    {
      application: {
        id:                       application.id,
        legalName:                getLegalName(application),
        dateOfBirth:              getDateOfBirth(application),
        cardType:                 getCardTypes(card_options, cards),
        cardChanges:              getCardChanges(card_options),
        cardReplacement:          getCardReplacement(card_options),
        currentCardInfo:          getCurrentCardInfo(renewal_card),
        realID:                   getRealID(card_options, cards),
        licenseType:              getLicenseType(license_classes),
        reducedFee:               getReducedFee(card_options),
        seniorID:                 getSeniorID(card_options),
        address:                  getAddress(addresses),
        physicalTraits:           getPhysicalTraits(application),
        traitsHeightWeight:       getHeightAndWeight(application),
        socialSecurity:           getSocialSecurity(application),
        organDonation:            getOrganDonations(organ_donations),
        licenseAndIdHistory:      getLicenseAndIdHistory(card_histories),
        namesHistory:             getNamesHistories(previous_names),
        medicalHistory:           getMedicalHistories(medical_histories),
        licenseIssues:            getLicenseIssues(license_issues),
        veteransService:          getVeteransService(veterans_info),
        citizenStatus:            getCitizenStatus(voting_registrations),
        ballotByMail:             getBallotByMail(voting_registrations),
        eligibilityRequirements:  getEligibility(voting_registrations),
        politicalPartyChoose:     getParty(voting_registrations),
        ballotLanguage:           getBallotLanguage(voting_registrations),
        optOut:                   getOptedOut(voting_registrations),
        contactMethods:           getContactMethods(emails, phone_numbers, voting_registrations)
      }
    }
  );
}

function getLegalName(application) {
  return {
    firstName:  application.first_name,
    middleName: application.middle_name,
    lastName:   application.last_name,
    suffix:     application.suffix_name
  };
}

function getDateOfBirth(application) {
  let data_of_birth = '';
  if(application.date_of_birth){
    data_of_birth = {
      day: (new Date(application.date_of_birth).getDate()).toString(),
      month: (new Date(application.date_of_birth).getMonth() + 1).toString(),
      year: (new Date(application.date_of_birth).getFullYear()).toString()
    }
  }
  return data_of_birth;

}

function getAddress(addresses) {

  let home_address = {};
  let mailing_address = {};
  let sameAddresses = 'Yes';

  addresses.forEach(function(address) {
    if(address.type === 'home'){
      home_address = address;
    }
    if(address.type === 'mailing') {
      mailing_address = address;
      sameAddresses = 'No';
    }
  });

  return {
    homeAddressSameAsMailing: sameAddresses,
    home: {
      street_1: home_address.street_address_1,
      street_2: home_address.street_address_2,
      city:     home_address.city,
      state:    home_address.state,
      zip:      home_address.zip,
    },
    mailing: {
      street_1: mailing_address.street_address_1,
      street_2: mailing_address.street_address_2,
      city:     mailing_address.city,
      state:    mailing_address.state,
      zip:      mailing_address.zip,
    }
  };

}

function getPhysicalTraits(application) {
  return {
    hairColor:    application.hair_color,
    eyeColor:     application.eye_color,
    sex:          application.sex
  };
}

function getHeightAndWeight(application) {
  return {
    weight:       application.weight + '',
    heightFeet:   application.height_feet + '',
    heightInches: application.height_inches + ''
  };
}

function getSocialSecurity(application) {
  let social_security = '';
  if(application.social_security_number) {
    let _parts = application.social_security_number.split('-');
    social_security = {
      part1:              _parts[0],
      part2:              _parts[1],
      part3:              _parts[2],
      hasSocialSecurity:  'Yes'
    }
  }
  return social_security;
}

function getOrganDonations(organ_donations) {
  return {
    donate: parserHelper.boolToStr(organ_donations.donating_organs),
    contribute: parserHelper.boolToStr(organ_donations.donating_money)
  };
}

function getLicenseAndIdHistory(card_histories) {
  if(card_histories && card_histories.length > 0){
    card_histories = card_histories[0];
    let _date = parserHelper.createDateJson(card_histories.date_description);
    return {
      DLIDNumber:   card_histories.number,
      issuedBy:     card_histories.issuing_entity,
      month:        _date.month,
      day:          _date.day,
      year:         _date.year,
      isIssued:     'Yes'
    };
  }
  else {
    return {
      DLIDNumber:   '',
      issuedBy:     '',
      month:        '',
      day:          '',
      year:         '',
      isIssued:     'No'
    };
  }
}

function getCurrentCardInfo(renewal_card) {
  let currentCardInfo = {
    number: '',
    month: '',
    day: '',
    year: ''
  };
  if(renewal_card[0]){
    let _date = parserHelper.createDateJson(renewal_card[0].date);
    return {
      number:   renewal_card[0].number,
      month:    _date.month,
      day:      _date.day,
      year:     _date.year
    }
  }
  return currentCardInfo
};

function getNamesHistories(previous_names) {
  if(previous_names && previous_names.length > 0){
    let _names = previous_names[0].name;
    for(var i = 1; i < previous_names.length; i++ ) {
      _names = _names + ', ' + previous_names[i].name;
    }
    return {
      hasUsedPreviousNames: 'Yes',
      previousNames:        _names
    };
  }
  else{
    return {
      hasUsedPreviousNames: 'No',
      previousNames:        ''
    };
  }
}

function getMedicalHistories(medical_histories) {
  if(medical_histories && medical_histories.length > 0){
    medical_histories = medical_histories[0];
    return {
      hasMedicalCondition:  'Yes',
      medicalInfo:          medical_histories.description
    };
  }
  else{
    return {
      hasMedicalCondition:  'No',
      medicalInfo:          ''
    };
  }
}

function getLicenseIssues(license_issues) {
  if(license_issues && license_issues.length > 0){
    license_issues = license_issues[0];
    let _date = parserHelper.createDateJson(license_issues.date_description);
    return {
      isSuspended:  'Yes',
      month:        _date.month,
      day:          _date.day,
      year:         _date.year,
      reason:       license_issues.description
    };
  }
  else{
    return {
      isSuspended:  'No',
      month:        '',
      day:          '',
      year:         '',
      reason:       ''
    };
  }
}

function getVeteransService(veterans_info) {
  if(veterans_info){
    let designation = 'No';
    let label = 'No';
    if(veterans_info.previously_designated === 'Yes') {
      designation = 'Yes';
    }
    if(veterans_info.labeling === 'add'){
      label = 'Yes';
    }

    return {
      isVeteran:            'Yes',
      receiveBenefits:      parserHelper.boolToStr(veterans_info.has_requested_information),
      previouslyDesignated: designation,
      veteransIdentifier:   label
    };
  }
  else{
    return {
      isVeteran:            'No',
      receiveBenefits:      '',
      veteransIdentifier:   '',
      previouslyDesignated: ''
    };
  }
}

function getCitizenStatus(voting_registrations) {
  return parserHelper.boolToStr(voting_registrations.is_citizen);
}

function getBallotByMail(voting_registrations) {
  return parserHelper.boolToStr(voting_registrations.vote_by_mail);
}

function getEligibility(voting_registrations) {
  return parserHelper.boolToStr(voting_registrations.is_eligible);
}

function getParty(voting_registrations) {
  return {
    isSelected:             parserHelper.boolToStr(voting_registrations.is_preregistering),
    politicalPartyChoose:   voting_registrations.party
  };
}

function getBallotLanguage(voting_registrations) {
  return voting_registrations.language;
}

function getOptedOut(voting_registrations) {
  let optOut      = '';
  let opted_out  = parserHelper.boolToStr(voting_registrations.opted_out);
  let type       = voting_registrations.type;
  return voterChoiceConverter.recordToUi({
    opted_out: opted_out,
    type: type
  });
}

function getContactMethods(emails, phone_numbers, voting_registrations) {
  emails          = emails[0];
  phone_numbers   = phone_numbers[0];
  return {
    shouldContact: parserHelper.boolToStr(voting_registrations.should_contact),
    emailAddress: emails.address,
    phoneNumber: phone_numbers.number
  };
}

function getCardTypes(card_options, cards) {
  let cardType = {
    new: [],
    renew: '',
    change: '',
    replace: '',
    youthIDInstead: ''
  };

  card_options.forEach(option => {
    if(option.option_type === 'action'){
      if(option.option_value === 'new'){
        cards.forEach(card => {
          if(card.id === option.card_id) {
            cardType.new.push(card.type)
          }
        })
      } else {
        cards.forEach(card => {
          if(card.id === option.card_id) {
            cardType[option.option_value] = card.type;
          }
        });
      }
    }
  });

  return cardType;
}

function getLicenseType(license_classes) {
  let licenseType = {
    type: [],
    endorsement: [],
    needEndorsement: ''
  };
  if(license_classes.length > 0){
    license_classes.forEach(item => {

      if(item.type === 'firefighter' || item.type === 'ambulance') {
        licenseType.endorsement.push(item.type);
        licenseType.needEndorsement = 'Yes'
      } else {
        licenseType.type.push(item.type);
      }

    });
  }
  return licenseType;
}

function getRealID(card_options, cards) {
  let realID = {
    getRealID: '',
    realIdDesignation: ''
  };

  card_options.forEach((option) => {
    if(option.option_value === 'real-id') {
      realID.getRealID = 'Yes';
      cards.forEach((card) => {
        if(card.id === option.card_id) {
          realID.realIdDesignation = card.type
        }
      });
    }
  });

  return realID;
}

function getReducedFee(card_options) {
  let reducedFee = {
    ID: '',
    form: ''
  };
  card_options.forEach(option => {
    if(option.option_value === 'reduced-fee-has-form') {
      reducedFee.ID = 'Yes';
      reducedFee.form = 'Yes';
    }
    else if(option.option_value === 'reduced-fee-no-form') {
      reducedFee.ID = 'Yes';
      reducedFee.form = 'No';
    }
  });
  return reducedFee;
}

function getSeniorID(card_options) {
  let seniorID = 'No';
  card_options.forEach(option => {
    if(option.option_value === 'senior-id') {
      seniorID = 'Yes';
    }
  });
  return seniorID;
};

function getCardChanges(card_options) {
  let cardChanges = {
    correctOrUpdate: '',
    sections: [],
    other: ''
  };
  card_options.forEach(option => {
    if(option.option_type === 'modification') {
      const value = option.option_value.split('-');
      if(value[0] === 'change'){
        cardChanges = {
          correctOrUpdate: value[1],
          sections: value[2].split('_'),
          other: value[3]
        }
      }
    }
  });
  return cardChanges;
};

function getCardReplacement(card_options) {
  let cardReplacement = {
    reason: ''
  };
  card_options.forEach(option => {
    const value = option.option_value.split('-');
    if(value[0] === 'replace') {
      cardReplacement = {
        reason: value[1]
      }
    }
  });
  return cardReplacement
};

module.exports = parse;

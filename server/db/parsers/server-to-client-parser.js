'use strict';

const parserHelper          = require('../../helpers/data-parser');
const voterChoiceConverter  = require('../../helpers/voter-choice');
const defaultClientState    = require('../../helpers/client-default-state');
const getIDApp              = require('./get-id-app');
const getDLApp              = require('./get-dl-app');

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
        basics: {
          language:                 getLanguage(application, voting_registrations),
          legalName:                getLegalName(application),
          dateOfBirth:              getDateOfBirth(application),
          address:                  getAddress(addresses),
          physicalTraits:           getPhysicalTraits(application),
          traitsHeightWeight:       getHeightAndWeight(application),
          socialSecurity:           getSocialSecurity(application)
        },
        IDApp:                      getIDApp(cards, card_options, card_histories),
        DLApp:                      getDLApp(cards, card_options, card_histories, license_classes),

        cardType:                   [],
        cardAction:                 '',
        youthIDInstead:             '',
        realID:                     getRealID(card_options, cards),
        organDonation:              getOrganDonations(organ_donations),

        history: {
          licenseAndIdHistory:      getLicenseAndIdHistory(card_histories),
          namesHistory:             getNamesHistories(previous_names),
          medicalHistory:           getMedicalHistories(medical_histories),
          licenseIssues:            getLicenseIssues(license_issues),
          veteransService:          getVeteransService(veterans_info)
        },

        voting: {
          citizenStatus:            getCitizenStatus(voting_registrations),
          ballotByMail:             getBallotByMail(voting_registrations),
          eligibilityRequirements:  getEligibility(voting_registrations),
          politicalPartyChoose:     getParty(voting_registrations),
          optOut:                   getOptedOut(voting_registrations),
          contactMethods:           getContactMethods(emails, phone_numbers, voting_registrations)
        }
      }
    }
  );
}


function getCardTypes(card_options, cards) {
  let cardType = [];

  card_options.forEach(option => {
    if(option.option_type === 'action'){
      cards.forEach(card => {
        if(card.id === option.card_id) {
          cardType.push(card.type);
        }
      });
      cardType.sort();
    }
  });

  return cardType;
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
  let organDonation = {
    donateOrgan: '',
    donateMoney: ''
  }
  if(organ_donations) {
    organDonation.donateOrgan = parserHelper.boolToStr(organ_donations.donating_organs),
    organDonation.donateMoney = parserHelper.boolToStr(organ_donations.donating_money)
  }
  return organDonation;
}

function getLicenseAndIdHistory(card_histories) {
  if(card_histories && card_histories.length > 0 && parserHelper.historyForDL(card_histories).length > 0){
    let card_history = parserHelper.historyForDL(card_histories);
    let _date = parserHelper.createDateJson(card_history.date_description);

    if (card_history.issuing_entity === 'licenseAndIdHistory not issued') {
      return {
        DLIDNumber:   '',
        issuedBy:     '',
        month:        '',
        day:          '',
        year:         '',
        isIssued:     'No'
      };
    }
    return {
      DLIDNumber:   card_history.number,
      issuedBy:     card_history.issuing_entity,
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
      isIssued:     ''
    };
  }
}

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
  if(medical_histories){
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
  if(license_issues){
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
    let label = 'No';
    if(veterans_info.labeling === 'add'){
      label = 'Yes';
    }
    return {
      isVeteran:            'Yes',
      receiveBenefits:      parserHelper.boolToStr(veterans_info.has_requested_information),
      previouslyDesignated: parserHelper.boolToStr(veterans_info.previously_designated),
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
  if(voting_registrations) {
    return parserHelper.boolToStr(voting_registrations.is_citizen);
  }
  return '';
}

function getBallotByMail(voting_registrations) {
  if(voting_registrations) {
    return parserHelper.boolToStr(voting_registrations.vote_by_mail);
  }
  return '';
}

function getEligibility(voting_registrations) {
  if(voting_registrations) {
    return parserHelper.boolToStr(voting_registrations.is_eligible);
  }
  return '';
}

function getParty(voting_registrations) {
  if(!voting_registrations) {
    return {
      isSelected:             '',
      politicalPartyChoose:   '',
      otherParty:             ''
    };
  }
  const parties = [ "American Independent Party",
    "Libertarian Party",
    "Democratic Party",
    "Green Party",
    "Peace and Freedom Party",
    "Republican Party"
  ];

  let politicalParty = voting_registrations.party;
  let otherParty = '';

  if (voting_registrations.party.length > 0 && !parties.includes(voting_registrations.party)) {
    politicalParty = 'Other';
    otherParty = voting_registrations.party;
  };

  return {
    isSelected:             parserHelper.boolToStr( politicalParty || otherParty ? true : false),
    politicalPartyChoose:   politicalParty,
    otherParty:             otherParty
  };
}

function getLanguage(application, voting_registrations) {
  let ballotLanguage  = '';
  let appLanguage     = application.language;

  if(voting_registrations) {
    ballotLanguage    = voting_registrations.language;
  }
  return {
    ballotLanguage:   ballotLanguage,
    appLanguage:      appLanguage
  };
}

function getOptedOut(voting_registrations) {

  let opted_out  = '';
  let type       = '';
  if(voting_registrations){
    opted_out  = parserHelper.boolToStr(voting_registrations.opted_out);
    type       = voting_registrations.type;
  }
  return voterChoiceConverter.DBToClientMapping({
    opted_out: opted_out,
    type: type
  });
}

function getContactMethods(emails, phone_numbers, voting_registrations) {
  let shouldContact = '';
  let emailAddress  = '';
  let phoneNumber1  = '';
  let phoneNumber2  = '';
  let phoneNumber3  = '';
  if(voting_registrations) {
    shouldContact = parserHelper.boolToStr(voting_registrations.should_contact);
  }
  if(emails) {
    emailAddress = emails.address;
  }
  if(phone_numbers) {
    phoneNumber1 = phone_numbers.number.slice(0, 3),
    phoneNumber2 = phone_numbers.number.slice(3, 6),
    phoneNumber3 = phone_numbers.number.slice(6, 10)
  }

  return {
    shouldContact: shouldContact,
    emailAddress: emailAddress,
    phoneNumber1: phoneNumber1,
    phoneNumber2: phoneNumber2,
    phoneNumber3: phoneNumber3
  };
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

module.exports = parse;

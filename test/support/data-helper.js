'use strict';

const uuid = require('uuid/v1');
const parse = require('../../server/db/parsers/client-to-server-parser');

function fakeClientData() {
  return {
    id: uuid(),
    'legalName': {
      'firstName': 'John',
      'middleName': 'x',
      'lastName': 'Smith',
      'suffix': 'II'
    },
    'cardType': {
      'IDDL': ['DL', 'ID'],
      'youthIDInstead': '',
      ID: {
        isApplying: true,
        action: 'new'
      },
      DL: {
        isApplying: true,
        action: 'renew'
      }
    },
    'cardChanges': {
      'correctOrUpdate': '',
      'sections': [],
      'other': ''
    },
    'cardReplacement': {
      'reason': ''
    },
    'currentCardInfo': {
      number: 'aewe',
      day: '09',
      month: '10',
      year: '2020'
    },
    'dateOfBirth': {
      'day': '13',
      'month': '10',
      'year': '1975'
    },
    'realID': {
      'getRealID': 'Yes',
      'realIdDesignation': 'DL'
    },
    'licenseType': {
      'type': ['car', 'trailer'],
      'endorsement': ['firefighter'],
      'needEndorsement': 'Yes'
    },
    'reducedFee': {
      'ID': 'Yes',
      'form': 'Yes'
    },
    'seniorID': 'Yes',
    'address': {
      'homeAddressSameAsMailing': 'No',
      'home': {
        'street_1': '123',
        'street_2': 'Main St.',
        'city': 'Sacramento',
        'state': 'CA',
        'zip': '95656'
      },
      'mailing': {
        'street_1': '456',
        'street_2': 'Second St.',
        'city': 'San Jose',
        'state': 'CA',
        'zip': '91212'
      }
    },
    'physicalTraits': {
      'hairColor': 'Auburn',
      'eyeColor': 'Blue',
      'sex': 'Male'
    },
    'traitsHeightWeight': {
      'weight': '210',
      'heightFeet': '6',
      'heightInches': '2'
    },
    'socialSecurity': {
      'part1': '123',
      'part2': '34',
      'part3': '457',
      'hasSocialSecurity': 'Yes'
    },
    'organDonation': {
      'donateOrgan': 'Yes',
      'donateMoney': 'No'
    },
    'licenseAndIdHistory': {
      'DLIDNumber': 'DL12345',
      'issuedBy': 'Authority Inc.',
      'month': '12',
      'day': '22',
      'year': '1725',
      'isIssued': 'Yes'
    },
    'namesHistory': {
      'hasUsedPreviousNames': 'Yes',
      'previousNames': 'abc, xyz, and'
    },
    'medicalHistory': {
      'hasMedicalCondition': 'Yes',
      'medicalInfo': 'not sure at the moment'
    },
    'licenseIssues': {
      'isSuspended': 'Yes',
      'month': '11',
      'day': '22',
      'year': '1899',
      'reason': 'no registration'
    },
    'veteransService': {
      'isVeteran': 'Yes',
      'receiveBenefits': 'No',
      'previouslyDesignated': 'Yes',
      'veteransIdentifier': 'Yes'
    },
    'citizenStatus': 'Yes',
    'ballotByMail': 'Yes',
    'eligibilityRequirements': 'Yes',
    'politicalPartyChoose': {
      'isSelected': 'Yes',
      'politicalPartyChoose': 'Green Party',
      'otherParty': ''
    },
    'language': {
      'ballotLanguage': 'en',
      'appLanguage': 'ko'
    },
    'optOut': 'new',
    'contactMethods': {
      'shouldContact': 'Yes',
      'emailAddress': 'aliceball1234@gmail.com',
      'phoneNumber1': '916',
      'phoneNumber2': '314',
      'phoneNumber3': '8765'
    },
    isPreRegistering: 'No'
  };
};

function updateCorrect() {
  let data = fakeClientData();
  data.cardType.IDDL = ['DL'];
  data.cardType.DL = {
    isApplying: true,
    action: 'change'
  };
  data.cardChanges =  {
    'correctOrUpdate': 'correct',
    'sections': ['name', 'other'],
    'other': 'I dislike my photograph'
  };
  return data;
};

function replaceDamaged() {
  let data = fakeClientData();
  data.cardType.IDDL = ['DL'];
  data.cardType.DL = {
    isApplying: true,
    action: 'replace'
  };
  data.cardReplacement = {
    'reason': 'damaged'
  };
  return data;
};

function fakeRecords() {
  let clientData = fakeClientData();
  return parse(clientData);
};

module.exports = {
  fakeClientData    : fakeClientData,
  replaceDamaged    : replaceDamaged,
  updateCorrect     : updateCorrect,
  fakeRecords       : fakeRecords
};

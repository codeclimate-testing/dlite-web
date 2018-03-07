'use strict';

const uuid = require('uuid/v1');
const parse = require('../../server/models/parsers/client-to-server-parser');

function fakeClientData() {
  return {
    id: uuid(),
    basics: {
      'language': {
        'ballotLanguage': 'en',
        'appLanguage': 'ko'
      },
      'legalName': {
        'firstName': 'John',
        'middleName': 'x',
        'lastName': 'Smith',
        'suffix': 'II'
      },
      'dateOfBirth': {
        'day': '13',
        'month': '10',
        'year': '1975'
      },
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
      }
    },

    IDApp: {
      isApplying: true,
      action: 'new',
      'reducedFee': {
        'ID': 'Yes',
        'form': 'Yes'
      },
      'seniorID': 'Yes',
      'cardChanges': {
        'correctOrUpdate': '',
        'sections': [],
        'other': ''
      },
      'replacementDetails': {
        'reason': ''
      },
      'currentCard': {
        number: '',
        day: '',
        month: '',
        year: ''
      },
      realID: ''
    },

    DLApp: {
      isApplying: true,
      action: 'renew',
      'cardChanges': {
        'correctOrUpdate': '',
        'sections': [],
        'other': ''
      },
      'replacementDetails': {
        'reason': ''
      },
      'currentCard': {
        number: 'aewe',
        day: '',
        month: '10',
        year: '2020'
      },
      'licenseType': {
        'type': ['car', 'trailer'],
        'needEndorsement': 'Yes'
      },
      realID: 'Yes'
    },

    cardType: [],
    cardAction: '',

    youthIDInstead: '',
    'realID': 'Yes',
    'organDonation': {
      'donateOrgan': 'Yes',
      'donateMoney': 'No'
    },
    'history': {
      'licenseAndIdHistory': {
        'DLIDNumber': '',
        'issuedBy': '',
        'month': '',
        'day': '',
        'year': '',
        'isIssued': ''
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
      }
    },

    'voting': {
      'citizenStatus': 'Yes',
      'ballotByMail': 'Yes',
      'eligibilityRequirements': 'Yes',
      'politicalPartyChoose': {
        'isSelected': 'Yes',
        'politicalPartyChoose': 'Green Party',
        'otherParty': ''
      },
      'optOut': 'new',
      'contactMethods': {
        'shouldContact': 'Yes',
        'emailAddress': 'aliceball1234@gmail.com',
        'phoneNumber1': '916',
        'phoneNumber2': '314',
        'phoneNumber3': '8765'
      }
    }
  };
};

function updateCorrect() {
  let data = fakeClientData();
  data.cardType = ['DL'];
  data.IDApp.isApplying = false;
  data.DLApp.isApplying = true;
  data.DLApp.action = 'change';
  data.DLApp.cardChanges = {
    'correctOrUpdate': 'correct',
    'sections': ['name', 'other'],
    'other': 'I dislike my photograph'
  };
  return data;
};

function replaceDamaged() {
  let data = fakeClientData();
  data.cardType = ['DL'];
  data.DLApp.isApplying = true;
  data.DLApp.action = 'replace';
  data.DLApp.replacementDetails = {
    'reason': 'damaged'
  };
  data.IDApp.isApplying = false;
  return data;
};

function getNewDL() {
  let data = fakeClientData();
  data.DLApp.action = 'new';
  data.history.licenseAndIdHistory = {
    'DLIDNumber': 'DL12345',
    'issuedBy': 'Authority Inc.',
    'month': '12',
    'day': '22',
    'year': '1725',
    'isIssued': 'Yes'
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
  fakeRecords       : fakeRecords,
  getNewDL          : getNewDL
};

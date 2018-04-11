'use strict';
const uuid = require('uuid/v1');

function fakeClientData() {
  return {
    id: uuid(),
    userID: '10001',
    pathname: '/apply/id-and-license/my-history/medical-history',
    basics: {
      'language': 'en',
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
      'cardReplacement': {
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
      'cardReplacement': {
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

    cardType: ['DL'],
    cardAction: 'renew',

    youthIDInstead: '',
    'realID': 'Yes',
    'organDonation': {
      'donateOrgan': 'Yes',
      'donateMoney': 'No'
    },
    'history': {
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
      }
    },

    'voting': {
      'citizenStatus': 'Yes',
      'ballotByMail': 'Yes',
      'ballotLanguage': 'en',
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
    },
    guardianSignature: {
      isSigned: 'signElectronically',
      guardianInfo: [
        {
          id: '0',
          acceptLiabilities: true,
          signature: {
            name: 'Guardian Number One',
            month: '12',
            day: '11',
            year: '2018'
          },
          phoneNumber: '408 776 1773',
          address: {
            street_1: '123 Second St.',
            street_2: 'Apt # 564',
            city: 'Sacramento',
            state: 'CA',
            zip: '91121'
          }
        },
        {
          id: '1',
          acceptLiabilities: true,
          signature: {
            name: 'Guardian Number two',
            month: '10',
            day: '9',
            year: '2019'
          },
          phoneNumber: '111 222 3333',
          address: {
            street_1: '2121 Here St.',
            street_2: 'No Apt.',
            city: 'San Francisco',
            state: 'CA',
            zip: '92222'
          }
        }
      ]
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
  data.DLApp.cardReplacement = {
    'reason': 'damaged'
  };
  data.IDApp.isApplying = false;
  return data;
};

function getNewDL() {
  let data = fakeClientData();
  data.DLApp.action = 'new';
  return data;
};

module.exports = {
  fakeClientData,
  updateCorrect,
  replaceDamaged,
  getNewDL
};
'use strict';

const uuid = require('uuid/v1');

function clientData() {
  return {
    id: uuid(),
    cardAction: 'new',
    cardChanges: {
      correctOrUpdate: '',
      sections: [],
      other: ''
    },
    cardReplacement: {
      reason: ''
    },
    realID: 'Yes',
    cdlEndorsements: {
      type: ['tank'],
      needEndorsement: 'Yes'
    },
    cdlCertificates: {
      type: ['transit', 'ambulance'],
      needCertificates: 'Yes'
    },
    'organDonation': {
      'donateOrgan': 'Yes',
      'donateMoney': 'No'
    },
    basics: {
      'language':  {
        'appLanguage': '',
        'ballotLanguage': '',
        'hasChosenBallot': ''
      },
      'legalName': {
        'firstName': 'Jane',
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
        'homeAddressSameAsMailing': 'Yes',
        'home': {
          'street_1': '123',
          'street_2': 'Main St.',
          'city': 'Sacramento',
          'state': 'CA',
          'zip': '95656'
        },
        'mailing': {
          'street_1': '123',
          'street_2': 'Main St.',
          'city': 'Sacramento',
          'state': 'CA',
          'zip': '95656'
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
    'history': {
      'currentDLInfo': {
        'number': 'DL12345',
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
        'veteransIdentifier': 'Yes',
        'militaryWaiver': 'Yes'
      }
    },

    'voting': {
      'citizenStatus': 'Yes',
      'ballotByMail': 'Yes',
      'ballotLanguage': 'en',
      'eligibilityRequirements': 'Yes',
      'politicalPartyChoose': {
        'isSelected': 'Yes',
        'politicalPartyChoose': 'other',
        'otherParty': 'some other party'
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
    'currentCardInfo': {
      'number': '',
      'year': '',
      'day': '',
      'month': ''
    },
    'classM': 'Yes',
    'licenseClass': 'classB',
    'certification': 'inter'
  };
}

function updateCorrect() {
  let data = clientData();
  data.cardAction = 'change';
  data.cardChanges = {
    'correctOrUpdate': 'correct',
    'sections': ['name', 'other'],
    'other': 'please make this license the color red'
  };
  data.currentCardInfo = {
    'number': 'a10101',
    'month': '4',
    'day': '3',
    'year': '2020'
  };
  return data;
}

function replace() {
  let data = clientData();
  data.cardAction = 'replace';
  data.currentCardInfo = {
    'number': 'a10101',
    'month': '4',
    'day': '3',
    'year': '2020'
  };
  data.cardReplacement = {
    'reason': 'other'
  };
  return data;
}

function renew() {
  let data = clientData();
  data.cardAction = 'renew';
  data.currentCardInfo = {
    'number': 'a202020',
    'month': '5',
    'day': '20',
    'year': '2018'
  };
  return data;
}

module.exports = {
  clientData,
  updateCorrect,
  replace,
  renew
};
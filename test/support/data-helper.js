'use strict';

const uuid = require('uuid/v1');
const parse = require('../../server/models/client-data-parser');

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
      'new': ['DL'],
      'renew': 'ID',
      'change': 'ID',
      'replace': 'ID',
      'youthIDInstead': ''
    },
    'cardChanges': {
      'correctOrUpdate': 'correct',
      'sections': ['name', 'other'],
      'other': 'I dislike my photograph'
    },
    'cardReplacement': {
      'reason': 'damaged'
    },
    'currentCardInfo': {
      'number': 'e203f390',
      'day': '13',
      'month': '10',
      'year': '2000'
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
    'homeAddress': {
      'street_1': '123',
      'street_2': 'Main St.',
      'city': 'Sacramento',
      'state': 'CA',
      'zip': '95656',
      'homeAddressSameAsMailing': 'No'
    },
    'mailingAddress': {
      'street_1': '456',
      'street_2': 'Second St.',
      'city': 'San Jose',
      'state': 'CA',
      'zip': '91212'
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
      'donate': 'Yes',
      'contribute': 'No'
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
      'politicalPartyChoose': 'Green Party'
    },
    'ballotLanguage': 'English',
    'optOut': 'new',
    'contactMethods': {
      'shouldContact': 'Yes',
      'emailAddress': 'aliceball1234@gmail.com',
      'phoneNumber': '916314 8765'
    }
  };
}

function fakeRecords() {
  let clientData = fakeClientData();
  return parse(clientData);
}

module.exports = {
  fakeClientData: fakeClientData,
  fakeRecords: fakeRecords
};

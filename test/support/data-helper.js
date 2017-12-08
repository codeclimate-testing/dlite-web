'use strict';

const uuid = require('uuid/v1');
const parse = require('../../server/models/client-data-parser');

function fakeClientData() {
  return {
    id: uuid(),
    "legalName": {
      "firstName": "John",
      "middleName": "x",
      "lastName": "Smith",
      "suffix": "II"
    },
    "cardType": {
      "ID": true,
      "DL": true
    },
    "dateOfBirth": {
      "day": "13",
      "month": "10",
      "year": "1975"
    },
    "realID": {
      "getRealID": "Yes"
    },
    "reducedFee": {
      "ID": "Yes",
      "form": "Yes"
    },
    "homeAddress": {
      "street_1": "123",
      "street_2": "Main St.",
      "city": "Sacramento",
      "state": "CA",
      "zip": "95656"
    },
    "mailingAddress": {
      "street_1": "456",
      "street_2": "Second St.",
      "city": "San Jose",
      "state": "CA",
      "zip": "91212"
    },
    "physicalTraits": {
      "hairColor": "Auburn",
      "eyeColor": "Blue",
      "sex": "Male"
    },
    "traitsHeightWeight": {
      "weight": "210",
      "heightFeet": "6",
      "heightInches": "2"
    },
    "socialSecurity": {
      "part1": "123",
      "part2": "34",
      "part3": "457",
      "hasSocialSecurity": "Yes"
    },
    "organDonation": {
      "donate": "Yes",
      "contribute": "No"
    },
    "licenseAndIdHistory": {
      "DLIDNumber": "DL12345",
      "issuedBy": "Authority Inc.",
      "month": "12",
      "day": "22",
      "year": "1725",
      "isIssued": "Yes"
    },
    "namesHistory": {
      "hasUsedPreviousNames": "Yes",
      "previousNames": "abc, xyz, and"
    },
    "medicalHistory": {
      "hasMedicalCondition": "Yes",
      "medicalInfo": "not sure at the moment"
    },
    "licenseIssues": {
      "isSuspended": "Yes",
      "month": "11",
      "day": "22",
      "year": "1899",
      "reason": "no registration"
    },
    "veteransService": {
      "isVeteran": "Yes",
      "receiveBenefits": "No",
      "veteransIdentifier": "Yes"
    },
    "citizenStatus": "Yes",
    "ballotByMail": "Yes",
    "eligibilityRequirements": "Yes",
    "politicalPartyChoose": {
      "isSelected": "Yes",
      "politicalPartyChoose": "Green Party"
    },
    "ballotLanguage": "English",
    "optOut": "I am a new voter in California",
    "contactMethods": {
      "shouldContact": "Yes",
      "emailAddress": "aliceball1234@gmail.com",
      "phoneNumber": "916314 8765"
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


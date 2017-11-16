'use strict';

const uuid = require('uuid/v1');
const parse = require('../../server/models/client-data-parser');

function fakeClientData() {
  return {
    id: uuid(),
    legalName: {
      firstName: 'John',
      middleName: 'Leo',
      lastName: 'Smith'
    },
    dateOfBirth:  {
      day: 17,
      month: 12,
      year: 1991
    },
    hairColor: 'Brown',
    eyeColor: 'Hazel',
    homeAddress: {
      street_1: '123 Main St',
      street_2: 'Apt. 32',
      city: 'Crazydino',
      state: 'CA',
      zip: '92222'
    },
    mailingAddress: {
      street_1: '200 Sassy street',
      street_2: 'Box 22',
      city: 'San Waffle',
      state: 'CA',
      zip: '91111'
    },
    contactMethods: {
      emailAddress: 'some_email@example.com',
      phoneNumber:  '(916) 555-1111'
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


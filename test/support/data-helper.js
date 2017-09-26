'use strict';

const uuid = require('uuid/v1');
const parse = require('../../server/models/client-data-parser');

function fakeClientData() {
  return {
    id: uuid(),
    legalName: {
      first_name: 'John',
      middle_name: 'Leo',
      last_name: 'Smith'
    },
    dateOfBirth: '11/11/1991',
    hairColor: 'Brown',
    eyeColor: 'Hazel',
    homeAddress: {
      street_1: '123 Main St',
      street_2: 'Apt. 32',
      city: 'Crazydino',
      state: 'CA',
      zip: '98787'
    },
    mailingAddress: {
      street_1: '200 Sassy street',
      street_2: 'Box 22',
      city: 'San Waffle',
      state: 'CA',
      zip: '98787'
    },
    email: 'some_email@example.com',
    phone: '(916) 555-1111'
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


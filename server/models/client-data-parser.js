'use strict';

function parse(data) {
  return Object.assign(
    {},
    { application: extractApplication(data) },
    { addresses: extractAddresses(data) },
    { emails: extractEmail(data) },
    { phone_numbers: extractPhoneNumber(data) }
  );
};

function extractApplication(data) {
  let legalName = data.legalName || {};

  return {
    id:             data.id,
    first_name:     legalName.firstName,
    middle_name:    legalName.middleName,
    last_name:      legalName.lastName,
    date_of_birth:  new Date(data.dateOfBirth),
    hair_color:     data.hairColor,
    eye_color:      data.eyeColor
  };
}

function extractAddresses(data) {
  return [
    {
      application_id: data.id,
      type: 'mailing',
      street_address_1: data.mailingAddress.street_1,
      street_address_2: data.mailingAddress.street_2,
      city: data.mailingAddress.city,
      state: data.mailingAddress.state,
      zip: data.mailingAddress.zip
    },
    {
      application_id: data.id,
      type: 'home',
      street_address_1: data.homeAddress.street_1,
      street_address_2: data.homeAddress.street_2,
      city: data.homeAddress.city,
      state: data.homeAddress.state,
      zip: data.homeAddress.zip
    }
  ];
}

function extractEmail(data) {
  return [{
    application_id: data.id,
    address: data.email
  }];
}

function extractPhoneNumber(data) {
  return [{
    application_id: data.id,
    number: data.phoneNumber
  }];
}

module.exports = parse;

'use strict';

const assert             = require('assert');

const env                = require('../../support/env');
const dataHelper         = require('../../support/data-helper');
const parse              = require('../../../server/models/client-data-parser');

describe('clientDataParser', function() {
  let data, parsedData;

  beforeEach(function() {
    data = dataHelper.fakeClientData();
    parsedData = parse(data);
  });

  it('correctly extracts the application table data', function() {
    let applicationData = parsedData.application;
    let dob = new Date(data.dateOfBirth.month + '/' + data.dateOfBirth.day + '/' + data.dateOfBirth.year);
    assert.equal(applicationData.id, data.id);
    assert.equal(applicationData.first_name, data.legalName.firstName);
    assert.equal(applicationData.middle_name, data.legalName.middleName);
    assert.equal(applicationData.last_name, data.legalName.lastName);
    assert.equal(applicationData.date_of_birth.toString(), dob.toString());
    assert.equal(applicationData.hair_color, data.physicalTraits.hairColor);
    assert.equal(applicationData.eye_color, data.physicalTraits.eyeColor);
    assert.equal(applicationData.sex, data.physicalTraits.sex);
  });

  it('correctly extracts the addresses', function() {
    let addresses = parsedData.addresses;

    let address = addresses[0];
    assert.equal(address.application_id, data.id);
    assert.equal(address.type, 'mailing');
    assert.equal(address.street_address_1,  data.mailingAddress.street_1);
    assert.equal(address.street_address_2,  data.mailingAddress.street_2);
    assert.equal(address.city,              data.mailingAddress.city);
    assert.equal(address.state,             data.mailingAddress.state);
    assert.equal(address.zip,               data.mailingAddress.zip);

    address = addresses[1];
    assert.equal(address.application_id, data.id);
    assert.equal(address.type, 'home');
    assert.equal(address.street_address_1,  data.homeAddress.street_1);
    assert.equal(address.street_address_2,  data.homeAddress.street_2);
    assert.equal(address.city,              data.homeAddress.city);
    assert.equal(address.state,             data.homeAddress.state);
    assert.equal(address.zip,               data.homeAddress.zip);
  });

  it('correctly extracts the email', function() {
    let email = parsedData.emails[0];
    assert.equal(email.application_id, data.id);
    assert.equal(email.address, data.contactMethods.emailAddress);
  });

  it('correctly extracts the phone number', function() {
    let phoneNumber = parsedData.phone_numbers[0];
    assert.equal(phoneNumber.application_id, data.id);
    assert.equal(phoneNumber.number, data.contactMethods.phoneNumber);
  });
});

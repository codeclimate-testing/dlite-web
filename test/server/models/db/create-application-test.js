'use strict';

const assert             = require('assert');

const env                = require('../../../support/env');
const dbHelper           = require('../../../support/db-helper');
const dataHelper         = require('../../../support/data-helper');
const createApplication  = require('../../../../server/models/db/create-application');

describe('createApplication', function() {
  beforeEach(function(done) {
    dbHelper
      .clearAll()
      .then(() => { done(); })
      .catch(done);
  });

  it('inserts the application into the database', function(done) {
    let data = dataHelper.fakeRecords();

    createApplication(data)
      .then((records) => {
        assert.equal(records.application.id, data.application.id);
        assert.equal(records.application.first_name, data.application.first_name);
        assert.equal(records.application.middle_name, data.application.middle_name);
        assert.equal(records.application.last_name, data.application.last_name);
        assert.equal(
          records.application.date_of_birth.toString(),
          data.application.date_of_birth.toString()
        );
        assert.equal(records.application.hair_color, data.application.hair_color);
        assert.equal(records.application.eye_color, data.application.eye_color);
      })
      .then(done)
      .catch(done);
  });

  it('inserts the addreses into the database', function(done) {
    let data = dataHelper.fakeRecords();
    createApplication(data)
      .then((records) => {
        let recordAddresses = records.addresses;

        assert(recordAddresses[0].id);
        assert.equal(recordAddresses[0].application_id, data.application.id);
        assert.equal(recordAddresses[0].type, data.addresses[0].type);
        assert.equal(recordAddresses[0].street_address_1, data.addresses[0].street_address_1);
        assert.equal(recordAddresses[0].street_address_2, data.addresses[0].street_address_2);
        assert.equal(recordAddresses[0].city, data.addresses[0].city);
        assert.equal(recordAddresses[0].state, data.addresses[0].state);
        assert.equal(recordAddresses[0].zip, data.addresses[0].zip);

        assert(recordAddresses[1].id);
        assert.equal(recordAddresses[1].application_id, data.application.id);
        assert.equal(recordAddresses[1].type, data.addresses[1].type);
        assert.equal(recordAddresses[1].street_address_1, data.addresses[1].street_address_1);
        assert.equal(recordAddresses[1].street_address_2, data.addresses[1].street_address_2);
        assert.equal(recordAddresses[1].city, data.addresses[1].city);
        assert.equal(recordAddresses[1].state, data.addresses[1].state);
        assert.equal(recordAddresses[1].zip, data.addresses[1].zip);
      })
      .then(done)
      .catch(done);
  });

  it('inserts the email', function(done) {
    let data = dataHelper.fakeRecords();
    createApplication(data)
      .then((records) => {
        assert(records.emails[0].id);
        assert.equal(records.emails[0].application_id, data.application.id);
        assert.equal(records.emails[0].address, data.emails[0].address);
      })
      .then(done)
      .catch(done);
  });

  it('inserts the phone number', function(done) {
    let data = dataHelper.fakeRecords();
    createApplication(data)
      .then((records) => {
        assert(records.phone_numbers[0].id);
        assert.equal(records.phone_numbers[0].application_id, data.application.id);
        assert.equal(records.phone_numbers[0].number, data.phone_numbers[0].numbers);
      })
      .then(done)
      .catch(done);
  });
});

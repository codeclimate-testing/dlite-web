'use strict';

const assert             = require('assert');

const env                = require('../../../support/env');
const dbHelper           = require('../../../support/db-helper');
const dataHelper         = require('../../../support/data-helper');
const createApplication  = require('../../../../server/models/db/create-application');
const getApplication     = require('../../../../server/models/db/get-application');

describe('getApplication', function() {
  let application;

  beforeEach(function(done) {
    dbHelper
      .clearAll()
      .then(() => { done(); })
      .catch(done);
  });

  it('returned promise receives undefined when nothing is found', function(done) {
    getApplication('not-here-yo')
      .then((record) => {
        assert.equal(record, undefined);
        done();
      })
      .catch(done);
  });

  describe('when there is a record matching the id', function() {
    let data;

    beforeEach(function(done) {
      data = dataHelper.fakeRecords();
      createApplication(data)
        .then(() => { done(); })
        .catch(done);
    });

    it('returns the application base record', function(done) {
      getApplication(data.application.id)
        .then((records) => {
          assert.equal(records.application.id, data.application.id);
          assert.equal(records.application.first_name, data.application.first_name);
          assert.equal(records.application.middle_name, data.application.middle_name);
          assert.equal(records.application.last_name, data.application.last_name);
          assert.equal(records.application.date_of_birth.toString(), data.application.date_of_birth.toString());
          assert.equal(records.application.hair_color, data.application.hair_color);
          assert.equal(records.application.eye_color, data.application.eye_color);
          done();
        })
        .catch(done);
    });

    it('returns the addresses', function(done) {
      getApplication(data.application.id)
        .then((records) => {
          assert(records.addresses[0].id);
          assert.equal(records.addresses[0].application_id, data.application.id);
          assert.equal(records.addresses[0].street_address_1, data.addresses[0].street_address_1);
          assert(records.addresses[1].id);
          assert.equal(records.addresses[1].application_id, data.application.id);
          assert.equal(records.addresses[1].street_address_1, data.addresses[1].street_address_1);
          done();
        })
        .catch(done);
    });

    it('returns the email', function(done) {
      getApplication(data.application.id)
        .then((records) => {
          assert(records.emails[0].id);
          assert.equal(records.emails[0].application_id, data.application.id);
          assert.equal(records.emails[0].address, data.emails[0].address);
          done();
        })
        .catch(done);
    });

    it('returns the phone_numbers', function(done) {
      getApplication(data.application.id)
        .then((records) => {
          assert(records.phone_numbers[0].id);
          assert.equal(records.phone_numbers[0].application_id, data.application.id);
          assert.equal(records.phone_numbers[0].address, data.phone_numbers[0].number);
          done();
        })
        .catch(done);
    });
  });
});

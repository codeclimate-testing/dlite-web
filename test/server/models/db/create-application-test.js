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
        assert.equal(records.application.suffix_name, data.application.suffix_name);
        assert.equal(
          records.application.date_of_birth.toString(),
          data.application.date_of_birth.toString()
        );
        assert.equal(records.application.hair_color, data.application.hair_color);
        assert.equal(records.application.eye_color, data.application.eye_color);
        assert.equal(records.application.height_feet, data.application.height_feet);
        assert.equal(records.application.height_inches, data.application.height_inches);
        assert.equal(records.application.weight, data.application.weight);
        assert.equal(records.application.sex, data.application.sex);
        assert.equal(records.application.social_security_number, data.application.social_security_number);

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
        assert.equal(records.phone_numbers[0].number, data.phone_numbers[0].number);
      })
      .then(done)
      .catch(done);
  });

  it('inserts the organ donations', function(done){
    let data = dataHelper.fakeRecords();
    createApplication(data)
      .then((records) => {
        assert(records.organ_donations.id);
        assert.equal(records.organ_donations.application_id, data.application.id);
        assert.equal(records.organ_donations.donating_organs, data.organ_donations[0].donating_organs);
        assert.equal(records.organ_donations.donating_money, data.organ_donations[0].donating_money);
      })
      .then(done)
      .catch(done);
  });

  it('inserts card histories', function(done) {
    let data = dataHelper.fakeRecords();
    createApplication(data)
      .then((records) => {
        assert(records.card_histories[0].id);
        assert.equal(records.card_histories[0].application_id, data.application.id);
        assert.equal(records.card_histories[0].number, data.card_histories[0].number);
        assert.equal(records.card_histories[0].issuing_entity, data.card_histories[0].issuing_entity);
        assert.equal(records.card_histories[0].date_description, data.card_histories[0].date_description);
      })
      .then(done)
      .catch(done);
  });

  it('inserts previous names', function(done) {
    let data = dataHelper.fakeRecords();
    createApplication(data)
      .then((records) => {
        assert(records.previous_names[0].id);
        assert.equal(records.previous_names[0].application_id, data.application.id);
        assert.equal(records.previous_names[1].application_id, data.application.id);
        assert.equal(records.previous_names[2].application_id, data.application.id);
        assert.equal(records.previous_names[0].name, data.previous_names[0].name);
        assert.equal(records.previous_names[1].name, data.previous_names[1].name);
        assert.equal(records.previous_names[2].name, data.previous_names[2].name);
      })
      .then(done)
      .catch(done);
  });

  it('inserts medical histories', function(done) {
    let data = dataHelper.fakeRecords();
    createApplication(data)
      .then((records) => {
        assert(records.medical_histories[0].id);
        assert.equal(records.medical_histories[0].application_id, data.application.id);
        assert.equal(records.medical_histories[0].description, data.medical_histories[0].description);
      })
      .then(done)
      .catch(done);
  });

  it('inserts license issues', function(done) {
    let data = dataHelper.fakeRecords();
    createApplication(data)
      .then((records) => {
        assert(records.license_issues[0].id);
        assert.equal(records.license_issues[0].application_id, data.application.id);
        assert.equal(records.license_issues[0].description, data.license_issues[0].description);
        assert.equal(records.license_issues[0].date_description, data.license_issues[0].date_description);
      })
      .then(done)
      .catch(done);
  });

  it('inserts veterans info', function(done) {
    let data = dataHelper.fakeRecords();
    createApplication(data)
      .then((records) => {
        assert(records.veterans_info.id);
        assert.equal(records.veterans_info.application_id, data.application.id);
        assert.equal(records.veterans_info.has_requested_information, data.veterans_info[0].has_requested_information);
        assert.equal(records.veterans_info.labeling, data.veterans_info[0].labeling);
      })
      .then(done)
      .catch(done);
  });

  it('inserts voting registrations', function(done) {
    let data = dataHelper.fakeRecords();
    createApplication(data)
      .then((records) => {
        assert(records.voting_registrations.id);
        assert.equal(records.voting_registrations.application_id, data.application.id);

        assert.equal(records.voting_registrations.is_citizen, data.voting_registrations[0].is_citizen);
        assert.equal(records.voting_registrations.is_eligible, data.voting_registrations[0].is_eligible);
        assert.equal(records.voting_registrations.type, data.voting_registrations[0].type);
        assert.equal(records.voting_registrations.opted_out, data.voting_registrations[0].opted_out);
        assert.equal(records.voting_registrations.is_preregistering, data.voting_registrations[0].is_preregistering);
        assert.equal(records.voting_registrations.party, data.voting_registrations[0].party);
        assert.equal(records.voting_registrations.language, data.voting_registrations[0].language);
        assert.equal(records.voting_registrations.vote_by_mail, data.voting_registrations[0].vote_by_mail);
        assert.equal(records.voting_registrations.should_contact, data.voting_registrations[0].should_contact);
      })
      .then(done)
      .catch(done);
  });

});

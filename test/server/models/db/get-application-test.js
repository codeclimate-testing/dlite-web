'use strict';

const assert             = require('assert');

const env                = require('../../../support/env');
const dbHelper           = require('../../../support/db-helper');
const dataHelper         = require('../../../support/data-helper');
const post               = require('../../../../server/models/db/post-application');
const getApplication     = require('../../../../server/models/db/get-application');

describe('getApplication by app ID', function() {
  let application;

  beforeEach(function(done) {
    dbHelper
    .clearAll()
    .then(() => { done(); })
    .catch(done);
  });

  after((done) => {
    dbHelper
      .clearAll()
      .then(() => { done(); })
      .catch(() => { done(); });
  });

  it('returned promise receives undefined when nothing is found', function(done) {
    getApplication.byId('not-here-yo')
    .then((record) => {
      assert.equal(record, undefined);
      done();
    })
    .catch(done);
  });

  describe('#CDL data', function() {
    let data;
    let clientData = dataHelper.CDLData.clientData();
    beforeEach(function(done) {
      data = dataHelper.fakeRecords(clientData);
      post.saveApplication(data)
      .then(() => { done(); })
      .catch(done);
    })

    it('return the card options', function(done){
      getApplication.byId(data.application.id)
      .then((records) => {
        assert(records.card_options[0].id);
        assert(records.card_options[1].id);
        assert.equal(records.card_options[0].card_id, data.card_options[0].card_id);
        assert.equal(records.card_options[1].card_id, data.card_options[1].card_id);
        assert.equal(records.card_options[0].option_type, data.card_options[0].option_type);
        assert.equal(records.card_options[1].option_type, data.card_options[1].option_type);
        assert.equal(records.card_options[0].option_value, data.card_options[0].option_value);
        assert.equal(records.card_options[1].option_value, data.card_options[1].option_value);
      })
      .then(done)
      .catch(done);
    });

    it('returns the license classes', function(done) {
      getApplication.byId(data.application.id)
      .then( records => {
        assert.equal(records.license_classes[0].type, data.license_classes[0].type);
        assert.equal(records.license_classes[1].type, data.license_classes[1].type)
      })
      .then(done)
      .catch(done);
    });

    it('returns card histories', function(done) {
      getApplication.byId(data.application.id)
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

    it('returns veterans info', function(done) {
      getApplication.byId(data.application.id)
      .then((records) => {
        assert(records.veterans_info.id);
        assert.equal(records.veterans_info.application_id, data.application.id);
        assert.equal(records.veterans_info.has_requested_information, data.veterans_info.has_requested_information);
        assert.equal(records.veterans_info.labeling, data.veterans_info.labeling);
        assert.equal(records.veterans_info.previously_designated.toString(), data.veterans_info.previously_designated.toString());
        assert.equal(records.veterans_info.military_waiver, data.veterans_info.military_waiver);
      })
      .then(done)
      .catch(done);
    });
  });

  describe('IDDL data when there is a record matching the id', function() {
    let data;

    beforeEach(function(done) {
      data = dataHelper.fakeIDDLRecords();
      post.saveApplication(data)
      .then(() => { done(); })
      .catch(done);
    });

    it('returns the application base record', function(done) {
      getApplication.byId(data.application.id)
      .then((records) => {
        assert.equal(records.application.id, data.application.id);
        assert.equal(records.application.first_name, data.application.first_name);
        assert.equal(records.application.middle_name, data.application.middle_name);
        assert.equal(records.application.last_name, data.application.last_name);
        assert.equal(records.application.suffix_name, data.application.suffix_name);
        assert.equal(records.application.date_of_birth.toString(), data.application.date_of_birth.toString());
        assert.equal(records.application.hair_color, data.application.hair_color);
        assert.equal(records.application.eye_color, data.application.eye_color);
        assert.equal(records.application.height_feet, data.application.height_feet);
        assert.equal(records.application.height_inches, data.application.height_inches);
        assert.equal(records.application.weight, data.application.weight);
        assert.equal(records.application.sex, data.application.sex);
        assert.equal(records.application.social_security_number, data.application.social_security_number);

        done();
      })
      .catch(done);
    });

    it('returns the addresses', function(done) {
      getApplication.byId(data.application.id)
      .then((records) => {
        assert(records.addresses[0].id);
        assert.equal(records.addresses[1].application_id, data.application.id);
        assert.equal(records.addresses[1].street_address_1, data.addresses[0].street_address_1);
        assert(records.addresses[1].id);
        assert.equal(records.addresses[0].application_id, data.application.id);
        assert.equal(records.addresses[0].street_address_1, data.addresses[1].street_address_1);
        done();
      })
      .catch(done);
    });

    it('returns the cards', function(done) {
      getApplication.byId(data.application.id)
      .then((records) => {
        assert(records.cards[0].id);
        assert(records.cards[1].id);
        assert.equal(records.cards[0].application_id, data.application.id);
        assert.equal(records.cards[1].application_id, data.application.id);
        assert.equal(records.cards[1].type, data.cards[0].type);
        assert.equal(records.cards[0].type, data.cards[1].type);
        done();
      })
      .catch(done);

    });

    it('return the card options', function(done){
      getApplication.byId(data.application.id)
      .then((records) => {
        assert(records.card_options[0].id);
        assert(records.card_options[1].id);
        assert(records.card_options[2].id);
        assert.equal(records.card_options[0].card_id, data.card_options[0].card_id);
        assert.equal(records.card_options[1].card_id, data.card_options[1].card_id);
        assert.equal(records.card_options[2].card_id, data.card_options[2].card_id);
        assert.equal(records.card_options[0].option_type, data.card_options[0].option_type);
        assert.equal(records.card_options[1].option_type, data.card_options[1].option_type);
        assert.equal(records.card_options[2].option_type, data.card_options[2].option_type);
        assert.equal(records.card_options[0].option_value, data.card_options[0].option_value);
        assert.equal(records.card_options[1].option_value, data.card_options[1].option_value);
        assert.equal(records.card_options[2].option_value, data.card_options[2].option_value);
      })
      .then(done)
      .catch(done);
    });

    it('returns the license classes', function(done) {
      getApplication.byId(data.application.id)
      .then( records => {
        assert.equal(records.license_classes[0].type, data.license_classes[0].type);
        assert.equal(records.license_classes[1].type, data.license_classes[1].type)
      })
      .then(done)
      .catch(done);
    });

    it('returns the email', function(done) {
      getApplication.byId(data.application.id)
      .then((records) => {
        assert(records.emails.id);
        assert.equal(records.emails.application_id, data.application.id);
        assert.equal(records.emails.address, data.emails.address);
        done();
      })
      .catch(done);
    });

    it('returns the phone_numbers', function(done) {
      getApplication.byId(data.application.id)
      .then((records) => {
        assert(records.phone_numbers.id);
        assert.equal(records.phone_numbers.application_id, data.application.id);
        assert.equal(records.phone_numbers.number, data.phone_numbers.number);
        done();
      })
      .catch(done);
    });

    it('returns the organ donations', function(done){
      getApplication.byId(data.application.id)
      .then((records) => {
        assert(records.organ_donations.id);
        assert.equal(records.organ_donations.application_id, data.application.id);
        assert.equal(records.organ_donations.donating_organs, data.organ_donations.donating_organs);
        assert.equal(records.organ_donations.donating_money, data.organ_donations.donating_money);
      })
      .then(done)
      .catch(done);
    });

    it('returns card histories', function(done) {
      getApplication.byId(data.application.id)
      .then((records) => {
        assert(records.card_histories[0].id);
        assert.equal(records.card_histories[0].application_id, data.application.id);
        assert.equal(records.card_histories[1].number, data.card_histories[0].number);
        assert.equal(records.card_histories[1].issuing_entity, data.card_histories[0].issuing_entity);
        assert.equal(records.card_histories[1].date_description, data.card_histories[0].date_description);
      })
      .then(done)
      .catch(done);
    });

    it('returns previous names', function(done) {
      getApplication.byId(data.application.id)
      .then((records) => {
        assert(records.previous_names[0].id);
        assert.equal(records.previous_names[0].application_id, data.application.id);
        assert.equal(records.previous_names[1].application_id, data.application.id);
        assert.equal(records.previous_names[2].application_id, data.application.id);
        assert.equal(records.previous_names[2].name, data.previous_names[0].name);
        assert.equal(records.previous_names[1].name, data.previous_names[1].name);
        assert.equal(records.previous_names[0].name, data.previous_names[2].name);
      })
      .then(done)
      .catch(done);
    });

    it('returns medical histories', function(done) {
      getApplication.byId(data.application.id)
      .then((records) => {
        assert(records.medical_histories.id);
        assert.equal(records.medical_histories.application_id, data.application.id);
        assert.equal(records.medical_histories.description, data.medical_histories.description);
      })
      .then(done)
      .catch(done);
    });

    it('returns license issues', function(done) {
      getApplication.byId(data.application.id)
      .then((records) => {
        assert(records.license_issues.id);
        assert.equal(records.license_issues.application_id, data.application.id);
        assert.equal(records.license_issues.description, data.license_issues.description);
        assert.equal(records.license_issues.date_description, data.license_issues.date_description);
      })
      .then(done)
      .catch(done);
    });

    it('returns veterans info', function(done) {
      getApplication.byId(data.application.id)
      .then((records) => {
        assert(records.veterans_info.id);
        assert.equal(records.veterans_info.application_id, data.application.id);
        assert.equal(records.veterans_info.has_requested_information, data.veterans_info.has_requested_information);
        assert.equal(records.veterans_info.labeling, data.veterans_info.labeling);
        assert.equal(records.veterans_info.previously_designated.toString(), data.veterans_info.previously_designated.toString());
      })
      .then(done)
      .catch(done);
    });

    it('returns voting registrations', function(done) {
      getApplication.byId(data.application.id)
      .then((records) => {
        assert(records.voting_registrations.id);
        assert.equal(records.voting_registrations.application_id, data.application.id);

        assert.equal(records.voting_registrations.is_citizen, data.voting_registrations.is_citizen);
        assert.equal(records.voting_registrations.is_eligible, data.voting_registrations.is_eligible);
        assert.equal(records.voting_registrations.type, data.voting_registrations.type);
        assert.equal(records.voting_registrations.opted_out, data.voting_registrations.opted_out);
        assert.equal(records.voting_registrations.party, data.voting_registrations.party);
        assert.equal(records.voting_registrations.language, data.voting_registrations.language);
        assert.equal(records.voting_registrations.vote_by_mail, data.voting_registrations.vote_by_mail);
        assert.equal(records.voting_registrations.should_contact, data.voting_registrations.should_contact);
      })
      .then(done)
      .catch(done);
    });

  });
});


describe('getApplication by user id', function() {
  let application;

  beforeEach(function(done) {
    dbHelper
    .clearAll()
    .then(() => { done(); })
    .catch(done);
  });

  it('returned promise receives placeholder when user_id is not found in applications table', function(done) {
    getApplication.byUserId('not-here-yo3019')
    .then((record) => {
      assert.deepEqual(record, {
        applications: [],
        cards: [],
        card_options: []
      });
      done();
    })
    .catch(done);
  });

  it('returns applications array and blank cards array when user_id is found in applications table but there are no associated cards', function(done) {
    post.saveApplication({
      application: {
        user_id: 'isHere',
        id: 'someID'
      }
    })
    .then(() => {
      getApplication.byUserId(('isHere'))
      .then((records) => {
        assert.equal(records.applications.length, 1);
        assert.equal(records.applications[0].user_id, 'isHere');
        assert.equal(records.cards.length, 0);
        assert.equal(records.card_options.length, 0);
      })
    })
    .then(done)
    .catch(done);
  });

  describe('IDDL data', function() {
    let data;

    beforeEach(function(done) {
      data = dataHelper.fakeIDDLRecords();
      post.saveApplication(data)
      .then(() => { done(); })
      .catch(done);
    });

    it('returns the application base record', function(done) {
      getApplication.byUserId(data.application.user_id)
      .then((records) => {
        assert.equal(records.applications[0].id, data.application.id);
        assert.equal(records.applications[0].first_name, data.application.first_name);
        assert.equal(records.applications[0].middle_name, data.application.middle_name);
        assert.equal(records.applications[0].last_name, data.application.last_name);
        assert.equal(records.applications[0].suffix_name, data.application.suffix_name);
        assert.equal(records.applications[0].date_of_birth.toString(), data.application.date_of_birth.toString());
        assert.equal(records.applications[0].hair_color, data.application.hair_color);
        assert.equal(records.applications[0].eye_color, data.application.eye_color);
        assert.equal(records.applications[0].height_feet, data.application.height_feet);
        assert.equal(records.applications[0].height_inches, data.application.height_inches);
        assert.equal(records.applications[0].weight, data.application.weight);
        assert.equal(records.applications[0].sex, data.application.sex);
        assert.equal(records.applications[0].social_security_number, data.application.social_security_number);

        done();
      })
      .catch(done);
    });

    it('returns the cards', function(done) {
      getApplication.byUserId(data.application.user_id)
      .then((records) => {
        assert(records.cards[0].id);
        assert(records.cards[1].id);
        assert.equal(records.cards[0].application_id, data.application.id);
        assert.equal(records.cards[1].application_id, data.application.id);
        assert.equal(records.cards[0].application_id, data.application.id);
        assert.equal(records.cards[1].application_id, data.application.id);
        assert.equal(records.cards[1].type, data.cards[0].type);
        assert.equal(records.cards[0].type, data.cards[1].type);
        done();
      })
      .catch(done);

    });

    it('return the card options', function(done){
      getApplication.byUserId(data.application.user_id)
      .then((records) => {
        assert(records.card_options[0].id);
        assert(records.card_options[1].id);
        assert(records.card_options[2].id);
        assert.equal(records.card_options[0].card_id, data.card_options[0].card_id);
        assert.equal(records.card_options[1].card_id, data.card_options[1].card_id);
        assert.equal(records.card_options[2].card_id, data.card_options[2].card_id);
        assert.equal(records.card_options[0].option_type, data.card_options[0].option_type);
        assert.equal(records.card_options[1].option_type, data.card_options[1].option_type);
        assert.equal(records.card_options[2].option_type, data.card_options[2].option_type);
        assert.equal(records.card_options[0].option_value, data.card_options[0].option_value);
        assert.equal(records.card_options[1].option_value, data.card_options[1].option_value);
        assert.equal(records.card_options[2].option_value, data.card_options[2].option_value);
      })
      .then(done)
      .catch(done);
    });
  })


});
'use strict';

const assert                = require('assert');

const env                   = require('../../../support/env');
const dbHelper              = require('../../../support/db-helper');
const dataHelper            = require('../../../support/data-helper');
const ctrl                  = require('../../../../server/db/models/post-application');

describe('Post Application Data', () => {

  beforeEach(function(done) {
    dbHelper
      .clearAll()
      .then(() => { done(); })
      .catch(done);
  });

  describe('application table', () => {

    let data = dataHelper.fakeRecords().application;

    it('inserts new record', (done) => {
      ctrl.insertApplication(data)
        .then((records) => {
          assert.equal(records[0].id, data.id);
          assert.equal(records[0].first_name, data.first_name);
          assert.equal(records[0].middle_name, data.middle_name);
          assert.equal(records[0].last_name, data.last_name);
          assert.equal(records[0].suffix_name, data.suffix_name);
          assert.equal(records[0].date_of_birth.toString(),data.date_of_birth.toString());
          assert.equal(records[0].hair_color, data.hair_color);
          assert.equal(records[0].eye_color, data.eye_color);
          assert.equal(records[0].height_feet, data.height_feet);
          assert.equal(records[0].height_inches, data.height_inches);
          assert.equal(records[0].weight, data.weight);
          assert.equal(records[0].sex, data.sex);
          assert.equal(records[0].social_security_number, data.social_security_number);
        })
        .then(done)
        .catch(done);
    });

    it('updates existing record', (done) => {
      data.first_name                 = 'NewJohn';
      data.middle_name                = 'Y';
      data.last_name                  = 'NewSmith';
      data.suffix_name                = 'IV'
      data.date_of_birth              = new Date('12/12/2099');
      data.hair_color                 = 'Brown';
      data.eye_color                  = 'Ruby';
      data.height_feet                = 3;
      data.height_inches              = 11;
      data.weight                     = 180;
      data.sex                        = 'Female';
      data.social_security_number     = '323-323-2222';
      ctrl.insertApplication(data)
        .then((records) => {
          assert.equal(records[0].id, data.id);
          assert.equal(records[0].first_name, 'NewJohn');
          assert.equal(records[0].middle_name, 'Y');
          assert.equal(records[0].last_name, 'NewSmith');
          assert.equal(records[0].suffix_name, 'IV');
          assert.equal(records[0].date_of_birth.toString(), new Date('12/12/2099').toString());
          assert.equal(records[0].hair_color, 'Brown');
          assert.equal(records[0].eye_color, 'Ruby');
          assert.equal(records[0].height_feet, 3);
          assert.equal(records[0].height_inches, 11);
          assert.equal(records[0].weight, 180);
          assert.equal(records[0].sex, 'Female');
          assert.equal(records[0].social_security_number, '323-323-2222');
        })
        .then(done)
        .catch(done);
    });

  });

  describe('addresses table', () => {

    let data            = dataHelper.fakeRecords();
    let application_id  = data.application.id;
    data                = data.addresses;

    it('inserts new records', (done) => {

      ctrl.insertAddresses(data, application_id)
        .then((records) => {
          assert(records[0].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[0].type, data[0].type);
          assert.equal(records[0].street_address_1, data[0].street_address_1);
          assert.equal(records[0].street_address_2, data[0].street_address_2);
          assert.equal(records[0].city, data[0].city);
          assert.equal(records[0].state, data[0].state);
          assert.equal(records[0].zip, data[0].zip);

          assert(records[1].id);
          assert.equal(records[1].application_id, application_id);
          assert.equal(records[1].type, data[1].type);
          assert.equal(records[1].street_address_1, data[1].street_address_1);
          assert.equal(records[1].street_address_2, data[1].street_address_2);
          assert.equal(records[1].city, data[1].city);
          assert.equal(records[1].state, data[1].state);
          assert.equal(records[1].zip, data[1].zip);
        })
        .then(done)
        .catch(done);
    });

    it('updates existing records', (done) => {
      data[0].type                = 'home';
      data[0].street_address_1    = '333 Happy St.';
      data[0].street_address_2    = 'Awesome Apt.';
      data[0].city                = 'Unicorn';
      data[0].state               = 'AZ';
      data[0].zip                 = '101010';

      data[1].type                = 'mailing';
      data[1].street_address_1    = '111 Unicorn St.';
      data[1].street_address_2    = 'Happy Living Apt.';
      data[1].city                = 'Los Easy';
      data[1].state               = 'ZA';
      data[1].zip                 = '111000';

      ctrl.insertAddresses(data, application_id)
        .then((records) => {
          assert(records[0].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[0].type, data[0].type);
          assert.equal(records[0].street_address_1, data[0].street_address_1);
          assert.equal(records[0].street_address_2, data[0].street_address_2);
          assert.equal(records[0].city, data[0].city);
          assert.equal(records[0].state, data[0].state);
          assert.equal(records[0].zip, data[0].zip);

          assert(records[1].id);
          assert.equal(records[1].application_id, application_id);
          assert.equal(records[1].type, data[1].type);
          assert.equal(records[1].street_address_1, data[1].street_address_1);
          assert.equal(records[1].street_address_2, data[1].street_address_2);
          assert.equal(records[1].city, data[1].city);
          assert.equal(records[1].state, data[1].state);
          assert.equal(records[1].zip, data[1].zip);
        })
        .then(done)
        .catch(done);
    });
  });

  describe('previous names table', () => {

    let data            = dataHelper.fakeRecords();
    let application_id  = data.application.id;
    data                = data.previous_names;

    it('inserts new records', (done) => {
      ctrl.insertPreviousNames(data, application_id)
      .then((records) => {
        assert(records[0].id);
        assert.equal(records[0].application_id, application_id);
        assert.equal(records[1].application_id, application_id);
        assert.equal(records[2].application_id, application_id);
        assert.equal(records[0].name, data[0].name);
        assert.equal(records[1].name, data[1].name);
        assert.equal(records[2].name, data[2].name);
      })
      .then(done)
      .catch(done);
    });

    it('updates existing records', (done) => {

      data[0].name = 'AA11';
      data[1].name = 'AB12';
      data[2].name = 'BA21';
      ctrl.insertPreviousNames(data, application_id)
      .then((records) => {
        assert(records[0].id);
        assert.equal(records[0].application_id, application_id);
        assert.equal(records[1].application_id, application_id);
        assert.equal(records[2].application_id, application_id);
        assert.equal(records[0].name, 'AA11');
        assert.equal(records[1].name, 'AB12');
        assert.equal(records[2].name, 'BA21');
      })
      .then(done)
      .catch(done);
    });
  });

  describe('cards table', () => {
    let data            = dataHelper.fakeRecords();
    let application_id  = data.application.id;
    data                = data.cards;

    it('insert new records', (done) => {

      ctrl.insertCards(data, application_id)
        .then((records) => {
          assert(records[0].id);
          assert(records[1].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[1].application_id, application_id);
          assert.equal(records[0].type, data[0].type);
          assert.equal(records[1].type, data[1].type);
        })
        .then(done)
        .catch(done);
    });

    it('updates existing records', (done) => {
      data[0].type = '123';
      data[1].type = '321';
      ctrl.insertCards(data, application_id)
        .then((records) => {
          assert(records[0].id);
          assert(records[1].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[1].application_id, application_id);
          assert.equal(records[0].type, '123');
          assert.equal(records[1].type, '321');
        })
        .then(done)
        .catch(done);
    });
  });

  describe('card_options table', () => {
    let data = [{ card_id: 123, option_type: 'action', option_value: 'renew' },
                { card_id: 123, option_type: 'modification', option_value: 'reduced-fee' },
                { card_id: 124, option_type: 'action', option_value: 'renew' },
                { card_id: 124, option_type: 'modification', option_value: 'real-id' },
                { card_id: 124, option_type: 'modification', option_value: 'senior-id' }];

    it('inserts new records', (done) => {
      ctrl.insertCardOptions(data)
      .then((records) => {

        assert(records[0].id);
        assert.equal(records[0].card_id, data[0].card_id);
        assert.equal(records[0].option_type, data[0].option_type);
        assert.equal(records[0].option_value, data[0].option_value);

        assert(records[1].id);
        assert.equal(records[1].card_id, data[1].card_id);
        assert.equal(records[1].option_type, data[1].option_type);
        assert.equal(records[1].option_value, data[1].option_value);

        assert(records[2].id);
        assert.equal(records[2].card_id, data[2].card_id);
        assert.equal(records[2].option_type, data[2].option_type);
        assert.equal(records[2].option_value, data[2].option_value);

        assert(records[3].id);
        assert.equal(records[3].card_id, data[3].card_id);
        assert.equal(records[3].option_type, data[3].option_type);
        assert.equal(records[3].option_value, data[3].option_value);

        assert(records[4].id);
        assert.equal(records[4].card_id, data[4].card_id);
        assert.equal(records[4].option_type, data[4].option_type);
        assert.equal(records[4].option_value, data[4].option_value);

      })
      .then(done)
      .catch(done);
    });

    it('updates existing records', (done) => {
      let data = [{ card_id: 123, option_type: 'action', option_value: 'update' },
                  { card_id: 123, option_type: 'modification', option_value: 'senior-fee' },
                  { card_id: 124, option_type: 'action', option_value: 'replace' },
                  { card_id: 124, option_type: 'modification', option_value: 'reduced-fee' },
                  { card_id: 124, option_type: 'modification', option_value: 'reduced-fee-no-form' }];

      ctrl.insertCardOptions(data)
      .then((records) => {

        assert(records[0].id);
        assert.equal(records[0].card_id, data[0].card_id);
        assert.equal(records[0].option_type, data[0].option_type);
        assert.equal(records[0].option_value, data[0].option_value);

        assert(records[1].id);
        assert.equal(records[1].card_id, data[1].card_id);
        assert.equal(records[1].option_type, data[1].option_type);
        assert.equal(records[1].option_value, data[1].option_value);

        assert(records[2].id);
        assert.equal(records[2].card_id, data[2].card_id);
        assert.equal(records[2].option_type, data[2].option_type);
        assert.equal(records[2].option_value, data[2].option_value);

        assert(records[3].id);
        assert.equal(records[3].card_id, data[3].card_id);
        assert.equal(records[3].option_type, data[3].option_type);
        assert.equal(records[3].option_value, data[3].option_value);

        assert(records[4].id);
        assert.equal(records[4].card_id, data[4].card_id);
        assert.equal(records[4].option_type, data[4].option_type);
        assert.equal(records[4].option_value, data[4].option_value);

      })
      .then(done)
      .catch(done);
    });

  });

  describe('license classes table', () => {
    let data = [{card_id: 123, type: 'firefighter'},
                {card_id: 124, type:' classA'}];

    it('inserts new records', (done) => {
      ctrl.insertLicenseClasses(data)
        .then((records) => {
          assert(records[0].id);
          assert.equal(records[0].card_id, data[0].card_id);
          assert.equal(records[0].type, data[0].type);

          assert(records[1].id);
          assert.equal(records[1].card_id, data[1].card_id);
          assert.equal(records[1].type, data[1].type);
        })
        .then(done)
        .catch(done);
    });

    it('updates existing records', (done) => {
      let data = [{card_id: 123, type: 'ambulance'},
                  {card_id: 124, type:' classC'}];

      ctrl.insertLicenseClasses(data)
        .then((records) => {
          assert(records[0].id);
          assert.equal(records[0].card_id, data[0].card_id);
          assert.equal(records[0].type, data[0].type);

          assert(records[1].id);
          assert.equal(records[1].card_id, data[1].card_id);
          assert.equal(records[1].type, data[1].type);
        })
        .then(done)
        .catch(done);
    });
  });

  describe('emails table', () => {
    let data            = dataHelper.fakeRecords();
    let application_id  = data.application.id;
    data                = data.emails;

    it('inserts new records', (done) => {
      ctrl.insertOneToOne('emails', data, application_id)
        .then(((records) => {
          assert(records[0].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[0].address, data.address);
        }))
        .then(done)
        .catch(done);
    });

    it('updates existing records', (done) => {
      data.address = 'mynewemail@address.gov';
      ctrl.insertOneToOne('emails', data, application_id)
        .then((records) => {
          assert(records[0].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[0].address, data.address);
        })
        .then(done)
        .catch(done);
    });
  });

  describe('phone_numbers table', () => {
    let data            = dataHelper.fakeRecords();
    let application_id  = data.application.id;
    data                = data.phone_numbers;

    it('inserts new records', (done) => {
      ctrl.insertOneToOne('phone_numbers', data, application_id)
        .then(((records) => {
          assert(records[0].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[0].number, data.number);
        }))
        .then(done)
        .catch(done);
    });

    it('updates existing records', (done) => {
      data.number = '(101) 111-9999';
      ctrl.insertOneToOne('phone_numbers', data, application_id)
        .then((records) => {
          assert(records[0].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[0].number, data.number);
        })
        .then(done)
        .catch(done);
    });
  });

  describe('organ_donations table', () => {
    let data            = dataHelper.fakeRecords();
    let application_id  = data.application.id;
    data                = data.organ_donations;

    it('inserts new records', (done) => {
      ctrl.insertOneToOne('organ_donations', data, application_id)
        .then(((records) => {
          assert(records[0].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[0].donating_organs, data.donating_organs);
          assert.equal(records[0].donating_money, data.donating_money);
        }))
        .then(done)
        .catch(done);
    });

    it('updates existing records', (done) => {
      data.donating_organs  = false;
      data.donating_money   = true;
      ctrl.insertOneToOne('organ_donations', data, application_id)
        .then((records) => {
          assert(records[0].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[0].donating_organs, data.donating_organs);
          assert.equal(records[0].donating_money, data.donating_money);
        })
        .then(done)
        .catch(done);
    });
  });

  describe('card_histories table', () => {
    let data            = dataHelper.fakeRecords();
    let application_id  = data.application.id;
    data                = data.card_histories;

    it('inserts new records', (done) => {
      ctrl.insertOneToOne('card_histories', data, application_id)
        .then(((records) => {
          assert(records[0].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[0].number, data.number);
          assert.equal(records[0].issuing_entity, data.issuing_entity);
          assert.equal(records[0].date_description, data.date_description);
        }))
        .then(done)
        .catch(done);
    });

    it('updates existing records', (done) => {
      data.number             = 'IDDL144'
      data.issuing_entity     = 'Umbrella Corp.';
      data.date_description   = '12/12/2012';
      ctrl.insertOneToOne('card_histories', data, application_id)
        .then((records) => {
          assert(records[0].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[0].number, data.number);
          assert.equal(records[0].issuing_entity, data.issuing_entity);
          assert.equal(records[0].date_description, data.date_description);
        })
        .then(done)
        .catch(done);
    });
  });

  describe('renewal_card table', () => {
    let data            = dataHelper.fakeRecords();
    let application_id  = data.application.id;
    data                = data.renewal_card;

    it('inserts new records', (done) => {
      ctrl.insertOneToOne('renewal_card', data, application_id)
        .then(((records) => {
          assert(records[0].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[0].number, data.number);
          assert.equal(records[0].date, data.date);
        }))
        .then(done)
        .catch(done);
    });

    it('updates existing records', (done) => {
      data.number = 'UPDATED NUMBER';
      data.date   = '12/15/2016';
      ctrl.insertOneToOne('renewal_card', data, application_id)
        .then((records) => {
          assert(records[0].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[0].number, data.number);
          assert.equal(records[0].date, data.date);
        })
        .then(done)
        .catch(done);
    });
  });

  describe('medical_histories table', () => {
    let data            = dataHelper.fakeRecords();
    let application_id  = data.application.id;
    data                = data.medical_histories;

    it('inserts new records', (done) => {
      ctrl.insertOneToOne('medical_histories', data, application_id)
        .then(((records) => {
          assert(records[0].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[0].description, data.description);
        }))
        .then(done)
        .catch(done);
    });

    it('updates existing records', (done) => {
      data.description = 'Updated medical history.'
      ctrl.insertOneToOne('medical_histories', data, application_id)
        .then((records) => {
          assert(records[0].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[0].description, data.description);
        })
        .then(done)
        .catch(done);
    });
  });

  describe('license_issues table', () => {
    let data            = dataHelper.fakeRecords();
    let application_id  = data.application.id;
    data                = data.license_issues;

    it('inserts new records', (done) => {
      ctrl.insertOneToOne('license_issues', data, application_id)
        .then(((records) => {
          assert(records[0].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[0].description, data.description);
          assert.equal(records[0].date_description, data.date_description);
        }))
        .then(done)
        .catch(done);
    });

    it('updates existing records', (done) => {
      data.description      = 'License issues description.'
      data.date_description = '18/2016'
      ctrl.insertOneToOne('license_issues', data, application_id)
        .then((records) => {
          assert(records[0].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[0].date_description, data.date_description);
        })
        .then(done)
        .catch(done);
    });
  });

  describe('veterans_info table', () => {
    let data            = dataHelper.fakeRecords();
    let application_id  = data.application.id;
    data                = data.veterans_info;

    it('inserts new records', (done) => {
      ctrl.insertOneToOne('veterans_info', data, application_id)
        .then(((records) => {
          assert(records[0].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[0].has_requested_information, data.has_requested_information);
          assert.equal(records[0].labeling, data.labeling);
          assert.equal(records[0].previously_designated, data.previously_designated);
        }))
        .then(done)
        .catch(done);
    });

    it('updates existing records', (done) => {
      data.has_requested_information  = true;
      data.labeling                   = 'remove';
      data.previously_designated      = false;
      ctrl.insertOneToOne('veterans_info', data, application_id)
        .then((records) => {
          assert(records[0].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[0].has_requested_information, data.has_requested_information);
          assert.equal(records[0].labeling, data.labeling);
          assert.equal(records[0].previously_designated, data.previously_designated);
        })
        .then(done)
        .catch(done);
    });
  });

  describe('voting_registrations table', () => {
    let data            = dataHelper.fakeRecords();
    let application_id  = data.application.id;
    data                = data.voting_registrations;

    it('inserts new records', (done) => {
      ctrl.insertOneToOne('voting_registrations', data, application_id)
        .then(((records) => {
          assert(records[0].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[0].is_citizen, data.is_citizen);
          assert.equal(records[0].is_eligible, data.is_citizen);
          assert.equal(records[0].type, data.type);
          assert.equal(records[0].opted_out, data.opted_out);
          assert.equal(records[0].is_preregistering, data.is_preregistering);
          assert.equal(records[0].party, data.party);
          assert.equal(records[0].language, data.language);
          assert.equal(records[0].vote_by_mail, data.vote_by_mail);
          assert.equal(records[0].should_contact, data.should_contact);
        }))
        .then(done)
        .catch(done);
    });

    it('updates existing records', (done) => {
      data.is_citizen         = false;
      data.is_eligible        = false;
      data.type               = 'existing';
      data.opted_out          = true;
      data.is_preregistering  = false;
      data.party              = 'Peace Party';
      data.language           = 'es';
      data.vote_by_mail       = false;
      data.should_contact     = false;
      ctrl.insertOneToOne('voting_registrations', data, application_id)
        .then((records) => {
          assert(records[0].id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[0].application_id, application_id);
          assert.equal(records[0].is_citizen, data.is_citizen);
          assert.equal(records[0].is_eligible, data.is_citizen);
          assert.equal(records[0].type, data.type);
          assert.equal(records[0].opted_out, data.opted_out);
          assert.equal(records[0].is_preregistering, data.is_preregistering);
          assert.equal(records[0].party, data.party);
          assert.equal(records[0].language, data.language);
          assert.equal(records[0].vote_by_mail, data.vote_by_mail);
          assert.equal(records[0].should_contact, data.should_contact);
        })
        .then(done)
        .catch(done);
    });
  });

  describe('all tables', () => {

    let data = dataHelper.fakeRecords();

    it('inserts a new full application', function(done) {
      ctrl.saveApplication(data)
        .then((records) => {
          //Application table
          assert.equal(records.application[0].id, data.application.id);
          assert.equal(records.application[0].first_name, data.application.first_name);
          assert.equal(records.application[0].middle_name, data.application.middle_name);
          assert.equal(records.application[0].last_name, data.application.last_name);
          assert.equal(records.application[0].suffix_name, data.application.suffix_name);
          assert.equal(records.application[0].date_of_birth.toString(), data.application.date_of_birth.toString());
          assert.equal(records.application[0].hair_color, data.application.hair_color);
          assert.equal(records.application[0].eye_color, data.application.eye_color);
          assert.equal(records.application[0].height_feet, data.application.height_feet);
          assert.equal(records.application[0].height_inches, data.application.height_inches);
          assert.equal(records.application[0].weight, data.application.weight);
          assert.equal(records.application[0].sex, data.application.sex);
          assert.equal(records.application[0].social_security_number, data.application.social_security_number);

          //Addresses table
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

          //Emails table
          assert(records.emails[0].id);
          assert.equal(records.emails[0].application_id, data.application.id);
          assert.equal(records.emails[0].address, data.emails.address);

          //Phone numbers table
          assert(records.phone_numbers[0].id);
          assert.equal(records.phone_numbers[0].application_id, data.application.id);
          assert.equal(records.phone_numbers[0].number, data.phone_numbers.number);

          //Organ donations table
          assert(records.organ_donations[0].id);
          assert.equal(records.organ_donations[0].application_id, data.application.id);
          assert.equal(records.organ_donations[0].donating_organs, data.organ_donations.donating_organs);
          assert.equal(records.organ_donations[0].donating_money, data.organ_donations.donating_money);

          //Card histories table
          assert(records.card_histories[0].id);
          assert.equal(records.card_histories[0].application_id, data.application.id);
          assert.equal(records.card_histories[0].number, data.card_histories.number);
          assert.equal(records.card_histories[0].issuing_entity, data.card_histories.issuing_entity);
          assert.equal(records.card_histories[0].date_description, data.card_histories.date_description);

          //Renewal card table
          assert(records.renewal_card[0].id);
          assert.equal(records.renewal_card[0].application_id, data.application.id);
          assert.equal(records.renewal_card[0].number, data.renewal_card.number);
          assert.equal(records.renewal_card[0].date, data.renewal_card.date);

          //Previous names table
          assert(records.previous_names[0].id);
          assert.equal(records.previous_names[0].application_id, data.application.id);
          assert.equal(records.previous_names[1].application_id, data.application.id);
          assert.equal(records.previous_names[2].application_id, data.application.id);
          assert.equal(records.previous_names[0].name, data.previous_names[0].name);
          assert.equal(records.previous_names[1].name, data.previous_names[1].name);
          assert.equal(records.previous_names[2].name, data.previous_names[2].name);

          //Medical histories table
          assert(records.medical_histories[0].id);
          assert.equal(records.medical_histories[0].application_id, data.application.id);
          assert.equal(records.medical_histories[0].description, data.medical_histories.description);

          //License issues table
          assert(records.license_issues[0].id);
          assert.equal(records.license_issues[0].application_id, data.application.id);
          assert.equal(records.license_issues[0].description, data.license_issues.description);
          assert.equal(records.license_issues[0].date_description, data.license_issues.date_description);

          //Veterans info table
          assert(records.veterans_info[0].id);
          assert.equal(records.veterans_info[0].application_id, data.application.id);
          assert.equal(records.veterans_info[0].has_requested_information, data.veterans_info.has_requested_information);
          assert.equal(records.veterans_info[0].labeling, data.veterans_info.labeling);
          assert.equal(records.veterans_info[0].previously_designated, data.veterans_info.previously_designated);

          //Voting registrations table
          assert(records.voting_registrations[0].id);
          assert.equal(records.voting_registrations[0].application_id, data.application.id);
          assert.equal(records.voting_registrations[0].is_citizen, data.voting_registrations.is_citizen);
          assert.equal(records.voting_registrations[0].is_eligible, data.voting_registrations.is_eligible);
          assert.equal(records.voting_registrations[0].type, data.voting_registrations.type);
          assert.equal(records.voting_registrations[0].opted_out, data.voting_registrations.opted_out);
          assert.equal(records.voting_registrations[0].is_preregistering, data.voting_registrations.is_preregistering);
          assert.equal(records.voting_registrations[0].party, data.voting_registrations.party);
          assert.equal(records.voting_registrations[0].language, data.voting_registrations.language);
          assert.equal(records.voting_registrations[0].vote_by_mail, data.voting_registrations.vote_by_mail);
          assert.equal(records.voting_registrations[0].should_contact, data.voting_registrations.should_contact);

          //Cards table
          assert(records.cards[0].id);
          assert(records.cards[1].id);
          assert.equal(records.cards[0].application_id, data.application.id);
          assert.equal(records.cards[1].application_id, data.application.id);
          assert.equal(records.cards[0].type, data.cards[0].type);
          assert.equal(records.cards[1].type, data.cards[1].type);

          //Card options table
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

          //License classes table
          assert.equal(records.license_classes[0].card_id, data.license_classes[0].card_id);
          assert.equal(records.license_classes[1].card_id, data.license_classes[1].card_id);
          assert.equal(records.license_classes[2].card_id, data.license_classes[2].card_id);
          assert.equal(records.license_classes[0].type, data.license_classes[0].type);
          assert.equal(records.license_classes[1].type, data.license_classes[1].type);
          assert.equal(records.license_classes[2].type, data.license_classes[2].type);
        })
        .then(done)
        .catch(done);
    });

    it('correctly assigns the real id designation to only the right card', function(done) {
      const assertCardOptions = (cards) => {
        let cardIds = cards.map((record) => { return record.id; });
        let dlCard = cards.find((record) => { return record.type === 'DL'; });

        dbHelper.db('card_options')
          .whereIn('card_id', cardIds)
          .where({
            option_value: 'real-id'
          })
          .then((records) => {
            assert.equal(records.length, 1, 'more than one card with real id');
            assert.equal(records[0].card_id, dlCard.id, 'real id assigned to the wrong id');
          })
          .then(() => {
            done();
          })
          .catch(done);
      };

      let data = dataHelper.fakeRecords();

      ctrl.saveApplication(data)
        .then((records) => {
          assertCardOptions(records.cards);
        });
    });

  });

}); //Describe Top End

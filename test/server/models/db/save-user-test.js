'use strict';

const assert                = require('assert');

const dbHelper              = require('../../../support/db-helper');
const findOrSaveUser        = require('../../../../server/models/db/save-user');

describe('Save User Authentication Data: ', () => {
  let userData = {
    uuid:       'e81bb7a2014543e8934679b54fab09ad',
    full_name:  'Alice B',
    email:      'alice@edl.gov'
  };

  beforeEach(function(done) {
    dbHelper
      .clearAll()
      .then(() => { done(); })
      .catch(done);
  });

  describe('New user', () => {
    it('inserts new record', (done) => {
      findOrSaveUser(userData)
        .then((record) => {
          assert.equal(record[0].uuid, userData.uuid);
          assert.equal(record[0].full_name, userData.full_name);
          assert.equal(record[0].email, userData.email);
        })
        .then(done)
        .catch(done);
    });
  });

  describe('Returning user', () => {

    beforeEach(function(done) {
      findOrSaveUser(userData)
        .then(() => { done(); })
        .catch(done);
    });

    it('gets existing record', (done) => {
      findOrSaveUser(userData)
        .then((record) => {
          assert.equal(record[0].uuid, userData.uuid);
          assert.equal(record[0].full_name, userData.full_name);
          assert.equal(record[0].email, userData.email);
        })
        .then(done)
        .catch(done);
    });
  });
});

'use strict';

const assert                = require('assert');

const dbHelper              = require('../../../support/db-helper');
const findOrSaveUser        = require('../../../../server/models/db/save-user');

describe('findOrSaveUser', () => {
  let userData = {
    uuid: 'e81bb7a2014543e8934679b54fab09ad'
  };

  beforeEach(function(done) {
    dbHelper
      .clearAll()
      .then(() => { done(); })
      .catch(done);
  });

  describe('when no user with a matching uuid exists', () => {
    it('inserts new record', (done) => {
      findOrSaveUser(userData)
        .then((record) => {
          assert.equal(record.uuid, userData.uuid);
          assert(record.id);
        })
        .then(done)
        .catch(done);
    });
  });

  describe('when the user exists in the database already', () => {
    let existing;

    beforeEach(function(done) {
      dbHelper
        .db('users')
        .insert(userData)
        .returning('*')
        .then((users) => {
          existing = users[0];
        })
        .then(done)
        .catch(done);
    });

    it('gets existing record', (done) => {
      findOrSaveUser(userData)
        .then((record) => {
          assert.equal(record.uuid, userData.uuid);
          assert.equal(record.id, existing.id);
        })
        .then(done)
        .catch(done);
    });
  });
});

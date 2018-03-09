'use strict';

const assert    = require('assert');

const dbHelper  = require('../../../support/db-helper');
const getUser   = require('../../../../server/models/db/get-user');

describe('findOrSaveUser', () => {
  let userData = {
    uuid: 'e81bb7a2014543e8934679b54fab09ad'
  };

  let existing;

  beforeEach(function(done) {
    dbHelper
      .clearAll()
      .then(() => {
        return dbHelper
          .db('users')
          .insert(userData)
          .returning('*');
      })
      .then((users) => {
        existing = users[0];
      })
      .then(done)
      .catch(done);
  });

  describe('getByUuid', () => {
    it('find the right user', (done) => {
      getUser.byUuid(existing.uuid)
        .then((user) => {
          assert.equal(user.uuid, existing.uuid);
          assert.equal(user.id, existing.id);
        })
        .then(done)
        .catch(done);
    });

    it('returns undefined when the user does not exist', function(done) {
      getUser.byUuid('not-here-at-all')
        .then((user) => {
          assert(!user);
        })
        .then(done)
        .catch(done);
    });
  });

  describe('getById', () => {
    it('find the right user', (done) => {
      getUser.byId(existing.id)
        .then((user) => {
          assert.equal(user.uuid, existing.uuid);
          assert.equal(user.id, existing.id);
        })
        .then(done)
        .catch(done);
    });

    it('returns undefined when the user does not exist', function(done) {
      getUser.byId(0)
        .then((user) => {
          assert(!user);
        })
        .then(done)
        .catch(done);
    });
  });
});

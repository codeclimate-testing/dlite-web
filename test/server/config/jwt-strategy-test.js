'use strict';

const env = require('../../support/env');
const assert = require('assert');
const jwtStrategy = require(env.serverDir + '/config/jwt-strategy');

let authorizer = jwtStrategy.authorizeApiUsage;
let authorizedUser = jwtStrategy.authorizedUsers[0];

describe('jwtStrategy.authorizeApiUsage', function() {
  it('denies entry to unregistered user names', function(done) {
    authorizer({user: 'not-here'}, function(err, user) {
      assert.equal(user, false);
      done(err);
    });
  });

  it('allows users who are allowed', function(done) {
    authorizer({user: authorizedUser}, function(err, user) {
      assert.equal(user, authorizedUser);
      done(err);
    });
  });
});

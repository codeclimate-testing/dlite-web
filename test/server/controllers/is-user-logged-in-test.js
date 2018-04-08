'use strict';

const assert              = require('assert');
const sinon               = require('sinon');
const httpMocks           = require('node-mocks-http');
const isUserLoggedIn      = require('../../../server/controllers/is-user-logged-in');

describe('is user logged in controller', () => {
  let res, req, next, env;

  beforeEach(function() {
    res   = httpMocks.createResponse({});
    req   = { session: { user: { uuid: '' } } };
    next  = sinon.spy();
    env   = 'production';
  });

  it('returns status as true if user is logged in', function(done) {
    req.session.user.uuid = '101';
    isUserLoggedIn(req, res, next, env)
    let data = res._getData();
    assert.deepEqual(JSON.parse(data), { status: true });
    done();
  });

  it('sends status as false if user is not logged in', function(done) {
    req.session = {};
    isUserLoggedIn(req, res, next, env)
    let data = res._getData();
    assert.deepEqual(JSON.parse(data), { status: false });
    done();
  })
});

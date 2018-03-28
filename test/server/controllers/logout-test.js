'use strict';

const assert      = require('assert');
const sinon       = require('sinon');
const httpMocks   = require('node-mocks-http');
const controllers = require('../../../server/controllers/logout');

describe('Logout controller', () => {
  let req, res, passport;

  beforeEach(function() {
    req = {session: {user: {id: 'foo'}, destroy: sinon.spy()}, logout: sinon.spy()};
    res = httpMocks.createResponse({});
    res.redirect = sinon.spy();
    res.cookie = sinon.spy();
  });

  it('#logouts of passport', function() {
    controllers(req, res);
    assert(req.logout.calledWith());
  });

  it('#destroys session', function() {
    controllers(req, res);
    assert(req.session.destroy.calledWith());
  });

  it('#sets isLoggedIn cookie to false', function() {
    controllers(req, res);
    assert(res.cookie.calledWith('isLoggedIn', false));
  });
});

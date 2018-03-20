'use strict';

const assert      = require('assert');
const sinon       = require('sinon');
const httpMocks   = require('node-mocks-http');
const controllers = require('../../../server/controllers/auth');

describe('Auth related controllers', () => {
  let req, res, passport;

  beforeEach(function() {
    req = {session: {user: {id: 'foo'}}};
    res = httpMocks.createResponse({});
    res.redirect = sinon.spy();
    res.cookie = sinon.spy();
    passport = { authenticate: sinon.spy() };
  });

  it('#authNew setups passport for the start of the oauth exchange', function() {
    controllers.authNew(passport);
    assert(passport.authenticate.calledWith('oauth2', { scope: ['multifactor'] }));
  });

  it('#authCallback setups passport for the conclusion of the oauth exchange', function() {
    controllers.authCallback(passport);
    assert(passport.authenticate.calledWith('oauth2', { failureRedirect: '/auth/error' }));
  });

  it('#authSuccess redirects to the logged in page', function() {
    controllers.authSuccess(req, res);
    assert(res.redirect.calledWith('/apply/logged-in'));
  });

  it('#authSuccess sets isLoggedIn cookie to true', function() {
    controllers.authSuccess(req, res);
    assert(res.cookie.calledWith('isLoggedIn', true));
  });
});

'use strict';

const assert            = require('assert');
const sinon             = require('sinon');
const httpMocks   = require('node-mocks-http');
const requireLogIn      = require('../../../server/controllers/require-log-in');

describe('Require log-in function', () => {
  let req = {
    url: '/apply/id-and-license/my-basics/legal-name',
    isAuthenticated: () => {
      return false;
    }
  };
  let res = httpMocks.createResponse({});
  res.redirect = sinon.spy();
  let next = sinon.spy();

  it('calls next() if app_env is not production', function() {
    process.env.APP_ENV = 'test';
    requireLogIn(req, res, next);
    assert(res.redirect.notCalled);
    assert(next.called);
  });

  it('calls next() if req.url is from an intro page', function() {
    req.url = '/apply/cdl/sign-in';
    process.env.APP_ENV = 'production';
    requireLogIn(req, res, next);
    assert(res.redirect.notCalled);
    assert(next.called);
  });

  it('calls next() if user is logged in', function() {
    req.isAuthenticated = () => { return true; };
    process.env.APP_ENV = 'production';
    requireLogIn(req, res, next);
    assert(res.redirect.notCalled);
    assert(next.called);
  });

  it('redirects user to /apply/cdl/sign-in if user is on an /apply/cdl non-intro page and is not signed in', function() {
    req.url = '/apply/cdl/my-history/medical-history';
    process.env.APP_ENV = 'production';
    req.isAuthenticated = () => { return false; }
    requireLogIn(req, res, next);
    assert(res.redirect.calledWith('/apply/cdl/sign-in'));
  });

  it('redirects user to /apply/id-and-license/sign-in if user is on an /apply/id-and-license non-intro page and is not signed in', function() {
    process.env.APP_ENV = 'production';
    req.url = '/apply/id-and-license/my-basics/legal-name';
    req.isAuthenticated = () => { return false; }
    requireLogIn(req, res, next);
    assert(res.redirect.calledWith('/apply/id-and-license/sign-in'));
  });
});

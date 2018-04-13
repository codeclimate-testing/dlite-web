'use strict';

const assert              = require('assert');
const sinon               = require('sinon');
const httpMocks           = require('node-mocks-http');
const logout              = require('../../../server/controllers/logout');

describe('logout controller', () => {
  let res, req;

  beforeEach(function() {
    res   = httpMocks.createResponse({});
    req   = {
      session: {
        user: {
          uuid: ''
        },
        destroy: sinon.spy()
      },
      logout: sinon.spy(),
      clearCookie: () => {

      }
    };
    res.redirect = sinon.spy();

  });


  it('calls req.logout', function() {
    logout(req, res);
    assert.ok(req.logout.called);
  });

  it('calls session destroy', function() {
    logout(req, res);
    assert.ok(req.session.destroy.called);
  });

  it('redirects to choose-language', function() {
    process.env = {};
    logout(req, res);
    assert.ok(res.redirect.calledWith('/apply/choose-language'));
  });

  describe('#TST_ENV', function() {
    it('redirects to splash screen hosted on dmv server when ADA_TST is false', function() {
      process.env.TST_ENV = true;
      process.env.ADA_TST = false;
      process.env.TST_SPLASH_SCREEN_URL='https://www.dmv.ca.gov/imageserver/theme/splash/index.html';
      logout(req, res);
      assert.ok(res.redirect.calledWith('https://www.dmv.ca.gov/imageserver/theme/splash/index.html'));
    });

    it('redirects to choose-language when ADA_TST is true', function() {
      process.env.TST_ENV = true;
      process.env.ADA_TST = true;
      logout(req, res);
      assert.ok(res.redirect.calledWith('/apply/choose-language'));
    });
  });


});
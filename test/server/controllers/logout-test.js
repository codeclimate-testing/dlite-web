'use strict';

const assert      = require('assert');
const sinon       = require('sinon');
const httpMocks   = require('node-mocks-http');
const controller  = require('../../../server/controllers/logout');

describe('logout controller', () => {
  let res, req;

  beforeEach(function() {
    res = httpMocks.createResponse({});
    res = {
      redirect: sinon.spy(),
      clearCookie: () => {}
    };
    req = {
      session: {
        user: {
          uuid: ''
        },
        destroy: () => {

        }
      },
      params: {
        uuid: ''
      },
      logout: () => {

      }
    };

  });

  it('redirects to choose-language', function() {
    process.env = {};
    controller(req, res);
    assert.ok(res.redirect.calledWith('/apply/choose-language'));
  });

  describe('#TST_ENV', function() {
    it('redirects to splash screen hosted on dmv server', function() {
      process.env.TST_ENV = true;
      process.env.TST_SPLASH_SCREEN_URL='https://www.dmv.ca.gov/imageserver/theme/splash/index.html';
      controller(req, res);
      assert.ok(res.redirect.calledWith('https://www.dmv.ca.gov/imageserver/theme/splash/index.html'));
    });
  });

});
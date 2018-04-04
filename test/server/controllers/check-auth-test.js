'use strict';

const assert      = require('assert');
const sinon       = require('sinon');
const httpMocks   = require('node-mocks-http');
const controller  = require('../../../server/controllers/check-auth');

describe('check auth controller', () => {
  let res, req, next;

  beforeEach(function() {
    res = httpMocks.createResponse({});
    res.redirect = sinon.spy();
    req = {
      session: {
        user: {
          uuid: ''
        }
      }
    }
    next = sinon.spy();
  });

  it('returns next if user has an uuid', function() {
    process.env.APP_ENV = 'production';
    req.session.user.uuid = '101';
    controller(req, res, next, 'production');
    assert.ok(next.called);
  });

  it('redirects user to root if session does not have user', function() {
    process.env.APP_ENV = 'production';
    req.session = {};
    controller(req, res, next, 'production');
    assert.ok(!next.called);
    assert.ok(res.redirect.calledWith('/'))
  })
});

'use strict';

const assert      = require('assert');
const sinon       = require('sinon');
const httpMocks   = require('node-mocks-http');
const controller  = require('../../../server/controllers/check-auth');

describe('check auth controller', () => {
  let res, req, next;

  beforeEach(function() {
    res = httpMocks.createResponse({});
    res = {
      send: function(){ },
      json: function(err){
        assert.equal(err.message, 'not logged in');
      },
      status: function(responseStatus) {
          assert.equal(responseStatus, 500);
          // This next line makes it chainable
          return this;
      }
    }

    req = {
      session: {
        user: {
          uuid: ''
        }
      }
    };
    next = sinon.spy();
  });

  it('returns next if user has an uuid', function() {
    process.env.APP_ENV = 'production';
    req.session.user.uuid = '101';
    controller(req, res, next, 'production');
    assert.ok(next.called);
  });

  it('sends error if user does not have session user', function() {
    process.env.APP_ENV = 'production';
    req.session = {};
    controller(req, res, next, 'production');
    assert.ok(!next.called);
  })
});

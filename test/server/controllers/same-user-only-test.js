'use strict';

const assert      = require('assert');
const sinon       = require('sinon');
const httpMocks   = require('node-mocks-http');
const controller  = require('../../../server/controllers/same-user-only');

describe('same user only controller', () => {
  let res, req, next;

  beforeEach(function() {
    res = httpMocks.createResponse({});
    res = {
      send: function(){ },
      json: function(err){
        assert.equal(err.message, 'session user uuid doesnt match requested uuid');
      },
      status: function(responseStatus) {
          assert.equal(responseStatus, 500);
          // This next line makes it chainable
          return this;
      }
    };
    req = {
      session: {
        user: {
          uuid: ''
        }
      },
      params: {
        uuid: ''
      }
    }
    next = sinon.spy();
  });

  describe('#production env', function() {
    it('returns next if params.uuid matches session.user.uuid', function() {
      req.session.user.uuid = '101';
      req.params.uuid = '101';
      controller(req, res, next, 'production');
      assert.ok(next.called);
    });

    it('sends status 500 if uuids do not match', function() {
      req.session.user.uuid = '101';
      req.params.uuid = '111';
      controller(req, res, next, 'production');
      assert.ok(!next.called);
    });
  });

  describe('#dev env', function() {
    it('returns next', function() {
      req.session.user.uuid = '101';
      req.params.uuid = '111';
      controller(req, res, next, 'development');
      assert.ok(next.called);
    });
  });
});

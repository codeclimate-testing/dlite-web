'use strict';

const assert      = require('assert');
const sinon       = require('sinon');
const httpMocks   = require('node-mocks-http');
const controllers = require('../../../server/controllers/save-app-name');

describe('Save app name controller', () => {
  let req, res, next;

  beforeEach(function() {
    req = {params: { appName: 'cdl'}};
    res = httpMocks.createResponse({});
    res.redirect = sinon.spy();
    res.cookie = sinon.spy();
    next = sinon.spy();
  });

  it('#saves appName cookie with params value', function() {
    controllers(req, res, next);
    assert(res.cookie.calledWith('appName', 'cdl'));
  });
});

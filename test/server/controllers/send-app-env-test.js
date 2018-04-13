'use strict';

const assert          = require('assert');
const sinon           = require('sinon');
const httpMocks       = require('node-mocks-http');
const sendAppEnv      = require('../../../server/controllers/send-app-env');

describe('Send app timeout and whether on ADA TST terminal', () => {

  let req, res;
  beforeEach(function() {
    req = {url: 'someUrl.js'};
    res = httpMocks.createResponse({});
    res.json = sinon.spy();
  });

  it('sends default timeout', function() {
    process.env = {};
    sendAppEnv(req, res);
    assert.equal(res.json.args[0][0].timeout, '600000');
  });

  it('sends default adaTst', function() {
    process.env = {};
    sendAppEnv(req, res);
    assert.equal(res.json.args[0][0].adaTst, false);
  });

  it('sends timeout from environmental variable', function() {
    process.env.APP_TIMEOUT = '50';
    sendAppEnv(req, res);
    assert.equal(res.json.args[0][0].timeout, '50');
  });

  it('sends timeout', function() {
    process.env.APP_TIMEOUT = '50';
    process.env.ADA_TST = true;
    sendAppEnv(req, res);
    assert.equal(res.json.args[0][0].adaTst, 'true');
  });

  it('sends ADA_TST from environmental variable', function() {
    process.env.APP_TIMEOUT = '50';
    process.env.ADA_TST = true;
    sendAppEnv(req, res);
    assert.equal(res.json.args[0][0].adaTst, true);
  });

});

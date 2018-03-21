'use strict';

const assert      = require('assert');
const sinon       = require('sinon');
const httpMocks   = require('node-mocks-http');
const sendZip     = require('../../../server/controllers/send-zip');

describe('Send zip function', () => {
  let req = {url: 'someUrl.js'};
  let res = httpMocks.createResponse({});
  res.set = sinon.spy();
  res.sendFile = sinon.spy();
  let next;
  let controller = sendZip(req, res, next);

  it('sets Content-Encoding to gzip', function() {
    assert(res.set.calledWith('Content-Encoding', 'gzip'));
  });

  it('sets Content-Type to application/javascript', function() {
    assert(res.set.calledWith('Content-Type', 'application/javascript'));
  });

  it('sends file', function() {
    assert(res.sendFile.calledWith(req.url));
  });

});

'use strict';

const assert      = require('assert');
const sinon       = require('sinon');
const httpMocks   = require('node-mocks-http');
const controller  = require('../../../server/controllers/get-translation');

describe('Testing requests for translations', () => {
  let res, jsonResponse;

  beforeEach(function() {
    res = httpMocks.createResponse({});
    res.json = sinon.spy();
  });

  it('returns an error message if the language code is not valid', function() {
    let req = httpMocks.createRequest({
      method: 'GET',
      url: '/api/tranlation/xx',
      params: {
        code: 'xx'
      }
    });

    controller(req, res);

    assert.equal(res.statusCode, 500);
    jsonResponse = res.json.args[0][0];
    assert.equal(jsonResponse.message, 'Language not found');
  });

  it('returns translation json if the language code is valid', function() {
    let req = httpMocks.createRequest({
      method: 'GET',
      url: '/api/tranlation/vi',
      params: {
        code: 'vi'
      }
    });

    controller(req, res);

    assert.equal(res.statusCode, 200);
    jsonResponse = res.json.args[0][0];
    assert(jsonResponse.shared);
  });
});

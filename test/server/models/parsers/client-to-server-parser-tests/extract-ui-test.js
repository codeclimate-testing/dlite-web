'use strict';
const assert          = require('assert');
const extractUI       = require('../../../../../server/models/parsers/client-to-server-parsers/extract-ui');

describe('extracting UI', function() {
  let data;

  beforeEach(function() {
    data = {
      id: '11342',
      pathname: '/apply/my-url/this-is-a-site'
    };
  });

  it('returns the data id as application_id', function() {
    assert.equal(extractUI(data).application_id, data.id);
  });

  it('returns the data pathname as pathname', function() {
    assert.equal(extractUI(data).pathname, data.pathname);
  });

});

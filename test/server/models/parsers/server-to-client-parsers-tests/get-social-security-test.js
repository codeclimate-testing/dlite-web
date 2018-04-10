'use strict';

const assert                = require('assert');
const getSocialSecurity     = require('../../../../../server/models/parsers/server-to-client-parsers/get-social-security');

describe('extracting social security', function() {

  let application;

  beforeEach(function() {
    application = {
      social_security_number: ''
    }
  });

  it('returns placeholder if social_security_number is null', function() {
    assert.deepEqual(getSocialSecurity(application), {
      part1: '',
      part2: '',
      part3: '',
      hasSocialSecurity: ''
    });
  });

  it('returns placeholder with hasSocialSecurity equal to No if social_security_number is No', function() {
    application.social_security_number = 'No';

    assert.deepEqual(getSocialSecurity(application), {
      part1: '',
      part2: '',
      part3: '',
      hasSocialSecurity: 'No'
    });
  });

  it('returns SSN if social_security_number is a string of numbers', function() {
    application.social_security_number = '555-55-5555';
    assert.deepEqual(getSocialSecurity(application), {
      part1: '555',
      part2: '55',
      part3: '5555',
      hasSocialSecurity: 'Yes'
    });
  });
});

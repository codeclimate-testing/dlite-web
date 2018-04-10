'use strict';

const assert                = require('assert');
const getDateOfBirth        = require('../../../../../server/models/parsers/server-to-client-parsers/get-date-of-birth');

describe('extracting date of birth', function() {

  let application;

  beforeEach(function() {
    application = {
      date_of_birth: ''
    }
  });

  it('returns placeholder if application.date_of_birth is null', function() {
    assert.deepEqual(getDateOfBirth(application), {
      day: '',
      month: '',
      year: ''
    });
  });

  it('returns date object', function() {
    application.date_of_birth = '09/09/1999';
    assert.deepEqual(getDateOfBirth(application), {
      day: '9',
      month: '9',
      year: '1999'
    });
  });
});

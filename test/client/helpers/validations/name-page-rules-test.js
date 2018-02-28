'use strict';

import assert from 'assert';

import rules from '../../../../client/helpers/validations/name-page-rules';

describe('Name page validation rules:', function() {
  it('when there are no data issues, it has no errors', function() {
    let props = {
      firstName: 'Jerimiah',
      middleName: 'Wilson',
      lastName: 'Smith',
      locale: 'en'
    };

    assert.deepEqual(rules.firstName(props), []);
    assert.deepEqual(rules.middleName(props), []);
    assert.deepEqual(rules.lastName(props), []);
  });

  it('when everything is wrong, it reports the errors', function() {
    let props = {
      firstName: 'J£rimiah',
      middleName: 'Wil§on',
      lastName: '',
      locale: 'en'
    };

    assert.deepEqual(rules.firstName(props),  ['Sorry, your card can only include English characters.']);
    assert.deepEqual(rules.middleName(props), ['Sorry, your card can only include English characters.']);
    assert.deepEqual(rules.lastName(props),   ['Please enter your last name.']);
  });
});


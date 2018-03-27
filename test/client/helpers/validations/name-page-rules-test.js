'use strict';

import assert from 'assert';
import rules from '../../../../client/helpers/validations/name-page-rules';

describe('Name page validation rules:', function() {
  it('when there are no data issues, it has no errors', function() {
    let props = {
      firstName: 'Jerimiah',
      middleName: 'Wilson',
      lastName: 'Smith'
    };

    assert.deepEqual(rules.firstName(props), []);
    assert.deepEqual(rules.middleName(props), []);
    assert.deepEqual(rules.lastName(props), []);
  });

  it('when everything is wrong, it reports the errors', function() {
    let props = {
      firstName: 'J£rimiah',
      middleName: 'Wil§on',
      lastName: ''
    };

    assert.deepEqual(rules.firstName(props),  ['errorMessages.dataIncludesNonEnglishCharacters']);
    assert.deepEqual(rules.middleName(props), ['errorMessages.dataIncludesNonEnglishCharacters']);
    assert.deepEqual(rules.lastName(props),   ['errorMessages.lastNameMissing']);
  });
});


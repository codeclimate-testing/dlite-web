'use strict';

import assert   from 'assert';
import rules    from '../../../../client/helpers/validations/address-rules';

describe('enter address page validation rules:', function() {

  it('has no errors, when there are no data issues', function() {
    let props = {
      homeAddressSameAsMailing: 'Yes',
      home: {
        street_1: '123 Main st.',
        street_2: 'Where do I go',
        city:     'Crazydino',
        state:    'CA',
        zip:      '95666'
      },
      mailing: {
        street_1: '123 Main st.',
        street_2: 'Where do I go',
        city:     'Crazydino',
        state:    'CA',
        zip:      '95666'
      }
    };

    assert.deepEqual(rules.homeAddressSameAsMailing(props), []);
    assert.deepEqual(rules.homeStreet_1(props), []);
    assert.deepEqual(rules.homeStreet_2(props), []);
    assert.deepEqual(rules.homeCity(props), []);
    assert.deepEqual(rules.homeZip(props), []);
    assert.deepEqual(rules.mailingStreet_1(props), []);
    assert.deepEqual(rules.mailingStreet_2(props), []);
    assert.deepEqual(rules.mailingCity(props), []);
    assert.deepEqual(rules.mailingZip(props), []);
  });

  it('has errors, when there is no data entered', function() {
    let props = {
      homeAddressSameAsMailing: '',
      home: {
        street_1: '',
        street_2: '',
        city:     '',
        state:    '',
        zip:      ''
      },
      mailing: {
        street_1: '',
        street_2: '',
        city:     '',
        state:    '',
        zip:      ''
      }
    };
    assert.deepEqual(rules.homeAddressSameAsMailing(props), ['errorMessages.mailingAddressMissing']);
    assert.deepEqual(rules.homeStreet_1(props), ['errorMessages.streetAddressMissing']);
    assert.deepEqual(rules.homeCity(props), ['errorMessages.cityMissing']);
    assert.deepEqual(rules.mailingStreet_1(props), ['errorMessages.streetAddressMissing']);
    assert.deepEqual(rules.mailingStreet_2(props), []);
    assert.deepEqual(rules.mailingCity(props), ['errorMessages.cityMissing']);
  });

  it('has errors, when non-english data are entered', function() {
    let props = {
      homeAddressSameAsMailing: 'Yes',
      home: {
        street_1: 'नमस्ते',
        street_2: 'नमस्ते',
        city:     'नमस्ते',
        state:    'CA',
        zip:      'नमस्ते'
      },
      mailing: {
        street_1: 'नमस्ते',
        street_2: 'नमस्ते',
        city:     'नमस्ते',
        state:    'CA',
        zip:      'नमस्ते'
      }
    };
    assert.deepEqual(rules.homeStreet_1(props), ['errorMessages.dataIncludesNonEnglishCharacters']);
    assert.deepEqual(rules.homeStreet_2(props), ['errorMessages.dataIncludesNonEnglishCharacters']);
    assert.deepEqual(rules.homeCity(props), ['errorMessages.dataIncludesNonEnglishCharacters']);
    assert.deepEqual(rules.homeZip(props), ['errorMessages.dataIncludesNonEnglishCharacters']);
    assert.deepEqual(rules.mailingStreet_1(props), ['errorMessages.dataIncludesNonEnglishCharacters']);
    assert.deepEqual(rules.mailingStreet_2(props), ['errorMessages.dataIncludesNonEnglishCharacters']);
    assert.deepEqual(rules.mailingCity(props), ['errorMessages.dataIncludesNonEnglishCharacters']);
    assert.deepEqual(rules.mailingZip(props), ['errorMessages.dataIncludesNonEnglishCharacters']);
  });


});


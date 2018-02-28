'use strict';

import assert   from 'assert';

import rules    from '../../../../client/helpers/validations/address-rules';
import messages from '../../../../client/presentations/error-messages';

describe('enter address page validation rules:', function() {

  it('has no errors, when there are no data issues', function() {
    let props = {
      homeAddressSameAsMailing: 'Yes',
      home: {
        street_1: '123 Main st.',
        street_2: 'Where do I go!',
        city:     'Crazydino',
        state:    'CA',
        zip:      '95666'
      },
      mailing: {
        street_1: '123 Main st.',
        street_2: 'Where do I go!',
        city:     'Crazydino',
        state:    'CA',
        zip:      '95666'
      },
      locale: 'en'
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
      },
      locale: 'en'
    };
    assert.deepEqual(rules.homeAddressSameAsMailing(props), ['Please let us know where you receive mail.']);
    assert.deepEqual(rules.homeStreet_1(props), ['Please enter what street you live on.']);
    assert.deepEqual(rules.homeCity(props), ['Please enter the city you live in.']);
    assert.deepEqual(rules.mailingStreet_1(props), ['Please enter what street you live on.']);
    assert.deepEqual(rules.mailingStreet_2(props), []);
    assert.deepEqual(rules.mailingCity(props), ['Please enter the city you live in.']);
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
      },
      locale: 'en'
    };
    assert.deepEqual(rules.homeStreet_1(props), ['Sorry, your card can only include English characters.']);
    assert.deepEqual(rules.homeStreet_2(props), ['Sorry, your card can only include English characters.']);
    assert.deepEqual(rules.homeCity(props), ['Sorry, your card can only include English characters.']);
    assert.deepEqual(rules.homeZip(props), ['Sorry, your card can only include English characters.']);
    assert.deepEqual(rules.mailingStreet_1(props), ['Sorry, your card can only include English characters.']);
    assert.deepEqual(rules.mailingStreet_2(props), ['Sorry, your card can only include English characters.']);
    assert.deepEqual(rules.mailingCity(props), ['Sorry, your card can only include English characters.']);
    assert.deepEqual(rules.mailingZip(props), ['Sorry, your card can only include English characters.']);
  });


});


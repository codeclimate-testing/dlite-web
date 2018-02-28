'use strict';

import assert       from 'assert';

import rules        from '../../../../client/helpers/validations/card-type-rules';
import translations from '../../../../client/i18n';

describe('choose card type page validation rules:', function() {
  let locale = 'en';
  it('will give error when no card has been selected', function() {
    let props = {
      cardType: [],
      locale
    };

    assert.deepEqual(rules.cardType(props), [translations[locale].errorMessages.cardTypeMissing]);
  });

  it('when an card is chosen it will not give an error', function() {
    let props = {
      cardType: ['DL'],
      locale
    };

    assert.deepEqual(rules.cardType(props), []);
  });
});


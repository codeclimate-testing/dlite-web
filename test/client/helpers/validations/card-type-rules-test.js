'use strict';

import assert       from 'assert';
import rules        from '../../../../client/helpers/validations/card-type-rules';

describe('choose card type page validation rules:', function() {
  it('will give error when no card has been selected', function() {
    let props = {
      cardType: []
    };

    assert.deepEqual(rules.cardType(props), ['errorMessages.cardTypeMissing']);
  });

  it('when an card is chosen it will not give an error', function() {
    let props = {
      cardType: ['DL']
    };

    assert.deepEqual(rules.cardType(props), []);
  });
});


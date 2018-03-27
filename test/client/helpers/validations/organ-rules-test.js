'use strict';

import assert   from 'assert';
import rules    from '../../../../client/helpers/validations/organ-donation-rules';

describe('organ donation validation rules', function() {
  it('has no errors when selections are made', function() {
    let props = {
      donateOrgan: 'Yes',
      donateMoney: 'No'
    };

    assert.deepEqual(rules.donateOrgan(props), []);
    assert.deepEqual(rules.donateMoney(props), []);
  });

  it('has organDonationSelectionMissing error when organ donation question not answered', function() {
    let props = {
      donateOrgan: '',
      donateMoney: 'No'
    };
      assert.deepEqual(rules.donateOrgan(props), ['errorMessages.organDonationSelectionMissing']);
      assert.deepEqual(rules.donateMoney(props), []);
  });

  it('has moneyOrganDonationSelectionMissing error when organ money question not answered', function() {
    let props = {
      donateOrgan: 'No',
      donateMoney: ''
    };
      assert.deepEqual(rules.donateOrgan(props), []);
      assert.deepEqual(rules.donateMoney(props), ['errorMessages.moneyOrganDonationSelectionMissing']);
  });
});

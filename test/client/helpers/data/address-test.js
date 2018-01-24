'use strict';

import assert           from 'assert';
import { canContinue }  from '../../../../client/helpers/data/address';

describe('Data helpers for addresses', function() {
  let data = {
    homeAddress: {
      homeAddressSameAsMailing: '',
      street_1: 'testStreet',
      street_2: '',
      city: '',
      state: 'CA',
      zip: ''
    },
    mailingAddress: {
      street_1: '',
      street_2: '',
      city: '',
      state: '',
      zip: ''
    }
  };

  describe('#canContinue', function() {
    it('returns false when no data is present', function() {
      assert.equal(canContinue(data), false);
    });

    it('returns false when homeAddress given but mailing address is different and no mailing address provided', function() {
      data.homeAddress.homeAddressSameAsMailing = false;

      assert.equal(canContinue(data), false);
    });

    it('is true when homeAddress given and homeAddress is same as mailing address', function() {
      data.homeAddress = {
        homeAddressSameAsMailing: 'Yes',
        street_1: 'street',
        city: 'city',
        zip: 'zip'
      };

      assert.equal(canContinue(data), true);
    });

    it('is false when homeAddress given but no answer selected for homeAddressSameAsMailing', function() {
      data.homeAddress = {
        homeAddressSameAsMailing: '',
        street_1: '11432',
        city: 'rockville',
        zip: '37964'
      };
      assert.equal(canContinue(data), false);
    });
  })
});
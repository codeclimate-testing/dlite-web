'use strict';

import assert           from 'assert';
import {
  donateMoney,
  donateOrganYes,
  donateOrganNo
} from '../../../../client/helpers/data/organ-donation';

describe('data helper for organ donation', function() {
  let props;
  beforeEach(function() {
    props = {
      organDonation: {
        donateMoney: '',
        donateOrgan: ''
      }
    }
  });

  describe('#donateMoney', function() {
    it('is true if value is Yes', function() {
      props.organDonation.donateMoney = 'Yes';
      assert.equal(donateMoney(props), true);
    });
    it('is false if value is No', function() {
      props.organDonation.donateMoney = 'No';
      assert.equal(donateMoney(props), false);
    });
    it('is false if value is blank', function() {
      props.organDonation.donateMoney = '';
      assert.equal(donateMoney(props), false);
    });
  });

  describe('#donateOrganYes', function() {
    it('is true if value is Yes', function() {
      props.organDonation.donateOrgan = 'Yes';
      assert.equal(donateOrganYes(props), true);
    });
    it('is false if value is No', function() {
      props.organDonation.donateOrgan = 'No';
      assert.equal(donateOrganYes(props), false);
    });
    it('is false if value is blank', function() {
      props.organDonation.donateOrgan = '';
      assert.equal(donateOrganYes(props), false);
    });
  });

  describe('#donateOrganNo', function() {
    it('is false if value is Yes', function() {
      props.organDonation.donateOrgan = 'Yes';
      assert.equal(donateOrganNo(props), false);
    });
    it('is true if value is No', function() {
      props.organDonation.donateOrgan = 'No';
      assert.equal(donateOrganNo(props), true);
    });
    it('is false if value is blank', function() {
      props.organDonation.donateOrgan = '';
      assert.equal(donateOrganYes(props), false);
    });
  });
});
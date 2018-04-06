'use strict';

const assert = require('assert');

import {
  organDonationPath
} from '../../../../../client/helpers/navigation/id-dl/organ-donation/next-path';

const today = new Date();


describe('IDDL Organ donation next-path helpers', function() {
  let data;
  const under16 = (today.getFullYear() - 15).toString();

  beforeEach(function() {
    data = {
      DLApp: {
        isApplying: true
      },
      dateOfBirth: {
        year: (today.getFullYear() - 40).toString(),
        month: (today.getMonth()).toString(),
        day: today.getDate().toString()
      },
      flow: ''
    };
  });


  describe('#organDonationPath', function() {
    it('returns "summary" if user is editing', function() {
      data.flow = 'edit';
      assert.equal(organDonationPath(data), 'summary');
    });
    it('returns "summary" if user is adding', function() {
      data.flow = 'add';
      assert.equal(organDonationPath(data), 'summary');
    });
    it('returns "citizenship" if user is over 16', function() {
      assert.equal(organDonationPath(data), 'citizenship');
    });
    it('returns "guardianSignature" if user is under 16 and getting a DL', function() {
      data.dateOfBirth.year = under16;
      assert.equal(organDonationPath(data), 'guardianSignature');
    });
    it('returns "summary" if user is under 16 and not getting a DL', function() {
      data.dateOfBirth.year = under16;
      data.DLApp.isApplying = false;
      assert.equal(organDonationPath(data), 'summary');
    });
  });

});


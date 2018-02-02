'use strict';

import assert           from 'assert';
import {
  hasAnySSN,
  hasNone,
  hasSocialSecurityYes,
  hasSocialSecurityNo
}  from '../../../../client/helpers/data/ssn';

describe('Data helpers for social security number', function() {
  let data;

  beforeEach(function() {
    data = {
      socialSecurity: {
        part1: '',
        part2: '',
        part3: '',
        hasSocialSecurity: ''
      }
    };
  });

  describe('#hasAnySSN', function() {
    it('returns false when no data is present', function() {
      assert.equal(hasAnySSN(data.socialSecurity), false);
    });

    it('returns true when one part is present', function() {
      data.socialSecurity.part2 = '11';

      assert.equal(hasAnySSN(data.socialSecurity), true);
    });
  });

  describe('#hasNone', function() {
    it('returns true when no data is present', function() {
      assert.equal(hasNone(data.socialSecurity), true);
    });
    it('returns false when one part is present', function() {
      data.socialSecurity.part2 = '11';
      assert.equal(hasNone(data.socialSecurity), false);
    });
  });

  describe('#hasSocialSecurityNo', function() {
    it('returns false when value equals Yes', function() {
      data.socialSecurity.hasSocialSecurity = 'Yes';
      assert.equal(hasSocialSecurityNo(data), false);
    });
    it('returns true when value equals No', function() {
      data.socialSecurity.hasSocialSecurity = 'No';
      assert.equal(hasSocialSecurityNo(data), true);
    });
  });

  describe('#hasSocialSecurityYes', function() {
    it('returns true when value equals Yes', function() {
      data.socialSecurity.hasSocialSecurity = 'Yes';
      assert.equal(hasSocialSecurityYes(data), true);
    });
    it('returns false when value equals No', function() {
      data.socialSecurity.hasSocialSecurity = 'No';
      assert.equal(hasSocialSecurityYes(data), false);
    });
  });
});
'use strict';

import assert from 'assert';
import {
  pageTitle,
  sectionName
} from '../../../client/helpers/registration-header-presenter';

describe('registration header presenter functions', function() {
  describe('pageTitle', function() {
    it('defaults to the voting registration header', function() {
      assert.equal(pageTitle({}), 'DMV: License application - Voting registration');
    });

    it('should be about preregistration when date of birth is right', function() {
      let dob = {
        month: '12',
        year: '2001',
        day: '12'
      };
      let mockNow = new Date(2017, 11, 12);

      assert.equal(
        pageTitle(dob, mockNow),
        'DMV: License application - Voting pre-registration'
      );
    });
  });

  describe('sectionName', function() {
    it('defaults to the voting registration header', function() {
      assert.equal(sectionName({}), 'Voting registration');
    });

    it('should be about preregistration when date of birth is right', function() {
      let dob = {
        month: '12',
        year: '2001',
        day: '12'
      };
      let mockNow = new Date(2017, 11, 12);

      assert.equal(
        sectionName(dob, mockNow),
        'Voting pre-registration'
      );
    });
  });
});

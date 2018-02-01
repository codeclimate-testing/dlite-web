'use strict';

import assert from 'assert';

import {
  appLanguageIsSelected
} from '../../../../client/helpers/data/application';

describe('Data helpers for application', function() {
  describe('#appLanguageIsSelected', function() {
    it('is true when string exists', function() {
      assert.equal(appLanguageIsSelected('en'), true);
    });

    it('is false when value is blank', function() {
      assert.equal(appLanguageIsSelected(''), false);
    });
  });
});
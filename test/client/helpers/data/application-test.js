'use strict';

import assert from 'assert';

import {
  languageIsSelected,
  buildConfCode
} from '../../../../client/helpers/data/application';

describe('Data helpers for application', function() {
  describe('#languageIsSelected', function() {
    it('is true when string exists', function() {
      assert.equal(languageIsSelected('en'), true);
    });

    it('is false when value is blank', function() {
      assert.equal(languageIsSelected(''), false);
    });
  });

  describe('#buildConfCode', function() {
    it('returns the first 8 digits of application id with an added dash in the middle and letters in uppercase', function() {
      let props = {
        id: '2b417380-20d6-11e8-9fbd-ef21805fde52'
      };
      assert.equal(buildConfCode(props), '2B41-7380');
    });
  });
});
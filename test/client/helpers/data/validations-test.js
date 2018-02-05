'use strict';

import assert from 'assert';
import {
  hasValue,
  hasAllAttributes,
  hasAnyAttributes,
  hasOnlyEnglishChars,
  hasOnlyNumbers,
  emailRegex,
  isYes,
  isNo
} from '../../../../client/helpers/data/validations';

describe('validations', function() {
  describe('#hasValue', function() {
    it('is false with an empty string', function() {
      assert(!hasValue(''), 'empty string is present');
    });

    it('is false with a padded empty string', function() {
      assert(!hasValue('    '), 'padded empty string is present');
    });

    it('is true for strings with content', function() {
      assert(hasValue('  0  '), 'padded string with value not present');
    });
  });

  describe('#hasAllAttributes', function() {
    it('is false for non objects', function() {
      assert(
        !hasAllAttributes(undefined, []),
        'true for non-objects'
      );
    });

    it('is false if no key for attribute name', function() {
      assert(
        !hasAllAttributes({}, ['id']),
        'returned true even without the attribute key'
      );
    });

    it('is false if attribute key exists but value there is not considered a value', function() {
      assert(
        !hasAllAttributes({id: '   '}, ['id']),
        'returned true with empty value'
      );
    });

    it('is false if not all attributes have value', function() {
      assert(
        !hasAllAttributes({id: 'hello-id', name: ''}, ['id', 'name']),
        'returned true with one of the values not present'
      );
    });

    it('is true if all attributes have values', function() {
      assert(
        hasAllAttributes({id: 'hello-id', name: 'Fred'}, ['id', 'name']),
        'returned false even though some values are present'
      );
    });

    it('ignores keys not required', function() {
      assert(
        hasAllAttributes({id: 'hello-id', name: 'Fred', other: ''}, ['id', 'name']),
        'tricked by other attributes'
      );
    });
  });

  describe('#hasAnyAttributes', function() {
    it('is false for non objects', function() {
      assert(
        !hasAnyAttributes(undefined, []),
        'true for non-objects'
      );
    });

    it('is false if none of the attributes are present', function() {
      assert(
        !hasAnyAttributes({id: ''}, ['id', 'name']),
        'returned true even without the attribute key'
      );
    });

    it('is true if one of the attributes is present', function() {
      assert(
        hasAnyAttributes({id: 'id'}, ['id', 'name', 'other']),
        'returned false with one attribute value'
      );
    });
  });

  describe('#hasOnlyEnglishChars', function() {
    it('should be true for numbers, letters and basic chars', function() {
      assert(
        hasOnlyEnglishChars('123 AzY ,.?!'),
        'returned false even with basic ASCII chars'
      );
    });

    it('return false with out of scope latin characters', function() {
      assert(
        !hasOnlyEnglishChars('123 áë¡ ,.?!'),
        'returned true with extended latin characters'
      );
    });
  });

  describe('#hasOnlyNumbers', function() {
    it('returns false for letters', function() {
      assert.equal( hasOnlyNumbers('11d9'), false)
    });

    it('returns false for basic chars', function() {
      assert.equal( hasOnlyNumbers(',.2'), false)
    });

    it('returns true when only numbers', function() {
      assert.equal(hasOnlyNumbers('3290812'), true)
    });
  });

  describe('#emailRegex', function() {
    it('fails if no @ character', function() {
      assert.equal(emailRegex('heyyou.com'), false);
    });

    it('fails if multiple @ character', function() {
      assert.equal(emailRegex('hey@@you.com'), false)
    });

    it('fails if quoted strings aren\'t separated by dots', function() {
      assert.equal(emailRegex('"so""ironic"@you.com'), false);
    });

    it('fails if double dot after the @', function() {
      assert.equal(emailRegex('aperson@a..domain.somewhere'), false);
    });

  });

  describe('#isYes', function() {
    it('returns true when value is Yes', function(){
      let data = 'Yes';
      assert.equal(isYes(data), true);
    });
    it('returns false when value is No', function(){
      let data = 'No';
      assert.equal(isYes(data), false);
    });
    it('returns false when value is blank', function(){
      let data = '';
      assert.equal(isYes(data), false);
    });
  });

  describe('#isNo', function() {
    it('returns false when value is Yes', function(){
      let data = 'Yes';
      assert.equal(isNo(data), false);
    });
    it('returns true when value is No', function(){
      let data = 'No';
      assert.equal(isNo(data), true);
    });
    it('returns false when value is blank', function(){
      let data = '';
      assert.equal(isNo(data), false);
    });
  });
});

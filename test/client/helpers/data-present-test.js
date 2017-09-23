'use strict';

import assert from 'assert';

import * as dataPresent from '../../../client/helpers/data-present';

describe('dataPresent', function() {
  describe('#value', function() {
    it('is false with an empty string', function() {
      assert(!dataPresent.value(''), 'empty string is present');
    });

    it('is false with a padded empty string', function() {
      assert(!dataPresent.value('    '), 'padded empty string is present');
    });

    it('is true for strings with content', function() {
      assert(dataPresent.value('  0  '), 'padded string with value not present');
    });
  });

  describe('#legalName', function() {
    it('is true with only last name', function() {
      assert(dataPresent.legalName({lastName: 'Smith'}), 'legalName not present with last name');
    });

    it('is false without a last name', function() {
      assert(!dataPresent.legalName({firstName: 'Agent'}), 'legalName present with only firstName');
    });
  });

  describe('#address', function() {
    it('is true with any field but state', function() {
      assert(dataPresent.address({street_1: '123 Main'}), 'address not present with street');
      assert(dataPresent.address({city: 'San Fukiama'}), 'address not present with city');
      assert(dataPresent.address({zip: '94000'}), 'address not present with zip');
    });

    it('is false with only state', function() {
      assert(!dataPresent.address({state: 'CA'}), 'legalName present with only state');
    });
  });

  describe('#date', function() {
    it('is true when all three parts are present', function() {
      assert(
        dataPresent.date({month: '12', day: '28', year: '1931'}),
        'date not present with all fields'
      );
    });

    it('is false when only partial data present', function() {
      assert(
        !dataPresent.date({month: '12', year: '1931'}),
        'date present with only parts of date'
      );
    });
  });

  describe('#height', function() {
    it('is true when the feet are present', function() {
      assert(dataPresent.height({feet: '5'}), 'height data not present with feet only');
    });

    it('is false without the feet', function() {
      assert(!dataPresent.height({inches: '5'}), 'height data present with inches only');
      assert(!dataPresent.height({}), 'height data present when blank');
    });
  });
});

'use strict';

import assert           from 'assert';
import {
  showCDLUnder21,
  needsAddress
} from '../../../../client/helpers/data/cdl';

describe('Data helpers for cdl data', function() {
  let props;
  beforeEach(function() {
    props = {
      addApp: '',
      dateOfBirth: {
        month: '03',
        day: '10',
        year: (new Date().getFullYear() - 15).toString()
      }
    };
  });
  describe('#showCDLUnder21', function() {
    it('returns false when user is on regular IDDL application', function() {
      props.addApp = 'iddl';
      assert.equal(showCDLUnder21(props), false);
    });

    it('returns false when user is older than 21', function() {
      props.addApp = 'cdl';
      props.dateOfBirth = '1970';
      assert.equal(showCDLUnder21(props), false);
    });

    it('returns true when user is under than 21 and is on cdl application', function() {
      props.addApp = 'cdl';
      assert.equal(showCDLUnder21(props), true);
    });
  });

  describe('#needsAddress', function() {
    it('returns true if props does not have isResident property', function() {
      assert.equal(needsAddress(props), true);
    });
    it('returns true if props has isResident property that equals "Yes"', function() {
      props.isResident = 'Yes';
      assert.equal(needsAddress(props), true);
    });
    it('returns false if props has isResident property that equals "No"', function() {
      props.isResident = 'No';
      assert.equal(needsAddress(props), false);
    });
  });
});
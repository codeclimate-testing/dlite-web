'use strict';

const assert = require('assert');

import {
  startsWithAdd,
  getTextFromPathname
} from '../../../../client/helpers/data/pathnames';

describe('Data helpers for pathnames', function() {
  describe('#startsWithAdd', function() {
    it('returns true if pathname begins with string /add/', function() {
      let pathname = '/add/driver-license';
      assert.equal(startsWithAdd(pathname), true);
    });

    it('returns false if pathname begins with string /apply/', function() {
      let pathname = '/apply/what-do-you-want-to-do-today';
      assert.equal(startsWithAdd(pathname), false);
    });
  });

  describe('#getTextFromPathname', function() {
    let props;
    const applyString = 'I am going through the initial flow';
    const addString = 'I am adding another card after reaching the summary';

    beforeEach(function() {
      props = {
        location: {
          pathname: ''
        }
      };
    });

    it('returns second argument if startsWithAdd is false', function() {
      props.location.pathname = '/apply/choose-card-type';
      assert.equal(getTextFromPathname(props, applyString, addString), applyString);
    });

    it('returns the third argument if startsWithAdd is true', function() {
      props.location.pathname = '/add/driver-license';
      assert.equal(getTextFromPathname(props, applyString, addString), addString);
    });

    it('returns the second argument if props does not have a location property', function() {
      props = '';
      assert.equal(getTextFromPathname(props, applyString, addString), applyString);
    });

  });
});

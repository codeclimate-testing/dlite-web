'use strict';

import assert from 'assert';

import {
  buildCookie,
  getAppNameCookie,
  getLoggedIn
} from '../../../../client/helpers/data/cookies';

describe('Data helpers for cookies', function() {

  let stringToFind = 'appName';
  let value = 'id-and-license';

  describe('#buildCookie', function() {
    it('adds an appName cookie if one doesnt already exist', function() {
      buildCookie(stringToFind, value);
      assert.equal(document.cookie, `${stringToFind}=${value}`)
    });
  });

  describe('#getAppNameCookie', function() {
    it('returns the value', function() {
      assert.equal(getAppNameCookie(document.cookie), value);
    });
  });

  describe('#getLoggedIn', function() {
    it('returns the value', function() {
      document.cookie = 'isLoggedIn=true'
      assert.equal(getLoggedIn(document.cookie), 'true');
    });
  });
});
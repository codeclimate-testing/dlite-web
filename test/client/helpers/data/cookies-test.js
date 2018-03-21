'use strict';

import assert from 'assert';

import {
  buildLoggedIn,
  buildAppName,
  getAppNameCookie,
  isLoggedIn
} from '../../../../client/helpers/data/cookies';

describe('Data helpers for cookies', function() {

  describe('#buildLoggedIn', function() {
    it('sets a cookie isLoggedIn to true', function() {
      buildLoggedIn();
      assert.equal(getLoggedIn(), 'true');
    });
  });

  describe('#buildAppName', function() {
    it('sets a cookie appName to given value', function() {
      buildAppName('anApp');
      assert.equal(getAppNameCookie(), 'anApp');
    });
  });

  describe('#getAppNameCookie', function() {
    it('returns the value', function() {
      document.cookie = 'appName=id-and-license';
      assert.equal(getAppNameCookie(), 'id-and-license');
    });
  });

  describe('#getLoggedIn', function() {
    it('returns the value', function() {
      document.cookie = 'isLoggedIn=true';
      assert.equal(getLoggedIn(), 'true');
    });
  });
});
'use strict';

import assert from 'assert';

import {
  buildAppName,
  getAppNameCookie,
  buildLoggedIn,
  getLoggedIn,
  isLoggedIn,
  buildLoggedOut,
  saveLanguageCookie,
  getLanguageFromCookie
} from '../../../../client/helpers/data/cookies';

describe('Data helpers for cookies', function() {

  describe('#buildAppName', function() {
    it('saves appName cookie to given value', function() {
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

  describe('#buildLoggedIn', function() {
    it('sets a cookie isLoggedIn to true', function() {
      buildLoggedIn();
      assert.equal(getLoggedIn(), 'true');
    });
  });

  describe('#getLoggedIn', function() {
    it('returns the value', function() {
      document.cookie = 'isLoggedIn=true';
      assert.equal(getLoggedIn(), 'true');
    });
  });

  describe('#isLoggedIn', function() {
    it('returns false if cookie isLoggedIn value is false', function() {
      document.cookie = 'isLoggedIn=false';
      assert.equal(isLoggedIn(), false);
    });
    it('returns true if cookie isLoggedIn value is true', function() {
      document.cookie = 'isLoggedIn=true';
      assert.equal(isLoggedIn(), true);
    });
  });

  describe('#buildLoggedOut', function() {
    it('sets isLoggedIn cookie to false', function() {
      buildLoggedOut();
      assert.equal(isLoggedIn(), false);
    });
  });

  describe('#saveLanguageCookie', function() {
    it('adds language cookie with given value', function() {
      saveLanguageCookie('newLanguage');
      assert.equal(getLanguageFromCookie(), 'newLanguage');
    });
  });

  describe('#getLanguageFromCookie', function() {
    it('gets the value saved to the language cookie', function() {
      assert.equal(getLanguageFromCookie(), 'newLanguage');
    });
  });
});
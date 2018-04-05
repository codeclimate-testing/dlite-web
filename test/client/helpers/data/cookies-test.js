'use strict';

import assert from 'assert';

import {
  buildAppName,
  getAppNameCookie,
  saveLanguageCookie,
  getLanguageFromCookie
} from '../../../../client/helpers/data/cookies';

describe('Data helpers for cookies', function() {

  describe('#buildAppName', function() {
    let props;
    beforeEach(function() {
      props = {
        chooseApp: '',
        location: {
          pathname: ''
        }
      }
    });
    it('saves appName cookie to given value', function() {
      props.chooseApp = 'anApp';
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
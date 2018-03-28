'use strict';

import assert from 'assert';

import {
  buildAppName,
  getAppNameCookie,
  buildLoggedIn,
  getLoggedIn,
  isLoggedIn,
  afterIntro,
  requireLogIn,
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

  describe('#afterIntro', function() {
    it('returns false if pathname is in the introPages array', function() {
      let pathname = '/apply/choose-language';
      assert.equal(afterIntro(pathname), false);
    });
    it('returns true if pathname is not in the introPages array', function() {
      let pathname = '/apply/summary';
      assert.equal(afterIntro(pathname), true);
    });
  });

  describe('#requireLogIn', function() {
    let props;
    beforeEach(function() {
      props = {
        location: {
          pathname: ''
        }
      };
      document.cookie = '';
    });

    it('returns false if pathname is an intro page', function() {
      props.location.pathname = '/apply/choose-application';
      assert.equal(requireLogIn(props), false);
    });
    it('returns false if user is logged in', function() {
      document.cookie = 'isLoggedIn=true;path=/';
      assert.equal(requireLogIn(props), false);
    });
    it('returns true if user is not logged in and the pathname is not an intro page', function() {
      document.cookie = 'isLoggedIn=false;path=/';
      props.location.pathname = '/apply/summary';
      process.env.APP_ENV = 'production';
      assert.equal(requireLogIn(props, process.env.APP_ENV), true);
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
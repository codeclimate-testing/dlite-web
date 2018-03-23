'use strict';

import assert from 'assert';

import {
  buildLoggedIn,
  getLoggedIn,
  buildAppName,
  getAppNameCookie,
  isLoggedIn,
  afterIntro,
  isProduction,
  requireLogIn
} from '../../../../client/helpers/data/cookies';

describe('Data helpers for cookies', function() {

  describe('#buildLoggedIn', function() {
    it('sets a cookie isLoggedIn to true', function() {
      buildLoggedIn();
      assert.equal(getLoggedIn(), 'true');
    });
  });

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

  describe('#isProduction', function() {
    it('returns true if app_env is production', function() {
      let env = 'production';
      assert.equal(isProduction(env), true);
    });
    it('returns false if app_env is development', function() {
      let env = 'development';
      assert.equal(isProduction(env), false);
    });
    it('returns false if app_env is test', function() {
      let env = 'test';
      assert.equal(isProduction(env), false);
    });
    it('returns false if app_env is acceptance', function() {
      let env = 'acceptance';
      assert.equal(isProduction(env), false);
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
    let props, appEnv;
    beforeEach(function() {
      appEnv = 'production';
      props = {
        location: {
          pathname: ''
        }
      };
      document.cookie = '';
    });
    it('returns false if app_env is development', function() {
      appEnv = 'development';
      assert.equal(requireLogIn(props, appEnv), false);
    });
    it('returns false if app_env is test', function() {
      appEnv = 'test';
      assert.equal(requireLogIn(props, appEnv), false);
    });
    it('returns false if app_env is acceptance', function() {
      appEnv = 'acceptance';
      assert.equal(requireLogIn(props, appEnv), false);
    });
    it('returns false if pathname is an intro page', function() {
      props.location.pathname = '/apply/choose-application';
      assert.equal(requireLogIn(props, appEnv), false);
    });
    it('returns false if user is logged in', function() {
      document.cookie = 'isLoggedIn=true';
      assert.equal(requireLogIn(props, appEnv), false);
    });
    it('returns true if user is not logged in and the pathname is not an intro page and the app_env is production', function() {
      document.cookie = 'isLoggedIn=false';
      props.location.pathname = '/apply/summary';
      appEnv = 'production';
      assert.equal(requireLogIn(props, appEnv), true);
    });
  });
});
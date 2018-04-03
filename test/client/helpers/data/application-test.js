'use strict';

import assert from 'assert';

import {
  languageIsSelected,
  buildConfCode,
  isProduction,
  afterIntro,
  requireLogIn
} from '../../../../client/helpers/data/application';

describe('Data helpers for application', function() {
  describe('#languageIsSelected', function() {
    it('is true when string exists', function() {
      assert.equal(languageIsSelected('en'), true);
    });

    it('is false when value is blank', function() {
      assert.equal(languageIsSelected(''), false);
    });
  });

  describe('#buildConfCode', function() {
    it('returns the first 8 digits of application id with an added dash in the middle and letters in uppercase', function() {
      let props = {
        id: '2b417380-20d6-11e8-9fbd-ef21805fde52'
      };
      assert.equal(buildConfCode(props), '2B41-7380');
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

  describe('#isProduction', function() {
    it('returns true if env is production', function() {
      assert.equal(isProduction('production'), true);
    });
    it('returns false if env is development', function() {
      assert.equal(isProduction('development'), false);
    });
  });

  describe('#requireLogIn', function() {
    let url;
    beforeEach(function() {
      url = '';
      document.cookie = '';
    });

    it('returns false if pathname is an intro page', function() {
      url = '/apply/choose-application';
      assert.equal(requireLogIn(url), false);
    });
    it('returns false if user is logged in', function() {
      document.cookie = 'isLoggedIn=true;path=/';
      assert.equal(requireLogIn(url), false);
    });
    it('returns true if user is not logged in and the pathname is not an intro page', function() {
      document.cookie = 'isLoggedIn=false;path=/';
      url = '/apply/summary';
      process.env.APP_ENV = 'production';
      assert.equal(requireLogIn(url, process.env.APP_ENV), true);
    });
  });
});
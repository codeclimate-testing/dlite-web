'use strict';

import assert from 'assert';

import {
  languageIsSelected,
  buildConfCode,
  isProduction,
  requireLogIn,
  afterIntro,
  hasMultipleApps
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

  describe('#isProduction', function() {
    it('returns true if env is production', function() {
      assert.equal(isProduction('production'), true);
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

  describe('#afterIntro', function() {
    it('returns false if page is an intro page', function() {
      assert.equal(afterIntro('/apply/choose-application'), false);
    });
    it('returns true if page is not an intro page', function() {
      assert.equal(afterIntro('/apply/id-and-license/legal-name'), true);
    });
  });

  describe('#hasMultipleApps', function() {
    let props;
    beforeEach(function() {
      props = {
        userData: {
          appsLength: 0
        }
      }
    });

    it('returns true if appsLength is greater than 1', function() {
      props.userData.appsLength = 2;
      assert.equal(hasMultipleApps(props), true);
    });
    it('returns false if appsLength is 1', function() {
      props.userData.appsLength = 1;
      assert.equal(hasMultipleApps(props), false);
    });
  });
});
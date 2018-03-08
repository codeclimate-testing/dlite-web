'use strict';

const assert = require('assert');
const dataHelper = require('../../../support/data-helper');
const OauthStrategy = require('../../../../server/models/oauth/strategy');

let authorizer = OauthStrategy.onAuthentication;
let Strategy = OauthStrategy.Strategy;

describe('OauthStrategy', function () {
  describe('#onAuthentication', function() {
    it('finds or creates a database user, and returns it', function (done) {
      authorizer('aToken', 'rToken', { uuid: 'A123' }, function (err, user) {
        assert(user[0].uuid);
        done();
      });
    });
  });

  describe('#userProfile', function() {
    var strategy = new Strategy({
      callbackURL: 'http://lvh.me/auth/oauth/callback',
      clientID: 'ABC123',
      clientSecret: 'secret'
    }, function () {});

    strategy._oauth2.get = function (url, accessToken, callback) {
      if (url !== 'https://api.idmelabs.com/api/public/v3/attributes.json') {
        callback(new Error('wrong url argument'));
        return;
      }

      if (accessToken !== 'token') {
        callback(new Error('wrong token argument'));
        return;
      }

      var body = JSON.stringify(dataHelper.fakeUserData());

      callback(null, body, undefined);
    };

    var profile;

    before(function (done) {
      strategy.userProfile('token', function (err, p) {
        if (err) {
          done(err);
        }
        else {
          profile = p;
          done();
        }
      });
    });

    it('should parse profile', function () {
      assert.equal(profile.uuid, 'd733a89e2e634f04ac2fe66c97f71612');
      assert.equal(profile.email, 'test.user@id.me');
      assert.equal(profile.full_name, 'Test Success');
    });
  });
});

'use strict';

const assert = require('assert');
const sinon = require('sinon');
const dataHelper = require('../../../support/data-helper');
const OauthStrategy = require('../../../../server/models/oauth/strategy');

let authorizer = OauthStrategy.onAuthentication;
let Strategy = OauthStrategy.Strategy;

describe('OauthStrategy', function () {
  describe('#onAuthentication', function() {
    it('finds or creates a database user, and returns it', function (done) {
      authorizer('aToken', 'rToken', { uuid: 'A123' }, function (err, user) {
        assert(user.uuid);
        done(err);
      });
    });
  });

  describe('#userProfile', function() {
    let strategy, doneSpy;

    beforeEach(function() {
      strategy = OauthStrategy.strategy;
      doneSpy = sinon.spy();
      strategy._oauth2.get = sinon.spy();
      strategy.userProfile('access-token', doneSpy);
    });

    it('makes a oauth get request to the right url with the right token', function() {
      assert(strategy._oauth2.get.called);
      assert.equal(strategy._oauth2.get.args[0][0], strategy._userProfileURL);
      assert.equal(strategy._oauth2.get.args[0][1], 'access-token');
    });

    it('processes the request by parsing the request body', function() {
      let requestCallback = strategy._oauth2.get.args[0][2];
      requestCallback(null, JSON.stringify(dataHelper.fakeUserData()));
      assert(doneSpy.called);
      assert(!doneSpy.args[0][0]);
      assert.deepEqual(doneSpy.args[0][1], {uuid: "d733a89e2e634f04ac2fe66c97f71612"});
    });

    it('passes along an error when it recieves one in the request callback', function() {
      let requestCallback = strategy._oauth2.get.args[0][2];
      requestCallback('fire in the hole!');
      assert(doneSpy.args[0][0]);
    });

    it('passes along an error when the response is not parsable as json', function() {
      let requestCallback = strategy._oauth2.get.args[0][2];
      requestCallback(null, '{"half-a-:');
      assert(doneSpy.args[0][0]);
    });
  });
});

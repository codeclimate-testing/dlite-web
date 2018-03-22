'use strict';

import assert       from 'assert';
import sinon        from 'sinon';
import AutoLogout   from '../../../../client/helpers/handlers/auto-logout';
import { createMemoryHistory }  from 'history';


describe('auto logout class', function() {
  let history, appName, event, auto, setTimeout;

  beforeEach(function() {
    history = createMemoryHistory('/');
    appName = '';
    event = {
      preventDefault: sinon.spy()
    };
    window = {
      addEventListener: sinon.spy(),
      removeEventListener: sinon.spy()
    };
    auto              = new AutoLogout(history, appName);
    auto.setTimeout   = sinon.spy();
    auto.destroy      = sinon.spy();
    auto.clearTimeout = sinon.spy();
    setTimeout        = sinon.spy();
  });

  describe('constructor', function() {
    it('creates an object with events, logout, warn, resetTimeout, history, and appName keys', function() {
      assert.ok(auto.hasOwnProperty('events'));
      assert.ok(auto.hasOwnProperty('logout'));
      assert.ok(auto.hasOwnProperty('warn'));
      assert.ok(auto.hasOwnProperty('resetTimeout'));
      assert.ok(auto.hasOwnProperty('history'));
      assert.ok(auto.hasOwnProperty('appName'));
    });
    it('adds event listeners to all the events in the events array', function() {
      assert.ok(window.addEventListener.calledWith('load'));
      assert.ok(window.addEventListener.calledWith('scroll'));
      assert.ok(window.addEventListener.calledWith('click'));
      assert.ok(window.addEventListener.calledWith('mousemove'));
      assert.ok(window.addEventListener.calledWith('mousedown'));
      assert.ok(window.addEventListener.calledWith('keypress'));
    });
    it('calls setTimeout', function() {
      auto.constructor(history, appName);
      assert.ok(auto.setTimeout.called);
    });
  });

  describe('setTimeout', function() {
    it('sets timeout to 2 minutes', function() {
      assert.equal(auto.logoutTimeout._idleTimeout, 120000);
    });
    it('sets timeout to callback this.logout', function() {
      assert.deepEqual(auto.logoutTimeout._onTimeout, auto.logout);
    });
  });

  describe('logout', function() {
    beforeEach(function() {
      auto.logout();
    });
    it('pushes logout url to history', function() {
      assert.equal(history.location.pathname, '/apply/logout');
    });
    it('calls destroy', function(){
      assert.ok(auto.destroy.called);
    });
  });

  describe('destroy', function() {
    beforeEach(function() {
      auto.destroy();
    });

    it('resets the timeout', function() {
      assert.ok(auto.logoutTimeout._idleTimeout, 120000);
    });
  });
});


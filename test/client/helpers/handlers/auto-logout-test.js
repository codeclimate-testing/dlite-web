'use strict';

import assert       from 'assert';
import sinon        from 'sinon';
import AutoLogout   from '../../../../client/helpers/handlers/auto-logout';
import { createMemoryHistory }  from 'history';

describe('auto logout class', function() {
  let history, dispatch, event, auto, setTimeout;

  beforeEach(function() {
    history = createMemoryHistory('/');
    dispatch = sinon.spy();
    event = {
      preventDefault: sinon.spy()
    };
    window = {
      addEventListener: sinon.spy(),
      removeEventListener: sinon.spy()
    };
    auto              = new AutoLogout(history, dispatch);
    auto.setTimeout   = sinon.spy();
    auto.destroy      = sinon.spy();
    auto.clearTimeout = sinon.spy();
    setTimeout        = sinon.spy();
  });

  describe('constructor', function() {
    it('creates an object with events, logout, warn, resetTimeout, history, and dispatch keys', function() {
      assert.ok(auto.hasOwnProperty('events'));
      assert.ok(auto.hasOwnProperty('logout'));
      assert.ok(auto.hasOwnProperty('warn'));
      assert.ok(auto.hasOwnProperty('resetTimeout'));
      assert.ok(auto.hasOwnProperty('history'));
      assert.ok(auto.hasOwnProperty('dispatch'));
    });
    it('adds event listeners to all the events in the events array', function() {
      assert.ok(window.addEventListener.calledWith('load'));
      assert.ok(window.addEventListener.calledWith('click'));
      assert.ok(window.addEventListener.calledWith('touchstart'));
      assert.ok(window.addEventListener.calledWith('mousedown'));
      assert.ok(window.addEventListener.calledWith('keypress'));
    });
    it('calls setTimeout', function() {
      auto.constructor(history, dispatch);
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

  describe('destroy', function() {
    beforeEach(function() {
      auto.destroy();
    });

    it('resets the timeout', function() {
      assert.ok(auto.logoutTimeout._idleTimeout, 120000);
    });
  });
});


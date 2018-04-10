'use strict';

const assert              = require('assert');
const getCardType         = require('../../../../../server/models/parsers/server-to-client-parsers/get-card-type');

describe('extracting IDDL card type', function() {
  let DLApp, IDApp;
  beforeEach(function() {
    DLApp = {
      isApplying: true,
      action: ''
    };
    IDApp = {
      isApplying: true,
      action: ''
    }
  });

  it('returns an array with both ID and DL if user is getting both cards new', function() {
    DLApp.action = 'new';
    IDApp.action = 'new';
    assert.deepEqual(getCardType(IDApp, DLApp), ['ID', 'DL']);
  });

  it('returns an array with just ID if user is getting both cards but not new', function() {
    DLApp.action = 'renew';
    IDApp.action = 'replace';
    assert.deepEqual(getCardType(IDApp, DLApp), ['DL']);
  });

  it('returns an array with just DL if user is just getting a DL', function() {
    IDApp.isApplying = false;
    IDApp.action = '';
    assert.deepEqual(getCardType(IDApp, DLApp), ['DL']);
  });

  it('returns an array with just DL if user is just getting a DL and an ID (not both new)', function() {
    IDApp.isApplying = false;
    assert.deepEqual(getCardType(IDApp, DLApp), ['DL']);
  });

  it('returns an array with just ID if user is only getting an ID', function() {
    DLApp.isApplying = false;
    IDApp.isApplying = true;
    assert.deepEqual(getCardType(IDApp, DLApp), ['ID']);
  });

  it('returns an empty array if not getting any card', function() {
    DLApp.isApplying = false;
    IDApp.isApplying = false;
    assert.deepEqual(getCardType(IDApp, DLApp), []);
  });
});

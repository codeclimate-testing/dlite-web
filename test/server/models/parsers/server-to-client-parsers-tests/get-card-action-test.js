'use strict';

const assert              = require('assert');
const getCardAction       = require('../../../../../server/models/parsers/server-to-client-parsers/get-card-action');

describe('extracting IDDL card action', function() {
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

  it('returns "new" if user is getting both cards new', function() {
    DLApp.action = 'new';
    IDApp.action = 'new';
    assert.equal(getCardAction(IDApp, DLApp), 'new');
  });
  it('returns DL action if user is getting both cards but not new', function() {
    DLApp.action = 'renew';
    IDApp.action = 'new';
    assert.equal(getCardAction(IDApp, DLApp), DLApp.action);
  });
  it('returns the card action if user is getting just one card', function() {
    DLApp.isApplying = false;
    assert.equal(getCardAction(IDApp, DLApp), IDApp.action);
  });
});

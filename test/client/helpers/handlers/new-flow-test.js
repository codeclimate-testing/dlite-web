'use strict';

import assert       from 'assert';
import sinon        from 'sinon';
import onNewFlow    from '../../../../client/helpers/handlers/new-flow';

describe('newFlow', function() {
  let editKey, dispatch, newFlow;

  beforeEach(function() {
    editKey = '';
    dispatch = sinon.spy();
    newFlow = onNewFlow(dispatch);
  });

  it('dispatches iddl to CHOOSE_APP to update the chosen app in redux', function() {
    editKey = 'legalName';
    newFlow(editKey);
    let action = dispatch.getCall(0).args[0];
    assert.ok(action.type === 'CHOOSE_APP');
    assert.equal(action.payload.value, 'iddl');
  });

  it('dispatches cdl to CHOOSE_APP to update the chosen app in redux', function() {
    editKey = 'cdlLegalName';
    newFlow(editKey);
    let action = dispatch.getCall(0).args[0];
    assert.ok(action.type === 'CHOOSE_APP');
    assert.equal(action.payload.value, 'cdl');
  });

  it('dispatches the GET_DATA_SUCCESS action to reset the iddl application if editKey is legalName', function() {
    editKey = 'legalName';
    newFlow(editKey);
    let action = dispatch.getCall(1).args[0];
    assert.ok(action.type === 'GET_DATA_SUCCESS');
    assert.ok(action.payload.data.hasOwnProperty('application'));
    assert.ok(!action.payload.data.hasOwnProperty('cdl'));
  });

  it('dispatches the GET_DATA_SUCCESS action to reset the cdl application if editKey is cdlLegalName', function() {
    editKey = 'cdlLegalName';
    newFlow(editKey);
    let action = dispatch.getCall(1).args[0];
    assert.ok(action.type === 'GET_DATA_SUCCESS');
    assert.ok(action.payload.data.hasOwnProperty('cdl'));
    assert.ok(!action.payload.data.hasOwnProperty('application'));
  });

});



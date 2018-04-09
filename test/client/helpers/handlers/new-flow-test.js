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

  it('dispatches the GET_DATA_SUCCESS action to reset the iddl application if editKey is legalName', function() {
    editKey = 'legalName';
    newFlow(editKey);
    let action = dispatch.getCall(0).args[0];
    assert.ok(action.type === 'GET_DATA_SUCCESS');
    assert.ok(action.payload.data.hasOwnProperty('application'));
    assert.ok(!action.payload.data.hasOwnProperty('cdl'));
  });

  it('dispatches the GET_DATA_SUCCESS action to reset the cdl application if editKey is cdlLegalName', function() {
    editKey = 'cdlLegalName';
    newFlow(editKey);
    let action = dispatch.getCall(0).args[0];
    assert.ok(action.type === 'GET_DATA_SUCCESS');
    assert.ok(action.payload.data.hasOwnProperty('cdl'));
    assert.ok(!action.payload.data.hasOwnProperty('application'));
  });

});



'use strict';

import assert       from 'assert';
import sinon        from 'sinon';
import onFlowChange from '../../../../client/helpers/handlers/on-flow-change';

describe('onFlowChange', function() {
  let value, dispatch, onChange, flow, cardType, appID, fetcher;

  beforeEach(function() {
    value = ''
    dispatch = sinon.spy();
    onChange = onFlowChange(dispatch);
    flow = 'edit';
    cardType = '';
    appID = '1001';
  });

  it('dispatches the ADD_APP action', function() {
    onChange(flow, cardType);
    assert.ok(dispatch.calledWith({
      type: 'ADD_APP',
      payload: { value: flow}
    }));
  });

  it('dispatches the ADD_APP action when flow value is blank', function() {
    flow = '';
    onChange(flow, cardType);
    assert.ok(dispatch.calledWith({
      type: 'ADD_APP',
      payload: { value: flow}
    }));
  });

  it('dispatches updateCardType when cardType is also passed', function() {
    cardType = 'DT';
    onChange(flow, cardType);
    assert.ok(dispatch.calledWith({
      type: 'UPDATE_CARD_TYPE',
      payload: {
        name: 'addFromSummary',
        value: cardType
      }
    }));
  });

  it('dispatches updateCardType when cardType is an array', function() {
    cardType = ['DT', 'ID'];
    onChange(flow, cardType);
    assert.ok(dispatch.calledWith({
      type: 'UPDATE_CARD_TYPE',
      payload: {
        name: 'addFromSummary',
        value: cardType
      }
    }));
  });

  it('dispatches updateCardAction when flow equals "add"', function() {
    flow = 'add';
    onChange(flow, cardType);
    assert.ok(dispatch.calledWith({
      type: 'UPDATE_CARD_ACTION',
      payload: {
        name: 'newFlow',
        value: ''
      }
    }));
  });
});



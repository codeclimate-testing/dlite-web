'use strict';

import assert from 'assert';
import sinon from 'sinon';

import onSelectChange from '../../../../client/helpers/handlers/on-select-change';

describe('onSelectChange', function() {
  let event, dispatch, onChange, action;

  beforeEach(function() {
    action = sinon.spy();
    event = {
      target: {
        getAttribute: (i) => { return i; }
      }
    };
    dispatch = sinon.spy();
    onChange = onSelectChange(action, dispatch);
  });

  it('dispatches an action with the name and value', function() {
    onChange(event);
    assert(action.calledWith('name', 'value'));
    assert(dispatch.called);
  });
});



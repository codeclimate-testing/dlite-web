'use strict';

import assert       from 'assert';
import sinon        from 'sinon';
import onFlowChange from '../../../../client/helpers/handlers/on-flow-change';

describe('onFlowChange', function() {
  let props, dispatch, onChange;

  beforeEach(function() {
    props = {
      location: {
        pathname: ''
      },
      addApp: ''
    };
    dispatch = sinon.spy();
    onChange = onFlowChange(dispatch);
  });

  it('dispatches an action with the value if the split pathname equals "driver-license"', function() {
    props.location.pathname = '/add/driver-license/';
    onChange(props);
    assert.ok(dispatch.calledWith({
      type: 'ADD_APP',
      payload: { value: 'driver-license'}
    }));
  });

  it('does not dispatch an action if the existing state already matches the split pathname', function() {
    props.location.pathname = '/add/driver-license/';
    props.addApp = 'driver-license';
    onChange(props);
    assert.equal(dispatch.called, false);
  });
});



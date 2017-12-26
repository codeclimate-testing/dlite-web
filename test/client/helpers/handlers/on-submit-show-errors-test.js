'use strict';

import assert from 'assert';
import sinon from 'sinon';

import onSubmitShowErrors from '../../../../client/helpers/handlers/on-submit-show-errors';

describe('onSubmitShowErrors', function() {
  let event, dispatch, onSubmit;

  beforeEach(function() {
    event = { preventDefault: sinon.spy() };
    dispatch = sinon.spy();
    onSubmit = onSubmitShowErrors(dispatch);
  });

  it('when called with stop the form from doing a default submission', function() {
    onSubmit(event);
    assert(event.preventDefault.called, 'event not prevented from doing a real submission');
  });

  it('dispatches an action to clear validations', function() {
    onSubmit(event);
    assert(
      dispatch.calledWith({
        type: 'ADD_VALIDATION',
        payload: {value: 'all'}
      }),
      'dispatch not called'
    );
  });
});


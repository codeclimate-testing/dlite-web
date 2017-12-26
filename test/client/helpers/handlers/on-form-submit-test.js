'use strict';

import assert from 'assert';
import sinon from 'sinon';

import onFormSubmit from '../../../../client/helpers/handlers/on-form-submit-generator';

describe('onFormSubmit', function() {
  let event, dispatch, onSubmit;

  beforeEach(function() {
    event = { preventDefault: sinon.spy() };
    dispatch = sinon.spy();
    onSubmit = onFormSubmit(dispatch);
  });

  it('when called with stop the form from doing a default submission', function() {
    onSubmit(event);
    assert(event.preventDefault.called, 'event not prevented from doing a real submission');
  });

  it('dispatches an action to clear validations', function() {
    onSubmit(event);
    assert(
      dispatch.calledWith({
        type: 'CLEAR_VALIDATIONS',
        payload: {value: undefined}
      }),
      'dispatch not called'
    );
  });
});


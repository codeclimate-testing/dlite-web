'use strict';

import assert         from 'assert';
import { spy }        from 'sinon';
import navigateOnBack from '../../../../client/helpers/handlers/navigate-on-back';
import onSubmitShowErrors from '../../../../client/helpers/handlers/on-submit-show-errors';
import { createMemoryHistory }  from 'history';

describe('navigateOnBack', function() {
  let event, dispatch, onSubmit, props, validations;

  beforeEach(function() {
    event = { preventDefault: spy() };
    dispatch = spy();
    props = {
      location: {},
      onSubmit: spy(),
      history: createMemoryHistory('/'),
      onSubmitShowErrors: onSubmitShowErrors(dispatch)
    };
    validations = {
      all: spy(),
      isValid: spy()
    };
  });

  it('if props.location.state.nextAddress does not equal "summary", will go back one step in history', function() {
    navigateOnBack(props, validations)(event);
    assert.equal(props.history.entries[0].pathname, '/');
  });

  it('if props.location.state.nextAddress equals "summary", it will check the validations before going back', function() {
    props.location = {
      state: {
        nextAddress: 'summary'
      }
    };
    props.validations = false;
    navigateOnBack(props, validations)(event);

    assert(
      dispatch.calledWith({
        type: 'ADD_VALIDATION',
        payload: {value: 'all'}
      }),
      'dispatch not called'
    );
  });
});

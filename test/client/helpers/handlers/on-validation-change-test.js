'use strict';

import assert from 'assert';
import sinon from 'sinon';

import {
  onBlurValidateGenerator,
  onFocusClearValidationGenerator
} from '../../../../client/helpers/handlers/on-validation-change';

describe('onValidationChange', function() {
  let event, dispatch;

  beforeEach(function() {
    event = { target: {name: 'nombre'} };
    dispatch = sinon.spy();
  });

  it('#onBlurValidateGenerator creates a handler that triggers a add validation action', function() {
    let handler = onBlurValidateGenerator(dispatch);
    handler(event);

    assert(dispatch.called, 'dispatch not called');
    assert(
      dispatch.calledWith({
        type: 'ADD_VALIDATION',
        payload: {value: 'nombre'}
      }),
      'dispatch called with something unexpected'
    );
  });

  it('#onFocusClearValidationGenerator creates a handler that triggers a remove validation action', function() {
    let handler = onFocusClearValidationGenerator(dispatch);
    handler(event);

    assert(dispatch.called, 'dispatch not called');
    assert(
      dispatch.calledWith({
        type: 'REMOVE_VALIDATION',
        payload: {value: 'nombre'}
      }),
      'dispatch called with something unexpected'
    );
  });
});



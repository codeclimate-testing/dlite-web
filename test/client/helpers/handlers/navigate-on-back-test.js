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
      addressName: '',
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

  it('will go back one step in history if props.addressName key page does not have "canGoBack" property', function() {
    props.addressName = 'wdywtdt';
    navigateOnBack(props, validations)(event);
    assert.equal(props.history.entries[0].pathname, '/');
  });

  it('will go back one step in history if props.addressName key page has "canGoBack" property that is equal to true', function() {
    props.addressName = 'updateAndCorrect';
    navigateOnBack(props, validations)(event);
    assert.equal(props.history.entries[0].pathname, '/');
  });

  it('it will check the validations before going back if props.addressName key page has "canGoBack" property that is false', function() {
    props.addressName = 'medicalHistory';
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

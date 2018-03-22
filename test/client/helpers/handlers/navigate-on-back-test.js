'use strict';

import assert         from 'assert';
import { spy }        from 'sinon';
import navigateOnBack from '../../../../client/helpers/handlers/navigate-on-back';
import onSubmitShowErrors from '../../../../client/helpers/handlers/on-submit-show-errors';
import { createMemoryHistory }  from 'history';

describe.only('navigateOnBack', function() {
  let event, dispatch, onSubmit, props, validations, cookie, env;

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
    cookie = 'isLoggedIn=true';
    env='production';
  });

  it('will go back one step in history if props.addressName key page does not have "canGoBack" property', function() {
    props.addressName = 'wdywtdt';
    navigateOnBack(props, validations, env, cookie)(event);
    assert.equal(props.history.entries[0].pathname, '/');
  });

  it('will route user to sign-in page if requireLogIn is true', function() {
    cookie = 'isLoggedIn=false';
    env='development';
    navigateOnBack(props, validations, env, cookie)(event);
    console.log(props.history);
    assert.equal(props.history.entries[0].pathname, '/apply/id-and-license/sign-in');
  });

  it('will go back one step in history if props.addressName key page has "canGoBack" property that is equal to true', function() {
    props.addressName = 'updateAndCorrect';
    navigateOnBack(props, validations, env, cookie)(event);
    assert.equal(props.history.entries[0].pathname, '/');
  });

  it('it will check the validations before going back if props.addressName key page has "canGoBack" property that is false', function() {
    props.addressName = 'medicalHistory';
    props.validations = false;
    navigateOnBack(props, validations, env, cookie)(event);

    assert(
      dispatch.calledWith({
        type: 'ADD_VALIDATION',
        payload: {value: 'all'}
      }),
      'dispatch not called'
    );
  });


});

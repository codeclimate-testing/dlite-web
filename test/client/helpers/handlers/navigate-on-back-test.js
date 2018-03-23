'use strict';

import assert         from 'assert';
import { spy }        from 'sinon';
import navigateOnBack from '../../../../client/helpers/handlers/navigate-on-back';
import onSubmitShowErrors from '../../../../client/helpers/handlers/on-submit-show-errors';
import { createMemoryHistory }  from 'history';

describe('navigateOnBack', function() {
  let event, dispatch, props, validations, env;

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
    document.cookie = 'isLoggedIn=true';
    env='production';
  });

  it('will go back one step in history if props.addressName key page does not have "validateFromSummary" property', function() {
    props.addressName = 'chooseCardType';
    navigateOnBack(props, validations, env)(event);
    assert.equal(props.history.goBack.calledOnce);
  });

  it('will route user to sign-in page if requireLogIn is true', function() {
    document.cookie = 'isLoggedIn=false';
    env='production';
    props.location.pathname = '/apply/id-and-license/legal-name';
    navigateOnBack(props, validations, env)(event);
    assert.equal(props.history.entries[1].pathname, '/apply/id-and-license/sign-in');
  });

  it('will go back one step in history if props.addressName key page has "validateFromSummary" property that is equal to true', function() {
    props.addressName = 'updateAndCorrect';
    navigateOnBack(props, validations, env)(event);
    assert.equal(props.history.goBack.calledOnce);
  });

  it('it will check the validations before going back if props.addressName key page has "canGoBack" property that is false', function() {
    props.addressName = 'medicalHistory';
    props.validations = false;
    navigateOnBack(props, validations, env)(event);

    assert(
      dispatch.calledWith({
        type: 'ADD_VALIDATION',
        payload: {value: 'all'}
      }),
      'dispatch not called'
    );
  });


});

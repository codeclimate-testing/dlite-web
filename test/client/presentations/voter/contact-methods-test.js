'use strict';

import assert                   from 'assert';

import 'jsdom-global/register';
import React                    from 'react';
import { createMockStore }      from 'redux-test-utils';
import { Provider }             from "react-redux";
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import { MemoryRouter }         from 'react-router-dom'
import * as dataPresent         from '../../../../client/helpers/data-present';
import ContactMethodsPage       from '../../../../client/presentations/voter-registration/contact-methods-choice.jsx';

describe('ContactMethodsPage', function() {
  let store = {
    ui: {}
  };

  const Wrapper = (props) => {
    return(
      <Provider store={createMockStore(store)}>
        <MemoryRouter>
          {props.children}
        </MemoryRouter>
      </Provider>
    );
  };

  describe('when it renders initially', function() {
    let props;
    
    beforeEach(function() {
      let dateOfBirth = {
        month: '',
        day: '',
        year: ''
      };
      let contactMethods = {
        shouldContact: '',
        emailAddress: '',
        phoneNumber: ''
      };
      let continueDisabled = !(dataPresent.contactMethods(contactMethods));

      let onChange = spy();

      props = {
        dateOfBirth,
        contactMethods,
        continueDisabled,
        onChange
      }
    });
    
    it('shows the form asking if user would like to receive election info', function() {
      let component = render(
        <Wrapper>
          <ContactMethodsPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.contact-methods-choice-form').length, 'form missing');
      assert.ok(component.find('label[for="shouldContactYes"]'), 'Yes button missing');
      assert.ok(component.find('label[for="shouldContactNo"]'), 'No button missing');
      assert.ok(component.find('label[for="shouldContactSkipQuestion"]'), 'Skip Question button missing');
    });

    // TODO add test for FAQ drawers

    // TODO add test for selecting Yes makes contact details form appear

  });

});


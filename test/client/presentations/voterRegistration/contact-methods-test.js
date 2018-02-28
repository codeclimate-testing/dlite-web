'use strict';

import assert                   from 'assert';
import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import ContactMethodsPage       from '../../../../client/presentations/voter-registration/contact-methods-page.jsx';
import store                    from '../../support/page-store';

describe('ContactMethodsPage', function() {
  const Wrapper = wrapperGenerator(store);

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
      let validations = {
        shouldContact: spy(),
        emailAddress: spy(),
        phoneNumber1: spy(),
        phoneNumber2: spy(),
        phoneNumber3: spy(),
        all: spy()
      };
      let onChange = spy();
      let locale = 'en';
      props = {
        dateOfBirth,
        contactMethods,
        validations,
        onChange,
        locale
      };
    });

    it('shows the form asking if user would like to receive election info', function() {
      let component = render(
        <Wrapper>
          <ContactMethodsPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.contact-methods-choice-form').length, 'form missing');
      assert.ok(component.find('label[for="shouldContact-Yes"]').length, 'Yes button missing');
      assert.ok(component.find('label[for="shouldContact-No"]').length, 'No button missing');
      assert.ok(component.find('label[for="shouldContact-Skip"]').length, 'Skip Question button missing');
    });

    it('answering yes shows the form to enter contact details', function() {
      props.contactMethods.shouldContact = 'Yes';
      let component = render(
        <Wrapper>
          <ContactMethodsPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.contact-methods-details-form').length, 'contact details form missing');
      assert.ok(component.find('input#emailAddress[type="text"]').length, 'email text form missing');
      assert.ok(component.find('input#phoneNumber1[type="number"]').length, 'phone first 3 digits form missing');
      assert.ok(component.find('input#phoneNumber2[type="number"]').length, 'phone second 3 digits form missing');
      assert.ok(component.find('input#phoneNumber3[type="number"]').length, 'phone last 4 digits form missing');
    });

  });

});


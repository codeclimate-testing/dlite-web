'use strict';

import assert                   from 'assert';
import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import EligibilityPage          from '../../../../client/presentations/voter-registration/eligibility-requirements-page.jsx';
import pageStore                from '../../support/page-store';

describe('EligibilityPage', function() {
  let store = Object.assign({}, pageStore);
  store.ui.accordions = ['dont-meet-eligibility-requirments'];
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let eligibilityRequirements = '';
      let onChange = spy();
      let dateOfBirth = {
        month: '',
        day: '',
        year: ''
      };
      let locale = 'en';
      props = {
        eligibilityRequirements,
        dateOfBirth,
        onChange,
        locale
      }
    });

    it('shows the form asking if user meets all the voter registration reqs', function() {
      let component = render(
        <Wrapper>
          <EligibilityPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.eligibility-requirements-form').length, 'form missing');
      assert.ok(component.find('label[for="eligibilityRequirements-Yes"]').length, 'Yes button missing');
      assert.ok(component.find('label[for="eligibilityRequirements-decline"]').length, 'Decline to answer button missing');
    });

    it('when pre-reg shows the right language in the FAQ', function() {
      let today = new Date();

      props.dateOfBirth = {
        month: (today.getMonth() + 1).toString(),
        day: (today.getDate()).toString(),
        year: (today.getFullYear() - 17).toString()
      };

      let component = render(
        <Wrapper>
          <EligibilityPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.text().includes('you are not eligible to pre-register to vote.'), 'pre-registration language not found');
    });

    it('when pre-reg shows the right age requirement bullet', function() {
      let today = new Date();

      props.dateOfBirth = {
        month: (today.getMonth() + 1).toString(),
        day: (today.getDate()).toString(),
        year: (today.getFullYear() - 17).toString()
      };

      let component = render(
        <Wrapper>
          <EligibilityPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.text().includes('I am 16 or 17 years old and would like to pre-register to vote'), 'pre-registration age requirement not found');
    });

    it('when an adult customer shows the right language', function() {
      let today = new Date();

      props.dateOfBirth = {
        month: (today.getMonth()).toString(),
        day: (today.getDate()).toString(),
        year: (today.getFullYear() - 27).toString()
      };

      let component = render(
        <Wrapper>
          <EligibilityPage  {...props} />
        </Wrapper>
      );

      assert.ok(component.text().includes('you are not eligible to register to vote.'), 'registration language not found');
    });

    it('when an adult shows the right age requirement bullet', function() {
      let today = new Date();

      props.dateOfBirth = {
        month: (today.getMonth()).toString(),
        day: (today.getDate()).toString(),
        year: (today.getFullYear() - 20).toString()
      };

      let component = render(
        <Wrapper>
          <EligibilityPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.text().includes('I am at least 18 years old'), 'registration age requirement not found');
    });
  });
});


'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import * as dataPresent         from '../../../../client/helpers/data-present';
import SocialSecurityPage       from '../../../../client/presentations/my-basics/social-security-page.jsx';
import store                    from '../../support/page-store';

describe('SocialSecurityPage', function() {

  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let socialSecurity = {
        hasSocialSecurity: '',
        socialSecurity: ''
      };

      let validations = {
        hasSocialSecurity: spy(),
        socialSecurity: spy(),
        part1: spy(),
        part2: spy(),
        part3: spy(),
        ssnAll: spy(),
        all: spy(),
        isValid: () => { return true; }
      };
      let onChange = spy();


      props = {
        socialSecurity,
        validations,
        onChange
      }
    });

    it('shows the form asking if you have have a social security number', function() {
      let component = render(
        <Wrapper>
          <SocialSecurityPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="hasSocialSecurity-No"]').length, 'No button missing');
      assert.ok(component.find('label[for="hasSocialSecurity-Yes"]').length, 'Yes button missing');
      assert.ok(component.find('.social-security-option-form').length, 'form missing');
      assert.equal(component.find('.social-security-no-form'), false);
    });

    it('selecting Yes makes form render to enter social number', function() {
      props.socialSecurity.hasSocialSecurity = 'Yes';
      let component = render(
        <Wrapper>
          <SocialSecurityPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.social-security-form').length, 'social security details form missing');
      assert.ok(component.find('input#part1[type="number"]').length, 'first 3 digit ssn missing');
      assert.ok(component.find('input#part2[type="number"]').length, 'second 2 digit ssn missing');
      assert.ok(component.find('input#part3[type="number"]').length, 'third 4 digit ssn missing');
    });

  });

});
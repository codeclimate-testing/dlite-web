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
        part1: '',
        part2: '',
        part3: ''
      }

      let onChange = spy();

      let validations = {
        ssn: spy(),
        ssnFirstSegment: spy(),
        ssnSecondSegment: spy(),
        ssnThirdSegment: spy(),
        ssnAll: spy(),
        all: spy(),
        isValid: () => { return true; }
      };

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


    it('selecting No makes next button no longer disabled and shows info message', function() {
      props.socialSecurity.hasSocialSecurity = 'No';

      let component = render(
        <Wrapper>
          <SocialSecurityPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.social-security-no-form', 'message not rendered'));
      assert.ok(component.find('.message-box .info').length, 'info message box not found');
    });

    it('selecting Yes makes form render to enter social number', function() {
      props.socialSecurity.hasSocialSecurity = 'Yes';

      let component = render(
        <Wrapper>
          <SocialSecurityPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.social-security-enter-form').length, 'form not rendered');
      assert.ok(component.find('input#part1').length, 'social input not found');
      assert.ok(component.find('input#part2').length, 'social input not found');
      assert.ok(component.find('input#part3').length, 'social input not found');
    });
  });
});


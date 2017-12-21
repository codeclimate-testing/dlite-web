'use strict';

import assert                   from 'assert';
import 'jsdom-global/register';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import * as dataPresent         from '../../../../client/helpers/data-present';
import SocialSecurityPage       from '../../../../client/presentations/apply/social-security-option-form.jsx';

describe('NamesHistoryPage', function() {
  let store = {
    ui: {}
  };

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
      let continueDisabled = !(dataPresent.socialSecurity(socialSecurity))
      let onChange = spy();

      props = {
        socialSecurity,
        continueDisabled,
        onChange
      }
    });
    
    it('shows the form asking if you have have a social security number', function() {
      let component = render(
        <Wrapper>
          <SocialSecurityPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="hasSocialSecurityNo"]').length, 'No button missing');
      assert.ok(component.find('label[for="hasSocialSecurityYes"]').length, 'Yes button missing');
      assert.ok(component.find('.social-security-option-form').length, 'form missing');
    });

    // it('next button is disabled', function() {
    //   let component = render(
    //     <Wrapper>
    //       <SocialSecurityPage {...props} />
    //     </Wrapper>
    //   );
    //   assert.ok(component.find('.arrow-button .forward disabled'));
    // });

    //TODO test for continueDisabled

    // it('selecting No makes next button no longer disabled', function() {
    //   props.socialSecurity.hasSocialSecurity = 'No';
    //   props.continueDisabled  =   !(dataPresent.SocialSecurity(props.socialSecurity));

    //   let component = render(
    //     <Wrapper>
    //       <SocialSecurityPage {...props} />
    //     </Wrapper>
    //   );

    //   assert.equal(component.find('.arrow-button .forward disabled'), false);
    //   assert.ok(component.find('.arrow-button forward'));
    // });

    //TODO add test to check that selecting Yes makes enter-social-security form render
    // see a number field for each part of social security number after selecting Yes


  });

});


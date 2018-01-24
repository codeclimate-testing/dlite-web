'use strict';

import assert                   from 'assert';
import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import EligibilityPage          from '../../../../client/presentations/voter-registration/eligibility-requirements-page.jsx';
import store                    from '../../support/page-store';
import { checkPreReg }          from '../../../../client/helpers/data/youth';


describe('EligibilityPage', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let eligibilityRequirements = '';
      let continueDisabled = true;
      let onChange = spy();
      let dateOfBirth = {
        month: '',
        day: '',
        year: ''
      };
      let prereg = checkPreReg(dateOfBirth);

      props = {
        eligibilityRequirements,
        dateOfBirth,
        onChange,
        prereg
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

    it('shows prereg language for users who are preregistering', function() {
      let today = new Date();

      props.dateOfBirth = {
        month: (today.getMonth() + 1).toString(),
        day: (today.getDate()).toString(),
        year: (today.getFullYear() - 17).toString()
      };
      props.prereg = checkPreReg(props.dateOfBirth);
      let component = render(
        <Wrapper>
          <EligibilityPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.text().includes('If you don\'t meet all the requirements, you are not eligible to pre-register to vote.'), 'pre-registration language not found');
    });

  });

});


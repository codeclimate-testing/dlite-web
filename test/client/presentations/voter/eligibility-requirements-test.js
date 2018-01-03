'use strict';

import assert                   from 'assert';
import 'jsdom-global/register';
import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import EligibilityPage          from '../../../../client/presentations/voter-registration/eligibility-requirements/eligibility-requirements-form.jsx';

describe('EligibilityPage', function() {
  let store = {
    ui: {}
  };

  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;
    
    beforeEach(function() {
      let eligibilityRequirements = '';
      let dateOfBirth = {
        month: '',
        day: '',
        year: ''
      };
      let onChange = spy();

      props = {
        eligibilityRequirements,
        dateOfBirth,
        onChange
      }
    });
    
    it('shows the form asking if user meets all the voter registration reqs', function() {
      let component = render(
        <Wrapper>
          <EligibilityPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.eligibility-requirements-form').length, 'form missing');
      assert.ok(component.find('label[for="eligibilityRequirementsYes"]').length, 'Yes button missing');
      assert.ok(component.find('label[for="eligibilityRequirementsNo"]').length, 'No button missing');
      assert.ok(component.find('label[for="eligibilityRequirementsSkip Section"]').length, 'Skip Question button missing');
    });

    // TODO check that navigate on submit answer changes correctly given different answers

  });

});


'use strict';

import assert                   from 'assert';
import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import EligibilityPage          from '../../../../client/presentations/voter-registration/eligibility-requirements/eligibility-requirements-form.jsx';
import store                    from '../../support/page-store';

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
      assert.ok(component.find('label[for="eligibilityRequirements-Yes"]').length, 'Yes button missing');
      assert.ok(component.find('label[for="eligibilityRequirements-null"]').length, 'Decline to answer button missing');
    });

    // TODO check that navigate on submit answer changes correctly given different answers

  });

});


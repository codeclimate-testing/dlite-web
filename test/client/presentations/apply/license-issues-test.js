'use strict';

import assert                   from 'assert';
import 'jsdom-global/register';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import * as dataPresent         from '../../../../client/helpers/data-present';
import LicenseIssuesPage        from '../../../../client/presentations/apply/license-issues-page.jsx';
import store                    from '../../support/page-store';

describe('LicenseIssuesPage', function() {

  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;
    
    beforeEach(function() {
      let licenseIssues = {
        isSuspended: '',
        month: '',
        day: '',
        year: '',
        reason: ''
      };
      let continueDisabled = !(dataPresent.licenseIssues(licenseIssues));
      let onChange = spy();

      props = {
        licenseIssues,
        continueDisabled,
        onChange
      }
    });
    
    it('shows the yes/no form asking if user has ever had driving privilege revoked', function() {
      let component = render(
        <Wrapper>
          <LicenseIssuesPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="isSuspendedYes"]').length, 'yes button missing');
      assert.ok(component.find('label[for="isSuspendedNo"]').length, 'no button missing');
      assert.ok(component.find('.license-issues-form').length, 'form missing');
    });

    it('does not show reason why form when no answer is selected', function() { 
      let component = render(
        <Wrapper>
          <LicenseIssuesPage {...props} />
        </Wrapper>
      );
  
      assert.equal(component.find('.suspended-license-form'), false);
    });

    it('when user selects Yes the page adds a form asking for more info about suspended license', function() {
      props.licenseIssues.isSuspended = 'Yes';
  
      let component = render(
        <Wrapper>
          <LicenseIssuesPage {...props} />
        </Wrapper>
      );

      assert.ok(component.find('.suspended-license-form').length, 'suspended license form not found');
    });

    it('next button is disabled', function() {
      let component = render(
        <Wrapper>
          <LicenseIssuesPage {...props} />
        </Wrapper>
      );
      assert.equal(props.continueDisabled, true);
    });

    it('selecting No makes next button no longer disabled', function() {
      props.licenseIssues.isSuspended = 'No';
      props.continueDisabled  =   !(dataPresent.licenseIssues(props.licenseIssues));

      let component = render(
        <Wrapper>
          <LicenseIssuesPage {...props} />
        </Wrapper>
      );
      assert.equal(props.continueDisabled, false);
    });
  });
});


'use strict';

import assert                   from 'assert';
import configure                from '../../support/configure-enzyme';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import LicenseIssuesPage        from '../../../../client/presentations/myHistory/license-issues-page.jsx';
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
      let validations = {
        isSuspended: spy(),
        month: spy(),
        day: spy(),
        year: spy(),
        reason: spy(),
        all: spy()
      };

      let onChange = spy();

      props = {
        licenseIssues,
        validations,
        onChange
      }
    });
    
    it('shows the yes/no form asking if user has ever had driving privilege revoked', function() {
      let component = render(
        <Wrapper>
          <LicenseIssuesPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="isSuspended-Yes"]').length, 'yes button missing');
      assert.ok(component.find('label[for="isSuspended-No"]').length, 'no button missing');
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
  });
});


'use strict';

import assert       from 'assert';
import configure    from '../../support/configure-enzyme';
import { render }   from 'enzyme';
import React        from 'react';
import { spy }      from 'sinon';
import LicenseType   from '../../../../client/presentations/get-started/license-type-page.jsx';
import wrapperGenerator from '../../support/wrapper';
import store        from '../../support/page-store';

describe('LicenseType Page', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let licenseType = {
        type: [],
        endorsement: [],
        needEndorsement: ''
      };
      let onChange = spy();

      let validations = {
        licenseType: spy(),
        endorsement: spy(),
        needEndorsement: spy(),
        all: spy(),
        isValid: () => { return true; }
      };

      props = {
        onChange,
        validations,
        DLApp: {
          licenseType
        },
        licenseType
      }
    });

    it('shows a form with checkboxes and asks if need professional endorsements', function() {
      let component = render(
        <Wrapper>
          <LicenseType {...props}/>
        </Wrapper>
      );

      assert.ok(component.find('.license-type-form').length, 'form not rendered');
      assert.ok(component.find('label.checkbox-selector[for="car"]').length, 'car checkbox not rendered');
      assert.ok(component.find('.endorsement-toggle').length, 'endorsements form not rendered');
    });

    it('does not show the form asking which endorsements if no selection is made', function() {
      let component = render(
        <Wrapper>
          <LicenseType {...props}/>
        </Wrapper>
      );
      assert.equal(component.find('.endorsement-form'), false);
    });

    it('shows the form asking which endorsement if yes is selected', function() {
      props.DLApp.licenseType.needEndorsement = 'Yes';

      let component = render(
        <Wrapper>
          <LicenseType {...props}/>
        </Wrapper>
      );

      assert.ok(component.find('.endorsement-form').length, 'endorsement form not rendered');
    });
  });
});


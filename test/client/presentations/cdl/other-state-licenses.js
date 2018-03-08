'use strict';

import assert       from 'assert';
import configure    from '../../support/configure-enzyme';
import { render }   from 'enzyme';
import React        from 'react';
import { spy }      from 'sinon';
import OtherStateLicenses from '../../../../client/presentations/cdl/my-history/other-state-licenses-page.jsx';
import wrapperGenerator from '../../support/wrapper';
import store        from '../../support/page-store';

describe('LicenseType Page', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let otherStateLicenses = {
        hasNonCALicense: '',
        tenYearHistory: ''
      };
      let onChange = spy();

      let validations = {
        hasNonCALicense: spy(),
        tenYearHistory: spy(),
        all: spy(),
        isValid: () => { return true; }
      };
      let locale = 'en';
      props = {
        onChange,
        validations,
        otherStateLicenses,
        locale
      }
    });

    it('shows a form asking if you have licenses from other states', function() {
      let component = render(
        <Wrapper>
          <OtherStateLicenses {...props}/>
        </Wrapper>
      );

      assert.ok(component.find('.other-state-licenses-form').length, 'form not rendered');
    });

    it('shows selectors for ten year history question', function() {
      props.otherStateLicenses.hasNonCALicense = 'Yes';

      let component = render(
        <Wrapper>
          <OtherStateLicenses {...props}/>
        </Wrapper>
      );

      assert.ok(component.find('label[for="tenYearHistory-online"]').length, 'online selector missing');
      assert.ok(component.find('label[for="tenYearHistory-home"]').length, 'home selector missing');
      assert.ok(component.find('label[for="tenYearHistory-field"]').length, 'field office selector missing');
    });
  });
});


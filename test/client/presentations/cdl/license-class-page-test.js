'use strict';

import assert                   from 'assert';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import * as dataPresent         from '../../../../client/helpers/data-present';
import LicenseClass             from '../../../../client/presentations/cdl/license-class-page.jsx';
import store                    from '../../support/page-store';
import translations             from '../../../../client/i18n';

describe('CDL Class Page', function() {
  let props, component;
  const Wrapper = wrapperGenerator(store);

  beforeEach(function() {
    let onSubmit          = spy();
    let onChange          = spy();
    let focused           = '';

    let validations = {
      cdlClasses:         spy(),
      all:                spy(),
      isValid: () => { return true; }
    };

    props = {
      licenseClass: '',
      onSubmit,
      onChange,
      validations,
      focused,
      locale: 'en'
    };
  });

  describe('#initial render', function() {
    beforeEach(function() {
      component = render(
        <Wrapper>
          <LicenseClass {...props} />
        </Wrapper>
      );
    });

    it('shows the form asking what class of CDL the user would like to get', function() {
      assert.ok(component.find('.cdl-class-form').length);
    });

    it('shows the closed accordion', function() {
      assert.ok(component.find('.accordion.closed#cdl-class-accordion'.length));
    });
  });
});
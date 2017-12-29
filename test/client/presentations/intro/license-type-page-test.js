'use strict';

import assert       from 'assert';
import 'jsdom-global/register';
import configure    from '../../support/configure-enzyme';
import { render }   from 'enzyme';
import React        from 'react';
import { spy }      from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import LicenseType   from '../../../../client/presentations/intro/license-type-page.jsx';
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
      let continueDisabled = !dataPresent.licenseType(licenseType);

      props = {
        licenseType,
        onChange,
        continueDisabled
      }
    });

    it('shows a form with checkboxes and asks if need professional endorsements', function() {
      let component = render(
        <Wrapper>
          <LicenseType {...props}/>
        </Wrapper>
      );

      assert.ok(component.find('.license-type-form'), 'form not rendered');
      assert.ok(component.find('label.checkbox-selector[for="car"]'), 'car checkbox not rendered');
      assert.ok(component.text().includes('Do you need any professional endorsements?'), 'endorsements form not rendered');
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
      props.licenseType.needEndorsement = 'Yes';

      let component = render(
        <Wrapper>
          <LicenseType {...props}/>
        </Wrapper>
      );

      assert.ok(component.find('.endorsement-form'), 'endorsement form not rendered');
    });

    it('next button is disabled', function(){
      let component = render(
        <Wrapper>
          <LicenseType {...props}/>
        </Wrapper>
      );

      assert.ok(component.find('.arrow-button .forward disabled'));
    });

    it('selecting class of vehicles and answering endorsements make next button enabled', function() {
      props.licenseType.needEndorsement = 'No';
      props.licenseType.type = ['car']
      props.continueDisabled = !dataPresent.licenseType(props.licenseType);
      let component = render(
        <Wrapper>
          <LicenseType {...props}/>
        </Wrapper>
      );
      assert.equal(component.find('.arrow-button .forward disabled'), false);
      assert.ok(component.find('.arrow-button forward'));
    })
  });
});


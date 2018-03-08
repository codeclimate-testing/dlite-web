'use strict';

import assert       from 'assert';
import configure    from '../../support/configure-enzyme';
import { render }   from 'enzyme';
import React        from 'react';
import { spy }      from 'sinon';
import Certificates from '../../../../client/presentations/cdl/cdl-certificates-page.jsx';
import wrapperGenerator from '../../support/wrapper';
import store        from '../../support/page-store';

describe('Certificates Page', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let cdlCertificates = {
        type: [],
        needCertificates: ''
      };
      let onChange = spy();

      let validations = {
        cdlCertificates: spy(),
        certificatesType: spy(),
        needCertificates: spy(),
        all: spy(),
        isValid: () => { return true; }
      };
      let locale = 'en';
      props = {
        onChange,
        validations,
        cdlCertificates,
        locale
      }
    });

    it('shows a form with asking if you need certificates on CDL', function() {
      let component = render(
        <Wrapper>
          <Certificates {...props}/>
        </Wrapper>
      );

      assert.ok(component.find('.certificates-toggle').length, 'form not rendered');
    });

    it('shows selectors for the various certificates selections', function() {
      props.cdlCertificates.needCertificates = 'Yes';

      let component = render(
        <Wrapper>
          <Certificates {...props}/>
        </Wrapper>
      );

      assert.ok(component.find('label[for="transit"]').length, 'transit checkbox missing');
      assert.ok(component.find('label[for="ambulance"]').length, 'ambulance checkbox missing');
      assert.ok(component.find('label[for="ham"]').length, 'hazardous agricultural materials (ham) checkbox missing');
    });
  });
});
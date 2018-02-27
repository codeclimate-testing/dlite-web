'use strict';

import assert                   from 'assert';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import * as dataPresent         from '../../../../client/helpers/data-present';
import AddressPage              from '../../../../client/presentations/cdl/residency.jsx';
import store                    from '../../support/page-store';
import translations             from '../../../../client/i18n';

describe('CDL California Resident Page', function() {
  let props, component;
  const Wrapper = wrapperGenerator(store);

  beforeEach(function() {
    let residency = {
      homeAddressSameAsMailing: '',
      home: {
        street_1: '',
        street_2: '',
        city: '',
        state: 'CA',
        zip: ''
      },
      mailing: {
        street_1: '',
        street_2: '',
        city: '',
        state: 'CA',
        zip: '',
      },
      isResident: ''
    };

    let onAddressChange   = spy();
    let onSubmit          = spy();
    let onChange          = spy();
    let sectionName       = 'My basics';
    let sectionNumber     = '1';
    let focused           = '';

    let validations = {
      isResident:               spy(),
      homeStreet_1:             spy(),
      mailingStreet_1:          spy(),
      homeStreet_2:             spy(),
      mailingStreet_2:          spy(),
      homeCity:                 spy(),
      mailingCity:              spy(),
      homeZip:                  spy(),
      mailingZip:               spy(),
      homeAddressSameAsMailing: spy(),
      all:                      spy(),
      isValid: () => { return true; }
    };

    props = {
      residency,
      onAddressChange,
      onSubmit,
      onChange,
      validations,
      sectionName,
      sectionNumber,
      focused
    };
  });

  describe('#initial render', function() {
    beforeEach(function() {
      component = render(
        <Wrapper>
          <AddressPage {...props} />
        </Wrapper>
      );
    });

    it('shows the form asking if user is a CA resident', function() {
      assert.ok(component.find('.cdl-residency').length);
    });
    it('shows the Next button', function() {
      assert.ok(!component.find('.navigation-buttons .forward[hidden]').length);
      assert.ok(component.find('.navigation-buttons .forward').length);
    });
  });

  describe('#not a resident', function() {
    beforeEach(function() {
      props.residency.isResident = 'No';
      component = render(
        <Wrapper>
          <AddressPage {...props} />
        </Wrapper>
      );
    });
    it('shows info box', function() {
      assert.ok(component.find('.message-box .info'));
    });

    it('next button disappears', function() {
      assert.ok(component.find('.navigation-buttons .forward[hidden]').length);
    });
  });

  describe('#yes a resident', function() {
    beforeEach(function() {
      props.residency.isResident = 'Yes';
      component = render(
        <Wrapper>
          <AddressPage {...props} />
        </Wrapper>
      );
    });

    it('shows the form asking for home address but not mailing address', function() {
      let component = render(
        <Wrapper>
          <AddressPage {...props} />
        </Wrapper>
      );

      assert.ok(component.find('input#homeStreet_1').length, 'Street address input not found');
      assert.ok(component.find('input#homeStreet_2').length, 'Unit or apartment input not found');
      assert.ok(component.find('input#homeCity').length,   'City input not found');
      assert.ok(component.find('#homeState').length,  'State select not found');
      assert.ok(component.find('input#homeZip').length,    'State select not found');
      assert.ok(!component.find('.mailing-address-form').length, 'mailing address rendered');
    });

    it('shows the form asking for mailing address when user checks that mailing address is not same as home address', function() {
      props.residency.homeAddressSameAsMailing = 'No';
      let component = render(
        <Wrapper>
          <AddressPage {...props} />
        </Wrapper>
      );

      assert.ok(component.find('input#mailingStreet_1').length, 'Street address input not found');
      assert.ok(component.find('input#mailingStreet_2').length, 'Unit or apartment input not found');
      assert.ok(component.find('input#mailingCity').length,   'City input not found');
      assert.ok(component.find('#homeState').length,  'State select not found');
      assert.ok(component.find('input#mailingZip').length,    'State select not found');
    });

  });
});
'use strict';

import assert                   from 'assert';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import * as dataPresent         from '../../../../client/helpers/data-present';
import AddressPage              from '../../../../client/presentations/myBasics/address-page.jsx';
import store                    from '../../support/page-store';

describe('AddressPage', function() {
  let props;
  const Wrapper = wrapperGenerator(store);

  beforeEach(function() {
    let address = {
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
      }
    };
    let onMailingChange   = spy();
    let onHomeChange      = spy();
    let onAddressChange   = spy();
    let sectionName       = 'My basics';
    let sectionNumber     = '1';
    let focused           = '';

    let validations = {
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
      address,
      onMailingChange,
      onHomeChange,
      onAddressChange,
      validations,
      sectionName,
      sectionNumber,
      focused
    }
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
    assert.ok(component.find('select[name="homeState"]').length,  'State select not found');
    assert.ok(component.find('input#homeZip').length,    'State select not found');
    assert.ok(!component.find('.mailing-address-form').length, 'mailing address rendered');
  });

  it('shows the form asking for mailing address when user checks that mailing address is not same as home address', function() {
    props.address.homeAddressSameAsMailing = 'No';
    let component = render(
      <Wrapper>
        <AddressPage {...props} />
      </Wrapper>
    );

    assert.ok(component.find('input#mailingStreet_1').length, 'Street address input not found');
    assert.ok(component.find('input#mailingStreet_2').length, 'Unit or apartment input not found');
    assert.ok(component.find('input#mailingCity').length,   'City input not found');
    assert.ok(component.find('select[name="mailingState"]').length,  'State select not found');
    assert.ok(component.find('input#mailingZip').length,    'State select not found');
  });
});


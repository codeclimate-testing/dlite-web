'use strict';

import assert                   from 'assert';
import 'jsdom-global/register';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import * as dataPresent         from '../../../../client/helpers/data-present';
import AddressPage              from '../../../../client/presentations/apply/address-page.jsx';
import store                    from '../../support/page-store';

describe('AddressPage', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;

    beforeEach(function() {
      let homeAddress = {
        homeAddressSameAsMailing: '',
        street_1: '',
        street_2: '',
        city: '',
        state: '',
        zip: ''
      };
      let mailingAddress = {
        street_1: '',
        street_2: '',
        city: '',
        state: '',
        zip: ''
      };
      let onMailingChange = spy();
      let onHomeChange = spy();

      props = {
        homeAddress,
        mailingAddress,
        onMailingChange,
        onHomeChange
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
      assert.ok(component.find('select[name="state"]').length,  'State select not found');
      assert.ok(component.find('input#homeZip').length,    'State select not found');
      assert.ok(!component.find('.mailing-address-form').length, 'mailing address rendered');
    });

    it('shows the form asking for mailing address when user checks that mailing address is not same as home address', function() {
      props.homeAddress.homeAddressSameAsMailing = 'No';
      let component = render(
        <Wrapper>
          <AddressPage {...props} />
        </Wrapper>
      );

      assert.ok(component.find('input#mailingStreet_1').length, 'Street address input not found');
      assert.ok(component.find('input#mailingStreet_2').length, 'Unit or apartment input not found');
      assert.ok(component.find('input#mailingCity').length,   'City input not found');
      assert.ok(component.find('select[name="state"]').length,  'State select not found');
      assert.ok(component.find('input#mailingZip').length,    'State select not found');
    });
  });
});


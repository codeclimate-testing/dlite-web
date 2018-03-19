'use strict';

import assert                   from 'assert';
import React                    from 'react';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import * as dataPresent         from '../../../../client/helpers/data-present';
import AddressPage              from '../../../../client/presentations/my-basics/address-page.jsx';
import store                    from '../../support/page-store';
import translations             from '../../../../client/i18n';
import ExplanatoryString        from '../../../../client/presentations/my-basics/address/string.jsx';

describe('AddressPage', function() {
  let props;
  const Wrapper = wrapperGenerator(store);
  let locale = 'en';
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
    let cardType = ['ID'];
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
      cardType,
      IDApp: {
        isApplying: true,
        action: 'new'
      },
      DLApp: {
        isApplying: false,
        action: ''
      },
      onChange: spy(),
      onAddressChange,
      validations,
      sectionName,
      sectionNumber,
      focused,
      locale
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
    assert.ok(component.find('#homeState').length,  'State select not found');
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
    assert.ok(component.find('#homeState').length,  'State select not found');
    assert.ok(component.find('input#mailingZip').length,    'State select not found');
  });

  it('shows the ID header', function() {
    let component = render(
      <Wrapper>
        <AddressPage {...props} />
      </Wrapper>
    );
    assert.ok(component.text().includes(translations[locale].myBasics.addressesPage.mailingAddressSameExplanation.ID));
  });

  it('shows the DL header', function() {
    props.cardType = ['DL'];
    props.DLApp = {
      isApplying: true,
      action: 'new'
    };

    let component = render(
      <Wrapper>
        <AddressPage {...props} />
      </Wrapper>
    );
    assert.ok(component.text().includes(translations[locale].myBasics.addressesPage.mailingAddressSameExplanation.license));
  });

  it('shows the header for both cards', function() {
    props.cardType = ['ID', 'DL'];

    let component = render(
      <Wrapper>
        <AddressPage {...props} />
      </Wrapper>
    );
    assert.ok(component.text().includes(translations[locale].myBasics.addressesPage.mailingAddressSameExplanation.cards));
  });

  describe('Explanatory String on Address Page', function() {
    let component;
    describe('#cardType array just includes ID', function() {
      beforeEach(function() {
        props.cardType = ['ID'];
        component = render(
          <Wrapper>
            <ExplanatoryString {...props} />
          </Wrapper>
        );
      });
      it('shows ID string', function() {
        assert.equal(component.text().includes(translations[props.locale].myBasics.addressesPage.mailingAddressSameExplanation.ID), true);
      });

      it('does not show DL string', function() {
        assert.equal(component.text().includes(translations[props.locale].myBasics.addressesPage.mailingAddressSameExplanation.license), false);

      });

      it('does not show both string', function() {
        assert.equal(component.text().includes(translations[props.locale].myBasics.addressesPage.mailingAddressSameExplanation.cards), false);
      });
    });

    describe('#cardType array just includes DL', function() {
      beforeEach(function() {
        props.cardType = ['DL'];
        component = render(
          <Wrapper>
            <ExplanatoryString {...props}/>
          </Wrapper>
        );
      });

      it('does not show ID string', function() {
        assert.equal(component.text().includes(translations[props.locale].myBasics.addressesPage.mailingAddressSameExplanation.ID), false);
      });

      it('shows DL string', function() {
        assert.equal(component.text().includes(translations[props.locale].myBasics.addressesPage.mailingAddressSameExplanation.license), true);

      });

      it('does not show both string', function() {
        assert.equal(component.text().includes(translations[props.locale].myBasics.addressesPage.mailingAddressSameExplanation.cards), false);
      });
    });

    describe('#cardType array includes both cards', function() {
      beforeEach(function() {
        props.cardType = ['DL', 'ID'];
        component = render(
          <Wrapper>
            <ExplanatoryString {...props} />
          </Wrapper>
        );
      });
      it('does not show ID string', function() {
        assert.equal(component.text().includes(translations[props.locale].myBasics.addressesPage.mailingAddressSameExplanation.ID), false);
      });

      it('does not show DL string', function() {
        assert.equal(component.text().includes(translations[props.locale].myBasics.addressesPage.mailingAddressSameExplanation.license), false);

      });

      it('shows both string', function() {
        assert.equal(component.text().includes(translations[props.locale].myBasics.addressesPage.mailingAddressSameExplanation.cards), true);
      });
    });
  });
});
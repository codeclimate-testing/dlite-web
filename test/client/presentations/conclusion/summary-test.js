'use strict';

import assert           from 'assert';
import React            from 'react';
import configure        from '../../support/configure-enzyme';
import { render }       from 'enzyme';
import { spy }          from 'sinon';
import store            from '../../support/page-store';
import wrapperGenerator from '../../support/wrapper';
import data             from '../../../../server/models/parsers/client-default-state.js';
import translations     from '../../../../client/i18n';
import SummaryPage      from '../../../../client/presentations/conclusion/summary-page.jsx';
import OrganDonation      from '../../../../client/presentations/conclusion/summary/organ-donation.jsx';
import GuardianSignature  from '../../../../client/presentations/conclusion/summary/guardian-signature.jsx'


describe('SummaryPage', function() {
  const Wrapper = wrapperGenerator(store);
  let props;
  let locale = 'en';
  beforeEach(function() {
    props = {
      application: Object.assign({}, data.application),
      server: '',
      onSubmit: spy(),
      ui: {locale}
    };
  });
  it('has 6 accordions', function() {
    let component = render(
      <Wrapper>
        <SummaryPage { ...props } />
      </Wrapper>
    );
    assert.ok(component.find('#id-application-details-summary-accordion').length);
    assert.ok(component.find('#driver-license-application-details-summary-accordion').length);
    assert.ok(component.find('#basics-summary-accordion').length);
    assert.ok(component.find('#history-summary-accordion').length);
    assert.ok(component.find('#organ-donation-summary-accordion').length);
    assert.ok(component.find('#voter-registration-summary-accordion').length);
  });
});

describe('Summary components', function() {
  const Wrapper = wrapperGenerator(store);
  let props;
  let locale = 'en';

  beforeEach(function() {
    props = Object.assign({}, data.application);
    props.server = '';
    props.onSubmit = spy();
    props.locale = locale;
  });

  describe('OrganDonation', function() {
    it('shows organ donation selections', function(){
      let data = {
        application: {
          organDonation: {
            donateMoney: 'Yes',
            donateOrgan: 'Yes'
          }
        },
        ui: {
          locale: 'en'
        }
      };

      let component = render(
        <Wrapper>
          <OrganDonation { ...data }/>
        </Wrapper>
      );
      assert.equal(component.text().includes('Be an organ donorYes'), true);
      assert.equal(component.text().includes('Donate $2Yes'), true);
    });
  });

  describe('GuardianSignature', function() {
    it('shows parent/guardian signature details', function(){
      let guardianSignature = {
        isSigned:  'Yes',
        guardianInfo: [{
          id: '0',
          acceptLiabilities: true,
          signature: {
            name: 'GuardianSignature',
            month: '10',
            day: '4',
            year: '2018',
          },
          phoneNumber: '(616)-923-1221',
          address: {
            street_1: '865 Main Street',
            street_2: 'Unit no. 05',
            city: 'Crazidino Here',
            state: 'CA',
            zip: '94000',
          },
          ID:{
            number: 'XYZ12344321',
            issuedBy: 'U.S.A.',
            expirationMonth: '10',
            expirationDay: '14',
            expirationYear: '2020'
          }
        },
        {
          id: '1',
          acceptLiabilities: null,
          signature: {
            name: '',
            month: '',
            day: '',
            year: '',
          },
          phoneNumber: '',
          address: {
            street_1: '',
            street_2: '',
            city: '',
            state: 'CA',
            zip: '',
          },
          ID:{
            number: '',
            issuedBy: '',
            expirationMonth: '',
            expirationDay: '',
            expirationYear: ''
          }
        }]
      };

      let component = render(
        <GuardianSignature
          {...props}
          guardianSignature={guardianSignature}
        />
      )

      assert.equal(component.text().includes('GuardianSignature'), true);
      assert.equal(component.text().includes('10'), true);
      assert.equal(component.text().includes('4'), true);
      assert.equal(component.text().includes('2018'), true);
      assert.equal(component.text().includes('(616)-923-1221'), true);
      assert.equal(component.text().includes('865 Main Street'), true);
      assert.equal(component.text().includes('Unit no. 05'), true);
      assert.equal(component.text().includes('Crazidino Here'), true);
      assert.equal(component.text().includes('CA'), true);
      assert.equal(component.text().includes('94000'), true);
      assert.equal(component.text().includes('XYZ12344321'), true);
      assert.equal(component.text().includes('U.S.A.'), true);
      assert.equal(component.text().includes('10'), true);
      assert.equal(component.text().includes('14'), true);
      assert.equal(component.text().includes('2020'), true);
    });
  });
});



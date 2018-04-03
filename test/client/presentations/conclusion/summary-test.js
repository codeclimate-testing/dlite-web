'use strict';

import assert           from 'assert';
import React            from 'react';
import configure        from '../../support/configure-enzyme';
import { render }       from 'enzyme';
import { spy }          from 'sinon';
import store            from '../../support/page-store';
import wrapperGenerator from '../../support/wrapper';
import data             from '../../../../server/models/parsers/client-default-state.js';
import SummaryPage      from '../../../../client/presentations/conclusion/summary-page.jsx';
import OrganDonation      from '../../../../client/presentations/conclusion/summary/organ-donation.jsx';
import GuardianSignature  from '../../../../client/presentations/conclusion/summary/guardian-signature.jsx'


describe('SummaryPage', function() {
  const Wrapper = wrapperGenerator(store);
  let props;
  beforeEach(function() {
    props = {
      application: Object.assign({}, data.IDDL.application),
      server: '',
      onSubmit: spy(),
      ui: { }
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

  beforeEach(function() {
    props = Object.assign({}, data.IDDL.application);
    props.server = '';
    props.onSubmit = spy();

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
        ui: { }
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
      let data = {
        application: {
          guardianSignature: {
            isSigned:  'signElectronically',
            guardianInfo: [{
              id: '0',
              acceptLiabilities: true,
              signature: {
                name: 'Guardian Signature 1',
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
              }
            },
            {
              id: '1',
              acceptLiabilities: true,
              signature: {
                name: 'Guardian Signature 2',
                month: '11',
                day: '5',
                year: '2019',
              },
              phoneNumber: '(616)-923-2112',
              address: {
                street_1: '123 Main Street',
                street_2: 'Unit no. 04',
                city: 'Crazidino Where',
                state: 'CA',
                zip: '95000',
              }
            }]
          }
        }
      };

      let component = render(
        <Wrapper>
          <GuardianSignature {...data} />
        </Wrapper>
      )
      assert.equal(component.text().includes('Parent/guardian Signature') , true);
      assert.equal(component.text().includes('You selectedParent/guardian(s) signed electronically') , true);
      assert.equal(component.text().includes('Parent/guardian nameGuardian Signature 1') , true);
      assert.equal(component.text().includes('Accept civil liabilityYes') , true);
      assert.equal(component.text().includes('Signature date10 / 4 / 2018') , true);
      assert.equal(component.text().includes('Phone number(616)-923-1221') , true);
      assert.equal(component.text().includes('Address865 Main StreetUnit no. 05Crazidino Here, CA 94000') , true);
      assert.equal(component.text().includes('Parent/guardian nameGuardian Signature 2') , true);
      assert.equal(component.text().includes('Accept civil liabilityYes') , true);
      assert.equal(component.text().includes('Signature date11 / 5 / 2019') , true);
      assert.equal(component.text().includes('Phone number(616)-923-2112') , true);
      assert.equal(component.text().includes('Address123 Main StreetUnit no. 04Crazidino Where, CA 95000') , true);
    });
  });
});



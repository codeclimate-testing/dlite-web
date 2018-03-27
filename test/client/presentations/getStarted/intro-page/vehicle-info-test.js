'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../../client/helpers/data-present';
import wrapperGenerator         from '../../../support/wrapper';
import VehicleInfo              from '../../../../../client/presentations/get-started/intro-page/vehicle-info.jsx';
import GetStartedPage           from '../../../../../client/presentations/get-started/get-started-page.jsx';
import store                    from '../../../support/page-store';

describe('VehicleInfo', function() {
  const Wrapper = wrapperGenerator(store);
  let props;

  beforeEach(function() {

    let cardChanges = {
      correctOrUpdate: '',
      sections: []
    };
    let licenseType = {
      type: [],
      endorsement: [],
      needEndorsement: ''
    };
    let realID = {
      realIdDesignation: '',
      getRealID: ''
    };
    let reducedFee = {
      ID: '',
      form: ''
    };
    let seniorID = '';

    let onChange = spy();

    props = {
      cardType: ['DL'],
      cardAction: 'renew',
      IDApp: {
        action: 'renew',
        isApplying: true,
        cardChanges,
        reducedFee,
        seniorID
      },
      DLApp: {
        isApplying: false,
        action: '',
        cardChanges,
        licenseType
      },
      cardChanges,
      licenseType,
      realID,
      reducedFee,
      seniorID,
      onChange
    }
  });

  describe('null', function() {
    it('returns null when user not applying for a DL', function() {
      props.cardType = ['ID'];

      let component = render(
        <Wrapper>
          <VehicleInfo  {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.vehicle-info'), false);
    });
  });

  describe('license type', function() {
    beforeEach(function() {
      props.cardType = ['DL'];
    });

    describe('type', function() {
      it('shows class C when user selects car', function() {
        props.licenseType.type = ['car']

        let component = render(
          <Wrapper>
            <VehicleInfo  {...props} />
          </Wrapper>
        );
        assert.equal(component.text().includes('Car (Class C)'), true);
      });

      it('shows class M when user selects cycle', function() {
        props.licenseType.type = ['cycle']

        let component = render(
          <Wrapper>
          <GetStartedPage {...props} />
          </Wrapper>
        );
        assert.equal(component.text().includes('Motorcycle (Class M)'), true);
      });

      it('shows class A when user selects long', function() {
        props.licenseType.type = ['long']

        let component = render(
          <Wrapper>
          <GetStartedPage {...props} />
          </Wrapper>
        );
        assert.equal(component.text().includes('Housecar, 5th wheel over 15000 pounds, or livestock trailer (Class A)'), true);
      });

      it('shows class B when user selects trailer', function() {
        props.licenseType.type = ['trailer']

        let component = render(
          <Wrapper>
          <GetStartedPage {...props} />
          </Wrapper>
        );
        assert.equal(component.text().includes('Housecar or trailer (Class B)'), true);
      });
    });
  });
});

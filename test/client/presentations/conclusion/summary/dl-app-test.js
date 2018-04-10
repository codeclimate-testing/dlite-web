'use strict';

import assert           from 'assert';
import React            from 'react';
import configure        from '../../../support/configure-enzyme';
import { render }       from 'enzyme';
import { spy }          from 'sinon';
import store            from '../../../support/page-store';
import wrapperGenerator from '../../../support/wrapper';
import data             from '../../../../../server/models/parsers/client-default-state.js';

import DLApp            from '../../../../../client/presentations/conclusion/summary/dl-app.jsx';
import {
  DLApplicationNotStarted,
  DLAction,
  CurrentDLInfo,
  LicenseType
} from '../../../../../client/presentations/conclusion/summary/dl-app/index';

const Wrapper = wrapperGenerator(store);

describe('Summary DL App section components', function() {
  let props;
  before(function() {
    props = Object.assign({}, data.IDDL.application);
    props.cardType = 'DL';
  });

  describe('#DLApplicationNotStarted', function(){
    beforeEach(function() {
      props.editKey = 'wdywtdt';
    });
    it('shows "No application started" text when user has not added an ID application', function() {
      let component = render(
        <Wrapper>
          <DLApplicationNotStarted {...props} />
        </Wrapper>
      );
      assert.ok(component.text().includes('No application started'));
    });
    it('shows Add button with className that includes "wdywtdt"', function() {
      let component = render(
        <Wrapper>
          <DLApplicationNotStarted {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.wdywtdt').length);
      assert.ok(component.text().includes('Add'));
    });
  });

  describe('#DLAction', function() {
    let component;
    beforeEach(function() {
      props.cardAction = 'new';
      props.DLApp.isApplying = true;
      props.DLApp.action = 'new';
      props.editKey = 'wdywtdt';

      component = render(
        <Wrapper>
          <DLAction
            { ...props }
          />
        </Wrapper>
      );
    });
    it('shows action for DL', function() {
      assert.equal(component.text().includes('Applying for the first time'), true);
    });

    it('shows edit button going to the wdywtdy page and then back to IDDL summary page', function() {
      assert.ok(component.find('.wdywtdt.summary-edit').length);
    });
  });

  describe('#CurrentDLInfo', function() {
    it('shows current card info when user is renewing a card and has provided info of card to renew', function() {
      props.cardAction = 'renew';
      props.DLApp = {
        isApplying: true,
        action: 'renew'
      }
      props.DLApp.currentCard = {
        number: 'a90382kf',
        month: '11',
        day: '13',
        year: '2008'
      };
      props.editKey = 'currentCardInfo';

      let component = render(
        <Wrapper>
          <CurrentDLInfo
            {...props}
          />
        </Wrapper>
      );
      assert.equal(component.text().includes('Driver license numbera90382kf'), true);
      assert.equal(component.text().includes('Expiration date11/13/2008'), true)
    });
  });

  describe('#LicenseType', function() {
    it('lists which types of licenses the user has selected', function() {
      props.DLApp = {
        isApplying: true,
        action: 'new',
        licenseType: {
          type: ['car', 'cycle'],
          needEndorsement: 'Yes',
          endorsement: 'firefighter'
        }
      };
      props.editKey = 'chooseLicenseClass';

      let component = render(
        <Wrapper>
          <LicenseType
            { ...props }
          />
        </Wrapper>
      )
      assert.ok(component.text().includes('Car (Class C)'), 'car type not rendered in summary');
      assert.ok(component.text().includes('Motorcycle (Class M)'), 'moto type not rendered in summary');
      assert.ok(!component.text().includes('Housecar'));
      assert.ok(component.text().includes('Firefighter endorsementYes'), 'license endorsement not rendered in summary');
    });
  });

  describe('#DL RealID', function() {
    beforeEach(function() {
      props = Object.assign({}, data.IDDL);
      props.editKey = 'realID';
    });

    it('shows Real-ID Compliant No if user is getting an ID but not getting a real ID on the DL', function(){
      props.application.DLApp.isApplying = true;
      props.application.DLApp.realID = 'No';
      let component = render(
        <Wrapper>
          <DLApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Real-ID CompliantNo'));
    });
    it('shows Real-ID Compliant Yes if user is getting a real ID on the DL', function(){
      props.application.DLApp.isApplying = true;
      props.application.DLApp.realID = 'Yes';

      let component = render(
        <Wrapper>
          <DLApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Real-ID CompliantYes'));
    });
    it('does not show if user is not getting a DL', function() {
      props.application.DLApp.realID = 'No';
      props.application.DLApp.isApplying = false;
      let component = render(
        <Wrapper>
          <DLApp { ...props } />
        </Wrapper>
      );
      assert.ok(!component.text().includes('Real-ID'));
    });

    it('shows No if props.DLApp.RealID is blank', function() {
      props.application.DLApp.isApplying = true;
      props.application.DLApp.realID = '';

      let component = render(
        <Wrapper>
          <DLApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Real-ID CompliantNo'));
    });

    it('has a link button to edit realID page', function() {
      props.application.DLApp.isApplying = true;
      let component = render(
        <Wrapper>
          <DLApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.find('.realID.button.summary-edit').length);
    });
  });

});
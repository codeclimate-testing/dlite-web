'use strict';

import assert           from 'assert';
import React            from 'react';
import configure        from '../../../support/configure-enzyme';
import { render }       from 'enzyme';
import { spy }          from 'sinon';
import store            from '../../../support/page-store';
import wrapperGenerator from '../../../support/wrapper';
import data             from '../../../../../server/models/parsers/client-default-state.js';

import IDApp            from '../../../../../client/presentations/conclusion/summary/id-app.jsx';
import {
  IDApplicationNotStarted,
  SeniorID,
  ReducedOrNoFee,
  IDAction,
  CurrentIDInfo
} from '../../../../../client/presentations/conclusion/summary/id-app/index';

const Wrapper = wrapperGenerator(store);

describe('Summary ID App section', function() {
  let props;
  beforeEach(function() {
    props = {
      application: Object.assign({}, data.IDDL.application),
      onSubmit: spy()
    };
  });

  describe('ID RealID', function() {

    it('shows Real-ID Compliant No if user is getting an ID but not getting a real ID on the ID', function(){
      props.application.IDApp.isApplying = true;
      props.application.IDApp.realID = 'No';

      let component = render(
        <Wrapper>
          <IDApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Real-ID CompliantNo'));
    });
    it('shows Real-ID Compliant Yes if user is getting a real ID on the ID', function(){
      props.application.IDApp.isApplying = true;
      props.application.IDApp.realID = 'Yes';

      let component = render(
        <Wrapper>
          <IDApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Real-ID CompliantYes'));
    });
    it('does not show if user is not getting an ID', function() {
      props.application.IDApp.isApplying = false;
      let component = render(
        <Wrapper>
          <IDApp { ...props } />
        </Wrapper>
      );
      assert.ok(!component.text().includes('Real-ID'));
    });

    it('shows No if props.IDApp.RealID is blank', function() {
      props.application.IDApp.isApplying = true;
      props.application.IDApp.realID = '';

      let component = render(
        <Wrapper>
          <IDApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.text().includes('Real-ID CompliantNo'));
    });

    it('has a button to edit realID page if user is getting a real ID', function() {
      props.application.IDApp.isApplying = true;
      let component = render(
        <Wrapper>
          <IDApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.find('.realID.button.summary-edit').length);
    });
  });

  describe('IDAction', function() {
    it('has an edit button with link to "wdywtdt" edit path if user is getting an ID', function() {
      props.application.IDApp.isApplying = true;
      props.application.IDApp.action = 'new'
      let component = render(
        <Wrapper>
          <IDApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.find('.wdywtdt.button.summary-edit').length);
      assert.ok(component.text().includes('Edit'));
    });
    it('has an add button with link to add ID app', function() {
      props.application.IDApp.isApplying = false;
      let component = render(
        <Wrapper>
          <IDApp { ...props } />
        </Wrapper>
      );
      assert.ok(component.find('.wdywtdt.button.summary-add').length);
      assert.ok(component.text().includes('Add'));
    });
  });
});

describe('Summary ID App section components', function() {
  let props;
  beforeEach(function() {
    props = Object.assign({}, data.IDDL.application);
    props.cardType = 'ID';
  });
  describe('IDAction', function() {
    it('shows action for ID', function() {
      props.IDApp = {
        isApplying: true,
        action: 'new',
        cardChanges: {
          correctOrUpdate: ''
        }
      };
      props.editKey = 'wdywtdt';

      let component = render(
        <Wrapper>
          <IDAction
            { ...props }
          />
        </Wrapper>
      );
      assert.equal(component.text().includes('Applying for the first time'), true);
    });
  });
  describe('CurrentIDInfo', function() {
    it('shows current card info when user is renewing a card and has provided info of card to renew', function() {
      props.cardAction = 'renew';
      props.IDApp = {
        isApplying: true,
        action: 'renew'
      };

      props.IDApp.currentCard = {
        number: 'a90382kf',
        month: '11',
        day: '13',
        year: '2008'
      };
      props.editKey = 'currentCardInfo';

      let component = render(
        <Wrapper>
          <CurrentIDInfo
            {...props}
            editKey = 'currentCardInfo'
          />
        </Wrapper>
      );
      assert.equal(component.text().includes('ID card numbera90382kf'), true);
      assert.equal(component.text().includes('Expiration date11/13/2008'), true);
    });
  });
  describe('SeniorID', function() {
    it('shows SeniorID selection', function(){
      props.seniorID = 'Yes';

      let component = render(
        <Wrapper>
          <SeniorID
            { ...props }
            editKey = 'seniorID'
          />
        </Wrapper>
      )
      assert.ok(component.text().includes('Senior IDYes'));
    });
  });

  describe('ReducedOrNoFee', function() {
    it('returns null when no value', function(){
      props.IDApp = {
        isApplying: true,
        action: 'new',
        reducedFee: {
          ID: 'Yes',
          form: 'Yes'
        },
        realID: ''
      };
      props.editKey = 'reducedFeeID';

      let component = render(
        <Wrapper>
          <ReducedOrNoFee
            { ...props }
            reducedFee = {props.IDApp.reducedFee}
          />
        </Wrapper>
      )
      assert.equal(component.find('.summary-section'), false);
    });
  });
});
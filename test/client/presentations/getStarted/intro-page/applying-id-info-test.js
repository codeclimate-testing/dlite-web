'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../../client/helpers/data-present';
import wrapperGenerator         from '../../../support/wrapper';
import ApplyingIDInfo           from '../../../../../client/presentations/get-started/intro-page/applying-id-info.jsx';
import GetStartedPage           from '../../../../../client/presentations/get-started/get-started-page.jsx';
import store                    from '../../../support/page-store';

describe('ApplyingIDInfo', function() {
  const Wrapper = wrapperGenerator(store);
  let props;

  beforeEach(function() {

    let cardChanges = {
      correctOrUpdate: 'correct',
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
      cardType: ['ID'],
      cardAction: 'new',
      youthIDInstead: '',
      IDApp: {
        isApplying: true,
        action: 'new',
        reducedFee,
        seniorID,
        cardChanges
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
    it('returns null when user is not applying for an ID', function() {
      props.cardType = ['DL'];
      props.IDApp.isApplying = false;
      props.DLApp.isApplying = true;

      let component = render(
        <Wrapper>
          <ApplyingIDInfo  {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.applying-id-info'), false);
    });

    it('returns null when user is not applying for new ID', function() {
      props.cardAction = 'renew';
      props.IDApp.action = 'renew';

      let component = render(
        <Wrapper>
          <ApplyingIDInfo  {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.applying-id-info'), false);
    });
  });

  describe('when applying for new ID', function() {
    it('shows that user is applying for ID on get started page', function() {

      let component = render(
        <Wrapper>
          <GetStartedPage {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes('You are applying for an ID card'), true);
    });

    it('shows that user is getting a reduced fee ID on get started page', function() {
      props.IDApp.reducedFee.ID = 'Yes';

      let component = render(
        <Wrapper>
          <GetStartedPage {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes('You are applying for a reduced-fee ID card'), true);
    });

    it('shows that user is getting new senior ID on get started page', function() {
      props.IDApp.seniorID = 'No';

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes('You are applying for a senior ID card'), true);
    });

    it('shows that user is getting no fee ID on get started page', function() {
      props.IDApp.seniorID = 'Yes';

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes('You are applying for a no-fee ID card'), true);
    });
  });
});

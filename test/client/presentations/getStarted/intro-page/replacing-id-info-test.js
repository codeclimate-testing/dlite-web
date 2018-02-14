'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../../client/helpers/data-present';
import wrapperGenerator         from '../../../support/wrapper';
import ReplacingIDInfo           from '../../../../../client/presentations/get-started/intro-page/replacing-id-info.jsx';
import GetStartedPage           from '../../../../../client/presentations/get-started/get-started-page.jsx';
import store                    from '../../../support/page-store';
import translations             from '../../../../../client/i18n';

describe('ReplacingIDInfo', function() {
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
      cardType: ['ID'],
      cardAction: 'replace',
      IDApp: {
        action: 'replace',
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
    it('returns null when user not applying for an ID', function() {
      props.cardType = ['DL'];

      let component = render(
        <Wrapper>
          <ReplacingIDInfo {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.replacing-id-info'), false);
    });

    it('returns null when user is not replacing an ID', function() {
      props.cardAction = 'renew';

      let component = render(
        <Wrapper>
          <ReplacingIDInfo {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.replacing-id-info'), false);
    });
  });

  describe('when replacing an ID', function() {
    it('shows that user is replacing an ID on get started page', function() {

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.replacingID), true);
    });

    it('shows that user is getting a reduced fee ID on get started page', function() {
      props.reducedFee.ID = 'Yes';

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.replacingReducedFeeID), true);
    });

    it('shows that user is getting new senior ID on get started page', function() {
      props.IDApp.seniorID = 'No';

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.replacingSeniorID), true);
    });

    it('shows that user getting no fee ID on get started page', function() {
      props.IDApp.seniorID = 'Yes';

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes('You are replacing a no-fee ID card'), true);
      assert.ok(component.find('p.translation-missing').length, 'translation for noFeeID not present');
    });
  });
});

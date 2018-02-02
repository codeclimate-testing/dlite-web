'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../../client/helpers/data-present';
import wrapperGenerator         from '../../../support/wrapper';
import CorrectingIDInfo           from '../../../../../client/presentations/get-started/intro-page/correcting-id-info.jsx';
import GetStartedPage           from '../../../../../client/presentations/get-started/get-started-page.jsx';
import store                    from '../../../support/page-store';
import translations             from '../../../../../client/i18n';

describe('CorrectingIDInfo', function() {
  const Wrapper = wrapperGenerator(store);
  let props;

  beforeEach(function() {
    let cardType = {
      IDDL: ['ID'],
      cardAction: 'change',
      youthIDInstead: ''
    };
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
      cardType,
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
      props.cardType.IDDL = ['DL'];

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.correcting-id-info'), false);
    });

    it('returns null when user is not correcting an ID', function() {
      props.cardChanges.correctOrUpdate = 'update';

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );


      assert.equal(component.find('.correcting-id-info'), false);
    });
  });

  describe('when correcting an ID', function() {
    it('shows that user is correcting an ID on get started page', function() {

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.correctingID), true);
    });

    it('shows that user is getting a reduced fee ID on get started page', function() {
      props.reducedFee.ID = 'Yes';

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.correctingReducedFeeID), true);
    });

    it('shows that user is getting new senior ID on get started page', function() {
      props.seniorID = 'No';

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.correctingSeniorID), true);
    });

    it('shows that user getting no fee ID on get started page', function() {
      props.seniorID = 'Yes';

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes('You are correcting a no-fee ID card'), true);
      assert.ok(component.find('p.translation-missing').length, 'translation for noFeeID not present');
    });
  });
});

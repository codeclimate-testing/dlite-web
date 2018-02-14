'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../../client/helpers/data-present';
import wrapperGenerator         from '../../../support/wrapper';
import UpdatingIDInfo           from '../../../../../client/presentations/get-started/intro-page/updating-id-info.jsx';
import GetStartedPage           from '../../../../../client/presentations/get-started/get-started-page.jsx';
import store                    from '../../../support/page-store';
import translations             from '../../../../../client/i18n';

describe('UpdatingIDInfo', function() {
  const Wrapper = wrapperGenerator(store);
  let props;

  beforeEach(function() {
    let cardChanges = {
      correctOrUpdate: 'update',
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
      cardAction: 'change',
      IDApp: {
        action: 'change',
        isApplying: true,
        cardChanges: cardChanges,
        reducedFee: reducedFee,
        seniorID: ''
      },
      DLApp: {
        isApplying: false,
        action: '',
        cardChanges: cardChanges,
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
      props.DLApp.isApplying = true;
      props.DLApp.action = 'change';
      props.IDApp.isApplying = false;
      props.IDApp.action = '';

      let component = render(
        <Wrapper>
          <UpdatingIDInfo {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.updating-id-info'), false);
    });

    it('returns null when user is not updating an ID', function() {
      props.IDApp.cardChanges.correctOrUpdate = 'correct';
      props.IDApp.isApplying = true;
      props.IDApp.action = 'change';

      let component = render(
        <Wrapper>
          <UpdatingIDInfo {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.updating-id-info'), false);
    });
  });

  describe('when updating an ID', function() {
    it('shows that user is updating an ID on get started page', function() {
      let component = render(
        <Wrapper>
          <GetStartedPage {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.updatingID), true);
    });

    it('shows that user is getting a reduced fee ID on get started page', function() {
      props.IDApp.reducedFee.ID = 'Yes';

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.updatingReducedFeeID), true);
    });

    it('shows that user is getting new senior ID on get started page', function() {
      props.IDApp.seniorID = 'Yes';

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.updatingSeniorID), true);
    });
  });
});

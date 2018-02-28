'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../../client/helpers/data-present';
import wrapperGenerator         from '../../../support/wrapper';
import UpdateApplicationInfo           from '../../../../../client/presentations/get-started/intro-page/update-application-info.jsx';
import GetStartedPage           from '../../../../../client/presentations/get-started/get-started-page.jsx';
import store                    from '../../../support/page-store';
import translations             from '../../../../../client/i18n';

describe('UpdateApplicationInfo', function() {
  const Wrapper = wrapperGenerator(store);
  let props;
  let locale = 'en';
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
      realIdDesignation: '', getRealID: ''
    };
    let reducedFee = {
      ID: '',
      form: ''
    };
    let seniorID = '';

    let onChange = spy();

    props = {
      cardType: [],
      cardAction: 'change',
      IDApp: {
        action: '',
        isApplying: false,
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
      onChange,
      locale
    }
  });

  describe('null', function() {
    it('returns null when user is not updating a card', function() {
      props.cardChanges.correctOrUpdate = 'correct';

      let component = render(
        <Wrapper>
          <UpdateApplicationInfo {...props} />
        </Wrapper>
      );
      assert.equal(component.find('.update-application-info'), false);
    });
  });

  describe('when applying for ID', function() {
    beforeEach(function() {
      props.cardType = ['ID'];
      props.IDApp.action = 'change';
      props.IDApp.cardChanges.correctOrUpdate = 'update';
    });

    it('shows application info for update an ID', function() {

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );
        assert.equal(component.text().includes(translations[locale].intro.getStartedPage.explanation.update.id), true);
    });
  });

  describe('when applying for DL', function() {
    beforeEach(function() {
      props.cardType = ['DL'];
      props.DLApp.action = 'change';
      props.DLApp.cardChanges.correctOrUpdate = 'update';
    });

    it('shows application info for update a DL', function() {

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );
        assert.equal(component.text().includes(translations[locale].intro.getStartedPage.explanation.update.license), true);
    });
  });
});

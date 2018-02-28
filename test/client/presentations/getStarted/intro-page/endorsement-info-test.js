'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../../client/helpers/data-present';
import wrapperGenerator         from '../../../support/wrapper';
import EndorsementIngo           from '../../../../../client/presentations/get-started/intro-page/endorsement-info.jsx';
import GetStartedPage           from '../../../../../client/presentations/get-started/get-started-page.jsx';
import store                    from '../../../support/page-store';
import translations             from '../../../../../client/i18n';

describe('EndorsementInfo', function() {
  const Wrapper = wrapperGenerator(store);
  let props;
  let locale = 'en';
  beforeEach(function() {
    let cardChanges = {
      correctOrUpdate: '',
      sections: []
    };
    let licenseType = {
      type: [],
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
      cardAction: '',
      IDApp: {
        isApplying: false,
        action: '',
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
    it('returns null when not applying for DL', function() {
      props.cardType = ['ID'];

      let component = render(
        <Wrapper>
          <EndorsementIngo  {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.endorsement-info'), false);
    });
  });

  describe('endorsements', function() {
    it('shows firefighter endorsement when user selects Yes to needing endorsement', function() {
      props.licenseType.needEndorsement = 'Yes'

      let component = render(
        <Wrapper>
          <EndorsementIngo  {...props} />
        </Wrapper>
      );
      assert.equal(component.text().includes(translations[locale].intro.getStartedPage.whatYouAreDoing.firefighterEndorsement), true);
    });
  });
});

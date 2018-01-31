'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../../client/helpers/data-present';
import wrapperGenerator         from '../../../support/wrapper';
import RealIDInfo           from '../../../../../client/presentations/get-started/intro-page/real-id-info.jsx';
import GetStartedPage           from '../../../../../client/presentations/get-started/get-started-page.jsx';
import store                    from '../../../support/page-store';
import translations             from '../../../../../client/i18n';

describe('RealIDInfo', function() {
  const Wrapper = wrapperGenerator(store);
  let props;

  beforeEach(function() {
    let cardType = {
      IDDL: [''],
      cardAction: '',
      youthIDInstead: ''
    };
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
      getRealID: 'Yes'
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
    it('returns null when user does not want real id', function() {
      props.realID.getRealID = 'No';

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.real-id-info'), false);
    });
  });

  describe('realID', function() {
    describe('ID', function() {
      it('shows that ID card will be real id compliant', function() {
        props.realID.realIdDesignation = 'ID'
        props.cardType.IDDL = ['ID', 'DL']

        let component = render(
          <Wrapper>
          <GetStartedPage {...props} />
          </Wrapper>
        );
        assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.realIDCompliantID), true);
      });
    });

    describe('DL', function() {
      it('shows that DL will be real id compliant', function() {
        props.realID.realIdDesignation = ''
        props.cardType.IDDL = ['DL']

        let component = render(
          <Wrapper>
          <GetStartedPage {...props} />
          </Wrapper>
        );
        assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.realIDCompliantLicense), true);
      });
    });
  });
});

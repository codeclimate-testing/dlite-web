'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../../client/helpers/data-present';
import wrapperGenerator         from '../../../support/wrapper';
import RealIDInfo               from '../../../../../client/presentations/get-started/intro-page/real-id-info.jsx';
import GetStartedPage           from '../../../../../client/presentations/get-started/get-started-page.jsx';
import store                    from '../../../support/page-store';
import translations             from '../../../../../client/i18n';

describe('RealIDInfo', function() {
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
      endorsement: [],
      needEndorsement: ''
    };
    let realID = '';
    let reducedFee = {
      ID: '',
      form: ''
    };
    let seniorID = '';

    let onChange = spy();

    props = {
      cardType: [],
      cardAction: '',
      IDApp: {
        isApplying: false,
        action: '',
        reducedFee,
        seniorID,
        cardChanges,
        realID
      },
      DLApp: {
        isApplying: false,
        action: '',
        licenseType,
        cardChanges,
        realID
      },
      cardChanges,
      licenseType,
      cardChanges,
      realID,
      reducedFee,
      seniorID,
      onChange,
      locale
    }
  });

  describe('null', function() {
    it('returns null when user does not want real id', function() {
      props.realID = 'No';

      let component = render(
        <Wrapper>
          <RealIDInfo {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.real-id-info'), false);
    });
  });

  describe('realID', function() {
    describe('ID', function() {
      it('shows that ID card will be real id compliant', function() {
        props.realID = 'Yes';
        props.cardType = ['ID', 'DL'];
        props.IDApp.realID = 'Yes';
        props.DLApp.realID = 'No';

        let component = render(
          <Wrapper>
            <GetStartedPage {...props} />
          </Wrapper>
        );
        assert.equal(component.text().includes(translations[locale].intro.getStartedPage.whatYouAreDoing.realIDCompliantID), true);
      });
    });

    describe('DL', function() {
      it('shows that DL will be real id compliant', function() {
        props.realID = 'Yes';
        props.DLApp.realID = 'Yes';

        let component = render(
          <Wrapper>
          <GetStartedPage {...props} />
          </Wrapper>
        );
        assert.equal(component.text().includes(translations[locale].intro.getStartedPage.whatYouAreDoing.realIDCompliantLicense), true);
      });
    });
  });
});

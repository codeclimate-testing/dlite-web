'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../../client/helpers/data-present';
import wrapperGenerator         from '../../../support/wrapper';
import VehicleInfo              from '../../../../../client/presentations/get-started/intro-page/vehicle-info.jsx';
import GetStartedPage           from '../../../../../client/presentations/get-started/get-started-page.jsx';
import store                    from '../../../support/page-store';
import translations             from '../../../../../client/i18n';

describe('VehicleInfo', function() {
  const Wrapper = wrapperGenerator(store);
  let props;

  beforeEach(function() {
    let cardType = {
      IDDL: ['DL'],
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
    it('returns null when user not applying for a DL', function() {
      props.cardType.IDDL = ['ID'];

      let component = render(
        <Wrapper>
        <GetStartedPage {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.vehicle-info'), false);
    });
  });

  describe('license type', function() {
    beforeEach(function() {
      props.cardType.IDDL = ['DL'];
    });

    describe('type', function() {
      it('shows class C when user selects car', function() {
        props.licenseType.type = ['car']

        let component = render(
          <Wrapper>
          <GetStartedPage {...props} />
          </Wrapper>
        );

        let text = translations.intro.getStartedPage.whatYouAreDoing.classes.C;
        assert.equal(component.text().includes(text), true);
      });

      it('shows class M when user selects cycle', function() {
        props.licenseType.type = ['cycle']

        let component = render(
          <Wrapper>
          <GetStartedPage {...props} />
          </Wrapper>
        );
        assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.classes.M), true);
      });

      it('shows class A when user selects long', function() {
        props.licenseType.type = ['long']

        let component = render(
          <Wrapper>
          <GetStartedPage {...props} />
          </Wrapper>
        );
        assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.classes.A), true);
      });

      it('shows class B when user selects trailer', function() {
        props.licenseType.type = ['trailer']

        let component = render(
          <Wrapper>
          <GetStartedPage {...props} />
          </Wrapper>
        );
        assert.equal(component.text().includes(translations.intro.getStartedPage.whatYouAreDoing.classes.B), true);
      });
    });
  });
});

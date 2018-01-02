'use strict';

import assert                   from 'assert';
import 'jsdom-global/register';
import React                    from 'react';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import wrapperGenerator         from '../../support/wrapper';
import VeteransPage             from '../../../../client/presentations/apply/veterans-service-page.jsx';
import store                    from '../../support/page-store';

describe('VeteransServicePage', function() {
  const Wrapper = wrapperGenerator(store);

  let props;

  beforeEach(function() {
    let veteransService = {
      isVeteran: '',
      receiveBenfits: '',
      previouslyDesignated: '',
      veteransIdentifier: ''
    };

    let cardType = {
      new: ['ID', 'DL'],
      renew: ''
    };

    let cardAction = 'new';

    let legalName = {
      firstName: 'John',
      lastName: 'Doe'
    };

    let continueDisabled = !(dataPresent.veteransService(veteransService));
    let onChange = spy();

    props = {
      veteransService,
      cardType,
      cardAction,
      legalName,
      continueDisabled,
      onChange
    }
  });

  describe('when veterans page initially renders', function() {
    it('shows the yes/no form asking if user has ever served in United States Military', function() {
      let component = render(
        <Wrapper>
          <VeteransPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="isVeteranYes"]').length, 'yes button missing');
      assert.ok(component.find('label[for="isVeteranNo"]').length, 'no button missing');
      assert.ok(component.find('.veterans-questionnaire-form').length, 'form missing');
    });

    it('next button is disabled', function() {
      let component = render(
        <Wrapper>
          <VeteransPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.arrow-button .forward disabled'));
    });

    it('selecting No makes next button no longer disabled', function() {
      props.veteransService.isVeteran = 'No';

      let component = render(
        <Wrapper>
          <VeteransPage {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.arrow-button .forward disabled'), false);
      assert.ok(component.find('.arrow-button forward'));
    });
  });

  describe('when veteran is getting a new card', function() {
    it('selecting Yes renders benefits and identifier forms', function() {
      props.veteransService.isVeteran = 'Yes';

      let component = render(
        <Wrapper>
          <VeteransPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.veterans-benefits-form').length, 'veterans benefits form did not render');
      assert.ok(component.find('.veterans-identifier-form').length, 'veterans identifier form did not render');
      assert.ok(component.find('.new-designation').length, 'new designation form did not render');
    });

    it('selecting Yes will keep continue button disabled', function() {
      props.veteransService.isVeteran = 'Yes';

      let component = render(
        <Wrapper>
          <VeteransPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.arrow-button .forward disabled'));
    });

    describe('answering veterans identifier question', function() {
      beforeEach(function() {
        props.veteransService.isVeteran = 'Yes';
      });

      it('selecting No enables the continue button', function() {
        props.veteransService.veteransIdentifier = 'No';

        let component = render(
          <Wrapper>
          <VeteransPage {...props} />
          </Wrapper>
        );
        assert.equal(component.find('.arrow-button .forward disabled'), false);
        assert.ok(component.find('.arrow-button forward'));
      });

      it('shows fee notification when selecting Yes', function() {
        props.veteransService.veteransIdentifier = 'Yes';

        let component = render(
          <Wrapper>
          <VeteransPage {...props} />
          </Wrapper>
        );
        assert.ok(component.find('.veteran-identifier-fee').length, 'fee notification did not render');
      });

      it('selecting Yes enables the continue button', function() {
        props.veteransService.veteransIdentifier = 'Yes';

        let component = render(
          <Wrapper>
          <VeteransPage {...props} />
          </Wrapper>
        );
        assert.equal(component.find('.arrow-button .forward disabled'), false);
        assert.ok(component.find('.arrow-button forward'));
      });
    });
  });

  describe('when veteran is renewing a card', function() {
    beforeEach(function() {
      props.cardAction = 'renew';
    });

    it('selecting Yes renders benefits and designation forms', function() {
      props.veteransService.isVeteran = 'Yes';

      let component = render(
        <Wrapper>
          <VeteransPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.veterans-benefits-form').length, 'veterans benefits form did not render');
      assert.ok(component.find('.veterans-previous-designation-form').length, 'veterans previous designation form did not render');
      assert.ok(!component.find('.veterans-identifier-form').length, 'veterans identifier form did not render');
    });

    describe('when selecting veterans designation', function() {
      beforeEach(function() {
        let veteransService = {
          isVeteran: 'Yes',
          receiveBenfits: 'Yes',
          previouslyDesignated: '',
          veteransIdentifier: ''
        };
      });

      it('selecting No shows veterans identifier section for new designation', function() {
        props.veteransService.previouslyDesignated = 'No';

        let component = render(
          <Wrapper>
          <VeteransPage {...props} />
          </Wrapper>
        );
        assert.ok(component.find('.veterans-identifier-form').length, 'veterans identifier form did not render');
        assert.ok(component.find('.new-designation').length, 'new designation form did not render');
      });

      it('selecting No keeps continue button disabled', function() {
        props.veteransService.previouslyDesignated = 'No';

        let component = render(
          <Wrapper>
          <VeteransPage {...props} />
          </Wrapper>
        );
        assert.ok(component.find('.arrow-button .forward disabled'));
      });

      it('selecting Yes shows veterans identifier section for previous designation', function() {
        props.veteransService.previouslyDesignated = 'Yes';

        let component = render(
          <Wrapper>
          <VeteransPage {...props} />
          </Wrapper>
        );
        assert.ok(component.find('.veterans-identifier-form').length, 'veterans identifier form did not render');
        assert.ok(component.find('.previous-designation').length, 'previous designation form did not render');
      });

      it('selecting Yes keeps continue button disabled', function() {
        props.veteransService.previouslyDesignated = 'Yes';

        let component = render(
          <Wrapper>
          <VeteransPage {...props} />
          </Wrapper>
        );
        assert.ok(component.find('.arrow-button .forward disabled'));
      });
    });

    describe('when selecting veterans identifier', function() {
      beforeEach(function() {
        props.veteransService.isVeteran = 'Yes';
        props.veteransService.receiveBenefits = 'Yes';
        props.veteransService.previouslyDesignated = 'Yes';
      });

      it('shows removal notification when selecting No and veteran was previously designated', function() {
        props.veteransService.veteransIdentifier = 'No';

        let component = render(
          <Wrapper>
          <VeteransPage {...props} />
          </Wrapper>
        );
        assert.ok(component.find('.remove-veteran-identifier').length, 'removal notification did not render');
      });

      it('shows fee notification when selecting Yes', function() {
        props.veteransService.veteransIdentifier = 'Yes';

        let component = render(
          <Wrapper>
          <VeteransPage {...props} />
          </Wrapper>
        );
        assert.ok(component.find('.veteran-identifier-fee').length, 'fee notification did not render');
      });
    });
  });
});


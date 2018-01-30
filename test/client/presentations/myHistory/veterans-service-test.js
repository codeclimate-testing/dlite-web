'use strict';

import assert                   from 'assert';
import React                    from 'react';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import wrapperGenerator         from '../../support/wrapper';
import VeteransPage             from '../../../../client/presentations/my-history/veterans-service-page.jsx';
import store                    from '../../support/page-store';

describe('VeteransServicePage', function() {
  const Wrapper = wrapperGenerator(store);

  let props;

  beforeEach(function() {
    let veteransService = {
      isVeteran: '',
      receiveBenefits: '',
      previouslyDesignated: '',
      veteransIdentifier: ''
    };

    let cardType = {
      IDDL: ['ID', 'DL'],
      cardAction: 'new'
    };

    let onChange = spy();

    let validations = {
      isVeteran: spy(),
      receiveBenefits: spy(),
      veteransDesignation: spy(),
      veteransIdentifier: spy(),
      all: spy(),
      isValid: () => { return true; }
    };

    props = {
      veteransService,
      cardType,
      onChange,
      validations
    }
  });

  describe('when veterans page initially renders', function() {
    it('shows the yes/no form asking if user has ever served in United States Military', function() {
      let component = render(
        <Wrapper>
          <VeteransPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="isVeteran-Yes"]').length, 'yes button missing');
      assert.ok(component.find('label[for="isVeteran-No"]').length, 'no button missing');
      assert.ok(component.find('.veterans-questionnaire-form').length, 'form missing');
    });

    it('selecting Yes makes messageBox className "thanks" appear', function() {
      props.veteransService.isVeteran = 'Yes';
      let component = render(
        <Wrapper>
          <VeteransPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.message-box .thanks').length, 'thanks message box not found');
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

    describe('answering veterans identifier question', function() {
      beforeEach(function() {
        props.veteransService.isVeteran = 'Yes';
        props.veteransService.receiveBenefits = 'Yes';
      });

      it('selecting No makes messageBox "info" appear', function() {
        props.veteransService.veteransIdentifier = 'No';
        props.veteransService.previouslyDesignated = 'Yes';
        props.selectedValue = props.veteransService.veteransIdentifier;

        let component = render(
          <Wrapper>
            <VeteransPage {...props} />
          </Wrapper>
        );
        assert.ok(component.find('.message-box .info').length, 'info message box not found');
        assert.ok(component.text().includes('OK, we will remove it'), 'message box text not found');
      });

      it('shows fee notification when selecting Yes', function() {
        props.veteransService.veteransIdentifier = 'Yes';
        props.selectedValue = props.veteransService.veteransIdentifier;

        let component = render(
          <Wrapper>
          <VeteransPage {...props} />
          </Wrapper>
        );
        assert.ok(component.find('.message-box .info').length, 'info message box not found');
        assert.ok(component.find('.veteran-identifier-fee').length, 'fee notification did not render');
      });
    });
  });

  describe('when veteran is renewing a card', function() {
    beforeEach(function() {
      props.cardType.cardAction = 'renew';
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
        props.veteransService.isVeteran             = 'Yes';
        props.veteransService.receiveBenfits        = 'Yes';
        props.veteransService.previouslyDesignated  = '';
        props.veteransService.veteransIdentifier    = '';
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

  describe('when veteran is updating a card', function() {
    beforeEach(function() {
      props.cardType.cardAction = 'change';
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
        props.veteransService.isVeteran             = 'Yes';
        props.veteransService.receiveBenfits        = 'Yes';
        props.veteransService.previouslyDesignated  = '';
        props.veteransService.veteransIdentifier    = '';
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

  describe('when veteran is replacing a card', function() {
    beforeEach(function() {
      props.cardType.cardAction = 'replace';
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
        props.veteransService.isVeteran             = 'Yes';
        props.veteransService.receiveBenfits        = 'Yes';
        props.veteransService.previouslyDesignated  = '';
        props.veteransService.veteransIdentifier    = '';
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


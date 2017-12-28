'use strict';

import assert                       from 'assert';
import 'jsdom-global/register';
import React                        from 'react';
import configure                    from '../../support/configure-enzyme';
import { render }                   from 'enzyme';
import { spy }                      from 'sinon';
import * as dataPresent             from '../../../../client/helpers/data-present';
import wrapperGenerator             from '../../support/wrapper';
import VeteransQuestionnaire        from '../../../../client/presentations/apply/veterans-questionnaire-form.jsx';
import VeteransPreviousDesignation  from '../../../../client/presentations/apply/veterans-previous-designation-form.jsx';
import VeteransIdentifier           from '../../../../client/presentations/apply/veterans-identifier-form.jsx';

describe('VeteransServicePage', function() {
  let store = {
    ui: {}
  };

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

    let continueDisabled = !(dataPresent.veteransService(veteransService));
    let onChange = spy();

    props = {
      veteransService,
      cardType,
      continueDisabled,
      onChange
    }
  });

  describe('when veterans page initially renders', function() {
    it('shows the yes/no form asking if user has ever served in United States Military', function() {
      let component = render(
        <Wrapper>
          <VeteransQuestionnaire {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="isVeteranYes"]').length, 'yes button missing');
      assert.ok(component.find('label[for="isVeteranNo"]').length, 'no button missing');
      assert.ok(component.find('.veterans-questionnaire-form').length, 'form missing');
    });

    it('next button is disabled', function() {
      let component = render(
        <Wrapper>
          <VeteransQuestionnaire {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.arrow-button .forward disabled'));
    });

    it('selecting No makes next button no longer disabled', function() {
      props.veteransService.isVeteran = 'No';

      let component = render(
        <Wrapper>
          <VeteransQuestionnaire {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.arrow-button .forward disabled'), false);
      assert.ok(component.find('.arrow-button forward'));
    });

    it('selecting Yes shows next set of questions', function() {
      props.veteransService.isVeteran = 'Yes';

      let component = render(
        <Wrapper>
          <VeteransPreviousDesignation {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.veterans-previous-designation-form'));
    });

    it('selecting Yes will keep continue button disabled', function() {
      props.veteransService.isVeteran = 'Yes';

      let component = render(
        <Wrapper>
          <VeteransPreviousDesignation {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.arrow-button .forward disabled'));
    });
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
          <VeteransIdentifier {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.veterans-identifier-form'));
      assert.ok(component.find('.new-designation'));
    });

    it('selecting No keeps continue button disabled', function() {
      props.veteransService.previouslyDesignated = 'No';

      let component = render(
        <Wrapper>
          <VeteransIdentifier {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.arrow-button .forward disabled'));
    });

    it('selecting Yes shows veterans identifier section for previous designation', function() {
      props.veteransService.previouslyDesignated = 'Yes';

      let component = render(
        <Wrapper>
          <VeteransIdentifier {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.veterans-identifier-form'));
      assert.ok(component.find('.previous-designation'));
    });

    it('selecting Yes keeps continue button disabled', function() {
      props.veteransService.previouslyDesignated = 'Yes';

      let component = render(
        <Wrapper>
          <VeteransIdentifier {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.arrow-button .forward disabled'));
    });
  });

  describe('when selecting veterans identifier', function() {
    beforeEach(function() {
      let veteransService = {
        isVeteran: 'Yes',
        receiveBenfits: 'Yes',
        previouslyDesignated: 'Yes',
        veteransIdentifier: ''
      };
    });

    it('shows removal notification when selecting No and veteran was previously designated', function() {
      props.veteransService.veteransIdentifier = 'No';

      let component = render(
        <Wrapper>
          <VeteransIdentifier {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.remove-veteran-identifier'));
    });

    it('selecting No enables the continue button', function() {
      props.veteransService.veteransIdentifier = 'No';

      let component = render(
        <Wrapper>
          <VeteransIdentifier {...props} />
        </Wrapper>
      );
      assert.equal(component.find('.arrow-button .forward disabled'), false);
      assert.ok(component.find('.arrow-button forward'));
    });

    it('shows fee notification when selecting Yes', function() {
      props.veteransService.veteransIdentifier = 'Yes';

      let component = render(
        <Wrapper>
          <VeteransIdentifier {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.veteran-identifier-fee'));
    });

    it('selecting Yes enables the continue button', function() {
      props.veteransService.veteransIdentifier = 'Yes';

      let component = render(
        <Wrapper>
          <VeteransIdentifier {...props} />
        </Wrapper>
      );
      assert.equal(component.find('.arrow-button .forward disabled'), false);
      assert.ok(component.find('.arrow-button forward'));
    });
  });
});


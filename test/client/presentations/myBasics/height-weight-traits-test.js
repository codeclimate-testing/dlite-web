'use strict';

import assert                   from 'assert';

import React                    from 'react';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import * as dataPresent         from '../../../../client/helpers/data-present';
import HeightWeightPage         from '../../../../client/presentations/myBasics/traits-height-weight-page.jsx';
import store                    from '../../support/page-store';

describe('HeightWeightPage', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;
    
    beforeEach(function() {
      let traitsHeightWeight = {
        heightFeet: '',
        heightInches: '',
        weight: ''
      };

      let continueDisabled = !(dataPresent.traitsHeightWeight(traitsHeightWeight))
      let onChange = spy();

      let validations = {
        heightFeet: spy(),
        heightInches: spy(),
        weight: spy(),
        all: spy(),
        isValid: () => { return true; }
      };

      props = {
        traitsHeightWeight,
        continueDisabled,
        onChange,
        validations
      }
    });
    
    it('shows the form allowing you to enter your height and weight', function() {
      let component = render(
        <Wrapper>
          <HeightWeightPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('input#heightFeet').length, 'feet input missing');
      assert.ok(component.find('input#heightInches').length, 'inches input missing');
      assert.ok(component.find('input#weight').length, 'weight input missing');
    });
  });
});


'use strict';

import assert                   from 'assert';

import 'jsdom-global/register';
import React                    from 'react';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import wrapperGenerator         from '../../support/wrapper';
import * as dataPresent         from '../../../../client/helpers/data-present';
import HeightWeightPage         from '../../../../client/presentations/apply/traits-height-weight-page.jsx';
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

      props = {
        traitsHeightWeight,
        continueDisabled,
        onChange
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

    it('next button is disabled', function() {
      let component = render(
        <Wrapper>
          <HeightWeightPage {...props} />
        </Wrapper>
      );
      assert.equal(props.continueDisabled, true);
    });

    it('entering traits makes next button no longer disabled', function() {
      props.traitsHeightWeight = {
        heightFeet: '6',
        heightInches: '4',
        weight: '210'
      };
      props.continueDisabled  =   !(dataPresent.traitsHeightWeight(props.traitsHeightWeight));

      let component = render(
        <Wrapper>
          <HeightWeightPage {...props} />
        </Wrapper>
      );
      assert.equal(props.continueDisabled, false);
    });

  });

});


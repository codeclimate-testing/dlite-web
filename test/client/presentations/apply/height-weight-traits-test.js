'use strict';

import assert                   from 'assert';

import 'jsdom-global/register';
import React                    from 'react';
import { createMockStore }      from 'redux-test-utils';
import { Provider }             from "react-redux";
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import { MemoryRouter }         from 'react-router-dom'
import * as dataPresent         from '../../../../client/helpers/data-present';

import HeightWeightPage         from '../../../../client/presentations/apply/traits-height-weight-form.jsx';

describe('HeightWeightPage', function() {
  let store = {
    ui: {}
  };

  const Wrapper = (props) => {
    return(
      <Provider store={createMockStore(store)}>
        <MemoryRouter>
          {props.children}
        </MemoryRouter>
      </Provider>
    );
  };

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
      assert.ok(component.find('.arrow-button .forward disabled'));
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

      assert.equal(component.find('.arrow-button .forward disabled'), false);
      assert.ok(component.find('.arrow-button forward'));
    });

  });

});


// I will see labels for sex, eye color and hair color
// radio buttons for donating organs
// radio buttons for donating money

// test the nextAddress variable based on different ages
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
import data                     from '../../../../server/helpers/client-default-state.js';
import PhysicalTraitsPage       from '../../../../client/containers/apply/physical-traits-form-container.jsx';

describe('PhysicalTraitsPage', function() {
  let store = {
    ui: {},
    application: {
      physicalTraits: data.application.physicalTraits
    }
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
      let onChange = spy();

      props = {
        onChange
      }
    });
    
    it('shows forms asking for sex, eye color, and hair color ', function() {
      let component = render(
        <Wrapper>
          <PhysicalTraitsPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.sex').length, 'form asking for sex missing');
      assert.ok(component.find('.eye-color').length, 'form asking for eye color missing');
      assert.ok(component.find('.hair-color').length, 'form asking for hair color missing');
    });

    it('next button is disabled', function() {
      let component = render(
        <Wrapper>
          <PhysicalTraitsPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.arrow-button .forward disabled'));
    });

    // it('entering physical traits makes next button no longer disabled', function() {
    //   store.application.physicalTraits.sex = 'Female';
    //   store.application.physicalTraits.eyeColor = 'Gray';
    //   store.application.physicalTraits.hairColor = 'Bald';

    //   let component = render(
    //     <Wrapper>
    //       <PhysicalTraitsPage {...props} />
    //     </Wrapper>
    //   );

    //   assert.equal(component.find('.arrow-button .forward disabled'), false);
    //   assert.ok(component.find('.arrow-button forward'));
    // });

  });

});


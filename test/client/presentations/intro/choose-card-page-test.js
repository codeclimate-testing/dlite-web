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

import ChooseCardPage           from '../../../../client/presentations/intro/choose-card-page.jsx';

describe('ChooseCardPage', function() {
  let store = {
    ui: {

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
      let cardType = {
        ID: '',
        DL: ''
      };

      let onChange = spy();

      props = {
        cardType,
        onChange
      }
    });
    
    it('shows a button for ID and a button for DL', function() {
      let component = render(
        <Wrapper>
          <ChooseCardPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="ID"]').length, 'ID checkbox missing');
      assert.ok(component.find('label[for="DL"]').length, 'DL checkbox missing');
    });

    it('next button is disabled', function() {
      let continueDisabled  =   !(dataPresent.cardType(props.cardType));
      let component = render(
        <Wrapper>
          <ChooseCardPage {...props} 
          continueDisabled = { continueDisabled }
          />
        </Wrapper>
      );
      assert.ok(component.find('.arrow-button .forward disabled'));
    });

    it('selecting ID makes next button no longer disabled', function() {
      props.cardType.ID = true;
      let continueDisabled  =   !(dataPresent.cardType(props.cardType));

      let component = render(
        <Wrapper>
          <ChooseCardPage {...props} 
          continueDisabled = { continueDisabled }
          />
        </Wrapper>
      );

      assert.equal(component.find('.arrow-button .forward disabled'), false);
      assert.ok(component.find('.arrow-button forward'));
    });

  });

});

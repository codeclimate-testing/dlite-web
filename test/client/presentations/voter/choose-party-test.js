// I will see buttons for each political party
// select a button to see "next" button no longer disabled

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
import ChoosePartyPage          from '../../../../client/presentations/voter-registration/voter-choose-party-form.jsx';

describe('ChoosePartyPage ', function() {
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
      let politicalPartyChoose = {
        isSelected: ''
      };

      let onChange = spy();

      props = {
        politicalPartyChoose,
        onChange
      }
    });
    
    it('shows the form asking if user would like to choose political party', function() {
      let component = render(
        <Wrapper>
          <ChoosePartyPage   {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.choose-party').length, 'form missing');
    });

    // TODO add test for selecting Yes adds form letting user choose the party

  });

});


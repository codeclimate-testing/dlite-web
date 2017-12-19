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

import SeniorIDPage             from '../../../../client/presentations/intro/senior-id-page.jsx';

describe('SeniorIDPage', function() {
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
      let seniorID = '';
      let continueDisabled = !(dataPresent.value(seniorID))
      let onChange = spy();

      props = {
        seniorID,
        continueDisabled,
        onChange
      }
    });
    
    it('shows the form allowing you to choose to get a senior ID', function() {
      let component = render(
        <Wrapper>
          <SeniorIDPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="seniorIDNo"]').length, 'No button missing');
      assert.ok(component.find('label[for="seniorIDYes"]').length, 'Yes button missing');
    });

    it('next button is disabled', function() {
      let component = render(
        <Wrapper>
          <SeniorIDPage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.arrow-button .forward disabled'));
    });

    it('selecting No makes next button no longer disabled', function() {
      props.seniorID = 'No';
      props.continueDisabled  =   !(dataPresent.value(props.seniorID));

      let component = render(
        <Wrapper>
          <SeniorIDPage {...props} />
        </Wrapper>
      );

      assert.equal(component.find('.arrow-button .forward disabled'), false);
      assert.ok(component.find('.arrow-button forward'));
    });

  });

});


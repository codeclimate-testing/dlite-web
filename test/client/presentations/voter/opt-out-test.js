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
import OptOutPage               from '../../../../client/presentations/voter-registration/opt-out-form.jsx';

describe('OptOutPage', function() {
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
      let dateOfBirth = {
        month: '',
        day: '',
        year: ''
      };
      let optOut = '';
      let continueDisabled = !(dataPresent.value(optOut));

      let onChange = spy();

      props = {
        dateOfBirth,
        optOut,
        continueDisabled,
        onChange
      }
    });
    
    it('shows the form asking if which best describes users voting registration status', function() {
      let component = render(
        <Wrapper>
          <OptOutPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.opt-out-form').length, 'form missing');
      assert.ok(component.find('label[for="optOut-new"]'), 'new voter button missing');
      assert.ok(component.find('label[for="optOut-existing"]'), 'existing voter button missing');
      assert.ok(component.find('label[for="optOut-opt-out"]'), 'Opt out button missing');
    });

    // TODO test onSubmit navigation

    // TODO test preregistration vs registration based on DOB

  });

});


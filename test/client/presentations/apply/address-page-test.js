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

import AddressForm              from '../../../../client/presentations/address-template.jsx';

describe('NamePage', function() {
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
      let homeAddress = {
        homeAddressSameAsMailing: '',
        street_1: '',
        street_2: '',
        city: '',
        state: '',
        zip: ''
      };
      let continueDisabled = !(dataPresent.homeAddressSameAsMailing(homeAddress))
      let onChange = spy();

      props = {
        homeAddress,
        continueDisabled,
        onChange
      }
    });
    
    it('shows the form asking for home address', function() {
      let component = render(
        <Wrapper>
          <AddressForm {...props} 
            address = {props.homeAddress}
          />
        </Wrapper>
      );

      assert.ok(component.find('input#street_1').length, 'Street address input not found');
      assert.ok(component.find('input#street_2').length, 'Unit or apartment input not found');
      assert.ok(component.find('#city').length,   'City input not found');
      assert.ok(component.find('select[name="state"]').length,  'State select not found');
      assert.ok(component.find('#zip').length,    'State select not found');
    });
  });
});


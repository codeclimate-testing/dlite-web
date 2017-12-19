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

import NamePage                 from '../../../../client/presentations/intro/name-page.jsx';

describe('NamePage', function() {
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
      let legalName = {
        firstName: '',
        middleName: '',
        lastName: '',
        suffix: ''
      };

      let onChange = spy();

      props = {
        legalName,
        onChange
      }
    });
    
    it('shows form for first name, middle name, last name, and suffix', function() {
      let component = render(
        <Wrapper>
          <NamePage {...props} />
        </Wrapper>
      );
      assert.ok(component.find('input#firstName').length, 'first name input missing');
      assert.ok(component.find('input#middleName').length, 'middle name input missing');
      assert.ok(component.find('input#lastName').length, 'last name input missing');
      assert.ok(component.find('select#suffix').length, 'suffix selection missing');
    });

    it('next button is disabled', function() {
      let continueDisabled  =   !(dataPresent.legalName(props.legalName));
      let component = render(
        <Wrapper>
          <NamePage {...props} 
          continueDisabled = { continueDisabled }
          />
        </Wrapper>
      );
      assert.ok(component.find('.arrow-button .forward disabled'));
    });

    it('selecting ID makes next button no longer disabled', function() {
      props.legalName = {
        firstName: 'Mathieu',
        middleName: 'Cloud',
        lastName: 'Braytheus',
        suffix: ''
      };
      let continueDisabled  =   !(dataPresent.cardType(props.cardType));

      let component = render(
        <Wrapper>
          <NamePage {...props} 
          continueDisabled = { continueDisabled }
          />
        </Wrapper>
      );

      assert.equal(component.find('.arrow-button .forward disabled'), false);
      assert.ok(component.find('.arrow-button forward'));
    });

  });

});


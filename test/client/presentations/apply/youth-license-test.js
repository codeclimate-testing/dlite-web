// check disabled "next" button based on various answers and ages

// I am younger than 15, I will see a notification at the top letting me know I can't yet come in to complete my application, and do not click Yes to get an ID instead, will see a message letting me know I should come back when I'm older and the next button is disabled

// I am 15-15.5 and want a DL, I will see a message letting me know I cannot complete my license application in office until I am 15.5
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
import YouthLicensePage         from '../../../../client/presentations/apply/youth-license-notification.jsx';

describe('YouthLicensePage', function() {
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
      let cardType = {
        DL: '',
        ID: '',
        youthIDInstead: ''
      };
      let dateOfBirth = {
        month: '',
        year: '',
        day: ''
      };

      let onChange = spy();

      props = {
        dateOfBirth,
        cardType,
        onChange
      }
    });
    
    // it('user under age 15 is told that they must be 15', function() {
    //   props.dateOfBirth = {
    //     month: '4',
    //     day: '10',
    //     year: '2016'
    //   };

    //   let component = render(
    //     <Wrapper>
    //       <YouthLicensePage  {...props} />
    //     </Wrapper>
    //   );
    //   assert.equal(component.text().includes('You must be 15 years old to start an application for a learners permit.'), 'under 15 title missing');
    //   assert.ok(component.find('.youth-license-notification').length, 'form missing');
    // });

    
    // TODO move continueDisabled from container to presentation and add test here

  });

});


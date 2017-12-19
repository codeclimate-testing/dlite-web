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
import OrganPage                from '../../../../client/presentations/apply/donate-organ-form.jsx';

describe('OrganPage', function() {
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
      let organDonation = data.application.organDonation;

      let continueDisabled = !(dataPresent.organDonation(organDonation))
      let onChange = spy();

      props = {
        organDonation,
        continueDisabled,
        onChange
      }
    });
    
    it('shows the form asking if user would like to donate', function() {
      let component = render(
        <Wrapper>
          <OrganPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('label[for="donateYes"]').length, 'Yes button missing');
      assert.ok(component.find('label[for="donateNo"]').length, 'No button missing');
      assert.ok(component.find('.organ-form').length, 'form missing');
    });

    // it('next button is disabled', function() {
    //   let component = render(
    //     <Wrapper>
    //       <OrganPage  {...props} />
    //     </Wrapper>
    //   );
    //   assert.ok(component.find('.arrow-button .forward disabled'));
    // });

    // it('entering Yes to both forms makes next button no longer disabled', function() {
    //   props.organDonation.donate = 'Yes';
    //   props.organDonation.contribute = 'Yes';
    //   props.continueDisabled  =   !(dataPresent.organDonation(props.organDonation));

    //   let component = render(
    //     <Wrapper>
    //       <OrganPage {...props} />
    //     </Wrapper>
    //   );

    //   assert.equal(component.find('.arrow-button .forward disabled'), false);
    //   assert.ok(component.find('.arrow-button forward'));
    // });

  });

});


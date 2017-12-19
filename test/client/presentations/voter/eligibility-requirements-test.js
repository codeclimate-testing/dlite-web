'use strict';

import assert                   from 'assert';

import 'jsdom-global/register';
import React                    from 'react';
import { createMockStore }      from 'redux-test-utils';
import { Provider }             from "react-redux";
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import { MemoryRouter }         from 'react-router-dom'
import EligibilityPage          from '../../../../client/presentations/voter-registration/eligibility-requirements-form.jsx';

describe('EligibilityPage', function() {
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
      let eligibilityRequirements = '';
      let dateOfBirth = {
        month: '',
        day: '',
        year: ''
      };
      let onChange = spy();

      props = {
        eligibilityRequirements,
        dateOfBirth,
        onChange
      }
    });
    
    it('shows the form asking if user meets all the voter registration reqs', function() {
      let component = render(
        <Wrapper>
          <EligibilityPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.eligibility-requirements-form').length, 'form missing');
      assert.ok(component.find('label[for="eligibilityRequirementsYes"]'), 'Yes button missing');
      assert.ok(component.find('label[for="eligibilityRequirementsNo"]'), 'No button missing');
      assert.ok(component.find('label[for="eligibilityRequirementsSkipQuestion"]'), 'Skip Question button missing');
    });

    // TODO check that navigate on submit answer changes correctly given different answers

  });

});


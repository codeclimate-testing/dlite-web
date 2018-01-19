'use strict';

import assert                   from 'assert';
import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme'
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import CitizenStatusPage        from '../../../../client/presentations/voter-registration/citizen-status-page.jsx';
import store                    from '../../support/page-store';
import { checkPreReg }          from '../../../../client/helpers/data/youth';

describe('CitizenStatusPage', function() {
  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;
    
    beforeEach(function() {
      let onChange = spy();
      let dateOfBirth = {
        month: '',
        day: '',
        year: ''
      };
      let citizenStatus = '';
      let prereg = checkPreReg(dateOfBirth);

      props = {
        dateOfBirth,
        citizenStatus,
        onChange,
        prereg
      };
    });
    
    it('shows the form asking if user is a US citizen', function() {
      let component = render(
        <Wrapper>
          <CitizenStatusPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.citizen-status-form').length, 'form missing');
    });

    it('shows pre-registration language for users who are preregistering', function() {
      let today = new Date();

      props.dateOfBirth = {
        month: (today.getMonth() + 1).toString(),
        day: (today.getDate()).toString(),
        year: (today.getFullYear() - 17).toString()
      };
      props.prereg = checkPreReg(props.dateOfBirth);

      let component = render(
        <Wrapper>
          <CitizenStatusPage  {...props} />
        </Wrapper>
      );
   
      assert.ok(component.text().includes('If you decline to answer, you cannot pre-register to vote'), 'pre-registration language not found');
    });

  });

});


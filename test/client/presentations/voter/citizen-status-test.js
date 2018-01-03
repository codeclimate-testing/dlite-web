'use strict';

import assert                   from 'assert';
import 'jsdom-global/register';
import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme'
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import * as dataPresent         from '../../../../client/helpers/data-present';
import CitizenStatusPage        from '../../../../client/presentations/voter-registration/citizen-status/citizen-status-form.jsx';

describe('CitizenStatusPage', function() {
  let store = {
    ui: {}
  };

  const Wrapper = wrapperGenerator(store);

  describe('when it renders initially', function() {
    let props;
    
    beforeEach(function() {
      let dateOfBirth = {
        month: '',
        day: '',
        year: ''
      };
      let citizenStatus = '';

      let onChange = spy();

      props = {
        dateOfBirth,
        citizenStatus,
        onChange
      }
    });
    
    it('shows the form asking if user is a US citizen', function() {
      let component = render(
        <Wrapper>
          <CitizenStatusPage  {...props} />
        </Wrapper>
      );
      assert.ok(component.find('.citizen-status-form').length, 'form missing');
    });

    // TODO add test for FAQ drawers

  });

});

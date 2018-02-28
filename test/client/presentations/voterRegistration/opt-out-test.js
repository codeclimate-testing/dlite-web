'use strict';

import assert                   from 'assert';
import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import OptOutPage               from '../../../../client/presentations/voter-registration/opt-out-page.jsx';
import store                    from '../../support/page-store';
import { checkPreReg }          from '../../../../client/helpers/data/youth';

describe('OptOutPage', function() {
  const Wrapper = wrapperGenerator(store);
  let props;

  beforeEach(function() {
    let optOut = '';
    let onChange = spy();
    let dateOfBirth = {
      month: '',
      day: '',
      year: ''
    };
    let validations = {
      optOut: spy(),
      all: spy()
    };
    let prereg = checkPreReg(dateOfBirth);
    let locale = 'en';
    props = {
      dateOfBirth,
      optOut,
      validations,
      onChange,
      prereg,
      locale
    };
  });

  it('shows the form asking if which best describes users voting registration status', function() {
    let component = render(
      <Wrapper>
        <OptOutPage  {...props} />
      </Wrapper>
    );
    assert.ok(component.find('.opt-out-form').length, 'form missing');
    assert.ok(component.find('label[for="optOut-new"]').length, 'new voter button missing');
    assert.ok(component.find('label[for="optOut-existing"]').length, 'existing voter button missing');
    assert.ok(component.find('label[for="optOut-optOut"]').length, 'Opt out button missing');
  });

  it('shows pre-reg language to users who are preregistering to vote', function() {
    let today = new Date();

      props.dateOfBirth = {
        month: (today.getMonth() + 1).toString(),
        day: (today.getDate()).toString(),
        year: (today.getFullYear() - 17).toString()
      };
      props.prereg = checkPreReg(props.dateOfBirth);

      let component = render(
        <Wrapper>
          <OptOutPage  {...props} />
        </Wrapper>
      );

      assert.ok(component.text().includes('I want to pre-register to vote'), 'pre-registration language not found');
  });
});

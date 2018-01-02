'use strict';

import assert                   from 'assert';
import 'jsdom-global/register';
import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import OptOutPage               from '../../../../client/presentations/voter-registration/opt-out-form.jsx';

describe('OptOutPage', function() {
  let store = {
    ui: {}
  };

  const Wrapper = wrapperGenerator(store);

  let props;

  beforeEach(function() {
    let dateOfBirth = {
      month: '',
      day: '',
      year: ''
    };
    let optOut = '';
    let continueDisabled = true;

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
    assert.ok(component.find('label[for="optOut-new"]').length, 'new voter button missing');
    assert.ok(component.find('label[for="optOut-existing"]').length, 'existing voter button missing');
    assert.ok(component.find('label[for="optOut-opt-out"]').length, 'Opt out button missing');
  });

  // TODO test onSubmit navigation

  // TODO test preregistration vs registration based on DOB
});

'use strict';

import assert                   from 'assert';
import 'jsdom-global/register';
import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';

import * as dataPresent         from '../../../../client/helpers/data-present';
import OptOutPage               from '../../../../client/presentations/voter-registration/opt-out/opt-out-form.jsx';
import store                    from '../../support/page-store';

describe('OptOutPage', function() {
  const Wrapper = wrapperGenerator(store);
  
  describe('when it renders initially', function() {
  let props;

  beforeEach(function() {
    let optOut = '';
    let continueDisabled = true;
    let onChange = spy();
    let dateOfBirth = {
      month: '',
      day: '',
      year: ''
    };
 
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
});
});

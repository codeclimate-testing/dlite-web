'use strict';

import assert                   from 'assert';
import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import OptOutPage               from '../../../../client/presentations/voter-registration/opt-out-page.jsx';
import store                    from '../../support/page-store';

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

    props = {
      dateOfBirth,
      optOut,
      validations,
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
    assert.ok(component.find('label[for="optOut-optOut"]').length, 'Opt out button missing');
  });
});

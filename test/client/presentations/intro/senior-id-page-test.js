'use strict';

import assert                   from 'assert';

import React                    from 'react';
import wrapperGenerator         from '../../support/wrapper';
import configure                from '../../support/configure-enzyme';
import store                    from '../../support/page-store';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import SeniorIDPage             from '../../../../client/presentations/intro/senior-id-page.jsx';

describe('SeniorIDPage', function() {
  const Wrapper = wrapperGenerator(store);

  let props;

  beforeEach(function() {
    let seniorID = '';
    let onChange = spy();

    let validations = {
      seniorID: spy()
    };

    props = {
      seniorID,
      onChange,
      validations
    }
  });

  it('shows the form allowing you to choose to get a senior ID', function() {
    let component = render(
      <Wrapper>
        <SeniorIDPage {...props} />
      </Wrapper>
    );
    assert.ok(component.find('label[for="seniorID-No"]').length, 'No button missing');
    assert.ok(component.find('label[for="seniorID-Yes"]').length, 'Yes button missing');
  });
});

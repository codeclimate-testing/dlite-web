'use strict';

import assert                   from 'assert';

import 'jsdom-global/register';
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
    let continueDisabled = true;
    let onChange = spy();

    props = {
      seniorID,
      continueDisabled,
      onChange
    }
  });

  it('shows the form allowing you to choose to get a senior ID', function() {
    let component = render(
      <Wrapper>
        <SeniorIDPage {...props} />
      </Wrapper>
    );
    assert.ok(component.find('label[for="seniorIDNo"]').length, 'No button missing');
    assert.ok(component.find('label[for="seniorIDYes"]').length, 'Yes button missing');
  });
});

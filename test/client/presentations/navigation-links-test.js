'use strict';

import assert     from 'assert';

import React      from 'react';
import configure  from '../support/configure-enzyme';
import { render } from 'enzyme';
import sinon      from 'sinon';

import wrapperGenerator  from '../support/wrapper';
import NavigationButtons from '../../../client/presentations/navigation-buttons.jsx';

describe('NavigationButtons', function() {
  let Wrapper = wrapperGenerator({});

  it('will show an error message in a box if one is provided', function() {
    let component = render(
      <Wrapper>
        <NavigationButtons errorMessage='Jumpsuit is all wrong!'/>
      </Wrapper>
    );

    assert.equal(
      component.find('.message-box.error').text().trim(),
      'Jumpsuit is all wrong!',
      'error message missing'
    );
  });

  it('will omit the error message box if no message is provided', function() {
    let component = render(
      <Wrapper>
        <NavigationButtons errorMessage=''/>
      </Wrapper>
    );

    assert.equal(
      component.find('.message-box').length,
      0,
      'message box still rendering'
    );
  });
});

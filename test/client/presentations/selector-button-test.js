'use strict';

import assert from 'assert';

import React from 'react';
import configure  from '../support/configure-enzyme';
import { shallow, mount } from 'enzyme';

import SelectorButton from '../../../client/presentations/selector-button.jsx';

describe('SelectorButton', function() {
  let component, onChange;

  beforeEach(function() {
    onChange = function() {}; // no-op
  });

  it('has the "selected" class on the button when selected', function() {
    component = shallow(
      <SelectorButton
        onChange={ onChange }
        selected={ true }
      />
    );

    assert(
      component.find('.button').is('.selected'),
      'button is not selected'
    );
  });

  it('has the "neutral" class on the button when not selected', function() {
    component = shallow(
      <SelectorButton
        onChange={ onChange }
        selected={ false }
      />
    );

    assert(
      component.find('.button').not('.selected'),
      'button is selected'
    );

    assert(
      component.find('.button').is('.tap'),
      'button is not styled correctly'
    );
  });

  // NOTE: choosing not to fix these two tests since we are removing these
  // types of components from the build. Currently there is an issue with
  // enzyme and simulating events. https://github.com/airbnb/enzyme/issues/1201

  xit('onFocus adds the "focused" class', function() {
    component = mount(
      <SelectorButton
        name='foo'
        value='bar'
        onChange={ onChange }
      />
    );

    let input = component.find('input');
    input.simulate('focus');
    assert(component.find('.radio-selector').is('.focus'), 'input is not focused');
  });

  xit('onBlur removes the "focused" class', function() {
    component = mount(
      <SelectorButton
        name='foo'
        value='bar'
        onChange={ onChange }
      />
    );

    let input = component.find('input');
    input.simulate('focus');
    input.simulate('blur');
    assert(component.find('.radio-selector').not('.focus'), 'input is still focused');
  });
});


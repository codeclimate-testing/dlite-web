'use strict';

import assert from 'assert';

import 'jsdom-global/register';
import React from 'react';
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
      component.find('.button').is('.neutral'),
      'button is not styled correctly'
    );
  });

  it('onFocus adds the "focused" class', function() {
    component = mount(
      <SelectorButton
        onChange={ onChange }
      />
    );

    let input = component.find('input');
    input.simulate('focus');
    assert(component.find('.radio-selector').is('.focused'), 'input is not focused');
  });

  it('onBlur removes the "focused" class', function() {
    component = mount(
      <SelectorButton
        onChange={ onChange }
      />
    );

    let input = component.find('input');
    input.simulate('focus');
    input.simulate('blur');
    assert(component.find('.radio-selector').not('.focused'), 'input is still focused');
  });
});


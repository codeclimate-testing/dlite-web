'use strict';

import assert from 'assert';

import 'jsdom-global/register';
import React from 'react';
import { render, mount } from 'enzyme';
import { spy } from 'sinon';

import SelectorCollection from '../../../client/presentations/selector-collection.jsx';

describe('SelectorCollection', function() {
  let component, onChange;

  beforeEach(function() {
    onChange = spy();

    component = render(
      <SelectorCollection
        selectedValue='Blue'
        values={['Blue', 'Black', 'Gold']}
        onChange={ onChange }
        selected={ true }
      />
    );
  });

  it('has button selectors for each value', function() {
    assert.equal(
      component.find('input[type="radio"]').length,
      3
    );
  });

  it('should show the selected value as selected button', function() {
    assert.equal(
      component.find('.button.selected').text(),
      'Blue'
    );
  });

  it('selected radio should have a tab index of 0', function() {
    assert.equal(
      component.find('input[tabIndex=0][value="Blue"]').length,
      1
    );
  });

  it('unselected radio should have a tab index of -1', function() {
    assert.equal(
      component.find('input[tabIndex="-1"]').length,
      2
    );
  });
});


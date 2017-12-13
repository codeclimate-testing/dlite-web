'use strict';

import assert from 'assert';

import 'jsdom-global/register';
import React from 'react';
import { render } from 'enzyme';
import { spy } from 'sinon';

import SuffixSelector from '../../../client/presentations/suffix-selector.jsx';

describe('SuffixSelector', function() {
  let component, onChange;

  beforeEach(function() {
    onChange = spy();

    component = render(
      <SuffixSelector
        identifier='suffix'
        value={ 'Sr.' }
        onChange={ onChange }
      />
    )
  });

  it('has option to select each value', function() {
    assert.equal(component.find('#suffix > option:nth-child(1)').text(), '');
    assert.equal(component.find('#suffix > option:nth-child(2)').text(), 'Sr.');
    assert.equal(component.find('#suffix > option:nth-child(3)').text(), 'Jr.');
    assert.equal(component.find('#suffix > option:nth-child(4)').text(), 'II');
    assert.equal(component.find('#suffix > option:nth-child(5)').text(), 'III');
    assert.equal(component.find('#suffix > option:nth-child(6)').text(), 'IV');
  });

  it('has correct selected value', function() {
    assert.equal(component.find('#suffix').val(), 'Sr.');
  });
});

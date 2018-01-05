'use strict';

import assert     from 'assert';

import React      from 'react';
import configure  from '../support/configure-enzyme';
import { render } from 'enzyme';
import sinon      from 'sinon';

import TextInput  from '../../../client/presentations/text-input.jsx';

describe('TextInput', function() {
  it('uses an identifier for the name and id if nothing specific is provided', function() {
    let component = render(
      <TextInput identifier='zardoz'/>
    );

    assert.ok(
      component.find('#zardoz').length,
      'id incorrect'
    );

    assert.ok(
      component.find('input[name=zardoz]').length,
      'name incorrect'
    );
  });

  it('uses an id for if provided', function() {
    let component = render(
      <TextInput identifier='zardoz' id='foo'/>
    );

    assert.ok(
      component.find('#foo').length,
      'id incorrect'
    );

    assert.ok(
      component.find('input[name=zardoz]').length,
      'name incorrect'
    );
  });

  it('uses a name for if provided', function() {
    let component = render(
      <TextInput identifier='zardoz' name='bar'/>
    );

    assert.ok(
      component.find('#zardoz').length,
      'id incorrect'
    );

    assert.ok(
      component.find('input[name=bar]').length,
      'name incorrect'
    );
  });

  it('does not include an additional label if no example is provided', function() {
    let component = render(
      <TextInput identifier='zardoz' example=''/>
    );

    assert.ok(
      !component.find('.additional-label').length,
      'has an additional label without content'
    );
  });

  it('includes an additional label if no example is provided', function() {
    let component = render(
      <TextInput identifier='zardoz' example='Get on your alien duds!'/>
    );

    assert.ok(
      component.find('.additional-label').length,
      'missing additional label'
    );
  });

  describe('error states', function() {
    it('will have a label, text input and additional labeling with an error when error messages are passed in', function() {
      let component = render(
        <TextInput
          identifier='zardoz'
          errorMessage='Jumpsuit is all wrong!'
        />
      );

      assert.equal(
        component.find('.error').length,
        3,
        'error classes missing'
      );

      assert(
        component.find('label.error').length,
        'label does not have an error class'
      );

      assert(
        component.find('input.error').length,
        'input does not have an error class'
      );

      assert(
        component.find('.additional-label.error').length,
        'additional label does not have an error class'
      );
    });

    it('will include the error message in the additional label', function() {
      let component = render(
        <TextInput
          identifier='zardoz'
          errorMessage='Jumpsuit is all wrong!'
        />
      );

      assert.equal(
        component.find('.additional-label').text(),
        'Jumpsuit is all wrong!',
        'error message missing'
      );
    });

    it('swaps the example text with the error message when there is an error', function() {
      let component = render(
        <TextInput
          identifier='zardoz'
          errorMessage=''
          example='Enter your clothing option here'
        />
      );

      assert.equal(
        component.find('.additional-label').text(),
        'Enter your clothing option here',
        'additional label does not have correct content'
      );

      component = render(
        <TextInput
          identifier='zardoz'
          errorMessage='Jumpsuit is all wrong!'
          example='Enter your clothing option here'
        />
      );

      assert.equal(
        component.find('.additional-label').text(),
        'Jumpsuit is all wrong!',
        'error message missing'
      );
    });
  });
});


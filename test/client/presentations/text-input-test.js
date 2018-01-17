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

  it('does not include an additional example label if no example is provided', function() {
    let component = render(
      <TextInput identifier='zardoz' />
    );

    assert.ok(
      !component.find('.example').length,
      'has an example label without content'
    );
  });

  it('includes an additional label if an example is provided', function() {
    let component = render(
      <TextInput identifier='zardoz' example='Get on your alien duds!'/>
    );

    assert.ok(
      component.find('.example').length,
      'missing additional label'
    );
  });

  describe('when it has an error', function() {
    let component; 
    beforeEach(function() {
      component = render(
        <TextInput
          identifier='zardoz'
          errorMessage='Jumpsuit is all wrong!'
        />
      );
    }); 
    it('will have an error label with the error message', function() {
      assert(
        component.find('.additional-label.error').length,
        'error label missing'
      );
    });

    it('will add an error class to the text input', function() {
      assert(
        component.find('input.error').length,
        'input does not have an error class'
      );
    });

    it('will add error class to label', function() {
      assert(
        component.find('label.error').length,
        'label does not have an error class'
      );
    });

    it('will have 3 elements with an error class', function() {
      assert.equal(
        component.find('.error').length,
        3,
        'error classes missing'
      );
    });

    it('will include the error message in the additional label', function() {
      assert.equal(
        component.find('.additional-label').text(),
        'Jumpsuit is all wrong!',
        'error message missing'
      );
    });
  });
});


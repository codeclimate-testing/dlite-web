'use strict';

import assert     from 'assert';

import React      from 'react';
import configure  from '../support/configure-enzyme';
import { render } from 'enzyme';
import { spy }    from 'sinon';

import NumberInput  from '../../../client/presentations/number-input.jsx';

describe('NumberInput not used in DateInput', function() {
  let props, component;

  beforeEach(function() {
    props = {
      description: 'test',
      identifier: 'testDate',
      value: '',
      errorMessage: '',
      onChange: spy(),
      onFocus: spy(),
      onBlur: spy(),
      locale: 'en'
    };

    component = render(
      <NumberInput {...props} />
    );

  });

  it('passes a string to a bold label above the number inputs', function() {
    assert.ok(component.find('label:not(".normal")').length, 'bold label not found');
    assert.equal(component.find('label.normal').length, 0, 'secondary labels found');
  });

  describe('error states', function() {

    beforeEach(function() {
      props.errorMessage = 'error';
      component = render(
        <NumberInput {...props} />
      );
    });

    it('will have 2 elements with the error class', function() {
      assert.equal(component.find('.error').length, 2, 'error classes missing');
    });

    it('will have an error icon', function() {
      assert(component.find('.error-icon').length, 'error icon missing');
    });

    it('will add error class to bold label', function(){
      assert(
        component.find('label:not(".normal").error').length,
        'bold label does not have an error class'
      );
    });

    it('will add error class to the input', function() {
      assert.equal(
        component.find('input.error').length, 1,
        'input does not have an error class'
      );
    });
  });
});


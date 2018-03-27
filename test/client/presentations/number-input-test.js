'use strict';

import assert                   from 'assert';

import React                    from 'react';
import configure                from '../support/configure-enzyme';
import { render }               from 'enzyme';
import { spy }                  from 'sinon';
import store                    from '../support/page-store';
import wrapperGenerator         from '../support/wrapper';
import NumberInput              from '../../../client/presentations/number-input.jsx';

describe('NumberInput not used in DateInput', function() {
  let props, children, component;
  let Wrapper = wrapperGenerator(store);
  beforeEach(function() {
    props = {
      identifier: 'testDate',
      value: '',
      errorMessage: '',
      onChange: spy(),
      onFocus: spy(),
      onBlur: spy()
    };
    children = 'test';

    component = render(
      <Wrapper>
        <NumberInput {...props}  > { children } </NumberInput>
      </Wrapper>
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
        <Wrapper>
          <NumberInput {...props}  > { children } </NumberInput>
        </Wrapper>
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


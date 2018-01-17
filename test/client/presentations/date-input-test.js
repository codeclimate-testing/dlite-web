'use strict';

import assert     from 'assert';

import React      from 'react';
import configure  from '../support/configure-enzyme';
import { render } from 'enzyme';
import { spy }    from 'sinon';

import DateInput  from '../../../client/presentations/date-input.jsx';

describe('DateInput', function() {
  let props;
  beforeEach(function() {
    props = {
      description: 'test',
      identifier: 'testDate',
      values: {
        month: '',
        day: '',
        year: ''
      },
      validations: {
        month: spy(),
        day: spy(),
        year: spy()
      }
    };
  });

  it('passes a string to a bold label above the number inputs', function() {
    let component = render(
      <DateInput {...props} />
    );
    assert.ok(component.find('label:not(".normal")').length, 'bold label not found');
  });

  it('has normal-weight secondary labels for MM, DD, and YYYY', function() {
    let component = render(
      <DateInput {...props}/>
    );
    assert.ok(component.find('label.normal').text().includes('MM'), 'normal MM label not found');
    assert.ok(component.find('label.normal').text().includes('DD'), 'normal DD label not found');
    assert.ok(component.find('label.normal').text().includes('YYYY'), 'normal YYYY label not found');
  });

  describe('error states', function() {
    it('when there is an error with only one of the date inputs, it will have additional text and the bold label and the input will get the error class', function() {
      props.validations = {
        month: () => '',
        day: () => '',
        year: () => 'error' 
      };
      let component = render(
        <DateInput {...props} />
      ); 
      assert.equal(
        component.find('.error').length,
        3,
        'error classes missing'
      );

      assert(
        component.find('label:not(".normal").error').length,
        'bold label does not have an error class'
      );

      assert.equal(
        component.find('input.error').length,
        1,
        'input does not have an error class or too many inputs have error class'
      );

      assert(
        component.find('.additional-label.error').length,
        'additional label does not have an error class'
      );
    });

    it('only one error icon appears', function() {
      props.validations = {
        month: () => '',
        day: () => '',
        year: () => 'error'
      };
      let component = render(
        <DateInput {...props} />
      );
      assert.equal(component.find('.error-icon').length, 1, 'incorrect number of error icons');
    });

    it('does not pass the error class to the labelClass variable on the secondary label', function(){
      props.validations = {
        month: () => 'error',
        day: () => 'error',
        year: () => 'error' 
      };
      let component = render(
        <DateInput {...props} />
      ); 
      assert(component.find('label[for="month"].normal:not(".error")').length, 'secondary MM label has error class');
    });
  });
});


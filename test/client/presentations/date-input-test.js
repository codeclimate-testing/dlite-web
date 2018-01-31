'use strict';

import assert     from 'assert';

import React      from 'react';
import configure  from '../support/configure-enzyme';
import { render } from 'enzyme';
import { spy }    from 'sinon';

import DateInput  from '../../../client/presentations/date-input.jsx';

describe('DateInput', function() {
  let props, component;

  beforeEach(function() {

    props = {
      title: 'test',
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
    component = render(
      <DateInput {...props} />
    );

  });

  it('passes a string to a bold label above the number inputs', function() {
    assert.ok(component.find('label:not(".normal")').length, 'bold label not found');
  });

  it('has normal-weight secondary labels for MM, DD, and YYYY', function() {
    assert.ok(component.find('.example').text().includes('MM'), 'normal MM label not found');
    assert.ok(component.find('.example').text().includes('DD'), 'normal DD label not found');
    assert.ok(component.find('.example').text().includes('YYYY'), 'normal YYYY label not found');
  });

  describe('when there is an error with only one of the date inputs', function() {

    beforeEach(function() {
      props.validations = {
        month: () => '',
        day: () => '',
        year: () => 'error'
      };
      component = render(
        <DateInput {...props} />
      );
    });

    it('it will have additional text', function() {
      assert(
        component.find('.additional-label.error').length,
        'additional label does not have an error class'
      );
    });

    it('will have 3 elements with the error class', function() {
      assert.equal(
        component.find('.error').length,
        3,
        'error classes missing'
      );
    });

    it('will have one error icon', function() {
      assert.equal(component.find('.error-icon').length, 1, 'incorrect number of error icons');
    });

    it('will add error class to bold label', function() {
      assert(
        component.find('label:not(".normal").error').length,
        'bold label does not have an error class'
      );
    });

    it('will add error class to one input', function() {
      assert.equal(
        component.find('input.error').length,
        1,
        'input does not have an error class or too many inputs have error class'
      );
    });

    it('does not pass the error class to the example label on the secondary label', function(){
      assert(component.find('.example:not(".error")').length, 'secondary YYYY label has error class');
    });
  });
});


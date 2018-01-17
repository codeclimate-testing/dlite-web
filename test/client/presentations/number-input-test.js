'use strict';

import assert     from 'assert';

import React      from 'react';
import configure  from '../support/configure-enzyme';
import { render } from 'enzyme';
import { spy }    from 'sinon';

import NumberInput  from '../../../client/presentations/number-input.jsx';

describe('NumberInput not used in DateInput', function() {
  let props;
  beforeEach(function() {
    props = {
      description: 'test',
      identifier: 'testDate',
      value: '',
      errorMessage: ''
    };
  });

  it('passes a string to a bold label above the number inputs', function() {
    let component = render(
      <NumberInput {...props} />
    );
    assert.ok(component.find('label:not(".normal")').length, 'bold label not found');
    assert.equal(component.find('label.normal').length, 0, 'secondary labels found');
  });

  describe('error states', function() {
    it('when there is an error, it will have additional text and the bold label and the input will get the error class and there will be an error icon', function() {
      props.errorMessage = 'error';

      let component = render(
        <NumberInput {...props} />
      ); 
      assert.equal(
        component.find('.error').length,
        3,
        'error classes missing'
      );

      assert(component.find('.error-icon').length, 'error icon missing');

      assert(
        component.find('label:not(".normal").error').length,
        'bold label does not have an error class'
      );

      assert.equal(
        component.find('input.error').length,
        1,
        'input does not have an error class'
      );

      assert(
        component.find('.additional-label.error').length,
        'additional label does not have an error class'
      );
    });
  });
});


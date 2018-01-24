'use strict';

import assert     from 'assert';

import React      from 'react';
import configure  from '../support/configure-enzyme';
import { render } from 'enzyme';
import { spy }    from 'sinon';

import RadioSelectorCollection from '../../../client/presentations/radio-selector-collection.jsx';
import RadioSelector           from '../../../client/presentations/radio-selector.jsx';

describe('RadioSelectorCollection', function() {
  let component, onChange;

  beforeEach(function() {
    onChange = spy();

    component = render(
      <RadioSelectorCollection
        name='voting-registration'
        selectedValue='existing'
        onChange={onChange}
      >
        <RadioSelector
          value='new'
          text='I am a new voter in California'
        />
        <RadioSelector
          value='existing'
          text='I am already registered to vote in California'
        />
        <RadioSelector
          value='optOut'
          text='I am eligible to vote, but do not want to register to vote'
        />
      </RadioSelectorCollection>
    );
  });

  it('passes down the name to each RadioSelector', function() {
    assert.equal(
      component.find('input[name="voting-registration"]').length,
      3
    );
  });

  it('RadioSelector constructs the id correctly', function() {
    assert.equal(
      component.find('#voting-registration-existing').length,
      1
    );
  });

  it('RadioSelector coorelates the label for to the id correctly', function() {
    assert.equal(
      component.find('label[for="voting-registration-existing"]').length,
      1
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
      component.find('.selected').length,
      1
    );

    assert.equal(
      component.find('.selected').text(),
      'I am already registered to vote in California'
    );
  });

  it('selected radio should have a tab index of 0', function() {
    assert.equal(
      component.find('input[tabIndex=0][value="existing"]').length,
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


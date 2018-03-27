'use strict';

import assert                   from 'assert';

import React                    from 'react';
import configure                from '../support/configure-enzyme';
import { render }               from 'enzyme';
import sinon                    from 'sinon';
import store                    from '../support/page-store';
import wrapperGenerator         from '../support/wrapper';
import TextInput                from '../../../client/presentations/text-input.jsx';

describe('TextInput', function() {

  let Wrapper = wrapperGenerator(store);

  it('uses an identifier for the name and id if nothing specific is provided', function() {
    let component = render(
      <Wrapper>
        <TextInput identifier='zardoz'/>
      </Wrapper>
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
      <Wrapper>
        <TextInput identifier='zardoz' id='foo'/>
      </Wrapper>
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
      <Wrapper>
        <TextInput identifier='zardoz' name='bar'/>
      </Wrapper>
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
      <Wrapper>
        <TextInput identifier='zardoz' />
      </Wrapper>
    );

    assert.ok(
      !component.find('.example').length,
      'has an example label without content'
    );
  });

  it('includes an additional label if an example is provided', function() {
    let component = render(
      <Wrapper>
        <TextInput identifier='zardoz' example='Get on your alien duds!'/>
      </Wrapper>
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
        <Wrapper>
          <TextInput
            identifier='zardoz'
            errorMessage='Jumpsuit is all wrong!'
          />
        </Wrapper>
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


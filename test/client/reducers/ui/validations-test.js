'use strict';

import assert from 'assert';
import validationsReducer from '../../../../client/reducers/ui/validations';

describe('validationsReducer', function() {
  it('CLEAR_VALIDATIONS will empty the validations array', function() {
    assert.deepEqual(
      validationsReducer(
        ['foo', 'bar', 'zardoz'],
        {
          type: 'CLEAR_VALIDATIONS',
          payload: {}
        }
      ),
      []
    );
  });

  it('ADD_VALIDATION will add a validation to the array', function() {
    assert.deepEqual(
      validationsReducer(
        ['foo', 'bar'],
        {
          type: 'ADD_VALIDATION',
          payload: {value: 'zardoz'}
        }
      ),
      ['foo', 'bar', 'zardoz']
    );
  });

  it('ADD_VALIDATION will not add duplicates to the array', function() {
    assert.deepEqual(
      validationsReducer(
        ['foo', 'bar', 'zardoz'],
        {
          type: 'ADD_VALIDATION',
          payload: {value: 'zardoz'}
        }
      ),
      ['foo', 'bar', 'zardoz']
    );
  });

  it('REMOVE_VALIDATION does nothing if the element isnt present', function() {
    assert.deepEqual(
      validationsReducer(
        ['foo', 'bar', 'zardoz'],
        {
          type: 'REMOVE_VALIDATION',
          payload: {value: 'zardoc'}
        }
      ),
      ['foo', 'bar', 'zardoz']
    );
  });

  it('REMOVE_VALIDATION removes the element if the element isnt present', function() {
    assert.deepEqual(
      validationsReducer(
        ['foo', 'bar', 'zardoz'],
        {
          type: 'REMOVE_VALIDATION',
          payload: {value: 'bar'}
        }
      ),
      ['foo', 'zardoz']
    );
  });

  // This is an interaction pattern issue to check out with Makaela. The effect is that once an
  // input is focused, all of the validations are removed after clicking the next button and 
  // showing the validations in the first place.
  it('REMOVE_VALIDATION removes "all" if present, to avoid continuous validation', function() {
    assert.deepEqual(
      validationsReducer(
        ['foo', 'bar', 'zardoz', 'all'],
        {
          type: 'REMOVE_VALIDATION',
          payload: {value: 'bar'}
        }
      ),
      ['foo', 'zardoz']
    );
  });
});

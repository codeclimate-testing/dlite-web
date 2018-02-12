'use strict';

import assert from 'assert';
import hoverReducer from '../../../../client/reducers/ui/hover';

describe('hoverReducer', function() {
  it('HOVER_UP when there is no value, hovers the first value', function() {
    let state =  '';

    let action = {
      type: 'HOVER_UP',
      payload: {
        name: 'suffix',
        value: ['Jr.', 'Sr.', 'II', 'III']
      }
    };

    assert.equal(hoverReducer(state, action), 'Jr.');
  });

  it('HOVER_UP when there is a value that matches, it chooses the next element', function() {
    let state =  'II';

    let action = {
      type: 'HOVER_UP',
      payload: {
        name: 'suffix',
        value: ['Jr.', 'Sr.', 'II', 'III']
      }
    };

    assert.equal(hoverReducer(state, action), 'Sr.');
  });

  it('HOVER_DOWN when there is no value, hovers the first value', function() {
    let state = '';

    let action = {
      type: 'HOVER_DOWN',
      payload: {
        name: 'suffix',
        value: ['Jr.', 'Sr.', 'II', 'III']
      }
    };

    assert.equal(hoverReducer(state, action), 'Jr.');
  });

  it('HOVER_DOWN when the first value is blank, moves to the next', function() {
    let state = '';

    let action = {
      type: 'HOVER_DOWN',
      payload: {
        name: 'suffix',
        value: ['', 'Jr.', 'Sr.', 'II', 'III']
      }
    };

    assert.equal(hoverReducer(state, action), 'Jr.');
  });

  it('HOVER_DOWN when there is a value, hovers the one below it', function() {
    let state = 'Sr.';

    let action = {
      type: 'HOVER_DOWN',
      payload: {
        name: 'suffix',
        value: ['Jr.', 'Sr.', 'II', 'III']
      }
    };

    assert.equal(hoverReducer(state, action), 'II');
  });

  it('HOVER_DOWN when it is at the last, stays there', function() {
    let state = 'III';

    let action = {
      type: 'HOVER_DOWN',
      payload: {
        name: 'suffix',
        value: ['Jr.', 'Sr.', 'II', 'III']
      }
    };

    assert.equal(hoverReducer(state, action), 'III');
  });
});

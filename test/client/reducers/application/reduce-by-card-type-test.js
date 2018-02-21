'use strict';
import assert               from 'assert';
import reduceByCardType     from '../../../../client/reducers/application/reduce-by-card-type';

describe('reduce-by-card-type reducer', function() {
  let action, state, type;
  beforeEach(function() {
    action = {
      type: 'TEST',
      payload: {
        name: '',
        value: 'test value'
      }
    };

    state = {
      key: ''
    };

    type = '';
  });

  it('inserts payload value into state if the beginning of the name matches the specified type', function() {
    action.payload.name = 'ID-key';
    type = 'ID';
    assert.deepEqual(reduceByCardType(action, state, type).key, action.payload.value);
  });

  it('returns existing state if beginning of name does not match the specified type', function() {
    action.payload.name = 'DL-key';
    type = 'ID';
    assert.deepEqual(reduceByCardType(action, state, type), state);
  });

});
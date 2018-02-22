'use strict';

import assert         from 'assert';
import updateDOB      from '../../../../client/reducers/cdl/update-date-of-birth';


describe('CDL DOB reducer', function() {
  let action, state, firstState;

  beforeEach(function() {
    action = {
      type: 'UPDATE_CDL_DOB',
      payload: {
        name: '',
        value: ''
      }
    };
    state = {
      month: '',
      day: '',
      year: ''
    };

  });

  it('passes selection to object key', function() {
    action.payload = {
      name: 'month',
      value: '10'
    };
    let firstState = updateDOB(state, action);
    assert.equal(firstState.month, action.payload.value);
  });

  it('returns existing state if IDDL DOB reducer is called', function() {
    action = {
      type: 'UPDATE_DATE_OF_BIRTH',
      payload: {
        name: 'month',
        value: '12'
      }
    };
    let firstState = updateDOB(state, action);
    assert.deepEqual(firstState, state);
  });
});



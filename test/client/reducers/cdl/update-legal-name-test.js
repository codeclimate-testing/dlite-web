'use strict';

import assert         from 'assert';
import updateName     from '../../../../client/reducers/cdl/update-legal-name';

const changeFirstName = {
  name: 'firstName',
  value: 'Agnes'
};

const changeMiddleName = {
  name: 'middleName',
  value: 'Marie'
};

const changeLastName = {
  name: 'lastName',
  value: 'Smith'
};

const changeSuffix = {
  name: 'suffix',
  value: 'III'
};

describe('CDL legal name reducer', function() {
  let action, state, firstState;

  beforeEach(function() {
    action = {
      type: 'UPDATE_CDL_LEGAL_NAME',
      payload: {
        name: '',
        value: ''
      }
    };
    state = {
      firstName: '',
      middleName: '',
      lastName: '',
      suffix: ''
    };

  });

  describe('#update firstName', function() {
    it('initially nothing is selected', function() {
      assert.equal(state.firstName, '');
    });
    it('passes selection to firstName', function() {
      action.payload = changeFirstName;
      let firstState = updateName(state, action);
      assert.equal(firstState.firstName, action.payload.value);
    });
  });

  describe('#update middleName', function() {

    it('passes selection to middleName', function() {
      action.payload = changeMiddleName;
      let firstState = updateName(state, action);
      assert.equal(firstState.middleName, action.payload.value);
    });
  });

  describe('#update lastName', function() {

    it('passes selection to lastName', function() {
      action.payload = changeLastName;
      let firstState = updateName(state, action);
      assert.equal(firstState.lastName, action.payload.value);
    });

    it('returns existing state if IDDL legal name reducer is called', function() {
      action = {
        type: 'UPDATE_LEGAL_NAME',
        payload: {
          name: 'firstName',
          value: 'Lucy'
        }
      };
      let firstState = updateName(state, action);
      assert.deepEqual(firstState, state);
    })
  });
});



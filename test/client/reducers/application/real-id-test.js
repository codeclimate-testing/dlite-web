'use strict';

import assert           from 'assert';
import updateRealID     from '../../../../client/reducers/application/update-real-id';
import updateIDRealID   from '../../../../client/reducers/application/id-app/update-id-real-id';
import updateDLRealID   from '../../../../client/reducers/application/dl-app/update-dl-real-id';

const getDLRealID = {
  type: 'UPDATE_REAL_ID',
  payload: {
    name: 'DL',
    value: 'Yes'
  }
};

const getIDRealID = {
  type: 'UPDATE_REAL_ID',
  payload: {
    name: 'ID',
    value: 'Yes'
  }
};

const getBothRealID = {
  type: 'UPDATE_REAL_ID',
  payload: {
    name: 'both',
    value: 'Yes'
  }
};

const setIDRealIdDesignation = {
  type: 'UPDATE_REAL_ID',
  payload: {
    name: 'realIdDesignation',
    value: 'ID'
  }
};

const setDLRealIdDesignation = {
  type: 'UPDATE_REAL_ID',
  payload: {
    name: 'realIdDesignation',
    value: 'DL'
  }
};

describe('updateRealID Reducers', function() {
  let state;
  beforeEach(function() {
    state = '';
  });

  describe('#base-level realID value for user getting two new cards', function() {
    it('returns existing state when payload.name is "realIdDesignation"', function() {
      state = 'Yes';
      let newState = updateRealID(state, setIDRealIdDesignation);
      assert.equal(newState, state);
    });
    it('returns payload value when payload.name is not "realIdDesignation"', function() {
      state = 'No';
      let newState = updateRealID(state, getIDRealID);
      assert.equal(newState, getIDRealID.payload.value);
    });
  });

  describe('#IDApp realID reducer', function() {
    it('saves the action payload value when the name is ID', function() {
      let newState = updateIDRealID(state, getIDRealID);
      assert.equal(newState, getIDRealID.payload.value);
    });
    it('returns existing state when name is DL', function() {
      let newState = updateIDRealID(state, getDLRealID);
      assert.equal(newState, state);
    });
    it('returns action payload value when name is both', function() {
      let newState = updateIDRealID(state, getBothRealID);
      assert.equal(newState, getBothRealID.payload.value);
    });
    it('returns "No" when name is realIdDesignation and value is DL', function() {
      let newState = updateIDRealID(state, setDLRealIdDesignation);
      assert.equal(newState, 'No');
    });
    it('returns "Yes" when action.payload.name is realIdDesignation and value is ID', function() {
      let newState = updateIDRealID(state, setIDRealIdDesignation);
      assert.equal(newState, 'Yes');
    });
  });

  describe('#DLApp realID reducer', function() {
    it('saves the action payload value when the name is DL', function() {
      let newState = updateDLRealID(state, getDLRealID);
      assert.equal(newState, getDLRealID.payload.value);
    });
    it('returns existing state when name is ID', function() {
      let newState = updateIDRealID(state, getDLRealID);
      assert.equal(newState, state);
    });
    it('returns action payload value when name is both', function() {
      let newState = updateDLRealID(state, getBothRealID);
      assert.equal(newState, getBothRealID.payload.value);
    });
    it('returns "No" when name is realIdDesignation and value is ID', function() {
      let newState = updateDLRealID(state, setIDRealIdDesignation);
      assert.equal(newState, 'No');
    });
    it('returns "Yes" when action.payload.name is realIdDesignation and value is DL', function() {
      let newState = updateDLRealID(state, setDLRealIdDesignation);
      assert.equal(newState, 'Yes');
    });
  });

});



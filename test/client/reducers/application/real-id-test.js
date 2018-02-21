'use strict';

import assert           from 'assert';
import updateRealID from '../../../../client/reducers/application/update-real-id';

const getRealonDL = {
  type: 'UPDATE_REAL_ID',
  payload: {
    name: 'getRealID-DL',
    value: 'Yes'
  }
};

const getRealonID = {
  type: 'UPDATE_REAL_ID',
  payload: {
    name: 'getRealID-ID',
    value: 'Yes'
  }
};

const getRealonBoth = {
  type: 'UPDATE_REAL_ID',
  payload: {
    name: 'getRealID-both',
    value: 'Yes'
  }
};

describe('updateRealID Reducer', function() {
  let state;
  beforeEach(function() {
    state = {
      getRealID: '',
      realIdDesignation: ''
    };
  });

  describe('applying real ID to DL', function() {
    it('updates the getRealID key when real ID is updated on single card', function() {
      let newState = updateRealID(state, getRealonDL);
      assert.equal(newState.getRealID, getRealonDL.payload.value);
    });

    it('updates the realIdDesignation key when real ID is updated on single card', function() {
      let newState = updateRealID(state, getRealonDL);
      assert.equal(newState.realIdDesignation, 'DL');
    });
  });

  describe('applying real ID to ID', function() {
    it('updates the getRealID key when real ID is updated on single card', function() {
      let newState = updateRealID(state, getRealonID);
      assert.equal(newState.getRealID, getRealonID.payload.value);
    });

    it('updates the realIdDesignation key when real ID is updated on single card', function() {
      let newState = updateRealID(state, getRealonID);
      assert.equal(newState.realIdDesignation, 'ID');
    });
  });

  describe('applying real ID when user is getting both cards', function() {
    it('updates the getRealID key when real ID is updated on both cards', function() {
      let newState = updateRealID(state, getRealonBoth);
      assert.equal(newState.getRealID, getRealonBoth.payload.value);
    });

    it('does not update the realIdDesignation key when real ID is updated on single card', function() {
      let newState = updateRealID(state, getRealonBoth);
      assert.equal(newState.realIdDesignation, state.realIdDesignation);
    });
  });

  describe('updating realIdDesignation', function() {
    it('updates the value with the action.payload.value', function() {
      let newState = updateRealID(state, {
        type: 'UPDATE_REAL_ID',
        payload: {
          name: 'realIdDesignation',
          value: 'DL'
        }
      });
      assert.equal(newState.realIdDesignation, 'DL');
    });
  });

});



'use strict';

import assert               from 'assert';
import updateResidency      from '../../../../client/reducers/cdl/basics/update-residency';


describe('CDL Residency reducer', function() {
  let action, state;

  beforeEach(function() {
    action = {
      type: 'UPDATE_CDL_RESIDENCY',
      payload: {
        name: '',
        value: ''
      }
    };
    state = {
      isResident: '',
      homeAddressSameAsMailing: '',
      home: {
        street_1: '',
        street_2: '',
        city: '',
        state: 'CA',
        zip: '',
      },
      mailing: {
        street_1: '',
        street_2: '',
        city: '',
        state: 'CA',
        zip: '',
      }
    };
  });

  it('updates isResident with payload value if payload name equals "isResident"', function() {
    action.payload.name = 'isResident';
    action.payload.value = 'No';
    let firstState = updateResidency(state, action);
    assert.equal(firstState.isResident, action.payload.value);
  });

  it('updates homeAddressSameAsMailing with payload value if payload name equals "homeAddressSameAsMailing"', function() {
    action.payload.name = 'homeAddressSameAsMailing';
    action.payload.value = 'No';
    let firstState = updateResidency(state, action);
    assert.equal(firstState.homeAddressSameAsMailing, action.payload.value);
  });

  it('copies home address into mailing address if homeAddressSameAsMailing equals "Yes"', function() {
    state.home = {
      street_1: '11432',
      street_2: '',
      city: 'Farragut',
      state: 'TN',
      zip: '37922'
    };

    action.payload.name = 'homeAddressSameAsMailing';
    action.payload.value = 'Yes';
    let firstState = updateResidency(state, action);
    assert.equal(firstState.mailing, state.home);
  });

  it('updates home address if payload name begins with "home" and a capital letter', function() {
    action.payload.name = 'homeCity';
    action.payload.value = 'Athens';
    let firstState = updateResidency(state, action);
    assert.equal(firstState.home.city, action.payload.value);
  });

});



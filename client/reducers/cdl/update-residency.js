'use strict';

import { TYPES }          from '../../actions';
import { addressReducer } from '../../helpers/reducers';

function defaultState() {
  return {
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
  }
}

const formReducer = (state = defaultState(), action) => {
  if (action.type !== TYPES.UPDATE_CDL_RESIDENCY) { return state; }
  let data  = Object.assign({}, state);
  if (action.payload.name === 'isResident') {
    data.isResident = action.payload.value;
  }

  else {
    data = addressReducer(action.payload, data, defaultState);
  }

  return Object.assign({}, state, data);

};

export default formReducer;
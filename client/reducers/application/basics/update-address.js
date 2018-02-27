'use strict';

import { TYPES }          from '../../../actions';
import { addressReducer } from '../../../helpers/reducers';


function defaultState() {
  return {
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
}

const formReducer = (state = defaultState(), action) => {
  if (action.type !== TYPES.UPDATE_ADDRESS) { return state; }

  let data  = Object.assign({}, state);

  return addressReducer(action.payload, data, defaultState);

};

export default formReducer;
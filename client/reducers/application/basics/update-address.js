'use strict';

import { TYPES } from '../../../actions';

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
  if (action.type === TYPES.UPDATE_ADDRESS          ||
      action.type === TYPES.UPDATE_HOME_ADDRESS     ||
      action.type === TYPES.UPDATE_MAILING_ADDRESS) {

        let data  = Object.assign({}, state);
        let name  = action.payload.name;
        let value = action.payload.value;
        let type  = '';

        if (action.type === TYPES.UPDATE_HOME_ADDRESS) {
          type = 'home';
          name = name.replace(type, '').toLowerCase();
          data[type][name] = value;
        }

        if (action.type === TYPES.UPDATE_MAILING_ADDRESS) {
          type = 'mailing';
          name = name.replace(type, '').toLowerCase();
          data[type][name] = value;
        }

        if (action.type === TYPES.UPDATE_ADDRESS) {
          data[name] = value;
          if(name === 'homeAddressSameAsMailing'){
            if(value === 'Yes') {
              data.mailing = data.home;
            }
            if(value === 'No') {
              data.mailing = defaultState().mailing;
            }
          }

        }
        return Object.assign({}, state, data);

  }

  return state;
};

export default formReducer;
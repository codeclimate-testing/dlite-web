'use strict';

import { TYPES } from '../../actions';
import formObjectReducer from './form-object-reducer';

function defaultState() {
  return {
    isSigned:  '',
    guardianInfo: [{
      id: 'first',
      acceptLiabilities: '',
      signature: '',
      signatureDateMonth: '',
      signatureDateDay: '',
      signatureDateYear: '',
      phoneNumber: '',
      street_1: '',
      street_2: '',
      city: '',
      state: 'CA',
      zip: '',
      IDNumber: '',
      IDIssuedBy: '',
      IDExpirationDateMonth: '',
      IDExpirationDateDay: '',
      IDExpirationDateYear: ''
    },
    {
      id: 'second',
      acceptLiabilities: '',
      signature: '',
      signatureDateMonth: '',
      signatureDateDay: '',
      signatureDateYear: '',
      phoneNumber: '',
      street_1: '',
      street_2: '',
      city: '',
      state: 'CA',
      zip: '',
      IDNumber: '',
      IDIssuedBy: '',
      IDExpirationDateMonth: '',
      IDExpirationDateDay: '',
      IDExpirationDateYear: ''
    }]
  };
}

export default function(state = defaultState(), action) {

  if (action.type !== TYPES.UPDATE_GUARDIAN_SIGNATURE_FIRST && action.type !== TYPES.UPDATE_GUARDIAN_SIGNATURE_SECOND) {
    return state;
  }

  let data = {};
  let payload = action.payload;

  if (payload) {
    let name    = payload.name;
    let value   = payload.value === 'true' ? true : payload.value === 'false' ? false : payload.value;
    if( name === 'isSigned') {
      data[name]  = value;
    }
    else{
      if(name.split('_')[0] === 'acceptLiabilities'){
        name = 'acceptLiabilities';
      }
      data = Object.assign({}, state);
      if (action.type === TYPES.UPDATE_GUARDIAN_SIGNATURE_FIRST) {
        data['guardianInfo'][0][name] = value;
      }
      else if (action.type === TYPES.UPDATE_GUARDIAN_SIGNATURE_SECOND) {
        data['guardianInfo'][1][name] = value;
      }
    }
  }

  return Object.assign({}, state, data);
}

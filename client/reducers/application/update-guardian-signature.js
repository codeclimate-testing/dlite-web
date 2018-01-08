'use strict';

import { TYPES } from '../../actions';
import formObjectReducer from './form-object-reducer';

function defaultState() {
  return {
    isSigned:  '',
    guardianInfo: [{
      id: '0',
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
      id: '1',
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
    let guardianID = '';
    let name    = payload.name;
    let value   = payload.value === 'true' ? true : payload.value === 'false' ? false : payload.value;
    if( name === 'isSigned') {
      data[name]  = value;
    }
    else{
      data = Object.assign({}, state);
      if (action.type === TYPES.UPDATE_GUARDIAN_SIGNATURE_FIRST) {
        guardianID = '0';

      }
      else if (action.type === TYPES.UPDATE_GUARDIAN_SIGNATURE_SECOND) {
        guardianID = '1';
      }
      if(name === 'acceptLiabilities'){
        value = value === `${name}_${guardianID}-true` ? true : false;
      }
      data['guardianInfo'][guardianID][name] = value;
    }
  }

  return Object.assign({}, state, data);
}

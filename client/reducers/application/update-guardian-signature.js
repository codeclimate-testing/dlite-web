'use strict';

import { TYPES }          from '../../actions';
import formObjectReducer  from './../form-object-reducer';

function defaultState() {
  return {
    isSigned:  '',
    guardianInfo: [{
      id: '0',
      acceptLiabilities: '',
      signature: {
        name: '',
        month: '',
        day: '',
        year: '',
      },
      phoneNumber: '',
      address: {
        street_1: '',
        street_2: '',
        city: '',
        state: 'CA',
        zip: '',
      }
    },
    {
      id: '1',
      acceptLiabilities: '',
      signature: {
        name: '',
        month: '',
        day: '',
        year: '',
      },
      phoneNumber: '',
      address: {
        street_1: '',
        street_2: '',
        city: '',
        state: 'CA',
        zip: '',
      }
    }]
  };
}

const updateGuardianElectronicSignature = (guardianID, name, value, state) => {
  let data = Object.assign({}, state);
  name = name.split('_')[0];
  if(name === 'acceptLiabilities'){
    value = value === `${name}_${guardianID}-true` ? true : false;
    data['guardianInfo'][guardianID][name] = value;
  }
  else{
    data['guardianInfo'][guardianID]['signature'][name] = value;
  }
  return Object.assign({}, state, data);
}

const updateGuardianContactDetails = (guardianID, name, value, state) => {
  let data = Object.assign({}, state);
  if(name === `phoneNumber_${guardianID}`){
    name = name.split('_')[0];
    data['guardianInfo'][guardianID][name] = value;
  }
  else{
    name = name.replace(`guardian_${guardianID}`, '').toLowerCase();
    data['guardianInfo'][guardianID]['address'][name] = value;
  }
  return Object.assign({}, state, data);
}

export default function(state = defaultState(), action) {

  let type        = action.type;
  let payload     = action.payload;
  let data        = {};
  let guardianID  = '';

  if(!payload) {
    return state;
  }

  let name    = payload.name;
  let value   = payload.value;

  switch (type) {

    case 'UPDATE_GUARDIAN_SIGNATURE':
      data[name]  = value;
      return Object.assign({}, state, data);

    case 'UPDATE_GUARDIAN_SIGNATURE_FIRST':
      return updateGuardianElectronicSignature(0, name, value, state);

    case 'UPDATE_GUARDIAN_SIGNATURE_SECOND':
      return updateGuardianElectronicSignature(1, name, value, state);

    case 'UPDATE_GUARDIAN_CONTACT_DETAILS_FIRST':
     return updateGuardianContactDetails(0, name, value, state);

    case 'UPDATE_GUARDIAN_CONTACT_DETAILS_SECOND':
      return updateGuardianContactDetails(1, name, value, state);

    default:
      return state;
  };

}

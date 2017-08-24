'use strict';

function defaultState() {
  return {
    mailingStreet: '',
    mailingCity: '',
    mailingState: 'CA',
    mailingZip: '',
    isSameAsResidential: false
  };
}

export default function(state = defaultState(), action) {
  let data = {};
  let payload = action.payload;

  if(payload){

    if(payload.value === true){
      // Update mailing address with residence address
      data = {
        isSameAsResidential: true
      };
    }
    else if (payload.value === false){
      data['isSameAsResidential'] = false;
    }

    let name = payload.name;
    let value = payload.value;
    data[name] = value;
  }

  return Object.assign({}, state, data);
}

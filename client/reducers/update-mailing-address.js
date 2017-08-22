'use strict';

function defaultState() {
  return {
    mailingStreet: '',
    mailingCity: '',
    mailingState: 'CA',
    mailingZip: ''
  };
}

export default function(state = defaultState(), action) {
  let data = {};
  let payload = action.payload;

  if(payload && payload.value === 'on'){
    data = {
      mailingStreet: state.street,
      mailingCity: state.city,
      mailingState: state.state,
      mailingZip: state.zip
    };
  }
  else if (payload) {
    let name = payload.name;
    let value = payload.value;
    data[name] = value;
  }

  return Object.assign({}, state, data);
}

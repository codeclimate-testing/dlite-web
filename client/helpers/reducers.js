'use strict';

import { TYPES } from '../actions';

export const cardTypeAction = (action) => {
  return action.type === TYPES.UPDATE_CARD_TYPE ||
    action.type === TYPES.UPDATE_CARD_ACTION ||
    action.type === TYPES.UPDATE_YOUTH_ID_INSTEAD
};

export const trueIfYesNeverFalse = (value, type, state) => {
  if (value === type) {
    return true;
  } else {
    return state;
  }
};

export const sameIfAdding = (name, state) => {
  let newState = false;
  if (name === 'IDAction' || name === 'DLAction' || name === 'newFlow') {
    newState = state;
  }
  return newState;
};

export const addressReducer = (payload, data, defaultState) => {
  if (payload.name === 'homeAddressSameAsMailing') {
    data.homeAddressSameAsMailing = payload.value;
    let mailingAddress = data.home;
    if (payload.value === 'No') {
      mailingAddress =  defaultState().mailing;
    }
    data.mailing = mailingAddress;
  }

  else {
    let splitName = payload.name.split(/(?=[A-Z])/);
    let type = splitName[0];
    let name = splitName[1].toLowerCase();
    data[type][name] = payload.value;
  }
  return data;
}
export const realID = (state, action, type) => {
  let data = state;
  if (action.payload.name === 'realIdDesignation'){
    if (action.payload.value === type) {
      data = 'Yes'
    } else {
      data = 'No';
    }
  }
  else if(action.payload.name === type || action.payload.name === 'both'){
    data = action.payload.value;
  }

  return data;
}

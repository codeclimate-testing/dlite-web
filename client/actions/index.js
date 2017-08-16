'use strict';

export function updateLegalName(name, value) {
  return {
    type: 'UPDATE_LEGAL_NAME',
    payload: { name, value }
  };
}

export function updateResidenceAddress(name, value, type) {
  return {
    type: 'UPDATE_RESIDENCE_ADDRESS',
    payload: { name, value }
  }
}

export function updateContactDetails(type, value) {
  return {
    type:'UPDATE_CONTACT_DETAILS',
    payload: { type, value }
  }
}

export function updateEyeColor(name, value) {
  return {
    type: 'UPDATE_EYE_COLOR',
    payload: { name, value }
  }
}
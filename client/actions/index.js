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

'use strict';

export function submitLegalName() {
  return {
    type: "SUBMIT_LEGAL_NAME",
    payload: {}
  };
}

export function updateLegalName(nameType, value) {
  return {
    type: 'UPDATE_LEGAL_NAME',
    payload: {nameType, value}
  }
};

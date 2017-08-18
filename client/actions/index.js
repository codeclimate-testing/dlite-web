'use strict';

function generateAction(type) {
  return function action(name, value) {
    return {
      type: type,
      payload: { name, value }
    };
  };
}

export const updateLegalName        = generateAction('UPDATE_LEGAL_NAME');
export const updateResidenceAddress = generateAction('UPDATE_RESIDENCE_ADDRESS');
export const updateHairColor        = generateAction('UPDATE_HAIR_COLOR');
export const updateEyeColor         = generateAction('UPDATE_EYE_COLOR');
//export const updateContactDetails   = generateAction('UPDATE_CONTACT_DETAILS');

// Not sure why this isn't working ^^^, but something about this is different ??
export function updateContactDetails(type, value) {
  return {
    type:'UPDATE_CONTACT_DETAILS',
    payload: { type, value }
  }
}

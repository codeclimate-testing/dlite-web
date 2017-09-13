'use strict';

function generateAction(type) {
  return function action(name, value) {
    return {
      type: type,
      payload: { name, value }
    };
  };
}

export const TYPES = {
  UPDATE_LEGAL_NAME: 'UPDATE_LEGAL_NAME',
  UPDATE_RESIDENCE_ADDRESS: 'UPDATE_RESIDENCE_ADDRESS',
  UPDATE_MAILING_ADDRESS: 'UPDATE_MAILING_ADDRESS',
  UPDATE_HAIR_COLOR: 'UPDATE_HAIR_COLOR',
  UPDATE_EYE_COLOR: 'UPDATE_EYE_COLOR',
  UPDATE_CONTACT_DETAILS: 'UPDATE_CONTACT_DETAILS',
  UPDATE_DATE_OF_BIRTH: 'UPDATE_DATE_OF_BIRTH'
};

export const updateLegalName        = generateAction(TYPES.UPDATE_LEGAL_NAME);
export const updateResidenceAddress = generateAction(TYPES.UPDATE_RESIDENCE_ADDRESS);
export const updateMailingAddress   = generateAction(TYPES.UPDATE_MAILING_ADDRESS);
export const updateHairColor        = generateAction(TYPES.UPDATE_HAIR_COLOR);
export const updateEyeColor         = generateAction(TYPES.UPDATE_EYE_COLOR);
export const updateContactDetails   = generateAction(TYPES.UPDATE_CONTACT_DETAILS);
export const updateDateOfBirth      = generateAction(TYPES.UPDATE_DATE_OF_BIRTH);

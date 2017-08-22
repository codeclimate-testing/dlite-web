'use strict';

import { combineReducers } from 'redux';
import updateLegalNames from './update-legal-name';
import updateResidenceAddress  from './update-residence-address';
import updateMailingAddress from './update-mailing-address';
import updateHairColor from './update-hair-color';
import updateContactDetails from './update-contact-details';
import updateEyeColor from './update-eye-color.js';

const rootReducer = combineReducers({
  legalName: updateLegalNames,
  residenceAddress: updateResidenceAddress,
  mailingAddress: updateMailingAddress,
  contactDetails: updateContactDetails,
  eyeColor: updateEyeColor,
  hairColor: updateHairColor,
  contactDetails: updateContactDetails
});

export default rootReducer;

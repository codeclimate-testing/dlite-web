'use strict';

import { combineReducers } from 'redux';
import updateLegalNames from './update-legal-name';
import updateResidenceAddress  from './update-residence-address';
import updateContactDetails from './update-contact-details';

const rootReducer = combineReducers({
  legalName: updateLegalNames,
  residenceAddress: updateResidenceAddress,
  contactDetails: updateContactDetails
});

export default rootReducer;

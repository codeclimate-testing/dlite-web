'use strict';

import { combineReducers } from 'redux';
import updateLegalNames from './update-legal-name';
import updateResidenceAddress  from './update-residence-address';

const rootReducer = combineReducers({
  legalName: updateLegalNames,
  residenceAddress: updateResidenceAddress
});

export default rootReducer;

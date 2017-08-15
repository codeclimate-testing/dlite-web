'use strict';

import { combineReducers } from 'redux';
import updateLegalNames from './update-legal-name';
import updateResidenceAddress  from './update-residence-address';
import updateHairColor from './update-hair-color';

const rootReducer = combineReducers({
  legalName: updateLegalNames,
  residenceAddress: updateResidenceAddress,
  hairColor: updateHairColor
});

export default rootReducer;

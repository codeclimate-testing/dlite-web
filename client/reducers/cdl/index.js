'use strict';

import { combineReducers }          from 'redux';
import createApplicationID          from './create-application-id';
import updateLegalName              from './update-legal-name';
import updateDateOfBirth            from './update-date-of-birth';
import updateCardAction             from './update-card-action';
import updateResidency              from './update-residency';

const rootReducer = combineReducers({
  id                      : createApplicationID,
  basics                  : combineReducers({
    legalName             : updateLegalName,
    dateOfBirth           : updateDateOfBirth,
    cardAction            : updateCardAction,
    residency             : updateResidency
  })
});

export default rootReducer;

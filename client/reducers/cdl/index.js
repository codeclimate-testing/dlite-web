'use strict';

import { combineReducers }          from 'redux';
import createApplicationID          from './create-application-id';
import updateLegalName              from './update-legal-name';
import updateDateOfBirth            from './update-date-of-birth';

const rootReducer = combineReducers({
  id                      : createApplicationID,
  basics                  : combineReducers({
    legalName             : updateLegalName,
    dateOfBirth           : updateDateOfBirth
  })
});

export default rootReducer;
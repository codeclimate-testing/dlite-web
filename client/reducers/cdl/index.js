'use strict';

import { combineReducers }          from 'redux';
import createApplicationID          from './create-application-id';
import updateLegalName              from './update-legal-name';
import updateDateOfBirth            from './update-date-of-birth';
import updateCardAction             from './update-card-action';
import updateCardChanges            from './update-card-changes';
import updateCDLCardReplacement     from './update-cdl-card-replacement';
import updateResidency              from './update-residency';
import updateSocialSecurity         from './update-social-security';
import updateCurrentDL              from './update-current-dl';
import updateCurrentCard            from './update-current-card';
import updateRealID                 from './update-real-id';

const rootReducer = combineReducers({
  id                      : createApplicationID,
  cardAction              : updateCardAction,
  cardChanges             : updateCardChanges,
  cardReplacement         : updateCDLCardReplacement,
  realID                  : updateRealID,
  basics                  : combineReducers({
    legalName             : updateLegalName,
    dateOfBirth           : updateDateOfBirth,
    residency             : updateResidency,
    socialSecurity        : updateSocialSecurity,
  }),

  history                 : combineReducers({
    currentDLInfo         : updateCurrentDL
  }),
  currentCardInfo         : updateCurrentCard
});

export default rootReducer;

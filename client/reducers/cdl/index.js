'use strict';

import { combineReducers }          from 'redux';
import createApplicationID          from './create-application-id';
import updateLegalName              from './update-legal-name';
import updateDateOfBirth            from './update-date-of-birth';
import updatePhysicalTraits         from './update-physical-traits';
import updateHeightWeight           from './update-traits-height-weight';
import updateCardAction             from './update-card-action';
import updateCardChanges            from './update-card-changes';
import updateCDLCardReplacement     from './update-cdl-card-replacement';
import updateResidency              from './update-residency';
import updateSocialSecurity         from './update-social-security';
import updateCurrentDL              from './update-current-dl';
import updateCurrentCard            from './update-current-card';
import updateRealID                 from './update-real-id';
import updateMotorcycle             from './update-motorcycle';
import updateLicenseClass           from './update-license-class';
import updateSelfCertification      from './update-self-cert';

const rootReducer = combineReducers({
  id                      : createApplicationID,
  cardAction              : updateCardAction,
  cardChanges             : updateCardChanges,
  cardReplacement         : updateCDLCardReplacement,
  realID                  : updateRealID,
  basics                  : combineReducers({
    legalName             : updateLegalName,
    dateOfBirth           : updateDateOfBirth,
    physicalTraits        : updatePhysicalTraits,
    traitsHeightWeight    : updateHeightWeight,
    residency             : updateResidency,
    socialSecurity        : updateSocialSecurity,
  }),

  history                 : combineReducers({
    currentDLInfo         : updateCurrentDL
  }),
  currentCardInfo         : updateCurrentCard,
  classM                  : updateMotorcycle,
  licenseClass            : updateLicenseClass,
  certification           : updateSelfCertification
});

export default rootReducer;

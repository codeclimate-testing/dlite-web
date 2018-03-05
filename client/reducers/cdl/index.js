'use strict';

import { combineReducers }          from 'redux';
import createApplicationID          from './create-application-id';

import updateCardAction             from './get-started/update-card-action';
import updateCardChanges            from './get-started/update-card-changes';
import updateCDLCardReplacement     from './get-started/update-cdl-card-replacement';
import updateCurrentCard            from './get-started/update-current-card';
import updateRealID                 from './get-started/update-real-id';
import updateMotorcycle             from './get-started/update-motorcycle';
import updateLicenseClass           from './get-started/update-license-class';
import updateSelfCertification      from './get-started/update-self-cert';

import updateLegalName              from './basics/update-legal-name';
import updateSocialSecurity         from './basics/update-social-security';
import updateResidency              from './basics/update-residency';
import updateDateOfBirth            from './basics/update-date-of-birth';
import updatePhysicalTraits         from './basics/update-physical-traits';
import updateHeightWeight           from './basics/update-traits-height-weight';

import updateMedical                from './my-history/update-medical';
import updateCurrentDL              from './my-history/update-current-dl';


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
    currentDLInfo         : updateCurrentDL,
    medicalHistory        : updateMedical
  }),
  currentCardInfo         : updateCurrentCard,
  classM                  : updateMotorcycle,
  licenseClass            : updateLicenseClass,
  certification           : updateSelfCertification
});

export default rootReducer;

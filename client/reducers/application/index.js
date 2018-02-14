'use strict';

import { combineReducers }                from 'redux';

import createApplicationID                from './create-application-id';
import updateLanguage                     from './basics/update-language';
import updateLegalNames                   from './basics/update-legal-name';
import updateAddress                      from './basics/update-address';
import updateDateOfBirth                  from './basics/update-date-of-birth';
import updatePhysicalTraits               from './basics/update-physical-traits';
import updateTraitsHeightWeight           from './basics/update-traits-height-weight';
import updateSocialSecurity               from './basics/update-social-security';

import updateID                           from './id-app/update-id';
import updateIDAction                     from './id-app/update-id-action';
import updateSeniorID                     from './id-app/update-senior-id';
import updateReducedFee                   from './id-app/update-reduced-fee';
import updateCurrentID                    from './id-app/update-current';
import updateIDReplacement                from './id-app/update-replacement';
import updateIDChanges                    from './id-app/update-changes';

import updateDL                           from './dl-app/update-dl';
import updateDLAction                     from './dl-app/update-dl-action';
import updateLicenseType                  from './dl-app/update-license-type';
import updateCurrentDL                    from './dl-app/update-current';
import updateDLReplacement                from './dl-app/update-replacement';
import updateDLChanges                    from './dl-app/update-changes';

import updateLicenseIssues                from './history/update-license-issues';
import updateLicenseAndIdHistory          from './history/update-license-and-id-history';
import updateNamesHistory                 from './history/update-names-history';
import updateMedicalHistory               from './history/update-medical-history';
import updateVeteranService               from './history/update-veterans-service';

import updateCardAction                   from './update-card-action';
import updateCardType                     from './update-card-type';
import updateRealID                       from './update-real-id';
import updateOrganDonation                from './update-organ-donation';
import updateGuardianSignature            from './update-guardian-signature';
import updateIsPreRegistering             from './update-is-pre-registering';
import updateYouthIDInstead               from './update-youth-id-instead';

import updateCitizenStatus                from './voting/update-citizen-status';
import updateBallotByMail                 from './voting/update-ballot-by-mail';
import updateEligibilityRequirements      from './voting/update-eligibility-requirements';
import updatePoliticalPartyChoose         from './voting/update-choose-party';
import updateOptOut                       from './voting/update-opt-out';
import updateContactMethods               from './voting/update-contact-methods';


const rootReducer = combineReducers({
  id                          : createApplicationID,
  cardAction                  : updateCardAction,
  cardType                    : updateCardType,
  realID                      : updateRealID,
  IDApp                       : combineReducers({
    isApplying                  : updateID,
    action                      : updateIDAction,
    reducedFee                  : updateReducedFee,
    seniorID                    : updateSeniorID,
    currentCard                 : updateCurrentID,
    replacementDetails          : updateIDReplacement,
    cardChanges                 : updateIDChanges
  }),
  DLApp                       : combineReducers({
    isApplying                  : updateDL,
    action                      : updateDLAction,
    licenseType                 : updateLicenseType,
    currentCard                 : updateCurrentDL,
    replacementDetails          : updateDLReplacement,
    cardChanges                 : updateDLChanges
  }),
  basics                      : combineReducers({
    language                    : updateLanguage,
    legalName                   : updateLegalNames,
    address                     : updateAddress,
    dateOfBirth                 : updateDateOfBirth,
    physicalTraits              : updatePhysicalTraits,
    traitsHeightWeight          : updateTraitsHeightWeight,
    socialSecurity              : updateSocialSecurity
  }),
  history                     : combineReducers({
    licenseAndIdHistory         : updateLicenseAndIdHistory,
    namesHistory                : updateNamesHistory,
    medicalHistory              : updateMedicalHistory,
    licenseIssues               : updateLicenseIssues,
    veteransService             : updateVeteranService
  }),
  organDonation               : updateOrganDonation,
  voting                      : combineReducers({
    citizenStatus               : updateCitizenStatus,
    ballotByMail                : updateBallotByMail,
    eligibilityRequirements     : updateEligibilityRequirements,
    politicalPartyChoose        : updatePoliticalPartyChoose,
    optOut                      : updateOptOut,
    contactMethods              : updateContactMethods,
  }),
  youthIDInstead              : updateYouthIDInstead,
  isPreRegistering            : updateIsPreRegistering,
  guardianSignature           : updateGuardianSignature

});

export default rootReducer;

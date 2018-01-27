'use strict';

import { combineReducers }                from 'redux';

import createApplicationID                from './create-application-id';
import updateLanguage                     from './update-language';
import updateLegalNames                   from './update-legal-name';
import updateCardAction                   from './update-card-action';
import updateCardType                     from './update-card-type';
import updateCardChanges                  from './update-card-changes';
import updateCardReplacement              from './update-card-replacement';
import updateCurrentCardInfo              from './update-current-card-info';
import updateReducedFee                   from './update-reduced-fee';
import updateAddress                      from './update-address';
import updateRealID                       from './update-real-id';
import updateSeniorID                     from './update-senior-id';
import updateLicenseType                  from './update-license-type';
import updateDateOfBirth                  from './update-date-of-birth';
import updatePhysicalTraits               from './update-physical-traits';
import updateTraitsHeightWeight           from './update-traits-height-weight';
import updateOrganDonation                from './update-organ-donation';
import updateLicenseIssues                from './update-license-issues';
import updateLicenseAndIdHistory          from './update-license-and-id-history';
import updateNamesHistory                 from './update-names-history';
import updateMedicalHistory               from './update-medical-history';
import updateSocialSecurity               from './update-social-security';
import updateVeteranService               from './update-veterans-service';
import updateCitizenStatus                from './update-citizen-status';
import updateBallotByMail                 from './update-ballot-by-mail';
import updateEligibilityRequirements      from './update-eligibility-requirements';
import updatePoliticalPartyChoose         from './update-choose-party';
import updateOptOut                       from './update-opt-out';
import updateContactMethods               from './update-contact-methods';
import updateGuardianSignature            from './update-guardian-signature';

const rootReducer = combineReducers({
  id                          : createApplicationID,
  language                    : updateLanguage,
  legalName                   : updateLegalNames,
  cardAction                  : updateCardAction,
  cardType                    : updateCardType,
  cardChanges                 : updateCardChanges,
  cardReplacement             : updateCardReplacement,
  currentCardInfo             : updateCurrentCardInfo,
  reducedFee                  : updateReducedFee,
  address                     : updateAddress,
  dateOfBirth                 : updateDateOfBirth,
  realID                      : updateRealID,
  seniorID                    : updateSeniorID,
  licenseType                 : updateLicenseType,
  physicalTraits              : updatePhysicalTraits,
  traitsHeightWeight          : updateTraitsHeightWeight,
  organDonation               : updateOrganDonation,
  licenseAndIdHistory         : updateLicenseAndIdHistory,
  namesHistory                : updateNamesHistory,
  medicalHistory              : updateMedicalHistory,
  licenseIssues               : updateLicenseIssues,
  socialSecurity              : updateSocialSecurity,
  veteransService             : updateVeteranService,
  citizenStatus               : updateCitizenStatus,
  ballotByMail                : updateBallotByMail,
  eligibilityRequirements     : updateEligibilityRequirements,
  politicalPartyChoose        : updatePoliticalPartyChoose,
  optOut                      : updateOptOut,
  contactMethods              : updateContactMethods,
  guardianSignature           : updateGuardianSignature

});

export default rootReducer;

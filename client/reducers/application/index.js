'use strict';

import { combineReducers }                 from 'redux';

import createApplicationID                 from './create-application-id';
import updateLegalNames                    from './update-legal-name';
import updateHomeAddress                   from './update-home-address';
import updateMailingAddress                from './update-mailing-address';
import updateDateOfBirth                   from './update-date-of-birth';
import updatePhysicalTraits                from './update-physical-traits';
import updateTraitsHeightWeight            from './update-traits-height-weight';
import updateOrganDonation                 from './update-organ-donation';
import updateLicenseIssues                 from './update-license-issues';
import updateLicenseAndIdHistory           from './update-license-and-id-history';
import updateNamesHistory                  from './update-names-history';
import updateSocialSecurity                from './update-social-security';
import updateCitizenStatus                 from './update-citizen-status';
import updateBallotByMail                  from './update-ballot-by-mail';
import updateEligibilityRequirements       from './update-eligibility-requirements';
import updatePoliticalPartyChoose          from './update-choose-party';
import updateBallotLanguage                from './update-ballot-language';
import updateOptOut                        from './update-opt-out';
import updatePoliticalContact              from './update-political-contact';

const rootReducer = combineReducers({
  id                          : createApplicationID,
  legalName                   : updateLegalNames,
  homeAddress                 : updateHomeAddress,
  mailingAddress              : updateMailingAddress,
  dateOfBirth                 : updateDateOfBirth,
  physicalTraits              : updatePhysicalTraits,
  traitsHeightWeight          : updateTraitsHeightWeight,
  organDonation               : updateOrganDonation,
  licenseAndIdHistory         : updateLicenseAndIdHistory,
  namesHistory                : updateNamesHistory,
  licenseIssues               : updateLicenseIssues,
  socialSecurity              : updateSocialSecurity,
  citizenStatus               : updateCitizenStatus,
  ballotByMail                : updateBallotByMail,
  eligibilityRequirements     : updateEligibilityRequirements,
  politicalPartyChoose        : updatePoliticalPartyChoose,
  ballotLanguage              : updateBallotLanguage,
  optOut                      : updateOptOut,
  politicalContact            : updatePoliticalContact
});

export default rootReducer;

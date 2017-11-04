'use strict';

import { combineReducers }                 from 'redux';

import updateLegalNames                    from './update-legal-name';
import updateHomeAddress                   from './update-home-address';
import updateMailingAddress                from './update-mailing-address';
import updateDateOfBirth                   from './update-date-of-birth';
import updatePhysicalTraits                from './update-physical-traits';
import updateHeight                        from './update-height';
import updateWeight                        from './update-weight';
import updateOrganDonation                 from './update-organ-donation';
import updatePrivilegeRemovedHistory       from './update-privilege-removed-history';
import updateExistingDLIDInfo              from './update-existing-dl-id-info';
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
  legalName                   : updateLegalNames,
  homeAddress                 : updateHomeAddress,
  mailingAddress              : updateMailingAddress,
  dateOfBirth                 : updateDateOfBirth,
  physicalTraits              : updatePhysicalTraits,
  height                      : updateHeight,
  weight                      : updateWeight,
  organDonation               : updateOrganDonation,
  existingDLIDInfo            : updateExistingDLIDInfo,
  namesHistory                : updateNamesHistory,
  privilegeRemovedHistory     : updatePrivilegeRemovedHistory,
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

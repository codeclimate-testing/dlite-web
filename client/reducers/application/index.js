'use strict';

import { combineReducers }                 from 'redux';

import updateLegalNames                    from './update-legal-name';
import updateHomeAddress                   from './update-home-address';
import updateMailingAddress                from './update-mailing-address';
import updateHairColor                     from './update-hair-color';
import updateEyeColor                      from './update-eye-color';
import updateDateOfBirth                   from './update-date-of-birth';
import updateSex                           from './update-sex';
import updateTraitsHeightWeight            from './update-traits-height-weight';
import updateOrganDonation                 from './update-organ-donation';
import updatePrivilegeRemovedHistory       from './update-privilege-removed-history';
import updateExistingDLIDInfo              from './update-existing-dl-id-info';
import updatePreviousNamesInfo             from './update-previous-names-info';
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
  eyeColor                    : updateEyeColor,
  hairColor                   : updateHairColor,
  dateOfBirth                 : updateDateOfBirth,
  sex                         : updateSex,
  traitsHeightWeight          : updateTraitsHeightWeight,
  organDonation               : updateOrganDonation,
  existingDLIDInfo            : updateExistingDLIDInfo,
  privilegeRemovedHistory     : updatePrivilegeRemovedHistory,
  previousNamesInfo           : updatePreviousNamesInfo,
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

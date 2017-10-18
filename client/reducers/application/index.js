'use strict';

import { combineReducers }                 from 'redux';

import updateLegalNames                    from './update-legal-name';
import updateHomeAddress                   from './update-home-address';
import updateMailingAddress                from './update-mailing-address';
import updateHairColor                     from './update-hair-color';
import updateContactDetails                from './update-contact-details';
import updateEyeColor                      from './update-eye-color';
import updateDateOfBirth                   from './update-date-of-birth';
import updateSex                           from './update-sex';
import updateHeight                        from './update-height';
import updateWeight                        from './update-weight';
import updateOrgan                         from './update-organ';
import updateDonateContribution            from './update-donate-contribution';
import updateSuspendedLicenseInfo          from './update-suspended-license-info';
import updateExistingDLIDInfo              from './update-existing-dl-id-info';
import updateSocialSecurity                from './update-social-security';
import updateCitizenStatus                 from './update-citizen-status';
import updateBallotByMail                  from './update-ballot-by-mail';
import updateEligibilityRequirements       from './update-eligibility-requirements';
import updatePoliticalPartyChoose          from './update-political-party-choose';
import updatePoliticalPartyPreference      from './update-political-party-preference';
import updateBallotLanguage                from './update-ballot-language';
import updateContactChoice                 from './update-contact-choice';
import updateOptOut                        from './update-opt-out';

const rootReducer = combineReducers({
  legalName                   : updateLegalNames,
  homeAddress                 : updateHomeAddress,
  mailingAddress              : updateMailingAddress,
  contactDetails              : updateContactDetails,
  eyeColor                    : updateEyeColor,
  hairColor                   : updateHairColor,
  dateOfBirth                 : updateDateOfBirth,
  sex                         : updateSex,
  height                      : updateHeight,
  weight                      : updateWeight,
  organ                       : updateOrgan,
  donateContribution          : updateDonateContribution,
  existingDLIDInfo            : updateExistingDLIDInfo,
  suspendedLicenseInfo        : updateSuspendedLicenseInfo,
  socialSecurity              : updateSocialSecurity,
  citizenStatus               : updateCitizenStatus,
  ballotByMail                : updateBallotByMail,
  eligibilityRequirements     : updateEligibilityRequirements,
  politicalPartyChoose        : updatePoliticalPartyChoose,
  politicalPartyPreference    : updatePoliticalPartyPreference,
  ballotLanguage              : updateBallotLanguage,
  contactChoice               : updateContactChoice,
  optOut                      : updateOptOut

});

export default rootReducer;

'use strict';

import { combineReducers }       from 'redux';

import updateLegalNames          from './update-legal-name';
import updateHomeAddress         from './update-home-address';
import updateMailingAddress      from './update-mailing-address';
import updateHairColor           from './update-hair-color';
import updateContactDetails      from './update-contact-details';
import updateEyeColor            from './update-eye-color';
import updateDateOfBirth         from './update-date-of-birth';
import updateSex                 from './update-sex';
import updateHeight              from './update-height';
import updateWeight              from './update-weight';
import updateSocialSecurity      from './update-social-security';
import updateCitizenStatus       from './update-citizen-status';
import updateBallotByMail        from './update-ballot-by-mail';

const rootReducer = combineReducers({
  legalName             : updateLegalNames,
  homeAddress           : updateHomeAddress,
  mailingAddress        : updateMailingAddress,
  contactDetails        : updateContactDetails,
  eyeColor              : updateEyeColor,
  hairColor             : updateHairColor,
  dateOfBirth           : updateDateOfBirth,
  sex                   : updateSex,
  height                : updateHeight,
  weight                : updateWeight,
  socialSecurity        : updateSocialSecurity,
  citizenStatus         : updateCitizenStatus,
  ballotByMail          : updateBallotByMail
});

export default rootReducer;

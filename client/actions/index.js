'use strict';

function generateAction(type) {
  return function action(name, value) {
    return {
      type: type,
      payload: { name, value }
    };
  };
}

export const TYPES = {
  UPDATE_LEGAL_NAME:                      'UPDATE_LEGAL_NAME',
  UPDATE_HOME_ADDRESS:                    'UPDATE_HOME_ADDRESS',
  UPDATE_MAILING_ADDRESS:                 'UPDATE_MAILING_ADDRESS',
  UPDATE_HAIR_COLOR:                      'UPDATE_HAIR_COLOR',
  UPDATE_EYE_COLOR:                       'UPDATE_EYE_COLOR',
  UPDATE_DATE_OF_BIRTH:                   'UPDATE_DATE_OF_BIRTH',
  UPDATE_SEX:                             'UPDATE_SEX',
  UPDATE_HEIGHT:                          'UPDATE_HEIGHT',
  UPDATE_WEIGHT:                          'UPDATE_WEIGHT',
  UPDATE_ORGAN_DONATION:                  'UPDATE_ORGAN_DONATION',
  UPDATE_SUSPENDED_LICENSE_INFO:          'UPDATE_SUSPENDED_LICENSE_INFO',
  UPDATE_EXISTING_DL_ID_INFO:             'UPDATE_EXISTING_DL_ID_INFO',
  UPDATE_NAMES_HISTORY:                   'UPDATE_NAMES_HISTORY',
  UPDATE_SOCIAL_SECURITY:                 'UPDATE_SOCIAL_SECURITY',
  UPDATE_CITIZEN_STATUS:                  'UPDATE_CITIZEN_STATUS',
  UPDATE_BALLOT_BY_MAIL:                  'UPDATE_BALLOT_BY_MAIL',
  UPDATE_ELIGIBILITY_REQUIREMENTS:        'UPDATE_ELIGIBILITY_REQUIREMENTS',
  UPDATE_POLITICAL_PARTY_CHOOSE:          'UPDATE_POLITICAL_PARTY_CHOOSE',
  UPDATE_BALLOT_LANGUAGE:                 'UPDATE_BALLOT_LANGUAGE',
  UPDATE_OPT_OUT:                         'UPDATE_OPT_OUT',
  UPDATE_POLITICAL_CONTACT:               'UPDATE_POLITICAL_CONTACT'
};

export const updateLegalName                  = generateAction(TYPES.UPDATE_LEGAL_NAME);
export const updateHomeAddress                = generateAction(TYPES.UPDATE_HOME_ADDRESS);
export const updateMailingAddress             = generateAction(TYPES.UPDATE_MAILING_ADDRESS);
export const updateHairColor                  = generateAction(TYPES.UPDATE_HAIR_COLOR);
export const updateEyeColor                   = generateAction(TYPES.UPDATE_EYE_COLOR);
export const updateDateOfBirth                = generateAction(TYPES.UPDATE_DATE_OF_BIRTH);
export const updateSex                        = generateAction(TYPES.UPDATE_SEX);
export const updateHeight                     = generateAction(TYPES.UPDATE_HEIGHT);
export const updateWeight                     = generateAction(TYPES.UPDATE_WEIGHT);
export const updateOrganDonation              = generateAction(TYPES.UPDATE_ORGAN_DONATION);
export const updateSuspendedLicenseInfo       = generateAction(TYPES.UPDATE_SUSPENDED_LICENSE_INFO);
export const updateExistingDlIdInfo           = generateAction(TYPES.UPDATE_EXISTING_DL_ID_INFO);
export const updateNamesHistory               = generateAction(TYPES.UPDATE_NAMES_HISTORY);
export const updateSocialSecurity             = generateAction(TYPES.UPDATE_SOCIAL_SECURITY);
export const updateCitizenStatus              = generateAction(TYPES.UPDATE_CITIZEN_STATUS);
export const updateBallotByMail               = generateAction(TYPES.UPDATE_BALLOT_BY_MAIL);
export const updateEligibilityRequirements    = generateAction(TYPES.UPDATE_ELIGIBILITY_REQUIREMENTS);
export const updatePoliticalPartyChoose       = generateAction(TYPES.UPDATE_POLITICAL_PARTY_CHOOSE);
export const updateBallotLanguage             = generateAction(TYPES.UPDATE_BALLOT_LANGUAGE);
export const updateOptOut                     = generateAction(TYPES.UPDATE_OPT_OUT);
export const updatePoliticalContact           = generateAction(TYPES.UPDATE_POLITICAL_CONTACT);

'use strict';

import { hasValue }     from './validations';

export const appLanguageIsSelected = (appLanguage) => {
  return hasValue(appLanguage);
};

export const ballotLanguageIsSelected = (ballotLanguage) => {
  return hasValue(ballotLanguage);
};
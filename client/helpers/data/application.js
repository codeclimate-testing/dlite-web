'use strict';

import { hasValue }     from './validations';

export const languageIsSelected = (language) => {
  return hasValue(language);
};

export const ballotLanguageIsSelected = (ballotLanguage) => {
  return hasValue(ballotLanguage);
};
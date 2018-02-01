'use strict';

import { hasValue }     from './validations';

export const appLanguageIsSelected = (appLanguage) => {
  return hasValue(appLanguage);
};
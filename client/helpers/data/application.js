'use strict';

import { hasValue }           from './validations';

export const cookieOrEnglish = (cookieLanguage) => {
  if (!hasValue(cookieLanguage)) {
    return 'en';
  }
  return cookieLanguage;
};

export const languageIsSelected = (value) => {
  return hasValue(value);
};

export const ballotLanguageIsSelected = (ballotLanguage) => {
  return hasValue(ballotLanguage);
};

export const buildConfCode = (props) => {
  return props.id.split('-')[0].toUpperCase().slice(0,4)+'-' + props.id.split('-')[0].toUpperCase().slice(4);
};
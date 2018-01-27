'use strict';

import { hasValue }   from './validations';

export const selectedLanguage = (lang) => {
  if (hasValue(lang)) { return lang;}
  return 'en'; //return English if user did not specify which language to use for app
};

export const getLangFromApp = (props) => {
  if (hasValue(props.ballotByMail)) { return props.ballotLanguage; }
  return selectedLanguage(props.appLanguage);
};
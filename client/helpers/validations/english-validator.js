'use strict';

import errorMessages from '../../presentations/error-messages';
import translations from '../../i18n';

export const hasOnlyEnglishChars = (text) => {
  return /^[\x00-\x7F]*$/.test(text);
};

export const englishValidator = (value, locale) => {
  let errors = [];

  if (!hasOnlyEnglishChars(value)) {
    errors = [
      translations[locale].errorMessages.dataIncludesNonEnglishCharacters
    ];
  }

  return errors;
};

export const englishValidatorGenerator = (name) => {
  return (props) => {
    let locale = props.locale;
    let value = props[name] || [];
    return englishValidator(value, locale);
  };
};

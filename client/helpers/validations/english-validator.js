'use strict';

import errorMessages from '../../presentations/error-messages';

export const hasOnlyEnglishChars = (text) => {
  return /^[\x00-\x7F]*$/.test(text);
};

export const englishValidator = (value) => {
  let errors = [];

  if (!hasOnlyEnglishChars(value)) {
    errors = [
      errorMessages.dataIncludesNonEnglishCharacters
    ];
  }

  return errors;
};

export const englishValidatorGenerator = (name) => {
  return (props) => {
    let value = props[name] || [];
    return englishValidator(value);
  };
};

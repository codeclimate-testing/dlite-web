'use strict';

import errorMessages from '../../presentations/error-messages';

export const hasOnlyEnglishChars = (text) => {
  return /^[0-9a-zA-Z-,. _]*$/.test(text);
};

export const englishValidator = (value) => {
  let errors = [];

  if (!hasOnlyEnglishChars(value)) {
    errors = [
      'errorMessages.dataIncludesNonEnglishCharacters'
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

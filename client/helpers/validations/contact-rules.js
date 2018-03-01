'use strict';

import translations        from '../../i18n';
import selectionValidator  from './selection-validator';
import {
  hasValue,
  hasOnlyEnglishChars,
  emailRegex
}             from '../data/validations';

import {
  hasNeither,
  hasPhone
}             from '../data/contact-methods';

const emailAddress = (props) => {
  if (props.shouldContact !== 'Yes' || hasPhone(props)) { return []; };
  let locale = props.locale;
  let value = props.emailAddress;

  if (!emailRegex(value)) {
    return [translations[locale].errorMessages.emailAddressMissingOrInvalid];
  } else if (!hasOnlyEnglishChars(value)) {
    return [translations[locale].errorMessages.inputIncludesNonEnglishCharacters];
  }
  return [];
};

const phoneNumber = (name, number) => {
  return (props) => {
    if (props.shouldContact !== 'Yes' || hasValue(props.emailAddress)) { return [];};
    let locale = props.locale;
    if (props[name].length !== number) {
      return [translations[locale].errorMessages.phoneMissingOrInvalid];
    }
    return [];
  };
};

export default {
  shouldContact: selectionValidator('selectionMissing', 'shouldContact'),
  emailAddress: emailAddress,
  phoneNumber1: phoneNumber('phoneNumber1', 3),
  phoneNumber2: phoneNumber('phoneNumber2', 3),
  phoneNumber3: phoneNumber('phoneNumber3', 4)
};

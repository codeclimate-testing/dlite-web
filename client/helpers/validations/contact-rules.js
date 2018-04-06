'use strict';

import selectionValidator  from './selection-validator';
import {
  hasValue,
  //hasOnlyEnglishChars,
  emailHasOnlyEnglishChars,
  emailRegex
}             from '../data/validations';

import {
  hasNeither,
  hasPhone
}             from '../data/contact-methods';

const emailAddress = (props) => {
  if (props.shouldContact !== 'Yes' || hasPhone(props)) { return []; };
  let value = props.emailAddress;

  if (!emailRegex(value)) {
    return ['errorMessages.emailAddressMissingOrInvalid'];
  } else if (!emailHasOnlyEnglishChars(value)) {
    return ['errorMessages.inputIncludesNonEnglishCharacters'];
  }
  return [];
};

const phoneNumber = (name, number) => {
  return (props) => {
    if (props.shouldContact !== 'Yes' || hasValue(props.emailAddress)) { return [];};
    if (props[name].length !== number) {
      return ['errorMessages.phoneMissingOrInvalid'];
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

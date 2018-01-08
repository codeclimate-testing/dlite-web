'use strict';

import errorMessages      from '../../presentations/error-messages';
import { hasValue }       from '../data/validations';
import { hasOnlyNumbers } from '../data/validations';


export const dateValidator = (value) => {
  let errors = [];
  if (!hasValue(value) || !hasOnlyNumbers(value)) {
    errors = [errorMessages.invalidOrMissingDate];
  } 

  return errors;
};

export const dateValidatorGenerator = (name) => {
  return (props) => {
    let value = props[name] || [];
    return dateValidator(value);
  };
};

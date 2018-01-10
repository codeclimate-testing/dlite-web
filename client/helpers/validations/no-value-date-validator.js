'use strict';

import errorMessages      from '../../presentations/error-messages';
import { hasOnlyNumbers } from '../data/validations';


export const noValueDateValidator = (value) => {
  let errors = [];
  if (!hasOnlyNumbers(value)) {
    errors = [errorMessages.invalidOrMissingDate];
  } 

  return errors;
};

export const noValueDateValidatorGenerator = (name) => {
  return (props) => {
    let value = props[name] || [];
    return dateValidator(value);
  };
};

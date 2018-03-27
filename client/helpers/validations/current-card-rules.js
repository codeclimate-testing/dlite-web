'use strict';

import { englishValidatorGenerator }  from './english-validator';
import { expirationDateValidator }    from './date-validator';

let errorFunction = (name) => {
  return (props) => {
    let errors = [];
    if (!expirationDateValidator(name, props)) {
      errors.push('errorMessages.expirationDateInvalid');
    }
    return errors;
  }
};

const isIssued = (props) => {

  let errors = [];
  if (props.isIssued === '') {
    errors.push('errorMessages.selectionMissing');
  }
  return errors;
}

export default {
  month         : errorFunction('month'),
  day           : errorFunction('day'),
  year          : errorFunction('year'),
  number        : englishValidatorGenerator('number'),
  isIssued
};

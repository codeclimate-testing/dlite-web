'use strict';

import errorMessages from '../../presentations/error-messages';
import {
  englishValidatorGenerator,
} from './english-validator';

import { 
  noValueDateValidator,
  noValueDateValidatorGenerator
 } 
from './no-value-date-validator';

const hash = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30, 
  12: 31
};

const year = (props) => {
  let value = props.year;
  let errors = noValueDateValidator(value);
  const thisYear = new Date().getFullYear();

  if(value && (value.length !== 4 || value > thisYear || thisYear - value > 130)) {
    errors = [errorMessages.invalidOrMissingDate];
  }
  return errors;
};

const month = (props) => {
  let value = props.month;
  let errors = noValueDateValidator(value);

  if(value && (value < 1 || value > 12)) {
    errors = [errorMessages.invalidOrMissingDate];
  }
  return errors;
};

const day = (props) => {
  let value = props.day;
  let errors = noValueDateValidator(value);
  let maxDate = hash[props.month.replace(/\b0+/g, '')];
  if(value && (value < 1 || value > maxDate)) {
    errors = [errorMessages.invalidOrMissingDate];
  }
  return errors;
};

export default {
  month: month,
  day: day,
  year: year,
  number: englishValidatorGenerator('number')
};

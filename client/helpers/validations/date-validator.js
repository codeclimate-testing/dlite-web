'use strict';

import errorMessages        from '../../presentations/error-messages';
import selectionValidator   from './selection-validator';
import {
  hasOnlyNumbers,
  hasValue
} from '../data/validations';

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

const thisYear = new Date().getFullYear();
const min = {
  month: 1,
  day: 1,
  year: thisYear - 130,
  expirationMonth: 1,
  expirationDay: 1,
  expirationYear: thisYear - 130
};
let max = {
  month: (props) => {
    return 12;
  },
  day: (props) => {
    return hash[props.month.replace(/\b0+/g, '')] || 31;
  },
  year: (props, allowFuture) => {
    return allowFuture ? thisYear + 130 : thisYear;
  },
  expirationMonth: (props) => {
    return 12;
  },
  expirationDay: (props) => {
    return hash[props.expirationMonth.replace(/\b0+/g, '')];
  },
  expirationYear: (props) => {
    return 3000;
  }
};

export const checkIfYearError = (name, props) => {
  // return true if length of value is anything other than 0 or 4
  let value = props[name];
  return name === 'year' ? value.length !== 4 && value.length !== 0: false;
};

export const compareValues = (name, props, allowFuture) => {
  let hasError = true;
  let value = props[name];
  let minValue = min[name];
  let maxValue = max[name](props, allowFuture);
  let checkMin = parseInt(value, 10) < minValue;

  if (!hasOnlyNumbers(value) || checkMin || value > maxValue || checkIfYearError(name, props) ) {
    hasError = false;
  }
  return hasError;
};

export const expirationDateValidator = (name, props) => {
  // allow years in the future
  return compareValues(name, props, true);
};

export const dateValidator = (name, props) => {
  // dont allow years in the future
  return compareValues(name, props, false);
};

export const hasDate = (props) => {
  return hasValue(props.month) || hasValue(props.day) || hasValue(props.year);
};

'use strict';

import errorMessages        from '../../presentations/error-messages';
import { hasValue }         from '../data/validations';
import { hasOnlyNumbers }   from '../data/validations';

const ssnFirstSegment = (props) => {
  let value = props.part1;
  console.log(props.part1);
  let errors = [];
  if(!hasValue(value) || value.length !== 3 || !hasOnlyNumbers(value) || value < 0 || value > 9) {
    errors = [errorMessages.socialSecurityNumberInvalid];
  }
  return errors;
};

const ssnSecondSegment = (props) => {
  let value = props.part2;
  let errors = [];
  if(!hasValue(value) || value.length !== 2 || !hasOnlyNumbers(value) || value < 0 || value > 9) {
    errors = [errorMessages.socialSecurityNumberInvalid];
  }
  return errors;
};

const ssnThirdSegment = (props) => {
  let value = props.part3;
  let errors = [];
  if(!hasValue(value) || value.length !== 4 || !hasOnlyNumbers(value) || value < 0 || value > 9) {
    errors = [errorMessages.socialSecurityNumberInvalid];
  }
  return errors;
};

export default {
  ssnFirstSegment: ssnFirstSegment,
  ssnSecondSegment: ssnSecondSegment,
  ssnThirdSegment: ssnThirdSegment
};

'use strict';

import errorMessages        from '../../presentations/error-messages';
import { hasValue }         from '../data/validations';

const ssn = (props) => {
  let value = props.hasSocialSecurity;
  if (!hasValue(value)) {
   return [errorMessages.socialSecurityAvailabilityMissing];
  }
  return [];
};

const ssnAll = (props) => {
  let value = props.part1 || props.part2 || props.part3;
  let selection = props.hasSocialSecurity;
  let errors = [];
  if(selection === 'Yes' && !hasValue(value)) {
    errors = [errorMessages.socialSecurityNumberMissing];
  }
  return errors;
};

const ssnFirstSegment = (props) => {
  let value = props.part1;
  let selection = props.hasSocialSecurity;
  let errors = [];
  if(selection === 'Yes' && value.length !== 3) {
    errors = [errorMessages.socialSecurityNumberInvalid];
  }
  return errors;
};

const ssnSecondSegment = (props) => {
  let value = props.part2;
  let selection = props.hasSocialSecurity;
  let errors = [];
  if(selection === 'Yes' && value.length !== 2) {
    errors = [errorMessages.socialSecurityNumberInvalid];
  }
  return errors;
};

const ssnThirdSegment = (props) => {
  let value = props.part3;
  let selection = props.hasSocialSecurity;
  let errors = [];
  if(selection === 'Yes' && value.length !== 4) {
    errors = [errorMessages.socialSecurityNumberInvalid];
  }
  return errors;
};

export default {
  ssn: ssn,
  ssnAll: ssnAll,
  ssnFirstSegment: ssnFirstSegment,
  ssnSecondSegment: ssnSecondSegment,
  ssnThirdSegment: ssnThirdSegment
};

'use strict';

import errorMessages        from '../../presentations/error-messages';
import { hasValue }         from '../data/validations';
import selectionValidator       from './selection-validator';

import {
  hasNone,
  hasAnySSN
}             from '../data/ssn';

const ssnAll = (props) => {
  let value = props.hasSocialSecurity;
  if (!hasValue(value)) {
   return [errorMessages.socialSecurityAvailabilityMissing];
  }
  return [];
};

const socialSecurity = (name, number) => {
  return (props) => {
    if (props.hasSocialSecurity !== 'Yes') { return [];};

    if (props[name].length !== number) {
      return [errorMessages['socialSecurityNumberInvalid']];
    } else if (hasNone(props)) {
      return [errorMessages['socialSecurityNumberMissing']];
    }
    return [];
  };
};


export default {
  hasSocialSecurity: selectionValidator('selectionMissing', 'hasSocialSecurity'),
  ssnAll: ssnAll,
  part1: socialSecurity('part1', 3),
  part2: socialSecurity('part2', 2),
  part3: socialSecurity('part3', 4)
};

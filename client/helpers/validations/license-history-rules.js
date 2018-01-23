'use strict';

import selectionValidator       from './selection-validator';
import { hasOnlyEnglishChars }  from '../data/validations';
import errorMessages            from '../../presentations/error-messages';
import { expirationDateValidator } from './date-validator';

let checkChars = (name) => {
  return (props) => {
    if (props.isIssued !== 'Yes') {
      return [];
    }
    let value = props[name];
    if (!hasOnlyEnglishChars(value)) {
      return [errorMessages.dataIncludesNonEnglishCharacters]
    }
    return [];
  };
};

let checkNums = (name) => {
  return (props) => {
    let error = [];
    if (props.isIssued !== 'Yes') {
      return error;
    }
    if (!expirationDateValidator(name, props)) {
      error.push(errorMessages.expirationDateInvalid);
    }
    return error;
  };
};

export default {
  isIssued: selectionValidator('licenceHistorySelectionMissing', 'isIssued'),
  DLIDNumber: checkChars('DLIDNumber'),
  issuedBy: checkChars('issuedBy'),
  month: checkNums('month'),
  day: checkNums('day'),
  year: checkNums('year')
};
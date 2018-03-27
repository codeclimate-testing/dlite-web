'use strict';

import selectionValidator       from './selection-validator';
import { hasOnlyEnglishChars }  from '../data/validations';
import errorMessages            from '../../presentations/error-messages';
import { dateValidator }        from './date-validator';

let reason = (props) => {
  if (props.isSuspended !== 'Yes') {
    return [];
  }
  if (!hasOnlyEnglishChars(props.reason)) {
    return ['errorMessages.inputIncludesNonEnglishCharacters']
  }
  return selectionValidator('licenseIssueSelectionMissing', 'reason')(props);
};

let errorFunction = (name) => {
  return (props) => {
    if (props.isSuspended !== 'Yes') {
      return [];
    }
    let errors = [];
    if (!dateValidator(name, props)) {
      errors.push('errorMessages.invalidOrMissingDate');
    }
    return errors;
  };
};

export default {
  isSuspended: selectionValidator('selectionMissing', 'isSuspended'),
  reason: reason,
  month: errorFunction('month'),
  day: errorFunction('day'),
  year: errorFunction('year')
};
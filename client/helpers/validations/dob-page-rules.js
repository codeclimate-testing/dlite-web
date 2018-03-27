'use strict';
import selectionValidator from './selection-validator';
import errorMessages      from '../../presentations/error-messages';
import { dateValidator }  from './date-validator';

const checkInput = (name) => {
  return (props) => {
    let errors = selectionValidator('invalidOrMissingDate', name)(props);
    if (!dateValidator(name, props)) {
      errors.push('errorMessages.invalidOrMissingDate')
    }
    return errors;
  }
};
export default {
  month : checkInput('month'),
  day   : checkInput('day'),
  year  : checkInput('year')
};

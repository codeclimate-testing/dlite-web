'use strict';
import selectionValidator from './selection-validator';
import errorMessages      from '../../presentations/error-messages';
import translations       from '../../i18n';
import { dateValidator }  from './date-validator';

const checkInput = (name) => {
  return (props) => {
    let locale = props.locale;
    let errors = selectionValidator('invalidOrMissingDate', name)(props);
    if (!dateValidator(name, props)) {
      errors.push(translations[locale].errorMessages.invalidOrMissingDate)
    }
    return errors;
  }
};
export default {
  month : checkInput('month'),
  day   : checkInput('day'),
  year  : checkInput('year')
};

'use strict';

import errorMessages from '../../presentations/error-messages';
import { hasValue } from '../data/validations';
import translations from '../../i18n';
import {
  englishValidatorGenerator,
  englishValidator
} from './english-validator';

const lastName = (props) => {
  let locale = props.locale;
  let value = props.lastName;
  let errors = englishValidator(value, locale);

  if (!hasValue(value)) {
    errors.push(translations[locale].errorMessages.lastNameMissing);
  }
  return errors;
};

export default {
  firstName: englishValidatorGenerator('firstName'),
  middleName: englishValidatorGenerator('middleName'),
  lastName: lastName
};

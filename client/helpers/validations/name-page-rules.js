'use strict';

import errorMessages from '../../presentations/error-messages';
import { hasValue } from '../data/validations';
import translations from '../../i18n';
import {
  englishValidatorGenerator,
  englishValidator
} from './english-validator';

const lastName = (props) => {
  let value = props.lastName;
  let errors = englishValidator(value);

  if (!hasValue(value)) {
    errors.push(translations.errorMessages.lastNameMissing);
  }
  return errors;
};

export default {
  firstName: englishValidatorGenerator('firstName'),
  middleName: englishValidatorGenerator('middleName'),
  lastName: lastName
};

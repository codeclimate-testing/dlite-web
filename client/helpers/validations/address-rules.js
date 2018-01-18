'use strict';

import errorMessages      from '../../presentations/error-messages';
import { hasValue }       from '../data/validations';
import { hasOnlyNumbers } from '../data/validations';
import {
  englishValidatorGenerator,
  englishValidator
} from './english-validator';

const homeAddressSameAsMailing = (props) => {
  let value = props.homeAddressSameAsMailing;
  let errors = englishValidator(value);
  if (!hasValue(value)) {
    errors.push(errorMessages.mailingAddressMissing);
  }
  return errors;
};

const homeStreet_1 = (props) => {
  let value = props.home.street_1;
  let errors = englishValidator(value);

  if (!hasValue(value)) {
    errors.push(errorMessages.streetAddressMissing);
  }
  return errors;
};

const homeStreet_2 = (props) => {
  let value = props.home.street_2;
  let errors = englishValidator(value);
  return errors;
};

const homeCity = (props) => {
  let value = props.home.city;
  let errors = englishValidator(value);

  if (!hasValue(value)) {
    errors.push(errorMessages.cityMissing);
  }
  return errors;
};

const homeZip = (props) => {
  let value = props.home.zip;
  let errors = englishValidator(value);
  return errors;
};

const mailingStreet_1 = (props) => {
  let value = props.mailing.street_1;
  let errors = englishValidator(value);

  if (!hasValue(value)) {
    errors.push(errorMessages.streetAddressMissing);
  }
  return errors;
};

const mailingStreet_2 = (props) => {
  let value = props.mailing.street_2;
  let errors = englishValidator(value);
  return errors;
};

const mailingCity = (props) => {
  let value = props.mailing.city;
  let errors = englishValidator(value);

  if (!hasValue(value)) {
    errors.push(errorMessages.cityMissing);
  }
  return errors;
};

const mailingZip = (props) => {
  let value = props.mailing.zip;
  let errors = englishValidator(value);
  return errors;
};


export default {
  homeAddressSameAsMailing,
  homeStreet_1,
  homeStreet_2,
  homeCity,
  homeZip,
  mailingStreet_1,
  mailingStreet_2,
  mailingCity,
  mailingZip
}

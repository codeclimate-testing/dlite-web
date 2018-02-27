'use strict';

import translations           from '../../i18n';
import { needsAddress }       from '../data/cdl';
import  selectionValidator    from './selection-validator.js';
import {
  hasValue,
  hasOnlyNumber
} from '../data/validations';
import {
  englishValidatorGenerator,
  englishValidator
} from './english-validator';

const errorMessages = translations.errorMessages;


const homeAddressSameAsMailing = (props) => {
  if (!needsAddress(props)){ return [];}
  let value = props.homeAddressSameAsMailing;
  let errors = englishValidator(value);
  if (!hasValue(value)) {
    errors.push(errorMessages.mailingAddressMissing);
  }
  return errors;
};

const homeStreet_1 = (props) => {
  if (!needsAddress(props)){ return [];}
  let value = props.home.street_1;
  let errors = englishValidator(value);

  if (!hasValue(value)) {
    errors.push(errorMessages.streetAddressMissing);
  }
  return errors;
};

const homeStreet_2 = (props) => {
  if (!needsAddress(props)){ return [];}
  let value = props.home.street_2;
  let errors = englishValidator(value);
  return errors;
};

const homeCity = (props) => {
  if (!needsAddress(props)){ return [];}
  let value = props.home.city;
  let errors = englishValidator(value);

  if (!hasValue(value)) {
    errors.push(errorMessages.cityMissing);
  }
  return errors;
};

const homeZip = (props) => {
  if (!needsAddress(props)){ return [];}
  let value = props.home.zip;
  let errors = englishValidator(value);
  return errors;
};

const mailingStreet_1 = (props) => {
  if (!needsAddress(props)){ return [];}
  let value = props.mailing.street_1;
  let errors = englishValidator(value);

  if (!hasValue(value)) {
    errors.push(errorMessages.streetAddressMissing);
  }
  return errors;
};

const mailingStreet_2 = (props) => {
  if (!needsAddress(props)){ return [];}
  let value = props.mailing.street_2;
  let errors = englishValidator(value);
  return errors;
};

const mailingCity = (props) => {
  if (!needsAddress(props)){ return [];}
  let value = props.mailing.city;
  let errors = englishValidator(value);

  if (!hasValue(value)) {
    errors.push(errorMessages.cityMissing);
  }
  return errors;
};

const mailingZip = (props) => {
  if (!needsAddress(props)){ return [];}
  let value = props.mailing.zip;
  let errors = englishValidator(value);
  return errors;
};

export default {
  isResident: selectionValidator('selectionMissing', 'isResident'),
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
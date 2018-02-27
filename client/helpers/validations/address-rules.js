'use strict';

import translations           from '../../i18n';
import { hasValue }           from '../data/validations';
import { hasOnlyNumbers }     from '../data/validations';
import { needsAddress }       from '../data/cdl';
import {
  englishValidatorGenerator,
  englishValidator
} from './english-validator';

const errorMessages = translations.errorMessages;

const isResident = (props) => {
  if(!props.hasOwnProperty('isResident')) { return [];}
  let errors = [];
  if (!hasValue(props.isResident)) {
    errors.push(errorMessages['selectionMissing']);
  }
  return errors;
};

const homeAddressSameAsMailing = (props) => {
  if (!needsAddress(props)){ return [];}
  let value = props.homeAddressSameAsMailing;
  let errors = englishValidator(value, props.locale);
  if (!hasValue(value)) {
    errors.push(translations[props.locale].errorMessages.mailingAddressMissing);
  }
  return errors;
};

const homeStreet_1 = (props) => {
  if (!needsAddress(props)){ return [];}
  let value = props.home.street_1;
  let errors = englishValidator(value, props.locale);

  if (!hasValue(value)) {
    errors.push(translations[locale].errorMessages.streetAddressMissing);
  }
  return errors;
};

const homeStreet_2 = (props) => {
  if (!needsAddress(props)){ return [];}
  let value = props.home.street_2;
  let errors = englishValidator(value, props.locale);
  return errors;
};

const homeCity = (props) => {
  if (!needsAddress(props)){ return [];}
  let value = props.home.city;
  let errors = englishValidator(value, props.locale);

  if (!hasValue(value)) {
    errors.push(translations[locale].errorMessages.cityMissing);
  }
  return errors;
};

const homeZip = (props) => {
  if (!needsAddress(props)){ return [];}
  let value = props.home.zip;
  let errors = englishValidator(value, props.locale);
  return errors;
};

const mailingStreet_1 = (props) => {
  if (!needsAddress(props)){ return [];}
  let value = props.mailing.street_1;
  let errors = englishValidator(value, props.locale);

  if (!hasValue(value)) {
    errors.push(translations[props.locale].errorMessages.streetAddressMissing);
  }
  return errors;
};

const mailingStreet_2 = (props) => {
  if (!needsAddress(props)){ return [];}
  let value = props.mailing.street_2;
  let errors = englishValidator(value, props.locale);
  return errors;
};

const mailingCity = (props) => {
  if (!needsAddress(props)){ return [];}
  let value = props.mailing.city;
  let errors = englishValidator(value, props.locale);

  if (!hasValue(value)) {
    errors.push(translations[locale].errorMessages.cityMissing);
  }
  return errors;
};

const mailingZip = (props) => {
  if (!needsAddress(props)){ return [];}
  let value = props.mailing.zip;
  let errors = englishValidator(value, props.locale);
  return errors;
};


export default {
  isResident,
  homeAddressSameAsMailing,
  homeStreet_1,
  homeStreet_2,
  homeCity,
  homeZip,
  mailingStreet_1,
  mailingStreet_2,
  mailingCity,
  mailingZip
};
'use strict';

import translations         from '../../i18n';
import { hasValue }         from '../data/validations';
import { hasOnlyNumbers }   from '../data/validations';
import { englishValidator } from './english-validator';

const homeAddressSameAsMailing = (props) => {
  let locale  = props.locale;
  let value   = props.homeAddressSameAsMailing;
  let errors  = englishValidator(value, locale);
  if (!hasValue(value)) {
    errors.push(translations[locale].errorMessages.mailingAddressMissing);
  }
  return errors;
};

const homeStreet_1 = (props) => {
  let locale  = props.locale;
  let value   = props.home.street_1;
  let errors  = englishValidator(value, locale);

  if (!hasValue(value)) {
    errors.push(translations[locale].errorMessages.streetAddressMissing);
  }
  return errors;
};

const homeStreet_2 = (props) => {
  let locale  = props.locale;
  let value   = props.home.street_2;
  let errors  = englishValidator(value, locale);
  return errors;
};

const homeCity = (props) => {
  let locale  = props.locale;
  let value   = props.home.city;
  let errors  = englishValidator(value, locale);

  if (!hasValue(value)) {
    errors.push(translations[locale].errorMessages.cityMissing);
  }
  return errors;
};

const homeZip = (props) => {
  let locale  = props.locale;
  let value   = props.home.zip;
  let errors  = englishValidator(value, locale);
  return errors;
};

const mailingStreet_1 = (props) => {
  let locale  = props.locale;
  let value   = props.mailing.street_1;
  let errors  = englishValidator(value, locale);

  if (!hasValue(value)) {
    errors.push(translations[locale].errorMessages.streetAddressMissing);
  }
  return errors;
};

const mailingStreet_2 = (props) => {
  let locale  = props.locale;
  let value   = props.mailing.street_2;
  let errors  = englishValidator(value, locale);
  return errors;
};

const mailingCity = (props) => {
  let locale  = props.locale;
  let value   = props.mailing.city;
  let errors  = englishValidator(value, locale);

  if (!hasValue(value)) {
    errors.push(translations[locale].errorMessages.cityMissing);
  }
  return errors;
};

const mailingZip = (props) => {
  let locale  = props.locale;
  let value   = props.mailing.zip;
  let errors  = englishValidator(value, locale);
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

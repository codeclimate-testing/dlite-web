'use strict';

import translations           from '../../i18n';
import { hasValue }           from '../data/validations';
import { hasOnlyNumbers }     from '../data/validations';
import { needsAddress }       from '../data/cdl';
import  selectionValidator    from './selection-validator';
import {
  englishValidator
} from './english-validator';

const addressValue = (type, name, message) => {
  return (props) => {
    if (!needsAddress(props)) { return []; }
    let locale = props.locale;
    let value = props[type][name];
    let errors = englishValidator(value, locale);
    if (message && !hasValue(value)) {
      errors.push(translations[locale].errorMessages[message]);
    }
    return errors;
  };
};

const isResident = (props) => {
  if(!props.hasOwnProperty('isResident')) { return [];}
  let locale = props.locale;
  let errors = [];
  if (!hasValue(props.isResident)) {
    errors.push(translations[locale].errorMessages.selectionMissing);
  }
  return errors;
};

const homeAddressSameAsMailing = (props) => {
  if (!needsAddress(props)){ return [];}
  return selectionValidator('mailingAddressMissing', 'homeAddressSameAsMailing')(props);
};

export default {
  isResident,
  homeAddressSameAsMailing,
  homeStreet_1:               addressValue('home', 'street_1', 'streetAddressMissing'),
  homeStreet_2:               addressValue('home', 'street_2', null),
  homeCity:                   addressValue('home', 'city', 'cityMissing'),
  homeZip:                    addressValue('home', 'zip', null),
  mailingStreet_1:            addressValue('mailing', 'street_1', 'streetAddressMissing'),
  mailingStreet_2:            addressValue('mailing', 'street_2', null),
  mailingCity:                addressValue('mailing', 'city', 'cityMissing'),
  mailingZip:                 addressValue('mailing', 'zip', null)
};
'use strict';

import translations         from '../../i18n';
import { hasValue }         from '../data/validations';
import { hasOnlyNumbers }   from '../data/validations';

const weight = (props) => {
  let locale  = props.locale;
  let value   = props.weight;
  let errors  = [];
  if(!hasValue(value) || !hasOnlyNumbers(value) || value < 0 || value > 2000) {
    errors = [translations[locale].errorMessages.weightMissing];
  }
  return errors;
};

const heightFeet = (props) => {
  let locale  = props.locale;
  let value   = props.heightFeet;
  let errors  = [];
  if(!hasValue(value) || !hasOnlyNumbers(value) || value < 0 || value > 10) {
    errors = [translations[locale].errorMessages.heightMissing];
  }
  return errors;
};

const heightInches = (props) => {
  let locale  = props.locale;
  let value   = props.heightInches;
  let errors  = [];
  if(value && (!hasOnlyNumbers(value) || value < 0 || value > 12)) {
    errors = [translations[locale].errorMessages.heightMissing];
  }
  return errors;
};

export default {
  weight: weight,
  heightFeet: heightFeet,
  heightInches: heightInches
};

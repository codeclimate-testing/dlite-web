'use strict';

import translations   from '../../i18n';
import { hasValue }   from '../data/validations';

const sex = (props) => {
  let locale  = props.locale;
  let value   = props.sex;
  let errors  = [];
  if (!hasValue(value)) {
    errors = [translations[locale].errorMessages.sexSelectionMissing]
  }
  return errors;
};

const eyeColor = (props) => {
  let locale  = props.locale;
  let value   = props.eyeColor;
  let errors  = [];
  if (!hasValue(value)) {
    errors = [translations[locale].errorMessages.eyeColorMissing]
  }
  return errors;
};
const hairColor = (props) => {
  let locale  = props.locale;
  let value   = props.hairColor;
  let errors  = [];
  if (!hasValue(value)) {
    errors = [translations[locale].errorMessages.hairColorMissing]
  }
  return errors;
};

export default {
  sex: sex,
  eyeColor: eyeColor,
  hairColor: hairColor
};

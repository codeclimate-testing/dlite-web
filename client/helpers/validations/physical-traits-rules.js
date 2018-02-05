'use strict';

import translations   from '../../i18n';
import { hasValue }   from '../data/validations';

const sex = (props) => {
  let value = props.sex;
  let errors = [];
  if (!hasValue(value)) {
    errors = [translations.errorMessages.sexSelectionMissing]
  }
  return errors;
};

const eyeColor = (props) => {
  let value = props.eyeColor;
  let errors = [];
  if (!hasValue(value)) {
    errors = [translations.errorMessages.eyeColorMissing]
  }
  return errors;
};
const hairColor = (props) => {
  let value = props.hairColor;
  let errors = [];
  if (!hasValue(value)) {
    errors = [translations.errorMessages.hairColorMissing]
  }
  return errors;
};

export default {
  sex: sex,
  eyeColor: eyeColor,
  hairColor: hairColor
};

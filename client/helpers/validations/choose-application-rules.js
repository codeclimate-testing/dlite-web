'use strict';
import { hasValue }           from '../data/validations';
import translations           from '../../i18n';
import { hasChosenApp }       from '../data/pathnames';

const selectedApplication = (props) => {
  let locale = props.locale;
  let errors = [];
  if (!hasChosenApp(props)) {
    errors.push(translations[locale].errorMessages.selectionMissing);
  }
  return errors;
};

export default {
  chooseApplication: selectedApplication
}
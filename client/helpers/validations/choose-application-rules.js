'use strict';
import { hasValue }           from '../data/validations';
import { hasChosenApp }       from '../data/pathnames';

const selectedApplication = (props) => {
  let errors = [];
  if (!hasChosenApp(props)) {
    errors.push('errorMessages.selectionMissing');
  }
  return errors;
};

export default {
  chooseApplication: selectedApplication
}
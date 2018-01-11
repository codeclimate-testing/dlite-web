'use strict';

import errorMessages            from '../../presentations/error-messages';
import { 
  hasValue,
  hasOnlyEnglishChars 
}             from '../data/validations';

const selectionGenerator = (name, error) => {
  return (props) => {
    let value = props[name];
    let errors = [];

    if (!hasValue(value)) {
      errors.push(errorMessages[error]);
    }
    return errors;
  };
};

const sections = (props) => {
  if (!props.correctOrUpdate){ return [] };
  return selectionGenerator('sections', 'applicationActionMissing')(props);
};

const other = (props) => {
  if (props.sections.indexOf('other') === -1) { return [] };

  let errors = selectionGenerator('other', 'pleaseEnterValidData')(props);
  if (!hasOnlyEnglishChars(props.other)) {
    errors.push(errorMessages.inputIncludesNonEnglishCharacters)
  }
  return errors;
};

export default {
  correctOrUpdate : selectionGenerator('correctOrUpdate', 'applicationActionMissing'),
  sections        : sections,
  other           : other
};

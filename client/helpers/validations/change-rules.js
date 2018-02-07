'use strict';

import errorMessages            from '../../presentations/error-messages';
import {
  hasValue,
  hasOnlyEnglishChars
}                               from '../data/validations';
import selectionValidator       from './selection-validator';
import translations             from '../../i18n';

const sections = (props) => {
  if (!props.correctOrUpdate){ return [] };
  return selectionValidator('applicationActionMissing', 'sections')(props);
};

const other = (props) => {
  if (props.sections.indexOf('other') === -1) { return [] };

  let errors = selectionValidator('pleaseEnterValidData', 'other')(props);
  if (!hasOnlyEnglishChars(props.other)) {
    errors.push(translations.errorMessages.inputIncludesNonEnglishCharacters)
  }
  return errors;
};

export default {
  correctOrUpdate : selectionValidator('applicationActionMissing', 'correctOrUpdate'),
  sections        : sections,
  other           : other
};

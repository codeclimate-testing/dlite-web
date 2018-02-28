import selectionValidator       from './selection-validator';
import { hasOnlyEnglishChars }  from '../data/validations';
import translations             from '../../i18n';

let checkNames = (props) => {
  let locale = props.locale;
  if (props.hasUsedPreviousNames !== 'Yes') { return [];}

  let errors = [];
  errors = selectionValidator('nameHistorySelectionMissing', 'previousNames')(props);
  if (!hasOnlyEnglishChars(props.previousNames)) {
    errors.push(translations[locale].errorMessages.inputIncludesNonEnglishCharacters);
  }
  return errors;
};

export default {
  hasUsedPreviousNames: selectionValidator('nameHistorySelectionMissing', 'hasUsedPreviousNames'),
  previousNames: checkNames
};
import selectionValidator       from './selection-validator';
import { hasOnlyEnglishChars }  from '../data/validations';
import errorMessages            from '../../presentations/error-messages';

let checkNames = (props) => {
  if (props.hasUsedPreviousNames !== 'Yes') { return [];}
 
  let errors = [];
  errors = selectionValidator('nameHistorySelectionMissing', 'previousNames')(props);
  if (!hasOnlyEnglishChars(props.previousNames)) {
    errors.push(errorMessages.inputIncludesNonEnglishCharacters);
  }
  return errors;
};

export default {
  hasUsedPreviousNames: selectionValidator('selectionMissing', 'hasUsedPreviousNames'),
  previousNames: checkNames
};
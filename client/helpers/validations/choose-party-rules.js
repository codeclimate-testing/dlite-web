'use strict';

import selectionValidator       from './selection-validator';
import { 
  hasValue,
  hasOnlyEnglishChars }  from '../data/validations';
import errorMessages            from '../../presentations/error-messages';

const chooseParty = (props) => {
  if (props.isSelected !== 'Yes') { return []; }
  return selectionValidator('politicalPartySelectionMissing', 'politicalPartyChoose')(props);
};

const otherParty = (props) => {
  if (props.isSelected !== 'Yes' && props.politicalPartyChoose !== 'Other') { return null; }
  let errors = [];
  let value = props.otherParty;

  if (hasValue(value) && !hasOnlyEnglishChars(value)) { 
    errors.push(errorMessages.inputIncludesNonEnglishCharacters);
  };
  return errors;
};

export default {
  isSelected: selectionValidator('choosePoliticalPartyNowSelectionMissing', 'isSelected'),
  politicalPartyChoose: chooseParty,
  otherParty: otherParty
};
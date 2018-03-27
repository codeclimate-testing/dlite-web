'use strict';

import selectionValidator       from './selection-validator';
import { hasOnlyEnglishChars }  from '../data/validations';
import errorMessages            from '../../presentations/error-messages';

let medicalInfo = (props) => {
  if (props.hasMedicalCondition !== 'Yes') {
    return [];
  }
  if (!hasOnlyEnglishChars(props.medicalInfo)) {
    return ['errorMessages.inputIncludesNonEnglishCharacters']
  }
  return selectionValidator('medicalHistorySelectionMissing', 'medicalInfo')(props);
};

export default {
  hasMedicalCondition: selectionValidator('selectionMissing', 'hasMedicalCondition'),
  medicalInfo: medicalInfo
};

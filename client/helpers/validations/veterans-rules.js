'use strict';

import selectionValidator from './selection-validator';
import {
  isVeteran,
  showPreviousDesignationPage,
  mustChooseIdentifier,
  mustChooseKeepVeteranIdentifier,
  mustChooseAddVeteranIdentifier
} from '../data/veteran';

let receiveBenefits = (props) => {
  if(!isVeteran(props)) {
    return [];
  }
  return selectionValidator('veteranBenefitSelectionMissing', 'veteransService', 'receiveBenefits')(props);
};

let veteransDesignation = (props) => {
  if(!showPreviousDesignationPage(props)) {
    return []
  }
  return selectionValidator('veteranDesignationExistsMissing2', 'veteransService', 'previouslyDesignated')(props)
};

let veteransIdentifier = (props) => {
  if((!mustChooseIdentifier(props)) && (!mustChooseKeepVeteranIdentifier(props)) && (!mustChooseAddVeteranIdentifier(props))) {
    return []
  }

  if(mustChooseIdentifier(props)) {
    return selectionValidator('wantVeteransDesignationSelectionMissing', 'veteransService', 'veteransIdentifier')(props)
  }

  if(mustChooseKeepVeteranIdentifier(props)) {
    return selectionValidator('keepVeteranDesignationSelectionMissing', 'veteransService', 'veteransIdentifier')(props)
  }

  if(mustChooseAddVeteranIdentifier(props)) {
    return selectionValidator('wantVeteransDesignationSelectionMissing', 'veteransService', 'veteransIdentifier')(props)
  }
}

let militaryWaiver = (props) => {
  return selectionValidator('selectionMissing', 'veteransService', 'militaryWaiver')(props)
}

export default {
  isVeteran:            selectionValidator('veteranSelectionMissing', 'veteransService', 'isVeteran'),
  receiveBenefits:      receiveBenefits,
  veteransDesignation:  veteransDesignation,
  veteransIdentifier:   veteransIdentifier,
  militaryWaiver:       militaryWaiver
};

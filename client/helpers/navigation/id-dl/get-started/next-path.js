'use strict';
import { eligibleForSeniorID }    from '../../../data/senior';
import { tooYoungForDL }          from '../../../data/youth';
import {
  altFlow,
  addFlow,
  editFlow
} from '../../../data/pathnames';
import {
  hasExistingCard,
  isChangingCard,
  isReplacingCard
 } from '../../../data/card-actions';
import {
  editSeniorID,
  editOrAddCurrentCardInfo,
  editOrAddCardChanges,
  editOrAddReplacementDetails,
  editCardHistory,
  initialSeniorID,
  editReducedFee,
  initialDL,
  initialReducedFee
}  from '../../../data/edit-flow';
import {
  addSeniorID,
  addingSeniorID,
  addingID,
  addingDL
} from '../../../data/add-flow';
import { hasMultipleApps }    from '../../../data/application';


export const IDme = (props) => {
  let key = 'legalName';
  // if multiple applications, go to /apply/open-applications key='openApplications'
  // if (hasMultipleApps(props)) {
  //   key = 'openApplications';
  // }
  return key;
};

export const dateOfBirth = (props) => {
  let key = 'wdywtdt';
  if (tooYoungForDL(props)) {
    key = 'youthIDInstead';
  }
  else if (editSeniorID(props)) {
    key = 'seniorID';
  }
  else if (editFlow(props)) {
    key = 'summary';
  }
  return key;
};

export const wdywtdt = (props) => {
  let key = 'chooseCardType';

  if (editOrAddCurrentCardInfo(props)) {
    key = 'currentCardInfo';
  }
  else if (editOrAddCardChanges(props)) {
    key = 'updateAndCorrect';
  }
  else if (editOrAddReplacementDetails(props)) {
    key = 'replacementDetails';
  }
  else if (editCardHistory(props)) {
    key = 'cardHistory';
  }
  else if (editFlow(props)) {
    key = 'summary';
  }
  else if (addSeniorID(props)) {
    key = 'seniorID';
  }
  else if (addingID(props)) {
    key = 'reducedFeeID';
  }
  else if (addFlow(props)) {
    key = 'chooseLicenseClass';
  }
  return key;
};


export const chooseCardType = (props) => {
  let key = 'realID';

  if (tooYoungForDL(props)) {
    key = 'youthIDInstead';
  } else if (hasExistingCard(props)) {
    key = 'currentCardInfo';
  } else if (eligibleForSeniorID(props)) {
    key = 'seniorID';
  }
  return key;
};


export const currentCardInfo = (props) => {
  let key = 'realID';

  if (isChangingCard(props)) {
    key = 'updateAndCorrect';
  }
  else if (isReplacingCard(props)) {
    key = 'replacementDetails';
  }
  else if (initialSeniorID(props)) {
    key = 'seniorID';
  }
  else if (addingDL(props)) {
    key = 'chooseLicenseClass';
  }
  else if (addFlow(props)) {
    key = 'reducedFeeID'
  }
  else if (editCardHistory(props)) {
    key = 'cardHistory';
  }
  else if (editFlow(props)) {
    key = 'summary';
  }
  return key;
};


export const changedCard = (props) => {
  let key = 'realID';
  if (initialSeniorID(props) || addSeniorID(props)) {
    key = 'seniorID';
  }
  else if (addingID(props)) {
    key = 'reducedFeeID';
  }
  else if (addFlow(props)) {
    key = 'chooseLicenseClass';
  }
  else if (editCardHistory(props)) {
    key = 'cardHistory';
  }
  else if (editFlow(props)) {
    key = 'summary';
  }
  return key;
};


export const realID = (props) => {
  let key = 'summary';
  if (initialDL(props)) {
    key = 'chooseLicenseClass';
  }
  else if (initialReducedFee(props)) {
    key = 'reducedFeeID';
  }
  else if (!altFlow(props)) {
    key = 'addresses';
  }
  return key;
};

export const seniorID = (props) => {
  let key = 'realID';
  if (editReducedFee(props)) {
    key = 'reducedFeeID';
  }
  else if (editFlow(props) || addingSeniorID(props)) {
    key = 'summary';
  }
  else if (addFlow(props)) {
    key = 'reducedFeeID';
  }
  return key;
};

export const chooseLicenseClass = (props) => {
  let key = 'summary';
  if (initialReducedFee(props)) {
    key = 'reducedFeeID';
  }
  else if (!altFlow(props)) {
    key = 'addresses';
  }
  else if (addingDL(props)) {
    key = 'medicalHistory';
  }
  return key;
};

'use strict';
import {
  getDL,
  getID
} from '../../../data/card-type';
import {
  eligibleForSeniorID,
  gettingSeniorID
} from '../../../data/senior';
import { tooYoungForDL }          from '../../../data/youth';
import { eligibleForReducedFee }  from '../../../data/reduced-fee';
import { hasValue }               from '../../../data/validations';
import {
  altFlow,
  addFlow,
  goToCardHistory,
  editFlow
} from '../../../data/pathnames';
import {
  hasExistingCard,
  isChangingCard,
  isReplacingCard,
  showCurrentCardInfo
 } from '../../../data/card-actions';


export const dateOfBirth = (props) => {
  let key = 'wdywtdt';
  if (editFlow(props)) {
    key = 'summary';
    if (tooYoungForDL(props) && getDL(props)) {
      key = 'youthIDInstead';
    } else if (eligibleForSeniorID(props)) {
      key = 'seniorID';
    }
  }
  return key;
};

export const wdywtdt = (props) => {
  let key = 'chooseCardType';

  if (altFlow(props)) {

    if (showCurrentCardInfo(props)) {
      key = 'currentCardInfo';
    } else if (isChangingCard(props)) {
      key = 'updateAndCorrect';
    } else if (isReplacingCard(props)) {
      key = 'replacementDetails';
    }

    else if (editFlow(props)) {
      key = 'summary';
      if (goToCardHistory(props)) {
        key = 'cardHistory';
      }
    }
    else if (addFlow(props)) {
      key = 'chooseLicenseClass';
      if (getID(props)) {
        key = 'reducedFeeID';
        if (eligibleForSeniorID(props)) {
          key = 'seniorID';
        }
      }
    }
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
  } else if (isReplacingCard(props)) {
    key = 'replacementDetails';
  } else if (!altFlow(props) && eligibleForSeniorID(props)) {
    key = 'seniorID';
  }

  else if (addFlow(props)) {
    key = 'reducedFeeID';
    if (getDL(props)) {
      key = 'chooseLicenseClass';
    }
  }

  else if (editFlow(props)) {
    key = 'summary';
    if (goToCardHistory(props)) {
      key = 'cardHistory';
    }
  }

  return key;
};


export const changedCard = (props) => {
  let key = 'realID';
  if (!altFlow(props) && eligibleForSeniorID(props)) {
    key = 'seniorID';
  }
  else if (addFlow(props)){
    key = 'chooseLicenseClass';
    if (getID(props)) {
      key = 'reducedFeeID';
      if (eligibleForSeniorID(props)) {
        key = 'seniorID';
      }
    }
  }
  else if (editFlow(props)) {
    key = 'summary';
    if (goToCardHistory(props)) {
      key = 'cardHistory';
    }
  }
  return key;
};


export const realID = (props) => {
  let key = 'summary';
  if (!altFlow(props)){
    key = 'getStarted';
    if (getDL(props)) {
      key = 'chooseLicenseClass';
    }
    else if (eligibleForReducedFee(props)) {
      key = 'reducedFeeID';
    }
  }
  return key;
};

export const seniorID = (props) => {
  let key = 'realID';
  if (editFlow(props)) {
    key = 'summary';
    if (!gettingSeniorID(props) && !hasValue(props.reducedFee.ID)) {
      key = 'reducedFeeID';
    }
  }
  else if (addFlow(props)) {
    key = 'reducedFeeID';
    if (gettingSeniorID(props)) {
      key = 'summary';
    }
  }
  return key;
};

export const chooseLicenseClass = (props) => {
  let key = 'summary';
  if (!altFlow(props)) {
    key = 'getStarted';
    if (eligibleForReducedFee(props)) {
      key = 'reducedFeeID';
    }
  } else if (addFlow(props) && getDL(props)) {
    key = 'medicalHistory';
  }
  return key;
};

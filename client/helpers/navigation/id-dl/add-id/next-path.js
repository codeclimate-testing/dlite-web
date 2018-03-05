'use strict';
import {
  showCurrentCardInfo,
  isChangingCard,
  isReplacingCard
} from '../../../data/card-actions';

import {
  eligibleForSeniorID,
  gettingSeniorID
}    from '../../data/senior';

export const addIDWdywtdt = (props) => {
  let key = 'addReducedFee';
  if (showCurrentCardInfo(props)) {
    key = 'addCurrentIDInfo';
  }
  else if (isChangingCard(props)) {
    key = 'addCorrectUpdateID';
  }
  else if (isReplacingCard(props)) {
    key = 'addIDReplacementDetails'
  }
  else if (eligibleForSeniorID(props)){
    key = 'addSeniorID';
  }
  return key;
};

export const addCurrentIDInfo = (props) => {
  let key = 'addReducedFee';
  if (isChangingCard(props)) {
    key = 'addCorrectUpdateID';
  } else if (isReplacingCard(props)) {
    key = 'addIDReplacementDetails';
  }
  else if (eligibleForSeniorID(props)){
    key = 'addSeniorID';
  }
  return key;
};

export const addChangedID = (props) => {
  let key = 'addReducedFee';
  if(eligibleForSeniorID(props)) {
    key = 'addSeniorID';
  }
  return key;
};

export const addSeniorID = (props) => {
  let key = 'addReducedFee';

  if (gettingSeniorID(props)) {
    key = 'summary';
  }
  return key;
};
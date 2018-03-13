'use strict';
import {
  eligibleForReducedFee,
  reducedFeeHasSelection
}  from './reduced-fee';
import {
  eligibleForSeniorID,
  gettingSeniorID
} from './senior';
import {
  getDL,
  getID
} from './card-type';
import {
  hasExistingCard,
  isChangingCard,
  isReplacingCard,
  showCurrentCardInfo
 } from './card-actions';
import {
  altFlow,
  goToCardHistory,
  editFlow
} from './pathnames';


export const editSeniorID = (props) => {
  return (editFlow(props) && eligibleForSeniorID(props));
};

export const initialSeniorID = (props) => {
  return (!altFlow(props) && eligibleForSeniorID(props));
};

export const editOrAddCurrentCardInfo = (props) => {
  return altFlow(props) && showCurrentCardInfo(props);
};

export const editOrAddCardChanges = (props) => {
  return altFlow(props) && isChangingCard(props);
};

export const editOrAddReplacementDetails = (props) => {
  return altFlow(props) && isReplacingCard(props);
};

export const editCardHistory = (props) => {
  return editFlow(props) && goToCardHistory(props);
};

export const editReducedFee = (props) => {
  return editFlow(props) && !gettingSeniorID(props) && !reducedFeeHasSelection(props);
};

export const initialDL = (props) => {
  return (!altFlow(props) && getDL(props));
};

export const initialGetNewDL = (props) => {
  return initialDL(props) && !hasExistingCard(props);
};

export const initialGetNewID = (props) => {
  return (!altFlow(props) && getID(props)) && !hasExistingCard(props);
};

export const initialReducedFee = (props) => {
  return (!altFlow(props) && eligibleForReducedFee(props));
};

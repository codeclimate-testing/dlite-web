'use strict';
import { editFlow }   from '../../../data/pathnames';
import { hasValue }   from '../../../data/validations';
import {
  hasExistingCard,
  showCurrentCardInfo,
  isChangingCard,
  isReplacingCard
}    from '../../../data/card-actions';
import {
  editOrAddCardChanges,
  editOrAddReplacementDetails
} from '../../../data/edit-flow'

export const cdlWdywtdt = (props) => {
  let key = 'cdlResidency';

  if (showCurrentCardInfo(props)) {
    key = 'cdlCurrentCard';
  }
  else if (editOrAddCardChanges(props)) {
    key = 'cdlChanges';
  }
  else if (editOrAddReplacementDetails(props)) {
    key = 'cdlCardReplacement';
  }
  else if (editFlow(props) && !hasExistingCard(props)) {
    key = 'cdlCurrentDL';
  }
  else if (editFlow(props)) {
    key = 'cdlSummary';
  }
  return key;
};

export const cdlCurrentCard = (props) => {
  let key = 'cdlResidency';
  if (isChangingCard(props)) {
    key = 'cdlChanges';
  }
  else if (isReplacingCard(props)) {
    key = 'cdlCardReplacement';
  }
  else if (editFlow(props)){
    key = 'cdlSummary';
  }
  return key;
};

export const changedCDL = (props) => {
  let key = 'cdlResidency';
  if (editFlow(props)) {
    key = 'cdlSummary';
  }
  return key;
};

export const cdlCurrentDL = (props) => {
  let key = 'cdlRealID';
  if (editFlow(props)){
    key = 'cdlSummary';
    if (!hasValue(props.classM)) {
      key = 'motorcycle';
    }
  }
  return key;
};

export const cdlCertification = (props) => {
  let key = 'cdlSummary';
  if (!editFlow(props) && !hasExistingCard(props)) {
    key = 'cdlMedical';
  }
  return key;
};

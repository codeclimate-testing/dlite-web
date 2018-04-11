'use strict';
import { editFlow }                 from '../../../data/pathnames';
import { hasValue }                 from '../../../data/validations';
import { hasMultipleApps }             from '../../../data/application';
import {
  hasExistingCard,
  showCurrentCardInfo,
  isChangingCard,
  isReplacingCard
}    from '../../../data/card-actions';
import {
  editOrAddCardChanges,
  editOrAddReplacementDetails
} from '../../../data/edit-flow';

export const cdlIDme = (props) => {
  let key = 'cdlLegalName';
  // if multiple applications, go to /apply/open-applications key='openApplications'
  if (hasMultipleApps(props)) {
    key = 'openApplications';
  }
  return key;
};

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


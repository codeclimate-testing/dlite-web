'use strict';

import {
  hasExistingCard,
  isChangingCard,
  isReplacingCard
}    from '../../../data/card-actions';

export const cdlWdywtdt = (props) => {
  let key = 'cdlResidency';
  if (hasExistingCard(props)) {
    key = 'cdlCurrentCard';
  }
  return key;
};

export const cdlCurrentCard = (props) => {
  let key = 'cdlResidency';
  if (isChangingCard(props)) {
    key = 'cdlChanges';
  }
  if (isReplacingCard(props)) {
    key = 'cdlCardReplacement';
  }
  return key;
};

export const cdlSSN = (props) => {
  let key = 'cdlRealID';
  if (!hasExistingCard(props)) {
    key = 'cdlCurrentDL';
  }
  return key;
};

export const cdlCertification = (props) => {
  let key = 'cdlSummary';
  if (!hasExistingCard(props)) {
    key = 'motorcycle';
  }
  return key;
};

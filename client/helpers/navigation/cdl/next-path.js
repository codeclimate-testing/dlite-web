'use strict';

import {
  hasExistingCard,
  isChangingCard,
  isReplacingCard
}    from '../../data/card-actions';

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
  return key;
};
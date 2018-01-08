'use strict';

export const hasExistingCard = (props) => {
  return props.cardAction === 'renew';
};

export const isChangingCard = (props) => {
  return props.cardAction === 'change'
};

export const isReplacingCard = (props) => {
  return props.cardAction === 'replace'
};

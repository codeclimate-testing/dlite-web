'use strict';

export const hasExistingCard = (props) => {
  return props.cardType.cardAction === 'renew';
};

export const isChangingCard = (props) => {
  return props.cardType.cardAction === 'change'
};

export const isReplacingCard = (props) => {
  return props.cardType.cardAction === 'replace'
};

export const isGettingNew = (props) => {
  return props.cardType.cardAction === 'new';
};

export const isCardActionSelected = (props) => {
  return props.cardType.cardAction;
}
'use strict';
import { hasValue }     from './validations';

export const hasExistingCard = (props) => {
  return isChangingCard(props) || isReplacingCard(props) || isRenewingCard(props);
};

export const isChangingCard = (props) => {
  return props.cardAction === 'change';
};

export const isReplacingCard = (props) => {
  return props.cardAction === 'replace';
};

export const isRenewingCard = (props) => {
  return props.cardAction === 'renew';
};

export const isGettingNew = (props) => {
  return props.cardAction === 'new';
};

export const isCardActionSelected = (props) => {
  return hasValue(props.cardAction);
};

export const otherIsSelected = (props) => {
  return props.cardChanges.sections.indexOf('other') > -1;
};

export const hasSpecifiedChange = (props) => {
  return props.hasOwnProperty('cardChanges') && hasValue(props.cardChanges.correctOrUpdate);
};

export const isCorrecting = (props) => {
  return props.cardChanges.correctOrUpdate === 'correct';
};

export const isUpdating = (props) => {
  return props.cardChanges.correctOrUpdate === 'update';
};

export const hasActionIsCorrecting = (props) => {
  return isChangingCard(props) && isCorrecting(props);
};

export const hasActionIsUpdating = (props) => {
  return isChangingCard(props) && isUpdating(props);
};

export const getStringByAction = (props, newString, renew, replace, change, update, correct) => {
  if (isGettingNew(props)) {
    return newString;
  } else if (isRenewingCard(props)) {
    return renew;
  } else if (isReplacingCard(props)) {
    return replace;
  } else if (!hasSpecifiedChange(props)){
    return change;
  } else if (isUpdating(props)) {
    return update || change;
  } else {
    return correct || change;
  }
};
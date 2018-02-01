'use strict';

import { hasValue } from './validations';

export const IDChanging = (props) => {
  return props.cardType.ID.action === 'change';
};

export const DLChanging = (props) => {
  return props.cardType.DL.action === 'change';
};

export const IDReplacing = (props) => {
  return props.cardType.ID.action === 'replace';
};

export const DLReplacing = (props) => {
  return props.cardType.DL.action === 'replace';
};

export const IDRenewing = (props) => {
  return props.cardType.ID.action === 'renew';
};

export const DLRenewing = (props) => {
  return props.cardType.DL.action === 'renew';
};

export const IDGettingNew = (props) => {
  return props.cardType.ID.action === 'new';
};

export const DLGettingNew = (props) => {
  return props.cardType.DL.action === 'new';
};

export const summaryHasID = (props) => {
  return hasValue(props.cardType.ID.action);
};

export const summaryHasDL = (props) => {
  return hasValue(props.cardType.DL.action);
};


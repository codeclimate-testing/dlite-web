'use strict';

import { hasMultipleCards } from './cards';
import {
  isGettingNew,
  isChangingCard,
  isReplacingCard,
  isRenewingCard,
  hasActionIsCorrecting,
  hasActionIsUpdating
} from './card-actions';

export const getID = (props) => {
  return props.cardType.includes('ID');
};

export const getDL = (props) => {
  return props.cardType.includes('DL');
};

export const IDAppExists = (props) => {
  return props.IDApp.isApplying.toString() === 'true';
};

export const DLAppExists = (props) => {
  return props.DLApp.isApplying.toString() === 'true';
};

export const prettyDL = (value) => {
  return value === 'DL' ? 'Driver License' : 'ID';
};

export const IDOnly = (props) => {
  return getID(props) && !getDL(props);
};

export const getNewID = (props) => {
  return props.IDApp.action === 'new';
};

export const getNewDL = (props) => {
  return props.DLApp.action === 'new';
};

export const existingDL = (props) => {
  return DLAppExists(props) && (replaceDL(props) || renewDL(props) || changeDL(props));
};

export const existingID = (props) => {
  return IDAppExists(props) && (replaceID(props) || renewID(props) || changeID(props));
};

export const replaceID = (props) => {
  return props.IDApp.action === 'replace' && IDAppExists(props);
};

export const replaceDL = (props) => {
  return props.DLApp.action === 'replace' && DLAppExists(props);
};

export const changeID = (props) => {
  return props.IDApp.action === 'change' && IDAppExists(props);
};

export const changeDL = (props) => {
  return props.DLApp.action === 'change' && DLAppExists(props);
};

export const correctID = (props) => {
  return props.IDApp.cardChanges.correctOrUpdate === 'correct' && changeID(props);
};

export const correctDL = (props) => {
  return props.DLApp.cardChanges.correctOrUpdate === 'correct' && changeDL(props);
};

export const updateID = (props) => {
  return props.IDApp.cardChanges.correctOrUpdate === 'update' && changeID(props);
};

export const updateDL = (props) => {
  return props.DLApp.cardChanges.correctOrUpdate === 'update' && changeDL(props);
};

export const renewID = (props) => {
  return props.IDApp.action === 'renew';
};

export const renewDL = (props) => {
  return props.DLApp.action === 'renew';
};

export const needsEndorsement = (props) => {
  return props.DLApp.licenseType.needEndorsement === 'Yes';
};

export const getCorrectString = (props, DLString, IDString, bothString) => {
  if (hasMultipleCards(props)) {
    return bothString;
  } else if (getID(props)) {
    return IDString
  } else if (getDL(props)) {
    return DLString
  } else {
    return '';
  }
};

export const getCorrectApp = (state) => {
  if (getID(state)) {
    return state.IDApp;
  }
  return state.DLApp;
};
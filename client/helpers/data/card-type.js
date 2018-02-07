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
  return props.cardType.IDDL.includes('ID');
};

export const getDL = (props) => {
  return props.cardType.IDDL.includes('DL');
};

export const prettyDL = (props) => {
  return props === 'DL' ? 'Driver License' : 'ID';
};

export const IDorDL = (props) => {
  return hasMultipleCards(props) ? 'both' : getID(props) ? 'ID' : getDL(props) ? 'DL' : 'none';
};

export const IDOnly = (props) => {
  return getID(props) && !getDL(props);
};

export const getNewID = (props) => {
  return getID(props) && isGettingNew(props);
};

export const getNewDL = (props) => {
  return getDL(props) && isGettingNew(props);
};

export const existingDL = (props) => {
  return getDL(props) && !isGettingNew(props);
};

export const existingID = (props) => {
  return getID(props) && !isGettingNew(props);
};

export const replaceID = (props) => {
  return getID(props) && isReplacingCard(props);
};

export const replaceDL = (props) => {
  return getDL(props) && isReplacingCard(props);
};

export const changeID = (props) => {
  return getID(props) && isChangingCard(props);
};

export const changeDL = (props) => {
  return getDL(props) && isChangingCard(props);
};

export const correctID = (props) => {
  return getID(props) && hasActionIsCorrecting(props);
};

export const updateID = (props) => {
  return getID(props) && hasActionIsUpdating(props);
};

export const renewID = (props) => {
  return getID(props) && isRenewingCard(props);
};

export const renewDL = (props) => {
  return getDL(props) && isRenewingCard(props);
};

export const needsEndorsement = (props) => {
  return props.licenseType.needEndorsement === 'Yes';
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
'use strict';

import {
  choosingReducedFee
} from './reduced-fee';
import {
  getID,
  getDL
} from './card-type';
import {
  isGettingNew,
  isChangingCard,
  isCorrecting
} from './card-actions';

export const getNewID = (props) => {
  return isGettingNew(props) && getID(props);
};

export const changeID = (props) => {
  return isChangingCard(props) && isCorrecting(props) && getID(props);
};

export const getIDInfoString = (props, newString, reducedString, noFeeString, seniorString) => {
  if (props.seniorID === 'Yes') {
    return noFeeString
  } else if (props.seniorID === 'No') {
    return seniorString
  } else if (choosingReducedFee(props)) {
    return reducedString
  } else {
    return newString
  }
};

export const getCorrectString = (props, DLString, IDString) => {
  if (getID(props)) {
    return IDString
  } else if (getDL(props)) {
    return DLString
  }
};

export const getCorrectIDString = (props, defaultString, reducedString, noFeeString, seniorString) => {
  if (props.seniorID === 'Yes') {
    return noFeeString
  } else if (props.seniorID === 'No') {
    return seniorString
  } else if (choosingReducedFee(props)) {
    return reducedString
  } else {
    return defaultString
  }
};

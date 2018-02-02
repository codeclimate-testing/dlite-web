'use strict';

import {
  choosingReducedFee
} from './reduced-fee';
import {
  getID,
  getDL,
  IDOnly
} from './card-type';
import {
  isGettingNew,
  isChangingCard,
  isRenewingCard,
  isReplacingCard,
  isCorrecting,
  isUpdating
} from './card-actions';


export const getCorrectString = (props, DLString, IDString) => {
  if (getID(props)) {
    return IDString
  } else if (getDL(props)) {
    return DLString
  } else {
    return '';
  }
};

export const getIDString = (props, defaultString, reducedString, noFeeString, seniorString) => {
  if (props.seniorID === 'Yes') {
    return noFeeString;
  } else if (props.seniorID === 'No') {
    return seniorString;
  } else if (choosingReducedFee(props)) {
    return reducedString;
  } else {
    return defaultString;
  }
};

export const getStringByAction = (props, newString, renew, replace, update, correct) => {
  if (isGettingNew(props)) {
    return newString
  } else if (isRenewingCard(props)) {
    return renew
  } else if (isReplacingCard(props)) {
    return replace
  } else if (isUpdating(props) && isChangingCard(props)) {
    return update
  } else if (isCorrecting(props) && isChangingCard(props)) {
    return correct
  } else {
    return '';
  }
};

export const getEndorsementString = (props, fireString) => {
  if (props.licenseType.endorsement.indexOf('firefighter') > -1) {
    return fireString;
  } else {
    return '';
  }
};

export const getRealIDString = (props, IDString, DLString) => {
  if (props.realID.realIdDesignation === 'DL' || (getDL(props) && !getID(props))) {
    return DLString;
  } else if (props.realID.realIdDesignation === 'ID' || IDOnly(props)) {
    return IDString
  } else {
    return '';
  }
};

export const getVehicleInfoArray = (props, classC, classM, classA, classB) => {
  let vehicles = [];
  if(props.licenseType.type.indexOf('car') > -1) {
    vehicles.push(classC)
  }
  if(props.licenseType.type.indexOf('cycle') > -1) {
    vehicles.push(classM)
  }
  if(props.licenseType.type.indexOf('long') > -1) {
    vehicles.push(classA)
  }
  if(props.licenseType.type.indexOf('trailer') > -1) {
    vehicles.push(classB)
  }
  return vehicles;
};

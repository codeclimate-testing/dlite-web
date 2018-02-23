'use strict';

import {
  choosingReducedFee
} from './reduced-fee';
import {
  getID,
  getDL,
  IDOnly
} from './card-type';

export const getIDString = (props, defaultString, reducedString, noFeeString, seniorString) => {
  if (props.IDApp.seniorID === 'Yes') {
    return noFeeString;
  } else if (props.IDApp.seniorID === 'No') {
    return seniorString;
  } else if (choosingReducedFee(props.IDApp)) {
    return reducedString;
  } else {
    return defaultString;
  }
};


export const getEndorsementString = (props, fireString) => {
  if (props.DLApp.licenseType.needEndorsement === 'Yes') {
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
  if(props.DLApp.licenseType.type.indexOf('car') > -1) {
    vehicles.push(classC)
  }
  if(props.DLApp.licenseType.type.indexOf('cycle') > -1) {
    vehicles.push(classM)
  }
  if(props.DLApp.licenseType.type.indexOf('long') > -1) {
    vehicles.push(classA)
  }
  if(props.DLApp.licenseType.type.indexOf('trailer') > -1) {
    vehicles.push(classB)
  }
  return vehicles;
};

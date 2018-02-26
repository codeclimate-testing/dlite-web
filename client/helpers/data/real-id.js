'use strict';

import { hasValue }           from './validations';
import {
  bothAppsExist
}      from './cards';


export const mustChooseCard = (props) => {
  return DLgettingRealID(props) && IDgettingRealID(props);
};

export const showDesignation = (props) => {
  return hasValue(props.IDApp.realID) && hasValue(props.DLApp.realID);
};

export const designatedValue = (props) => {
  let key = '';
  if (DLgettingRealID(props) && !IDgettingRealID(props)) {
    key = 'DL';
  } else if (IDgettingRealID(props) && !DLgettingRealID(props)) {
    key = 'ID';
  }
  return key;
}

export const gettingRealID = (props) => {
  return props.realID === 'Yes';
};

export const isSelected = (props) => {
  return hasValue(props.realID.getRealID)
};

export const DLgettingRealID = (props) => {
  return props.DLApp.realID === 'Yes';
};

export const IDgettingRealID = (props) => {
  return props.IDApp.realID === 'Yes';
};

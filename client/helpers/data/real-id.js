'use strict';

import { hasValue }           from './validations';
import { noCardTypeArray }    from './cdl';
import {
  bothAppsExist
}   from './cards';
import {
  getID,
  getDL
} from './card-type';


export const mustChooseCard = (props) => {
  return props.realID === 'Yes' && DLgettingRealID(props) && IDgettingRealID(props);
};

export const showDesignation = (props) => {
  let key = false;
  if (!noCardTypeArray(props)) {
    if (bothAppsExist(props)) {
      key = props.realID === 'Yes';
    }
  }
  return key;
};

export const designatedValue = (props) => {
  let key = '';
  if (DLgettingRealID(props) && !IDgettingRealID(props)) {
    key = 'DL';
  } else if (IDgettingRealID(props) && !DLgettingRealID(props)) {
    key = 'ID';
  }
  return key;
};

export const gettingRealID = (props) => {
  return props.realID === 'Yes';
};

export const isSelected = (props) => {
  return hasValue(props.realID)
};

export const DLgettingRealID = (props) => {
  return props.DLApp.realID === 'Yes';
};

export const IDgettingRealID = (props) => {
  return props.IDApp.realID === 'Yes';
};

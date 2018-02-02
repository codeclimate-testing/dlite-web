'use strict';

import { hasValue }           from '../data/validations';
import {
  getID,
  getDL
} from './card-type'

export const validToContinue = (props) => {
  let toCheck = mustChooseCard(props) ? props.realID.realIdDesignation : props.realID.getRealID;

  return hasValue(toCheck)
};

export const mustChooseCard = (props) => {
  return gettingRealID(props) &&
    (getID(props) && getDL(props));
};

export const gettingRealID = (props) => {
  return props.realID.getRealID === 'Yes';
};

'use strict';

import * as dataPresent       from '../data-present';
import {
  getID,
  getDL
} from './card-type'

export const validToContinue = (props) => {
  let valid = dataPresent.realID(props.realID);

  if (mustChooseCard(props)) {
    valid = dataPresent.value(props.realID.realIdDesignation);
  }

  return valid;
};

export const mustChooseCard = (props) => {
  return props.realID.getRealID === 'Yes' &&
    (getID(props) && getDL(props));
};

'use strict';

import * as dataPresent       from '../data-present';

export const validToContinue = (props) => {
  let valid = dataPresent.realID(props.realID);

  if (mustChooseCard(props)) {
    valid = dataPresent.value(props.realID.realIdDesignation);
  }

  return valid;
};

export const mustChooseCard = (props) => {
  return props.realID.getRealID === 'Yes' &&
    (props.cardType.ID && props.cardType.DL);
};

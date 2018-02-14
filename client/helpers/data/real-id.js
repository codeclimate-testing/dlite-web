'use strict';

import { hasValue }           from './validations';
import { bothAppsExist }      from './cards';

export const validToContinue = (props) => {
  if (mustChooseCard(props)) {
    return hasValue(props.realID.realIdDesignation);
  }
  return isSelected(props);
};

export const mustChooseCard = (props) => {
  return bothAppsExist(props) && gettingRealID(props);
};

export const gettingRealID = (props) => {
  return props.realID.getRealID === 'Yes';
};

export const isSelected = (props) => {
  return hasValue(props.realID.getRealID)
};

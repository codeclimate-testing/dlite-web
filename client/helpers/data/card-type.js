'use strict';

import { hasValue } from '../data/validations';

export const getNewID = (props) => {
  return props.cardType['new'].indexOf('ID') > -1;
};

export const getNewDL = (props) => {
  return props.cardType['new'].indexOf('DL') > -1;
};

export const getID = (props) => {
  return getNewID(props) || props.cardType.renew === 'ID' || props.cardType.change === 'ID';
};

export const getDL = (props) => {
  return getNewDL(props) || props.cardType.renew === 'DL' || props.cardType.change === 'DL';
};

export const canContinue = (props) => {
  return (props.cardAction === 'new' && (getNewID(props) || getNewDL(props))) ||
     hasValue(props.cardType[props.cardAction]);
};

export const prettyDL = (props) => {
  return props === 'DL' ? 'Driver License' : 'ID';
}

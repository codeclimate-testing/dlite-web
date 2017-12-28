'use strict';

import * as dataPresent       from '../data-present';

export const getNewID = (props) => {
  return props.cardType.new.indexOf('ID') > -1;
};

export const getNewDL = (props) => {
  return props.cardType.new.indexOf('DL') > -1;
};

export const getID = (props) => {
  return getNewID(props) || props.cardType.renew === 'ID';
};

export const getDL = (props) => {
  return getNewDL(props) || props.cardType.renew === 'DL';
};

export const canContinue = (props) => {
  return (props.cardAction === 'new' && (getNewID(props) || getNewDL(props))) || 
    (props.cardAction === 'renew' && dataPresent.value(props.cardType.renew))
};

export const prettyDL = (props) => {
  return props.cardType.renew === 'DL' ? 'Driver License' : 'ID';
}
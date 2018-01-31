'use strict';

import { hasMultipleCards } from './cards';

export const getNewID = (props) => {
  return getID(props) && props.cardType.ID.action === 'new';
};

export const getNewDL = (props) => {
  return getDL(props) && props.cardType.DL.action === 'new';
};

export const replaceID = (props) => {
  return getID(props) && props.cardType.ID.action === 'replace';
};

export const replaceDL = (props) => {
  return getDL(props) && props.cardType.DL.action === 'replace';
};

export const changeID = (props) => {
  return getID(props) && props.cardType.ID.action === 'change';
};

export const changeDL = (props) => {
  return getDL(props) && props.cardType.DL.action === 'change';
};

export const renewID = (props) => {
  return getID(props) && props.cardType.ID.action === 'renew';
};

export const renewDL = (props) => {
  return getDL(props) && props.cardType.DL.action === 'renew';
};

export const getID = (props) => {
  return props.cardType.IDDL.includes('ID');
};

export const getDL = (props) => {
  return props.cardType.IDDL.includes('DL');
};

export const prettyDL = (props) => {
  return props === 'DL' ? 'Driver License' : 'ID';
};

export const IDorDL = (props) => {
  return hasMultipleCards(props) ? 'both' : getID(props) ? 'ID' : getDL(props) ? 'DL' : 'none';
};

export const IDOnly = (props) => {
  return getID(props) && !getDL(props);
};

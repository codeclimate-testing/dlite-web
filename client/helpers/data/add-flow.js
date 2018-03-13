'use strict';

import {
  eligibleForSeniorID,
  gettingSeniorID
} from './senior';
import {
  getDL,
  getID
} from './card-type';
import {
  hasExistingCard
 } from './card-actions';
import {
  addFlow,
  goToCardHistory
} from './pathnames';

export const addSeniorID = (props) => {
  return addFlow(props) && eligibleForSeniorID(props);
};

export const addingSeniorID = (props) => {
  return addFlow(props) && gettingSeniorID(props);
};

export const addCardHistory = (props) => {
  return addFlow(props) && goToCardHistory(props);
};

export const addingID = (props) => {
  return addFlow(props) && getID(props);
};

export const addingDL = (props) => {
  return addFlow(props) && getDL(props);
};

export const addingExistingCard = (props) => {
  return addFlow(props) && hasExistingCard(props);
};

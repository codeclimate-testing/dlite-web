'use strict';
import {
  getDL,
  getNewDL
} from '../../../data/card-type';
import {
  altFlow,
  addFlow,
  goToCardHistory
} from '../../../data/pathnames';
import {
  hasExistingCard
 } from '../../../data/card-actions';


export const nameHistory = (props) => {
  let key = 'summary';
  if (!altFlow(props)) {
    key = 'veterans';
    if (getDL(props)) {
      key = 'licenseIssues';
    }
  }
  return key;
};

export const medicalHistory = (props) => {
  let key = 'summary';
  if (!altFlow(props)){
    key = 'nameHistory';
    if (getNewDL(props)) {
      key = 'cardHistory';
    }
  }
  else if (addFlow(props)){
    if (hasExistingCard(props)) {
      key = 'licenseIssues';
    } else if (goToCardHistory(props)) {
      key = 'cardHistory';
    }
  }
  return key;
};

export const cardHistory = (props) => {
  let key = 'summary';
  if (!altFlow(props)) {
    key = 'nameHistory';
  } else if (addFlow(props) && getDL(props)) {
    key = 'licenseIssues';
  };
  return key;
};
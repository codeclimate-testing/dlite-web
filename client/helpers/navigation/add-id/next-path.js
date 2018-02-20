'use strict';

import {
  eligibleForSeniorID,
  gettingSeniorID
}    from '../../data/senior';

export const addIDWdywtdt = (props) => {
  let key = 'addReducedFee';
  if (eligibleForSeniorID(props)){
    key = 'addSeniorID';
  }
  return key;
};

export const addSeniorID = (props) => {
  let key = 'addReducedFee';
  if (gettingSeniorID(props)) {
    key = 'summary';
  }
  return key;
};
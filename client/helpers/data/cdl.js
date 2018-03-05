'use strict';

import { ageChecks }        from '../calculate-age';
import { cdlApp }           from './pathnames';
import * as dataPresent     from '../data-present';

export const showCDLUnder21 = (props) => {
  return props.hasOwnProperty('addApp') &&
    cdlApp(props.addApp) &&
    dataPresent.date(props.dateOfBirth) &&
    ageChecks.Under21(props.dateOfBirth);
};

export const needsAddress = (props) => {
  if (props.hasOwnProperty('isResident')) {
    return props.isResident === 'Yes';
  }
  else {
    return true;
  }
};

export const notResident = (props) => {
  return props.isResident === 'No';
};
export const needsCurrentDLInfo = (props) => {
  return props.currentCardInfo.isIssued === 'Yes';
};

export const firstTime = (props) => {
  return props.currentCardInfo.isIssued === 'No';
};

export const expiredCard = (currentCardInfo) => {
  if (currentCardInfo.year.length !== 4) { return false; }
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  let month = currentCardInfo.month - 1;
  let day   = currentCardInfo.day;
  let year  = currentCardInfo.year;
  let cardExpiration = new Date(year, month, day);

  return yesterday >= cardExpiration;
};

export const noSSN = (props) => {
  return props.hasSocialSecurity === 'No';
};
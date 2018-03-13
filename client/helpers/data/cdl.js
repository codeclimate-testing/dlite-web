'use strict';

import { ageChecks }        from '../calculate-age';
import { cdlApp }           from './pathnames';
import * as dataPresent     from '../data-present';
import  translations        from '../../i18n';

export const showCDLUnder21 = (props) => {
  return props.hasOwnProperty('chooseApp') &&
    cdlApp(props.chooseApp) &&
    dataPresent.date(props.dateOfBirth) &&
    ageChecks.Under21(props.dateOfBirth);
};

export const needsAddress = (props) => {
  if (props.hasOwnProperty('isResident')) {
    return props.isResident === 'Yes';
  }
  else {
    return true;
  } };

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

export const noCardTypeArray = (props) => {
  return !props.hasOwnProperty('cardType');
};
export const noSSN = (props) => {
  return props.hasSocialSecurity === 'No';
};

export const yesClassM = (props) => {
  return props.classM === 'Yes';
};

export const noClassM = (props) => {
  return props.classM === 'No';
};

export const getClassText = (licenseClass, locale) => {
  let key = '';
  if (licenseClass === 'classA') {
    key = translations[locale].intro.licenseTypePage.values[2].helpText;
  } else if (licenseClass === 'classB') {
    key = translations[locale].intro.licenseTypePage.values[3].helpText;
  } else if (licenseClass === 'classC') {
    key = translations[locale].intro.licenseTypePage.values[0].helpText;
  }
  return key;
};

export const getCert = (props, interstate, intrastate) => {
  let key = interstate;
  if (props.certification === 'intra') {
    key = intrastate;
  }
  return key;
};

export const showCDLEndorsements = (props) => {
  return props.needEndorsement === 'Yes';
};

export const showCDLCertificates = (props) => {
  return props.needCertificates === 'Yes';
};
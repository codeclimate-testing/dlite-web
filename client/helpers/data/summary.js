'use strict';

import { hasValue }         from './validations';
import { hasSelectedClass } from './cards';
import { DLAppExists }      from './card-type';

export const getErrorMessage = (props) => {
  return props.server.apiStatus === 'error' ? 'Sorry, something went wrong' : '';
};

export const getStringByStatus = (value, yesString, noString, declineString) => {
  if (value === 'Yes') {
    return yesString;
  } else if (value === 'No') {
    return noString;
  } else if (value === 'decline') {
    return declineString;
  }
};

export const showLicenseClass = (props) => {
  return DLAppExists(props) && hasSelectedClass(props);
};

export const getSummaryKey = (appType) => {
  return appType === 'application' ? 'summary' : 'cdlSummary';
};
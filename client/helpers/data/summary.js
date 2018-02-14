'use strict';

import { hasValue }         from './validations';
import translations         from '../../i18n';
import { hasSelectedClass } from './cards';
import { DLAppExists }      from './card-type';

export const hideMain = (props) => {
  return props.server.apiStatus === 'loading' ? 'hide' : '';
};

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

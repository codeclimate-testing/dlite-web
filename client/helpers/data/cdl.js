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

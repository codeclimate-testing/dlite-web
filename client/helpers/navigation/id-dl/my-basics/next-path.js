'use strict';
import { altFlow }  from '../../../data/pathnames';

import {
  initialDL,
  initialGetNewID
} from '../../../data/edit-flow';

export const socialSecurity = (props) => {
  let key = 'summary';

  if (initialDL(props)) {
    key = 'medicalHistory';
  }
  else if(initialGetNewID(props)) {
    key = 'cardHistory';
  }
  else if (!altFlow(props)) {
    key = 'nameHistory';
  }
  return key;
};